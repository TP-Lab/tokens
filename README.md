## Token for TokenPocket

### Overview
This is the repo for TokenPocket to add token and update the Token logos according to the community requirements. Once the PR is accepted, your token or logo will be updated on TokenPocket.
Please read the following tutorials.

### Donation for Logo update
According to the DAO, the donation amount for a logo update has been updated to 50,000 TPT. [Click here for Details](https://snapshot.org/#/tptdao.eth/proposal/0x5e985943ac4dea8d97af93143020c337370950604ebabbe172939a5c63eed872)

### How to submit 
token logo submission：https://tphelp.gitbook.io/en/wallet-operation/how-to-submit-a-token-logo

nft logo submission：https://help.tokenpocket.pro/en/developer/nft

// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;
import "./BaseRegistrarImplementation.sol";
import "./StringUtils.sol";
import {ReferralHub} from "../referral/ReferralHub.sol";
import {ReferralVerifier} from "../referral/ReferralVerifier.sol";
import {SidGiftCardLedger} from "../giftcard/SidGiftCardLedger.sol";
import {ISidPriceOracle} from "../price-oracle/ISidPriceOracle.sol";
import {IRegistrarController} from "./IRegistrarController.sol";
import {ReverseRegistrar} from "../registry/ReverseRegistrar.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {ReferralInfo} from "../struct/SidStruct.sol";
import {RegInfo} from "../struct/SidStruct.sol";
import {Resolver} from "../resolvers/Resolver.sol";
/**
 * @dev Registrar with giftcard and referral support
 *
 */
contract RegistrarController is IRegistrarController, Ownable, ReentrancyGuard {
    using StringUtils for *;
    uint public constant MIN_REGISTRATION_DURATION = 365 days;
    
    BaseRegistrarImplementation base;
    SidGiftCardLedger giftCardLedger;
    ISidPriceOracle prices;
    ReferralHub referralHub;
    ReferralVerifier referralVerifier;
    ReverseRegistrar reverseRegistrar;
    
    //fund controller
    address public treasuryManager;
    uint256 public version;
    string public subfix = ".bnb";
    modifier onlyTreasuryManager() {
        require(msg.sender == treasuryManager, "Only treasury manager can withdraw");
        _;
    }
    constructor(
        BaseRegistrarImplementation _base,
        ISidPriceOracle _prices,
        SidGiftCardLedger _giftCardLedger,
        ReferralHub _referralHub,
        ReferralVerifier _referralVerifier,
        ReverseRegistrar _reverseRegistrar,
        address _treasuryManager,
        uint256 _version
    ) {
        base = _base;
        prices = _prices;
        giftCardLedger = _giftCardLedger;
        referralHub = _referralHub;
        referralVerifier = _referralVerifier;
        reverseRegistrar = _reverseRegistrar;
        treasuryManager = _treasuryManager;
        version = _version;
    }
    function rentPrice(string calldata name, uint256 duration) public view returns (ISidPriceOracle.Price memory price) {
        bytes32 label = keccak256(bytes(name));
        price = prices.domainPriceInBNB(name, base.nameExpires(uint256(label)), duration);
    }
    function rentPriceWithPoint(string calldata name, uint256 duration, address registerAddress) public view returns (ISidPriceOracle.Price memory price) {
        bytes32 label = keccak256(bytes(name));
        price = prices.domainPriceWithPointRedemptionInBNB(name, base.nameExpires(uint256(label)), duration, registerAddress);
    }
    function valid(string calldata name) public pure returns (bool) {
        // check unicode rune count, if rune count is >=3, byte length must be >=3.
        if (name.strlen() < 3) {
            return false;
        }
        bytes memory nb = bytes(name);
        // zero width for /u200b /u200c /u200d and U+FEFF
        for (uint256 i; i < nb.length - 2; i++) {
            if (bytes1(nb[i]) == 0xe2 && bytes1(nb[i + 1]) == 0x80) {
                if (bytes1(nb[i + 2]) == 0x8b || bytes1(nb[i + 2]) == 0x8c || bytes1(nb[i + 2]) == 0x8d) {
                    return false;
                }
            } else if (bytes1(nb[i]) == 0xef) {
                if (bytes1(nb[i + 1]) == 0xbb && bytes1(nb[i + 2]) == 0xbf) return false;
            }
        }
        return true;
    }
    function available(string calldata name) public view returns (bool) {
        bytes32 label = keccak256(bytes(name));
        return valid(name) && base.available(uint256(label));
    }
    // because this function returns fund based on msg.value
    // it MUST be an external function to avoid accidental call that
    // returns incorrect amount, e.g., bulk register.
    function register(string calldata name, address owner, uint duration) external payable {
        uint256 cost = _registerWithConfigAndPoint(name, RegInfo(owner, duration, address(0), false, false, msg.value), ReferralInfo(address(0), bytes32(0), 0, 0, bytes("")));
        // Refund any extra payment
        if (msg.value > cost) {
            (bool sent, ) = msg.sender.call{value: msg.value - cost}("");
            require(sent, "Failed to send Ether");
        }
    }
    // because this function returns fund based on msg.value
    // it MUST be an external function to avoid accidental call that
    // returns incorrect amount, e.g., bulk register.
    function registerWithConfigAndPoint(string calldata name, address owner, uint duration, address resolver, bool isUsePoints, bool isSetPrimaryName, ReferralInfo memory referralInfo) external payable {
        uint256 cost = _registerWithConfigAndPoint(name, RegInfo(owner, duration, resolver, isUsePoints, isSetPrimaryName, msg.value), referralInfo);
        // Refund any extra payment
        if (msg.value > cost) {
            (bool sent, ) = msg.sender.call{value: msg.value - cost}("");
            require(sent, "Failed to send Ether");
        }
    }
    
    function _registerWithConfigAndPoint(string calldata name, RegInfo memory regInfo, ReferralInfo memory referralInfo) internal nonReentrant returns (uint256 cost) {
        cost = _cost(name, regInfo.duration, regInfo.isUsePoints);
        bytes32 label = keccak256(bytes(name));
        uint256 tokenId = uint256(label);
        uint expires;
        if (regInfo.resolver != address(0)) {
            // Set this contract as the (temporary) owner, giving it
            // permission to set up the resolver.
            expires = base.register(tokenId, address(this), regInfo.duration);
            // The nodehash of this label
            bytes32 nodehash = keccak256(abi.encodePacked(base.baseNode(), label));
            // Set the resolver
            base.sid().setResolver(nodehash, regInfo.resolver);
            Resolver(regInfo.resolver).setAddr(nodehash, regInfo.owner);
            // Now transfer full ownership to the expeceted owner
            base.reclaim(tokenId, regInfo.owner);
            base.transferFrom(address(this), regInfo.owner, tokenId);
        } else {
            expires = base.register(tokenId, regInfo.owner, regInfo.duration);
        }
        emit NameRegistered(name, label, regInfo.owner, cost, expires);
        // Check if it is eligible for referral program
        if (referralInfo.referrerAddress != address(0)) {
            cost = _handleReferral(cost, referralInfo.referrerAddress, referralInfo.referrerNodehash, referralInfo.referralAmount, referralInfo.signedAt, referralInfo.signature);
        }
        // Check if should set reverse record
        if (regInfo.isSetPrimaryName) {
            _setReverseRecord(name, regInfo.owner);
        }
        return cost;
    }
    function _handleReferral(uint cost, address referrerAddress, bytes32 referrerNodehash, uint256 referralAmount, uint256 signedAt, bytes memory signature) internal returns (uint) {
        require(referralVerifier.verifyReferral(referrerAddress, referrerNodehash, referralAmount, signedAt, signature), "Invalid referral signature");
        uint256 referrerFee = 0;
        uint256 refereeFee = 0;
        if (referralHub.isPartner(referrerNodehash)) {
            (referrerFee, refereeFee) = referralHub.getReferralCommisionFee(cost, referrerNodehash);
        } else {
            (referrerFee, refereeFee) = referralVerifier.getReferralCommisionFee(cost, referralAmount);
        }
        referralHub.addNewReferralRecord(referrerNodehash);
        if (referrerFee > 0) {
            referralHub.deposit{value: referrerFee}(referrerAddress);
        }
        return cost - refereeFee;
    }
    
    // because this function returns fund based on msg.value
    // it MUST be an external function to avoid accidental call that
    // returns incorrect amount, e.g., bulk register.
    function renew(string calldata name, uint duration) external payable {
        uint256 cost = _renewWithPoint(name, duration, false, msg.value);
        // Refund any extra payment
        if (msg.value > cost) {
            (bool sent, ) = msg.sender.call{value: msg.value - cost}("");
            require(sent, "Failed to send Ether");
        }
    }
    // because this function returns fund based on msg.value
    // it MUST be an external function to avoid accidental call that
    // returns incorrect amount, e.g., bulk register.
    function renewWithPoint(string calldata name, uint duration, bool isUsePoints) external payable {
        uint256 cost = _renewWithPoint(name, duration, isUsePoints, msg.value);
        // Refund any extra payment
        if (msg.value > cost) {
            (bool sent, ) = msg.sender.call{value: msg.value - cost}("");
            require(sent, "Failed to send Ether");
        }
    }
    function _renewWithPoint(string calldata name, uint duration, bool isUsePoints, uint256 paid) internal nonReentrant returns (uint256 cost) {
        ISidPriceOracle.Price memory price;
        if (isUsePoints) {
            price = rentPriceWithPoint(name, duration, msg.sender);
            //deduct points from gift card ledger
            giftCardLedger.deduct(msg.sender, price.usedPoint);
        } else {
            price = rentPrice(name, duration);
        }
        cost = (price.base + price.premium);
        require(paid >= cost);
        bytes32 label = keccak256(bytes(name));
        uint expires = base.renew(uint256(label), duration);
        emit NameRenewed(name, label, cost, expires);
        return cost;
    }
    function withdraw() public onlyTreasuryManager nonReentrant {
        (bool sent, ) = treasuryManager.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }
    function _cost(string calldata name, uint duration, bool usePoints) internal returns (uint256) {
        require(available(name));
        ISidPriceOracle.Price memory price;
        if (usePoints) {
            uint256 senderBalance = giftCardLedger.balanceOf(msg.sender);
            price = rentPriceWithPoint(name, duration, msg.sender);
            // deduct points from gift card ledger
            giftCardLedger.deduct(msg.sender, price.usedPoint);
            assert(senderBalance == 0 || senderBalance > giftCardLedger.balanceOf(msg.sender));
        } else {
            price = rentPrice(name, duration);
        }
        uint cost = (price.base + price.premium);
        require(duration >= MIN_REGISTRATION_DURATION);
        require(msg.value >= cost);
        return cost;
    }
    function bulkRentPrice(string[] calldata names, uint256 duration) public view returns (uint256 total) {
        for (uint256 i = 0; i < names.length; i++) {
            ISidPriceOracle.Price memory price = rentPrice(names[i], duration);
            total += (price.base + price.premium);
        }
    }
    function bulkRegister(string[] calldata names, address owner, uint duration, address resolver, bool isUseGiftCard, bool isSetPrimaryName, ReferralInfo memory referralInfo) external payable {
        uint256 unspent = msg.value;
        for (uint256 i = 0; i < names.length; i++) {
            uint256 cost = _registerWithConfigAndPoint(names[i], RegInfo(owner, duration, resolver, isUseGiftCard, isSetPrimaryName, unspent), referralInfo);
            unspent -= cost;
        }
        // Refund any extra payment
        if (unspent > 0) {
            (bool sent, ) = msg.sender.call{value: unspent}("");
            require(sent, "Failed to send Ether");
        }
    }
    function bulkRenew(string[] calldata names, uint duration, bool isUsePoints) external payable {
        uint256 unspent = msg.value;
        for (uint256 i = 0; i < names.length; i++) {
            uint256 cost = _renewWithPoint(names[i], duration, isUsePoints, unspent);
            unspent -= cost;
        }
        // Refund any extra payment
        if (unspent > 0) {
            (bool sent, ) = msg.sender.call{value: unspent}("");
            require(sent, "Failed to send Ether");
        }
    }
    function setPriceOracle(ISidPriceOracle _prices) public onlyOwner {
        prices = _prices;
        emit NewPriceOracle(address(prices));
    }
    function setTreasuryManager(address _treasuryManager) public onlyOwner {
        require(_treasuryManager != address(0));
        treasuryManager = _treasuryManager;
        emit NewTreasuryManager(_treasuryManager);
    }
    function _setReverseRecord(string memory name, address owner) internal {
        address defaultResolver = address(reverseRegistrar.defaultResolver());
        reverseRegistrar.setNameForAddr(owner, owner, defaultResolver, string.concat(name, subfix));
    }
     
}

pragma solidity >=0.8.4;
library StringUtils {
    /**
     * @dev Returns the length of a given string
     *
     * @param s The string to measure the length of
     * @return The length of the input string
     */
    function strlen(string memory s) internal pure returns (uint) {
        uint len;
        uint i = 0;
        uint bytelength = bytes(s).length;
        for(len = 0; i < bytelength; len++) {
            bytes1 b = bytes(s)[i];
            if(b < 0x80) {
                i += 1;
            } else if (b < 0xE0) {
                i += 2;
            } else if (b < 0xF0) {
                i += 3;
            } else if (b < 0xF8) {
                i += 4;
            } else if (b < 0xFC) {
                i += 5;
            } else {
                i += 6;
            }
        }
        return len;
    }
}


pragma solidity >=0.8.4;
import "../registry/SID.sol";
import "./IBaseRegistrar.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
contract BaseRegistrarImplementation is ERC721, IERC721Enumerable, IBaseRegistrar, Ownable {
    // A map of expiry times
    mapping(uint256 => uint) expiries;
    // The SID registry
    SID public sid;
    // The namehash of the TLD this registrar owns (eg, .eth)
    bytes32 public baseNode;
    // A map of addresses that are authorised to register and renew names.
    mapping(address => bool) public controllers;
    uint256 public constant GRACE_PERIOD = 90 days;
    bytes4 private constant INTERFACE_META_ID = bytes4(keccak256("supportsInterface(bytes4)"));
    bytes4 private constant ERC721_ID =
        bytes4(
            keccak256("balanceOf(address)") ^
                keccak256("ownerOf(uint256)") ^
                keccak256("approve(address,uint256)") ^
                keccak256("getApproved(uint256)") ^
                keccak256("setApprovalForAll(address,bool)") ^
                keccak256("isApprovedForAll(address,address)") ^
                keccak256("transferFrom(address,address,uint256)") ^
                keccak256("safeTransferFrom(address,address,uint256)") ^
                keccak256("safeTransferFrom(address,address,uint256,bytes)")
        );
    bytes4 private constant RECLAIM_ID = bytes4(keccak256("reclaim(uint256,address)"));
    string public baseUri;
    string constant INVALID_INDEX = "005007";
    uint256[] internal tokens;
    mapping(uint256 => uint256) internal idToIndex;
    mapping(address => uint256[]) internal ownerToIds;
    /**
     * v2.1.3 version of _isApprovedOrOwner which calls ownerOf(tokenId) and takes grace period into consideration instead of ERC721.ownerOf(tokenId);
     * https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.1.3/contracts/token/ERC721/ERC721.sol#L187
     * @dev Returns whether the given spender can transfer a given token ID
     * @param spender address of the spender to query
     * @param tokenId uint256 ID of the token to be transferred
     * @return bool whether the msg.sender is approved for the given token ID,
     *    is an operator of the owner, or is the owner of the token
     */
    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view override returns (bool) {
        address owner = ownerOf(tokenId);
        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));
    }
    constructor(SID _sid, bytes32 _baseNode) ERC721("SPACE ID", "SID") {
        sid = _sid;
        baseNode = _baseNode;
    }
    modifier live() {
        require(sid.owner(baseNode) == address(this));
        _;
    }
    modifier onlyController() {
        require(controllers[msg.sender]);
        _;
    }
    function totalSupply() external view override returns (uint256) {
        return tokens.length;
    }
    function tokenByIndex(uint256 _index) external view override returns (uint256) {
        require(_index < tokens.length, INVALID_INDEX);
        return tokens[_index];
    }
    function tokenOfOwnerByIndex(address _owner, uint256 _index) external view override returns (uint256) {
        require(_index < ownerToIds[_owner].length, INVALID_INDEX);
        return ownerToIds[_owner][_index];
    }
    function _mint(address _to, uint256 _tokenId) internal virtual override {
        super._mint(_to, _tokenId);
        tokens.push(_tokenId);
        idToIndex[_tokenId] = tokens.length - 1;
    }
    function _burn(uint256 _tokenId) internal virtual override {
        super._burn(_tokenId);
        uint256 tokenIndex = idToIndex[_tokenId];
        uint256 lastTokenIndex = tokens.length - 1;
        uint256 lastToken = tokens[lastTokenIndex];
        tokens[tokenIndex] = lastToken;
        tokens.pop();
        // This wastes gas if you are burning the last token but saves a little gas if you are not.
        idToIndex[lastToken] = tokenIndex;
        idToIndex[_tokenId] = 0;
    }
    /**
     * @dev See {IERC721-transferFrom}.
     */
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override(ERC721, IERC721) {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not approved or owner");
        _transfer(from, to, tokenId);
        sid.setSubnodeOwner(baseNode, bytes32(tokenId), to);
    }
    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public override(ERC721, IERC721) {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not approved or owner");
        _safeTransfer(from, to, tokenId, _data);
        sid.setSubnodeOwner(baseNode, bytes32(tokenId), to);
    }
    /**
     * @dev Gets the owner of the specified token ID. Names become unowned
     *      when their registration expires.
     * @param tokenId uint256 ID of the token to query the owner of
     * @return address currently marked as the owner of the given token ID
     */
    function ownerOf(uint256 tokenId) public view override(IERC721, ERC721) returns (address) {
        require(expiries[tokenId] > block.timestamp);
        return super.ownerOf(tokenId);
    }
    // Authorises a controller, who can register and renew domains.
    function addController(address controller) external override onlyOwner {
        require(controller != address(0), "address can not be zero!");
        controllers[controller] = true;
        emit ControllerAdded(controller);
    }
    // Revoke controller permission for an address.
    function removeController(address controller) external override onlyOwner {
        require(controller != address(0), "address can not be zero!");
        controllers[controller] = false;
        emit ControllerRemoved(controller);
    }
    // Set the resolver for the TLD this registrar manages.
    function setResolver(address resolver) external override onlyOwner {
        sid.setResolver(baseNodde)

## TokenPocket代币图标更新指南

### 简介
本仓库为TokenPocket根据社区需求进行代币更新，只要PR被合并，代币及其图标就会在TokenPocket里更新。
请根据以下指引进行提交。

### 图标更新捐赠
根据社区DAO投票，当前图标更新的捐赠额度已改为 50,000 TPT. [点击前往查看详情](https://snapshot.org/#/tptdao.eth/proposal/0x5e985943ac4dea8d97af93143020c337370950604ebabbe172939a5c63eed872)

### 怎么提交
代币Logo提交：https://tphelp.gitbook.io/cn/wallet-operation/submit-token

NFTlogo提交：https://help.tokenpocket.pro/cn/developer/NFT

