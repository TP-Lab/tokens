/*
*@封装一个自己的逻辑调用函数Import
*@HTML页面运行时自动调用该名字的函数名
*@在真实环境运行首页列如：http://域名/ 时自动默认访问index.html
*@所有接口汇总于对象httpa中,调用方法列如：httpa.object
*/
	var arr = location.href.split('/');
	var fileName = arr[arr.length - 1];  //例如index.html
	const index=fileName.indexOf(".");
	var subli=fileName.substring(0,index)
	var httpa={
		"oreperrr":URL+"/index.php/api/Publics/send_key",//推广人信息
		"kooperty":URL+"/index.php/api/Publics/reg_yzphone",//注册验证手机号
		"adhlkjahd":URL+"/index.php/api/Publics/reg_yzcode",//验证验证码
		"codeurl":URL+"/index.php/api/Publics/send_code",//发送验证码
		"orepool":URL+"/index.php/api/Publics/reglogin",//注册/登录接口
		"equity":URL+"/index.php/api/Publics/bannerlist",//banner图
		"shoper":URL+"/index.php/api/Publics/goodslist",//获取商品列表
		"micode":URL+"/index.php/api/UserApi/logpassword_code",//修改登录密码验证码
		"mixiugai":URL+"/index.php/api/UserApi/logpasswordas",//修改登录密码
		"zhifumima":URL+"/index.php/api/UserApi/zpasswordas",//修改支付密码
		"yanzhengma":URL+"/index.php/api/UserApi/zpassword_code",//资金密码验证码
		"paihangbang":URL+"/index.php/api/Auction/wenpiaotop",//获取董事会排行榜
		"jinjuan":URL+"/index.php/api/UserApi/gqdh",//金豆兑换金券
		"xiyi":URL+"/index.php/api/Publics/agreementlist",//获取协议信息
		"mname":URL+"/index.php/api/UserApi/update_name",//修改昵称
		"yuqil":URL+"/index.php/api/UserApi/yqljiage",//获取玉麒麟价格
		"zhihuan":URL+"/index.php/api/UserApi/zywp",//置换竞拍劵
		"zwenpiao":URL+"/index.php/api/UserApi/jywp",//质押文票
		"baoxianc":URL+"/index.php/api/UserApi/baoxianc",//获取保险仓
		"zypaio":URL+"/index.php/api/UserApi/zypaio",//获取存票仓信息
		"jywpjs":URL+"/index.php/api/UserApi/jywpjs",//获取存票仓信息
		"jywpsj":URL+"/index.php/api/UserApi/jywpsj",//获取存票时间
		"jpjdata":URL+"/index.php/api/UserApi/jpjdata",//获取种类
		"sqmsg":URL+"/index.php/api/UserApi/sqmsg",//获取申请服务商信息
		"fwssq":URL+"/index.php/api/UserApi/fwssq",//申请服务商
		"goodslist":URL+"/index.php/api/Auction/goodslist",//获取选品区商品列表
		"goodsxplist":URL+"/index.php/api/Auction/goodsxplist",//获取选品区商品列表
		"addgoodsxp":URL+"/index.php/api/Auction/addgoodsxp",//选品区添加商品
		"goodstext":URL+"/index.php/api/Auction/goodstext",//选品区商品详情
		"ilove":URL+"/index.php/api/Auction/ilove",//选品区商品详情我喜欢
		"delgoodsxp":URL+"/index.php/api/Auction/delgoodsxp",//删除购物车商品
		"qdelgoodsxp":URL+"/index.php/api/Auction/qdelgoodsxp",//清空购物车商品
		"updategoodsxp":URL+"/index.php/api/Auction/updategoodsxp",//修改购物车商品价格-选品区
		"msgjs":URL+"/index.php/api/Auction/msgjs",//获取置换信息
		"zhihuanert":URL+"/index.php/api/Auction/zh",//置换
		"jpai":URL+"/index.php/api/Auction/jpai",//获取竞拍区信息
		"jpais":URL+"/index.php/api/Time_bidding/jpai_1",//新手
		"jpais1":URL+"/index.php/api/Time_bidding/jpai_2",//普通
		"jpais2":URL+"/index.php/api/Time_bidding/jpai_3",//精英
		"qiang_news":URL+"/index.php/api/Time_bidding/qiang_new",//一键抢单
		"qaqert":URL+"/index.php/api/Time_bidding/zhihuan",//获取抢单信息
		"qaqert1":URL+"/index.php/api/Time_bidding/zh_new",//一键置换
		"jptime":URL+"/index.php/api/Publics/jptime",//首页倒计时
		"qidanlist_new":URL+"/index.php/api/Time_bidding/qidanlist_new",//抢单列表-新
		
		"jpqudata":URL+"/index.php/api/Auction/jpqudata",//抢单列表
		"orderlist":URL+"/index.php/api/Auction/orderlist",//订单信息列表
		"updategoodsth":URL+"/index.php/api/Auction/updategoodsth",//修改提货数量
		"shenth":URL+"/index.php/api/Auction/th",//提货
		"orderlistth":URL+"/index.php/api/Auction/orderlistth",//提货订单
		"moloner":URL+"/index.php/api/UserApi/jilu_list",//资金记录
		"qinagdna":URL+"/index.php/api/Auction/qinag",//抢单
		"jpai_sp":URL+"/index.php/api/Auction/jpai_sp",//列表
		"send_zt":URL+"/index.php/api/UserApi/send_zt",//获取交易所状态
		"send_code":URL+"/index.php/api/UserApi/send_code",//获取交易所验证码
		"send_jys":URL+"/index.php/api/UserApi/send_jys",//获取交易所验证码
		"orderlistbx":URL+"/index.php/api/Auction/orderlistbx",//获取保险仓列表
		"jianlou":URL+"/index.php/api/Auction/jianlou",//获取捡漏区的订单
		"janlouordersu":URL+"/index.php/api/Auction/janlouordersu",//捡漏区抢单
		"bxccj":URL+"/index.php/api/Auction/bxccj",//抽奖
		"bxccjlq":URL+"/index.php/api/Auction/bxccjlq",//抽奖确认
		"jplist":URL+"/index.php/api/Auction_rc/jplist",//日常竞拍
		"jpxq":URL+"/index.php/api/Auction_rc/jpxq",//日常竞拍详情
		"pai":URL+"/index.php/api/Auction_rc/pai",//加价
		"alt_zt":URL+"/index.php/api/Auction/alt_zt",//加速状态
		"syjinbi":URL+"/index.php/api/UserApi/syjinbi",//资金记录中收益
		"fters1":URL+"/index.php/api/UserApi/tixmsg",//注意事项
		"fters11":URL+"/index.php/api/UserApi/palaylist",//提票记录
		"jpaiqu":URL+"/index.php/api/Time_bidding/jpaiqu",//场次列表
		"ccunpiaolist":URL+"/index.php/api/UserApi/ccunpiaolist",//存票记录
		"cunpaifenhonglist":URL+"/index.php/api/UserApi/cunpaifenhonglist",//分红记录
		"yysss":URL+"/index.php/api/Make/yy",//预约
		"my_yy":URL+"/index.php/api/Make/my_yy",//预约信息
		"my_yylist":URL+"/index.php/api/Make/my_yylist",//预约记录
		
		"personal":URL+"/index.php/api/UserApi/url_t",
		"user":URL+"/index.php/api/UserApi/user_msg",//用户信息
		"shoper1":URL+"/index.php/api/Publics/goodsmsg",//获取商品详情
		"shopee":URL+"/index.php/api/Goods/addgouwuche",//加入购物车 
		"cz":URL+"/index.php/api/UserApi/cz",//充值 
		"tixian":URL+"/index.php/api/UserApi/tx",//提现 
		"youxiang":URL+"/index.php/api/UserApi/lo_img",//修改头像
		"shuper":URL+"/index.php/api/Goods/chagouwuche",//购物车列表
		"numsz":URL+"/index.php/api/Goods/suliang",//商品数量加减
		"xdizhi":URL+"/index.php/api/UserApi/address_adduser",//新建收货地址
		"addres":URL+"/index.php/api/UserApi/address_list",//获取自己的收货地址
		"addsan":URL+"/index.php/api/UserApi/address_deluser",//删除收货地址
		"shopicon":URL+"/index.php/api/Goods/delgou",//删除购物车
		"sheng":URL+"/index.php/api/UserApi/address_data",//获取省市县
		"xiugai":URL+"/index.php/api/UserApi/address_list_one",//执行修改操作时获取地址
		"xiugai1":URL+"/index.php/api/UserApi/address_updateuser",//修改收货地址
		"rootshop":URL+"/index.php/api/Goods/goodsp",//查看购物车商品
		"jiesuan":URL+"/index.php/api/Order/chagouwuche",//结算
		"fenqu":URL+"/index.php/api/Publics/zhuanqu",//商品分区
		"dingdan":URL+"/index.php/api/Order/orderlist",//获取订单
		"tuikuan":URL+"/index.php/api/Order/tk",//申请退款/取消退款
		"wancheng":URL+"/index.php/api/Order/orderwc",//确认收货
		"team":URL+"/index.php/api/UserApi/team_data",//我的团队
		"ztteam":URL+"/index.php/api/UserApi/team_datalist",//我的团队直推人数
		"pasword":URL+"/index.php/api/UserApi/copassword",//验证资金密码
		"order1":URL+"/index.php/api/Order/orderid",//查询订单信息
		"qiandao":URL+"/index.php/api/Advertising/qiandao",//签到
		"qiandao1":URL+"/index.php/api/Advertising/qiandaomsg",//签到信息
		"jilua":URL+"/index.php/api/UserApi/palaylist",//提现充值记录
		"shiming":URL+"/index.php/api/UserApi/submitidcard",//实名认证
		"yesnoshiming":URL+"/index.php/api/UserApi/idcardmsg",//查看是否实名
		"cztishi":URL+"/index.php/api/UserApi/czimsg",//获取充值提示
		"zhuanzwng":URL+"/index.php/api/UserApi/transfer",//余额转赠
		"resou":URL+"/index.php/api/Publics/rs",//热搜
		"kefu":URL+"/index.php/api/UserApi/kefu",//联系客服
		"ggbanner":URL+"/index.php/api/Advertising/banner",//福利签到banner
		"ggvideo":URL+"/index.php/api/Advertising/mp4",//福利签到视频
		"ggtuwen":URL+"/index.php/api/Advertising/msgtxt",//福利签到图文
		"ggtuwena":URL+"/index.php/api/Advertising/idmsgtxt",//单个福利签到图文
		"iooert":URL+"/index.php/api/UserApi/passwordds",//获取用户修改状态
		"zhuce":URL+"/index.php/api/Publics/regs",//注册
		"yhciid":URL+"/index.php/api/UserApi/ying",//获取银行卡信息
		"dgcideo":URL+"/index.php/api/Advertising/idmp4",//单个视频
		"dgcideo1":URL+"/index.php/api/Advertising/idbanner",//单个图文
	}
	//默认访问index.html
	if(subli==''||subli==undefined){
		subli='index'
	}
	console.log(subli)
	class Import{
		//构造函数
		constructor() {
		}
		//首页
		index(){
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						banners:[],
						banners1:[],
						URL:URL+'/',
						pages:1,
						list:[],
						zhuangt:0,//默认无
						joner:{},
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
						daft:{},
						timero:0,
						hours:0,
						minutes:0,
						seconds:0
					},
					mounted:function(){ 
						this.diserr()
						// console.log("token是:"+med.getrome('token'))
						this.banner()
						this.shangoer()
						window.addEventListener('scroll', () => {
							this.handleScrolls()
						});
						this.shangoers()
						this.xinxi()
					},
					methods:{
						//获取时间
						date_format(micro_second) {
							var day = Math.floor(micro_second/1000/60/60/24);
							var h = Math.floor(micro_second/1000/60/60%24);
							var m = Math.floor(micro_second/1000/60%60);
							var s = Math.floor(micro_second/1000%60);
							this.hours=Number(day)*24+Number(h);
							this.minutes=Number(m);
							this.seconds=Number(s);
						},
						//倒计时
						diserr(){
							var page=this;
							myAjax('post',httpa.jptime,{
							},function(res){
								if(res.code==0){
									page.daft=res.data
									if(res.data.zt==1){
										console.log(111111111111111)
										var tests=res.data.time2
										var testse=tests.replace(/-/g,"/")
										console.log(testse)
										var date=new Date(testse)
										var time1 = date.getTime()
											page.kootu=setInterval(function(){
												page.timero=Number(time1/1000)-Number(Date.parse(new Date())/1000);
												if(page.timero==0){
													window.location.reload()
													return false;
												}
												page.date_format(page.timero*1000)
											},1000)
										}else{
											console.log(22222222222222)
											var test=res.data.time1
											var testses=test.replace(/-/g,"/")
											var date=new Date(testses)
											var time1 = date.getTime()
											page.kootu=setInterval(function(){
												page.timero=Number(time1/1000)-Number(Date.parse(new Date())/1000);
												if(page.timero==0){
													window.location.reload()
												}
												page.date_format(page.timero*1000)
											},1000)
									}
								}
							});
						},
						//预约信息
						xinxi(){
							var page=this;
							myAjax('post',httpa.my_yy,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.joner=res.data
								}
							});
						},
						//获取抢单列表
						shangoers(){
							var page=this;
							myAjax('post',httpa.jianlou,{
								sc_token:med.getrome('token'),
								page:page.paging.PageIndex,
								id:4,
								limit:20
							},function(res){
								console.log(res)
								if(res.code==0){
									if(res.data.length!=0){
										console.log(1)
										page.zhuangt=1
									}
								}
							});
						},
						//上拉刷新
						 handleScrolls() {
							var that = this;
							//判断滚动到底部
							if (document.documentElement.scrollTop >= document.body.clientHeight - window.screen.availHeight) { //滚动高度>=页面高度-屏幕高度
								console.log(2)
								if (that.paging.isTrue) {
									setTimeout(function() {
										that.paging.PageIndex++;
										// that.paging.loadingMessage = "正在加载中~";
										that.shangoer();
									}, 1000); //防止连续下拉
								that.paging.isTrue = false;
								}
							}
						},
						//获取热门列表
						shoudsji(){
							var page=this;
							myAjax('post',httpa.resou,{
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list=res.data.top
								}
							});
						},
						//热门
						shangping(event){
							window.location.href='listshop.html?text='+event
						},
						//获取商品列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.shoper,{
								page:page.paging.PageIndex,
								limit:10
							},function(res){
								console.log(res)
								if(res.count!=0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								}else{
									mui.toast('已经没有啦！')
									$("#userd").hide()
								}
							});
						},
						//商品详情页
						oeery(option){
							this.taber('particulars.html?id='+option)
						},
						//获取banner图
						banner(){
							var page=this;
							myAjax('post',httpa.equity,{
							},function(res){
								page.banners=res.data.banner1
								page.banners1=res.data.banner2
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("address_copy",this.address)
						},
					}
			})
		}
		//登录
		login(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						heran:1,
						code:240,
						coder:1,
						phone:'',
						codet:'',
						phone1:'',
						password:'',
						qiea:1,//默认密码登录
						koot:''
					},
					mounted:function(){ 
						// this.send()
					},
					methods:{
						//切换登录模式
						qiehuan(event){
							this.qiea=event
						},
						//获取协议信息
						xieyi(option){
							myAjax('post',httpa.xiyi,{
								type:option
							},function(res){
								$("#yuern").show()
								$("#rongqi").html(res.data)
							});
						},
						//登录
						login(){
							var page=this;
							var keys;
							if(page.phone==''){
								mui.toast('手机号不能为空')
							}else if(page.codet==''){
								mui.toast('验证码不能为空')
							}else if(!$('#checkboxid').is(':checked')) {
								mui.toast('请勾选协议')
							}else{
								myAjax('post',httpa.orepool,{
									phone:page.phone,
									code:page.codet
								},function(res){
									console.log(res)
									if(res.code==0){
									   setTimeout(function(){
										   med.setrome('token',res.data.token);
										   page.taber('index.html')
									   },1500)
									}
									mui.toast(res.msg)
								});
							}
						},
						//登录
						login1(){
							var page=this;
							if(page.phone==''){
								mui.toast('手机号不能为空')
							}else if(page.password==''){
								mui.toast('密码不能为空')
							}else if(!$('#checkboxid').is(':checked')) {
								mui.toast('请勾选协议')
							}else{
								myAjax('post',httpa.orepool,{
									phone:page.phone,
									password:page.password
								},function(res){
									console.log(res)
									if(res.code==0){
									   setTimeout(function(){
										   med.setrome('token',res.data.token);
										   page.taber('index.html')
									   },1500)
									}
									mui.toast(res.msg)
								});
							}
						},
						//获取验证码
						codes(){
							var page=this;
							if(page.phone==''){
								mui.toast('手机号不能为空')
							}else{
								myAjax('post',httpa.codeurl,{
									phone:page.phone
								},function(res){
									console.log(res)
									if(res.code==0){
									   page.coder=2;
									   var setac=setInterval(function(){
										if(page.code==0){
											page.code=240;
											page.coder=1;
											clearInterval(setac)
										}else{
											page.code=page.code-1;
										}
									   },1000)
									}
									mui.toast(res.msg)
								});
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//注册获取验证码
		registered1(){
				var Vm=new Vue({
					el:'#app',
					data:{
						phone:'',//手机号
						tuijian:'',//推荐人手机号
					},
					mounted:function(){
						this.send()
					},
					methods:{
						//获取推广人信息
						send(){
							var page=this;
							if(med.getcansu('key')!=undefined){
								var koort=med.getcansu('key')
								console.log(koort)
								myAjax('post',httpa.oreperrr,{
									key:koort
								},function(res){
									console.log(res)
									// page.qiea=2;
									if(res.code==0){
										page.tuijian=res.data
									}
								});
							}
						},
						//获取登录和注册验证码
						shoudsji(){
							var page=this;
							if(page.phone==''){
								mui.toast('手机号不能为空')
							}else{
								myAjax('post',httpa.kooperty,{
									phone:page.phone
								},function(res){
									console.log(res)
									if(res.code==0){
										page.taber('pasword.html?phone='+page.phone+'&key='+med.getcansu('key'))
									}
									mui.toast(res.msg)
								});
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//确认手机号
		vcode(){
				var Vm=new Vue({
					el:'#app',
					data:{
						phone:'',//手机号
						tuijian:'',//推荐人手机号
					},
					mounted:function(){
						this.username()
					},
					methods:{
						//用户信息
						username(){
							var page=this;
							myAjax('post',httpa.user,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.phone=res.data.phone
								}
								console.log(res)
							});
						},
						shoudsji(){
							var page=this;
								myAjax('post',httpa.micode,{
									sc_token:med.getrome('token')
								},function(res){
									if(res.code==0){
										setTimeout(function(){
											page.taber('password.html')
										},1500)
									}
									mui.toast(res.msg)
									console.log(res)
								});
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//修改支付密码
		paypsw(){
				var Vm=new Vue({
					el:'#app',
					data:{
						phone:'',//手机号
						codet:'',//验证码
						pasw:'',//支付密码
						coder:1,//默认未点击
						code:240,//时间
					},
					mounted:function(){
						this.username()
					},
					methods:{
						//用户信息
						username(){
							var page=this;
							myAjax('post',httpa.user,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.phone=res.data.phone
								}
								console.log(res)
							});
						},
						//获取验证码
						coderoot(){
							var page=this;
							myAjax('post',httpa.yanzhengma,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
								   page.coder=2;
								   var setac=setInterval(function(){
									if(page.code==0){
										page.code=240;
										page.coder=1;
										clearInterval(setac)
									}else{
										page.code=page.code-1;
									}
								   },1000)
								}
								mui.toast(res.msg)
							});
						},
						loginpsw(){
							var page=this;
							if(page.code==''){
								mui.toast("验证码不能为空")
							}else if(page.pasw==''){
								mui.toast("资金密码不能为空")
							}else{
								myAjax('post',httpa.zhifumima,{
									sc_token:med.getrome('token'),
									code:page.codet,
									password:page.pasw
								},function(res){
									if(res.code==0){
										setTimeout(function(){
											window.history.go(-1);
										},1500)
									}
									mui.toast(res.msg)
									console.log(res)
								});
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//搜索
		search(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:["热干面","华为蓝牙耳机","美的双面烤盘","小米","美的双面烤盘"],
						ziduan:[],//搜索缓存
						input:'蓝牙无线耳机',//搜索字段
						pages:1,//页数
						numbes:1,//每页条数
						list:[]
					},
					mounted:function(){
						// med.setrome('listname',med.getrome('listname')+'/'+this.input)
						// this.ziduan=med.getrome('listname');
						// console.log(med.getrome('listname'));
						this.shoudsji()
					},
					methods:{
						//获取热门列表
						shoudsji(){
							var page=this;
							myAjax('post',httpa.resou,{
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list=res.data.top
								}
							});
						},
						//复制
						fuzhi(event){
							this.input=event
							this.sousuo()
						},
						//搜索
						sousuo(){
							window.location.href='listshop.html?text='+this.input
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//搜索列表
		listshop(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						input:'',//初始值
						inputs:'',//搜索字段
						pages:1,//页数
						numbes:1,//每页条数
						xiaoliang:1,//销量默认为1
						jiage:1,//价格默认为1
					},
					mounted:function(){
						this.input=med.getcansu('text');
						console.log(this.input)
						this.shangoer()
					},
					methods:{
						//商品排序
						tuijian(event){
							var page=this;
							page.list_lisa=[]
							if(event==1){//销量
								if(page.xiaoliang==1){
									page.xiaoliang=2
									page.xiaoliang=1
								}
							}else{
								if(page.jiage==1){
									page.jiage=2
								}else{
									page.jiage=1
								}
							}
							page.shangoer()
						},
						//搜索
						sousuo(){
							this.list_lisa=[]
							this.input=this.inputs
							this.shangoer()
						},
						//获取商品列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.shoper,{
								page:page.pages,
								limit:page.numbes,
								so:page.input,
								ji:page.jiage,
								xi:page.xiaoliang
							},function(res){
								console.log(res)
								if(res.count!=0){
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								}else{
									mui.toast('已经没有啦！')
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//购物车
		shopping(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						copert:1,
						list_lisa:[],
						pages:1,//页数
						pagess:1,//推荐列页数
						nums:5,//每页条数
						list:[],//购物车列表
						URL:URL+"/",
						sid:[],//选中的商品id
						uids:false,//储存全选状态
						zongja:0,//总价
						rooy:1,//默认为结算
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
					},
					mounted:function(){ 
						this.listshro()
						this.shangoer()
						window.addEventListener('scroll', () => {
							this.handleScrolls()
						});
					},
					methods:{
						handleScrolls() {
							var that = this;
							//判断滚动到底部
							if (document.documentElement.scrollTop >= document.body.clientHeight - window.screen.availHeight) { //滚动高度>=页面高度-屏幕高度
								console.log(2)
								if (that.paging.isTrue) {
									setTimeout(function() {
										that.paging.PageIndex++;
										// that.paging.loadingMessage = "正在加载中~";
										that.shangoer();
									}, 1000); //防止连续下拉
								that.paging.isTrue = false;
								}
							}
						},
						//删除购物车
						delet(){
							var page=this;
							var ids=page.sid.toString();
							myAjax('post',httpa.shopicon,{
								sc_token:med.getrome('token'),
								gid:ids
							},function(res){
								console.log(res)
								if(res.code==0){
									page.rooy=event
									$("#jiesuan").hide() 
									page.listshro() 
									page.zongja=0; 
								}
								mui.toast(res.msg)
							})
						},
						//编辑购物车
						bianji(event){
							if(this.list.length==0){
								mui.toast("购物车空空如也~")
							}else{
								this.rooy=event
								$("#jiesuan").toggle()
								if($("#jiesuan").css('display')=='none'){
									this.rooy=1
								}
							}
						},
						//获取商品列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.shoper,{
								page:page.paging.PageIndex,
								limit:10
							},function(res){
								console.log(res)
								if(res.code==0){
									if(res.count!=0){
										page.paging.isTrue = true;
										res.data.forEach(item=>{
											page.list_lisa.push(item)
										})
									}else{
										mui.toast('已经没有啦！')
									}
								}
							});
						},
						//商品详情页
						oeery(option){
							this.taber('particulars.html?id='+option)
						},
						//前往结算
						eprice(){
							var page=this;
							if(page.sid.length==0){
								mui.toast("还未选择商品")
							}else{
								var ids=page.sid.toString();
								console.log(ids)
								window.location.href='pay.html?id='+ids+'&price='+page.zongja
							}
						},
						//全选按钮
						changger(e){
							var page=this;
							page.zongja=0
							page.sid=[]//清空id
							if(e.target.checked == true) {
								var flag = e.target.checked;
								var items = document.getElementsByName("ckbx");
								for (var i = 0; i < items.length; i++) {
									items[i].checked = flag;
								}
								for(var e=0;e<page.list.length;e++){
									if(page.list[e].msg.ms==0){
										page.zongja=page.zongja+(Number(page.list[e].gui.price*page.list[e].num)+Number(page.list[e].msg.yunfei))
									}else{
										page.zongja=page.zongja+(Number(page.list[e].gui.m_price*page.list[e].num)+Number(page.list[e].msg.yunfei))
									}
									//执行清空操作后将所有id存放在id集合中
									page.sid.push(page.list[e].id)
								}
							} else {
								var flag = e.target.checked;
								var items = document.getElementsByName("ckbx");
								for (var i = 0; i < items.length; i++) {
									items[i].checked = flag;
								}
								for(var e=0;e<page.list.length;e++){
									if(page.list[e].msg.ms==0){
										page.zongja=page.zongja-(Number(page.list[e].gui.price*page.list[e].num)+Number(page.list[e].msg.yunfei))
									}else{
										page.zongja=page.zongja-(Number(page.list[e].gui.m_price*page.list[e].num)+Number(page.list[e].msg.yunfei))
									}
								}
								if(page.zongja<0){
									page.zongja=0
								}
								$("#jiesuan").hide()
							}
						},
						//勾选商品
						changge(e,qid,price,numr,yunfei){
							var page=this;
							console.log(yunfei)
							 if(e.target.checked == true) {
								page.sid.push(qid)
								page.zongjia(price,numr,yunfei,1)
							} else {
								page.sid.splice($.inArray(qid,page.sid),1);
								page.zongjia(price,numr,yunfei,2)
								console.log(page.zongja)
							}
							if(page.sid.length==page.list.length){
								document.getElementsByName("quanxuan")[0].checked=true;
							}else{
								document.getElementsByName("quanxuan")[0].checked=false;
							}
							if(page.sid.length==0){
								$("#jiesuan").hide()
							}else{
								$("#jiesuan").show()
							}
						},
						//计算商品总价
						zongjia(price,numr,yunfei,acc){
							var page=this;
							if(acc==1){//加法
							console.log(1)
								page.zongja=Number(page.zongja)+(Number(price*numr)+Number(yunfei));
							}else{//减法
							console.log(2)
								page.zongja=Number(page.zongja)-(Number(price*numr)+Number(yunfei));
							}
							console.log(page.zongja)
						},
						//商品数量
						jiahao(event,option,nums,price,yunfei,loop){
							var page=this;
							var pacer=document.getElementsByName("ckbx");
							console.log(pacer[loop].checked)
							if(pacer[loop].checked==false){
								mui.toast("请先选择当前商品")
							}else{
								if(option==1){//减法
								console.log("执行减法操作")
									if(nums>0){
										let numss=Number(nums)-1;
										page.toppyu(event,numss,2,price,yunfei)
									}else{
										mui.toast("数量不能小于0")
									}
								}else{//加法
									console.log("执行加法操作")
									let numss=Number(nums)+1;
										page.toppyu(event,numss,1,price,yunfei)
									}
									console.log(page.zongja)
							}
						},
						//商品数量接口
						toppyu(event,nums,acc,price,yunfei){
							console.log(nums)
							var page=this;
							myAjax('post',httpa.numsz,{
								sc_token:med.getrome('token'),
								gid:event,
								num:nums
							},function(res){
								console.log(res)
								if(res.code==0){
									console.log("价格："+price+"数量："+nums+"运费："+yunfei+"加减："+page.zongja)
									page.zongjia(price,1,0,acc)
									page.listshro()
									console.log(page.zongja)
								}
							})
						},
						//购物车列表
						listshro(){
							var page=this;
							myAjax('post',httpa.shuper,{
								sc_token:med.getrome('token'),
								page:page.pages,
								limit:page.nums
							},function(res){
								console.log(res)
								page.list=res.data
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//竞拍
		auction(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						list:[],//商品列表
						rooter:1,
						pages:1,//页数
						lister:[],
						timero:0,
						hours:0,
						minutes:0,
						seconds:0,
						zhuangt:0,
						rotateIn:false,
						dnoen:false,
						uutops:1,
						cansi:'',
						tuse:false,
						fatur:false,
						zhihuan:false,
						juan:0,
						minv:0,
						maxv:1000,
						oipyu:{},
						pricre:0,
						uutopss:2,
						pricers:0,
						kootu:'',
						daert:0,
						pkosjd:0
					},
					mounted:function(){ 
						if(med.getcansu('type')!=undefined){
							this.cansi=med.getcansu('type')
						}
						this.lettop()
						this.rootur()
						this.username()
					},
					methods:{
						//关闭弹窗
						guanbi(){
							this.zhihuan=false
						},
						//前往抢单
						uuuio(event){
							this.taber('Timelimit.html?type='+this.cansi+'&price='+event+'&qu='+this.uutopss)
						},
						//用户信息
						username(){
							console.log(1)
							var page=this;
							myAjax('post',httpa.user,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.pkosjd=res.data.jifen
								}
								console.log(res)
							});
						},
						//一键置换
						dnakjdhow(){
							this.zhihuany()
						},
						//申请置换
						shenuer(){
							this.zhihuany()
							// this.zhihuan=!this.zhihuan
							this.dnoen=false;
						},
						//一键置换
						naniuzh(){
							var page=this;
							if(!$('#checkboxid').is(':checked')) {
								mui.toast('请勾选协议')
								return false;
							}
							myAjax('post',httpa.qaqert1,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.zhihuan=false
									page.fatur=false
									page.pricre=0;
								}
								mui.toast(res.msg)
							});
						},
						//获取置换积分信息
						zhihuany(){
							var page=this;
							myAjax('post',httpa.qaqert,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
									page.oipyu=res.data
									mui.prompt('请输入购物券数量'+res.data.gwq+'进行置换',"请输入数量",'购物券置换',['取消','确定'],function(optio){
										console.log(optio)
										if(optio.index==1){
											var constt=document.querySelector('.mui-popup-input input')
											if(constt.value==res.data.gwq){
												page.zhihuan=!page.zhihuan
											}else{
												mui.toast("请输入正确的数量")
												return false;
											}
										}else{
											
										}
									})
									
								}else{
									mui.toast(res.msg)
								}
							});
						},
						//获取协议信息
						xieyi(option){
							myAjax('post',httpa.xiyi,{
								type:option
							},function(res){
								$("#yuern").show()
								$("#rongqi").html(res.data)
							});
						},
						//一键置换
						zhihuanyyy(){
							
						},
						//点击切换
						uutop(event,option){
							this.uutops=event
							this.uutopss=option
							clearInterval(this.kootu)
							this.date_format(0)
							this.lettop()
						},
						//刷新
						shuaxin(){
							this.lettop()
							this.rotateIn=true
							this.list_lisa=[]
							var page=this;
							setTimeout(function(){
								page.rotateIn=false
							},1000)
						},
						//一键抢单
						qiangdan(pricers){
						   var page=this;
						   mui.confirm('确认抢单吗','抢单','',function(type){
						      if(type.index==1){
						         myAjax('post',httpa.qiang_news,{
						            sc_token:med.getrome('token'),
						            price:parseInt(pricers),
									cc:page.cansi,
									qq:page.uutopss
						         },function(ress){
									 console.log(ress)
									 page.daert=ress.data
						            if(ress.code==0){
										page.dnoen=true;
						               // page.list_lisa=[]
									   // page.zhihuany()
						               // page.lettop()
						            }
									mui.toast(ress.msg)
						         });
						      }else{
						         mui.toast('您取消了抢单');
						      }
						   })
						},
						//获取时间
						date_format(micro_second) {
							var day = Math.floor(micro_second/1000/60/60/24);
							var h = Math.floor(micro_second/1000/60/60%24);
							var m = Math.floor(micro_second/1000/60%60);
							var s = Math.floor(micro_second/1000%60);
							this.hours=Number(day)*24+Number(h);
							this.minutes=Number(m);
							this.seconds=Number(s);
						},
						//获取商品分区
						lettop(){
							var page=this;
							var consyt;
							if(page.uutops==1){
								consyt=httpa.jpais
							}else if(page.uutops==2){
								consyt=httpa.jpais1
							}else if(page.uutops==3){
								consyt=httpa.jpais2
							}
							myAjax('post',consyt,{
								sc_token:med.getrome('token'),
								cc:page.cansi
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list_lisa=res.data
									if(res.data[0].zt==1){
										console.log(111111111111111)
										var tests=res.data[0].time2
										var testse=tests.replace(/-/g,"/")
										console.log(testse)
										var date=new Date(testse)
										var time1 = date.getTime()
											page.kootu=setInterval(function(){
												page.timero=Number(time1/1000)-Number(Date.parse(new Date())/1000);
												if(page.timero==0){
													window.location.reload()
													return false;
												}
												page.date_format(page.timero*1000)
											},1000)
										}else{
											console.log(22222222222222)
											var test=res.data[0].time1
											var testses=test.replace(/-/g,"/")
											var date=new Date(testses)
											var time1 = date.getTime()
											page.kootu=setInterval(function(){
												page.timero=Number(time1/1000)-Number(Date.parse(new Date())/1000);
												if(page.timero==0){
													window.location.reload()
												}
												page.date_format(page.timero*1000)
											},1000)
									}
								}
							})
						},
						//获取状态
						rootur(){
							var page=this;
							myAjax('post',httpa.alt_zt,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.zhuangt=res.data.jp_zt
								}
							})
						},
						//切换
						reser(option){
							var page=this;
							page.rooter=option
							myAjax('post',httpa.shoper,{
								page:page.pages,
								limit:10,
								b:1,
								type:option
							},function(res){
								if(res.code==0){
									page.list=res.data
								}
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//竞拍
		aucicone(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						list:[],//商品列表
						rooter:1,
						pages:1,//页数
						lister:[],
						timero:0,
						hours:0,
						minutes:0,
						seconds:0,
						zhuangt:0,
					},
					mounted:function(){ 
						// this.lettop()
						// this.rootur()
						this.quertur()
					},
					methods:{
						//获取信息
						quertur(){
							var page=this;
							myAjax('post',httpa.jpaiqu,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list_lisa=res.data
								}
							})
						},
						//获取时间
						date_format(micro_second) {
							var day = Math.floor(micro_second/1000/60/60/24);
							var h = Math.floor(micro_second/1000/60/60%24);
							var m = Math.floor(micro_second/1000/60%60);
							var s = Math.floor(micro_second/1000%60);
							this.hours=Number(day)*24+Number(h);
							this.minutes=Number(m);
							this.seconds=Number(s);
						},
						//获取商品分区
						lettop(){
							var page=this;
							myAjax('post',httpa.jpai,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list_lisa=res.data
									if(res.data[0].zt==1){
										var tests=res.data[0].time2
										var testse=tests.replace(/-/g,"/")
										console.log(testse)
										var date=new Date(testse)
										var time1 = date.getTime()
											setInterval(function(){
												page.timero=Number(time1/1000)-Number(Date.parse(new Date())/1000);
												if(page.timero==0){
													window.location.reload()
												}
												page.date_format(page.timero*1000)
											},1000)
										}else{
											var test=res.data[0].time1
											var testses=test.replace(/-/g,"/")
											var date=new Date(testses)
											var time1 = date.getTime()
											setInterval(function(){
												page.timero=Number(time1/1000)-Number(Date.parse(new Date())/1000);
												if(page.timero==0){
													window.location.reload()
												}
												page.date_format(page.timero*1000)
											},1000)
									}
								}
							})
						},
						//获取状态
						rootur(){
							var page=this;
							myAjax('post',httpa.alt_zt,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.zhuangt=res.data.jp_zt
								}
							})
						},
						//切换
						reser(option){
							var page=this;
							page.rooter=option
							myAjax('post',httpa.shoper,{
								page:page.pages,
								limit:10,
								b:1,
								type:option
							},function(res){
								if(res.code==0){
									page.list=res.data
								}
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//我的
		mine(){
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:["1","2","3","4"],
						img:'./img/icon2/touxiang.png',
						name:'',
						jifen:0,
						yue:0,
						jindou:0,
						names:'',
						dengji:0,
						gq:0,
						lmer:0,
						phone:'',
						baoxian:0,
						password1:'',
						datessr:{},
						passwords:'',
						kort:{}
					},
					mounted:function(){ 
						this.username()
						this.baoxianc()
						this.vides()
						this.videsss()
						this.shangoer()
					},
					methods:{
						//获取信息
						shangoer(){
							var page=this;
							myAjax('post',httpa.zypaio,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.kort=res.data
								}
							});
						},
						//排行榜
						videsss(){
							var page=this;
							myAjax('post',httpa.paihangbang,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
								  page.passwords=res.my.top
								}
							});
						},
						//获取单个视频地址
						vides(){
							var page=this;
							myAjax('post',httpa.jpjdata,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.password1=res.data
								}
							});
						},
						//获取申请服务商信息
						inte(){
							var page=this;
							myAjax('post',httpa.sqmsg,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									if(res.data.zt==1){
										setTimeout(function(){
											page.taber('providers.html')
										},1000)
									}else if(res.data.zt==2){
										mui.toast("已提交,请等待审核")
									}else if(res.data.zt==3){
										mui.toast("已被驳回")
										setTimeout(function(){
											page.taber('providers.html')
										},1000)
									}else if(res.data.zt==4){
										mui.toast("已通过,请勿重复提交");
									}
								}
							})
						},
						//获取保险仓
						baoxianc(){
							var page=this;
							myAjax('post',httpa.baoxianc,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.baoxian=res.data
								}
							})
						},
						//用户信息
						username(){
							console.log(1)
							var page=this;
							myAjax('post',httpa.user,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.name=res.data.name
									page.img=URL+'/'+res.data.img
									page.jifen=res.data.jifen
									page.jindou=res.data.jindou
									page.yue=res.data.jinbi
									page.names=res.data.level_name
									page.dengji=res.data.level_id
									page.gq=res.data.gq
									page.lmer=res.data.l
									page.phone=res.data.phone
									page.datessr=res.data
								}
								console.log(res)
							});
						},
						//上传头像
						derrro(){
							var page=this;
							$("#file_med").trigger('click');
							$("#file_med").change(function (e) {
								var file = e.target.files;
								var form = new FormData();
								form.append('sc_token',med.getrome('token'));
								form.append('file',file[0]);
								myAjax('post',httpa.youxiang,{
								},function(res){
									mui.toast(res.msg);
									setTimeout(function(){
										page.username()
									},1500)
									console.log(res)
								},'json',1,form)
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//账号设置
		set(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						img:'',
						name:'',
						phone:''
					},
					mounted:function(){ 
						// this.username()
					},
					methods:{
						//实名认证
						shiminga(){
							var page=this;
							myAjax('post',httpa.yesnoshiming,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									if(res.data.zt==-1){
										page.taber('authentication.html')
									}else if(res.data.zt==0){
										mui.toast("实名信息正在审核中")
									}else if(res.data.zt==1){
										mui.toast("已经实名,无须重复提交")
									}else if(res.data.zt==2){
										mui.toast("实名未通过,请重新提交")
										setTimeout(function(){
											page.taber('authentication.html')
										},1000)
									}
								}
								console.log(res)
							})
						},
						//获取个人信息
						username(){
							var page=this;
							myAjax('post',httpa.user,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.name=res.data.name
									page.img=URL+'/'+res.data.img
									page.phone=res.data.phone
								}
								console.log(res)
							});
						},
						//退出登录
						exit(){
							var page=this;
							mui.confirm('确认退出登录吗','退出登录','',function(type){
								console.log(type)
								if(type.index==1){
									med.setrome('token','')
									page.taber('login.html');
								}else{
									
								}
							})
						},
						//获取地址
						sueran(option){
							this.potop=option
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//切换账号
		account(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						img:'',
						name:'',
						phone:''
					},
					mounted:function(){ 
						// this.username()
					},
					methods:{
						//获取个人信息
						username(){
							var page=this;
							myAjax('post',httpa.user,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.name=res.data.name
									page.img=URL+'/'+res.data.img
									page.phone=res.data.phone
								}
								console.log(res)
							});
						},
						//退出登录
						exit(){
							var page=this;
							mui.confirm('确认退出登录吗','退出登录','',function(type){
								console.log(type)
								if(type.index==1){
									med.setrome('token','')
									page.taber('login.html');
								}else{
									
								}
							})
						},
						//获取地址
						sueran(option){
							this.potop=option
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//地址管理
		address(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:false,
						list_lisa:[],
						text:'管理',
						gaa:0,//判断是否由订单页面前来0无，1订单
						evers:0,//默认正常商城购买
					},
					mounted:function(){
						this.listave()
						var page=this;
						if(med.getcansu('ume')!=null||med.getcansu('ume')!=undefined){
							page.gaa=med.getcansu('ume')
							console.log(med.getcansu('ume'))
						}
						if(med.getcansu('evers')!=null||med.getcansu('ume')!=undefined){
							page.gaa=1;
							page.evers=med.getcansu('evers');
						}
					},
					methods:{
						//将信息返回到订单支付页面
						fanhui(event){
							var page=this;
							console.log(1)
							if(page.evers==1){
								console.log(page.evers)
								window.location.href='upthegoods.html?umeid='+event;
							}else{
								window.location.href='pay.html?umeid='+event+'&id='+med.getcansu('id')+'&price='+med.getcansu('price');
							}
						},
						//删除收货地址
						shanchu(event){
							var page=this;
							myAjax('post',httpa.addsan,{
								sc_token:med.getrome('token'),
								id:event
							},function(res){
								console.log(res)
								if(res.code==0){
									page.text='管理'
									page.listave()
									page.potop=false
								}
								mui.toast(res.msg)
							})
						},
						//地址列表
						listave(){
							var page=this;
							myAjax('post',httpa.addres,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								page.list_lisa=res.data
							})
						},
						//删除管理
						guanli(){
							this.potop=!this.potop
							if(this.potop){
								this.text='完成'
							}else{
								this.text='管理'
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//全部订单
		entire(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						coders:0,//默认获取全部
						coders1:0,//默认获取全部
						coders2:0,//默认获取全部
						coders3:0,//默认获取全部
						pages:1,//页数
						pagess:1,//页数
						count:1,
						lists:[],
					},
					mounted:function(){ 
						this.coders3=med.getcansu('ids');
						this.listdin(med.getcansu('ids'))
						this.shangoer()
					},
					methods:{
						//获取商品列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.shoper,{
								page:page.pagess,
								limit:10
							},function(res){
								console.log(res)
								if(res.code==0){
									// if(res.count!=0){
									// 	res.data.forEach(item=>{
									// 		page.lists.push(item)
									// 	})
									// }else{
									// 	mui.toast('已经没有啦！')
									// }
									page.lists=res.data
								}
							});
						},
						//确认收货
						queren(event){
							var page=this;
							mui.confirm('确认收货吗','确认','',function(type){
								console.log(type)
								if(type.index==1){
									myAjax('post',httpa.wancheng,{
										sc_token:med.getrome('token'),
										id:event
									},function(res){
										console.log(res)
										if(res.code==0){
											setTimeout(function(){
												page.listdin()
											},1500)
										}
										mui.toast(res.msg)
									})
								}else{
								}
							})
						},
						//申请退款
						shenqing(event){
							var page=this;
							mui.confirm('确认该操作吗','确认','',function(type){
								console.log(type)
								if(type.index==1){
									myAjax('post',httpa.tuikuan,{
										sc_token:med.getrome('token'),
										id:event
									},function(res){
										console.log(res)
										if(res.code==0){
											setTimeout(function(){
												page.listdin()
											},1500)
										}
										mui.toast(res.msg)
									})
								}else{
								}
							})
						},
						//获取订单
						listdin(){
							var page=this;
							myAjax('post',httpa.dingdan,{
								sc_token:med.getrome('token'),
								page:page.pages,
								type:page.coders,
								type1:page.coders1,
								type2:page.coders2,
								limit:5
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list_lisa=res.data
								}
							})
						},
						coder(option,option1,option2,option3){
							this.coders=option
							this.coders1=option1
							this.coders2=option2
							this.coders3=option3
							this.listdin()
						},
						//获取地址
						sueran(option){
							this.potop=option
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//提货订单详情
		mybiddings(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						coders:0,//默认获取全部
						coders1:0,//默认获取全部
						coders2:0,//默认获取全部
						coders3:0,//默认获取全部
						pages:1,//页数
						pagess:1,//页数
						count:1,
						lists:[],
					},
					mounted:function(){
						this.coders3=med.getcansu('ids');
						this.listdin(med.getcansu('ids'))
					},
					methods:{
						//切换
						codesr(option){
							this.coders=option
						},
						//确认收货
						queren(event){
							var page=this;
							mui.confirm('确认收货吗','确认','',function(type){
								console.log(type)
								if(type.index==1){
									myAjax('post',httpa.wancheng,{
										sc_token:med.getrome('token'),
										id:event
									},function(res){
										console.log(res)
										if(res.code==0){
											setTimeout(function(){
												page.listdin()
											},1500)
										}
										mui.toast(res.msg)
									})
								}else{
								}
							})
						},
						//申请退款
						shenqing(event){
							var page=this;
							mui.confirm('确认该操作吗','确认','',function(type){
								console.log(type)
								if(type.index==1){
									myAjax('post',httpa.tuikuan,{
										sc_token:med.getrome('token'),
										id:event
									},function(res){
										console.log(res)
										if(res.code==0){
											setTimeout(function(){
												page.listdin()
											},1500)
										}
										mui.toast(res.msg)
									})
								}else{
								}
							})
						},
						//获取订单
						listdin(){
							var page=this;
							myAjax('post',httpa.orderlist,{
								sc_token:med.getrome('token'),
								page:page.pages,
								limit:5
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list_lisa=res.data
								}
							})
						},
						coder(option,option1,option2,option3){
							this.coders=option
							this.coders1=option1
							this.coders2=option2
							this.coders3=option3
							this.listdin()
						},
						//获取地址
						sueran(option){
							this.potop=option
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//商品详情
		particulars(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						shopid:0,
						URL:URL+'/',
						banner:[],//banner信息
						msg:{},//页面信息
						text:'',//富文本信息
						xuanze:'未选择商品',//选择商品
						guige:[],//选择规格
						erin:0,//选择规格
						biaoshi:0,//区分立即购买或购物车
						ids:0,//当前所选商品id
						num:1,//当前商品所选数量
						nameer:'',//所选商品名字
						yaner:'',//选中参数
						xieyia:'',//协议
						videos:''
					},
					mounted:function(){
						if(med.getcansu('id')!=undefined){
							this.shopid=med.getcansu('id');
							this.shouop()
						}else{
							mui.toast('参数错误！')
						}
					},
					methods:{
						//协议
						xieyi(){
							var page=this;
							myAjax('post',httpa.xiyi,{
								type:4
							},function(res){
								$("#yuern").show()
								$("#rongqi").html(res.data)
							});
						},
						//数量
						numshu(event){
							var page=this;
							if(event==1){//减号
								if(page.num>0){
									page.num=page.num-1;
								}else{
								}
							}else{//加号
								page.num=page.num+1;
							}
						},
						//加入购物车
						gouwu(){
							var token=med.getrome('token')
							var page=this;
							if(page.num==0){
								mui.toast('数量不能为0')
							}else if(page.ids==0){
								mui.toast('未选择商品')
							}else{
								console.log(page.ids)
								myAjax('post',httpa.shopee,{
									sc_token:token,
									gid:page.shopid,
									num:page.num,
									guid:page.ids
								},function(res){
									page.hide()
									mui.toast(res.msg)
								})
							}
						},
						//选取商品规格
						gotober(option,event,acc){
							this.erin=option
							this.ids=event
							this.nameer=acc
						},
						//获取商品详情
						shouop(){
							var page=this;
							myAjax('post',httpa.shoper1,{
								id:page.shopid
							},function(res){
								page.videos=res.data.mp4
								page.banner=res.data.banner
								page.msg=res.data.msg
								page.text=res.data.text
								page.guige=res.data.gui
								console.log(res)
							})
						},
						//关闭弹出框
						hide(){
							var page=this;
							if(page.ids!=0&&page.num!=0){
								page.xuanze=page.nameer+'、'+page.num+'件'
							}
							$("#shoppxiang").hide()
						},
						//立即购买
						goushop(option){
							this.biaoshi=option
							$("#shoppxiang").show()
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//商品详情2
		particularsss(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						shopid:0,
						URL:URL+'/',
						banner:[],//banner信息
						msg:{},//页面信息
						text:'',//富文本信息
						xuanze:'未选择商品',//选择商品
						guige:[],//选择规格
						erin:0,//选择规格
						biaoshi:0,//区分立即购买或购物车
						ids:0,//当前所选商品id
						num:1,//当前商品所选数量
						nameer:'',//所选商品名字
						yaner:'',//选中参数
						xieyia:'',//协议
						hidse:true,
						xinnum:'',
						name:'',
						price:'',
						wwww:true,
						videos:'',
						order:'',
						jiajia:0,
						time1:0,
						time2:0,
						hours:0,
						minutes:0,
						seconds:0,
						zhuangtai:0,//默认未开始
						price_j:0,
					},
					mounted:function(){
						if(med.getcansu('id')!=undefined){
							this.shopid=med.getcansu('id');
							this.shouop()
						}
					},
					methods:{
						//获取时间
						date_format(micro_second) {
							var day = Math.floor(micro_second/1000/60/60/24);
							var h = Math.floor(micro_second/1000/60/60%24);
							var m = Math.floor(micro_second/1000/60%60);
							var s = Math.floor(micro_second/1000%60);
							this.hours=Number(day)*24+Number(h);
							this.minutes=Number(m);
							this.seconds=Number(s);
						},
						//加价
						pai(){
							var page=this;
							mui.confirm('确认加价吗','加价','',function(type){
								if(type.index==1){
									mui.prompt('请输入金额','输入金额','金额',['取消','确定'],function(optio){
										console.log(optio)
										if(optio.index==1){
											myAjax('post',httpa.pai,{
												sc_token:med.getrome('token'),
												id:page.shopid,
												num:optio.value
											},function(res){
												if(res.code==0){
													page.shouop()
												}
												mui.toast(res.msg)
											})
										}
									})
								}else{
									mui.toast('您取消了支付');
								}
							})
						},
						//获取商品详情
						shouop(){
							var page=this;
							myAjax('post',httpa.jpxq,{
								sc_token:med.getrome('token'),
								id:page.shopid
							},function(res){
								console.log(res)
								page.banner=res.data.banner
								page.name=res.data.name
								page.text=res.data.x
								page.price=res.data.price
								page.xinnum=res.data.guige
								page.videos=res.data.mp4 
								page.order=res.data.order
								page.jiajia=res.data.jiajia
								page.time1=res.data.time1 
								page.time2=res.data.time2
								page.price_j=res.data.price_j
								page.zhuangtai=res.data.time_zt
								if(page.zhuangtai==1){
									console.log('1')
									var tests=res.data.time2
										setInterval(function(){
											page.timero=Number(tests)-Number(Date.parse(new Date())/1000);
											page.date_format(page.timero*1000)
										},1000)
									}else{
										console.log('2')
										var test=res.data.time1
										setInterval(function(){
											page.timero=Number(test)-Number(Date.parse(new Date())/1000);
											page.date_format(page.timero*1000)
										},1000)
								}
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//设置密码
		pasword(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						code:240,//验证码秒数
						phone:'',
						coder:0,
					},
					mounted:function(){
						this.phone=med.getcansu('phone').substring(0,3)+'****'+med.getcansu('phone').substring(7,11)
						this.sueran()
					},
					methods:{
						//获取验证码
						sueran(){
							var page=this;
							myAjax('post',httpa.codeurl,{
								phone:med.getcansu('phone')
							},function(res){
								console.log(res)
								if(res.code==0){
								   page.coder=2;
								   var setac=setInterval(function(){
									if(page.code==0){
										page.code=240;
										page.coder=1;
										clearInterval(setac)
									}else{
										page.code=page.code-1;
									}
								   },1000)
								}
								med.toast(res.msg)
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//资金记录
		money(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						code:240,//验证码秒数
						phone:'',
						coder:0,//默认全部
						pages:1,
						texte:'全部记录',
						terud:false,
						goot:{},
						types:0,
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
					},
					mounted:function(){
						this.types=med.getcansu('type')
						this.sueran()
						// this.sueraner()
						window.addEventListener('scroll', () => {
							this.handleScrolls()
						});
					},
					methods:{
						//上拉刷新
						 handleScrolls() {
							var that = this;
							//判断滚动到底部
							if (document.documentElement.scrollTop >= document.body.clientHeight - window.screen.availHeight) { //滚动高度>=页面高度-屏幕高度
								console.log(2)
								if (that.paging.isTrue) {
									setTimeout(function() {
										that.paging.PageIndex++;
										// that.paging.loadingMessage = "正在加载中~";
										that.sueran();
									}, 1000); //防止连续下拉
								that.paging.isTrue = false;
								}
							}
						},
						//选择
						uiiirt(event,rooy){
							this.texte=event
							this.coder=rooy
							this.terud=false
							this.sueran()
						},
						//切换
						qiehuan1(option){
							this.terud=!this.terud
						},
						//获取资金记录
						sueran(){
							var page=this;
							myAjax('post',httpa.moloner,{
								sc_token:med.getrome('token'),
								page:page.paging.PageIndex,
								limit:15,
								type:page.types
							},function(res){
								console.log(res)
								if(res.code==0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								  if(res.data.length==0){
									  mui.toast('暂无记录~')
								  }
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//资金记录
		moneys(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						code:240,//验证码秒数
						phone:'',
						coder:0,//默认全部
						pages:1,
						texte:'全部记录',
						terud:false,
						goot:{},
						types:0,
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
					},
					mounted:function(){
						this.sueran()
						// this.sueraner()
						window.addEventListener('scroll', () => {
							this.handleScrolls()
						});
					},
					methods:{
						//上拉刷新
						 handleScrolls() {
							var that = this;
							//判断滚动到底部
							if (document.documentElement.scrollTop >= document.body.clientHeight - window.screen.availHeight) { //滚动高度>=页面高度-屏幕高度
								console.log(2)
								if (that.paging.isTrue) {
									setTimeout(function() {
										that.paging.PageIndex++;
										// that.paging.loadingMessage = "正在加载中~";
										that.sueran();
									}, 1000); //防止连续下拉
								that.paging.isTrue = false;
								}
							}
						},
						//获取资金记录
						sueran(){
							var page=this;
							myAjax('post',httpa.ccunpiaolist,{
								sc_token:med.getrome('token'),
								page:page.paging.PageIndex,
								limit:15,
							},function(res){
								console.log(res)
								if(res.code==0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								  if(res.data.length==0){
									  mui.toast('暂无记录~')
								  }
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//预约记录
		moneyss(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						code:240,//验证码秒数
						phone:'',
						coder:0,//默认全部
						pages:1,
						texte:'全部记录',
						terud:false,
						goot:{},
						types:0,
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
					},
					mounted:function(){
						this.sueran()
						// this.sueraner()
						window.addEventListener('scroll', () => {
							this.handleScrolls()
						});
					},
					methods:{
						//上拉刷新
						 handleScrolls() {
							var that = this;
							//判断滚动到底部
							if (document.documentElement.scrollTop >= document.body.clientHeight - window.screen.availHeight) { //滚动高度>=页面高度-屏幕高度
								console.log(2)
								if (that.paging.isTrue) {
									setTimeout(function() {
										that.paging.PageIndex++;
										// that.paging.loadingMessage = "正在加载中~";
										that.sueran();
									}, 1000); //防止连续下拉
								that.paging.isTrue = false;
								}
							}
						},
						//获取资金记录
						sueran(){
							var page=this;
							myAjax('post',httpa.my_yylist,{
								sc_token:med.getrome('token'),
								page:page.paging.PageIndex,
								limit:20,
							},function(res){
								console.log(res)
								if(res.code==0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								  if(res.data.length==0){
									  mui.toast('暂无记录~')
								  }
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//提票记录
		ftticketss(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						code:240,//验证码秒数
						phone:'',
						coder:0,//默认全部
						pages:1,
						texte:'全部记录',
						terud:false,
						goot:{},
					},
					mounted:function(){
						this.sueran()
					},
					methods:{
						//获取资金记录
						sueran(){
							var page=this;
							myAjax('post',httpa.fters11,{
								sc_token:med.getrome('token'),
								page:page.pages,
								limit:20,
								type:page.coder
							},function(res){
								console.log(res)
								if(res.code==0){
								  page.list_lisa=res.data
								  if(res.data.length==0){
									  mui.toast('暂无记录~')
								  }
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//分红明细
		ehareus(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						code:240,//验证码秒数
						phone:'',
						coder:0,//默认全部
						pages:1,
						texte:'全部记录',
						terud:false,
						goot:{},
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
					},
					mounted:function(){
						this.sueran()
						window.addEventListener('scroll', () => {
							this.handleScrolls()
						});
					},
					methods:{
						//上拉刷新
						 handleScrolls() {
							var that = this;
							//判断滚动到底部
							if (document.documentElement.scrollTop >= document.body.clientHeight - window.screen.availHeight) { //滚动高度>=页面高度-屏幕高度
								console.log(2)
								if (that.paging.isTrue) {
									setTimeout(function() {
										that.paging.PageIndex++;
										// that.paging.loadingMessage = "正在加载中~";
										that.sueran();
									}, 1000); //防止连续下拉
								that.paging.isTrue = false;
								}
							}
						},
						//获取资金记录
						sueran(){
							var page=this;
							myAjax('post',httpa.cunpaifenhonglist,{
								sc_token:med.getrome('token'),
								page:page.pages,
								limit:20,
							},function(res){
								console.log(res)
								if(res.code==0){
								  page.list_lisa=res.data
								  if(res.data.length==0){
									  mui.toast('暂无记录~')
								  }
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//物流信息
		logistics(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						code:240,//验证码秒数
						phone:'',
						coder:0,
						dan:'',
						wul:'',
						dizhi:'',
						idid:0,
						name:'',
					},
					mounted:function(){
						this.dan=med.getcansu('dan');
						this.wul=med.getcansu('wul');
						this.idid=med.getcansu('ids');
						this.xiuaaa()
					},
					methods:{
						//获取收货地址
						xiuaaa(){
							var page=this;
							console.log(page.idid)
							myAjax('post',httpa.xiugai,{
								sc_token:med.getrome('token'),
								id:page.idid
							},function(res){
								page.name=res.data.name
								page.phone=res.data.phone
								page.dizhi=res.data.sheng.name+''+res.data.xian.name+''+res.data.shi.name+''+res.data.xaddress
							})
						},
						//获取验证码
						sueran(){
							var page=this;
							myAjax('post',httpa.codeurl,{
								phone:med.getcansu('phone')
							},function(res){
								console.log(res)
								if(res.code==0){
								   page.coder=2;
								   var setac=setInterval(function(){
									if(page.code==0){
										page.code=240;
										page.coder=1;
										clearInterval(setac)
									}else{
										page.code=page.code-1;
									}
								   },1000)
								}
								med.toast(res.msg)
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//我的竞拍
		mybidding(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						code:240,//验证码秒数
						phone:'',
						coder:0,
						dan:'',
						wul:'',
						coders:'',
						pages:0,
						name:'',
						pagess:1,//页数
					},
					mounted:function(){
						this.listdin()
					},
					methods:{
						//获取订单
						listdin(){
							var page=this;
							myAjax('post',httpa.orderlist,{
								sc_token:med.getrome('token'),
								page:page.pagess,
								limit:10
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list_lisa=res.data
								}
							})
						},
						//切换
						codesr(option){
							this.coders=option
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//售后
		aftersale(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						code:240,//验证码秒数
						phone:'',
						coder:0,
						dan:'',
						wul:'',
						dizhi:'',
						coders:0,
						name:'',
						pagess:1,//页数
					},
					mounted:function(){
					},
					methods:{
						//切换
						coderss(option){
							this.coders=option
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//我的积分
		bystudent(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						picer:0,
						picer1:0,
						list_lisa:[],
						num:'',//数量
						shul:'',//转换数量
						zhuanhuan:1,//默认为积分转文票
						showee:false,
						bili:0,
						uutops:0,
						uutopss:0,
						goot:{},
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
					},
					mounted:function(){ 
						this.picer=med.getcansu('picer')
						this.picer1=med.getcansu('wen')
						this.usert()
						this.sueran()
						this.pouty()
						window.addEventListener('scroll', () => {
							this.handleScrolls()
						});
					},
					methods:{
						//获取信息
						pouty(){
							var page=this;
							myAjax('post',httpa.syjinbi,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.goot=res.data
								}
							});
						},
						//上拉刷新
						 handleScrolls() {
							var that = this;
							//判断滚动到底部
							if (document.documentElement.scrollTop >= document.body.clientHeight - window.screen.availHeight) { //滚动高度>=页面高度-屏幕高度
								console.log(2)
								if (that.paging.isTrue) {
									setTimeout(function() {
										that.paging.PageIndex++;
										// that.paging.loadingMessage = "正在加载中~";
										that.sueran();
									}, 1000); //防止连续下拉
								that.paging.isTrue = false;
								}
							}
						},
						//获取资金记录
						sueran(){
							var page=this;
							myAjax('post',httpa.moloner,{
								sc_token:med.getrome('token'),
								page:page.paging.PageIndex,
								limit:15,
								type:1,
								y:page.uutopss
							},function(res){
								console.log(res)
								if(res.code==0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								  if(res.data.length==0){
									  mui.toast('暂无记录~')
								  }
								}
							});
						},
						//切换
						uutop(event,option){
							this.paging.PageIndex=1
							this.list_lisa=[]
							this.uutops=event
							this.uutopss=option
							this.sueran()
						},
						//支付
						zhifua(){
							var optivo='';
							$("input[type=number]").each(function(){
								if(optivo.length<6){
									optivo=optivo+this.value;
								}else{
									
								}
							})
							var page=this;
							if(optivo.length!=6){
								mui.toast('密码格式错误！')
							}else{
								var httper='';
								if(page.zhuanhuan==2){
									httper=URL+'/index.php/api/UserApi/gqdh'
								}else{
									httper=URL+'/index.php/api/UserApi/gqdhf'
								}
								myAjax('post',httpa.pasword,{
									sc_token:med.getrome('token'),
									password:optivo
								},function(res){
									if(res.code==0){
										myAjax('post',httper,{
											sc_token:med.getrome('token'),
											num:page.num,
											password:optivo
										},function(ress){
											console.log(ress)
											if(ress.code==0){
												page.showhide()
												med.toast(ress.msg)
												setTimeout(function(){
												 window.history.go(-1)
												},1500)
										   }
										});	
									}else{
										mui.toast(res.msg)
										page.showhide()
										$(".out_none").val('');
									}
									console.log(res)
								})
							}
							console.log(optivo);
						},
						//获取当前文票价格
						usert(){
							var page=this;
							myAjax('post',httpa.yuqil,{
								sc_token:med.getrome('token')
							},function(ress){
								if(ress.code==0){
									page.bili=ress.data;
							   }
							});	
						},
						//支付弹窗打开
						shower(){
							this.showee=true
						},
						//支付弹窗关闭
						showhide(){
							this.showee=false
							$(".out_none").val('');
						},
						//兑换
						duihuan(){
							var page=this;
							if(page.num==''){
								mui.toast('数量不能为空')
								return false;
							}
							mui.confirm('确认支付吗','支付','',function(type){
								if(type.index==1){
									page.shower()
								}else{
									mui.toast('您取消了支付');
								}
							})
						},
						//转化
						errty(){
							if(this.zhuanhuan==1){
								this.shul=this.num/this.bili
							}else{
								this.shul=this.num*this.bili
							}
							
							if(this.num==''){
								this.shul=''
							}
						},
						//互转
						zhuanhu(){
							var page=this;
							if(page.zhuanhuan==1){
								page.zhuanhuan=2
							}else{
								page.zhuanhuan=1
							}
							page.errty()
							console.log(page.zhuanhuan)
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//设置支付密码
		payset(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"]
					},
					mounted:function(){ 
						
					},
					methods:{
						//获取地址
						sueran(option){
							this.potop=option
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//获取验证码
		paycode(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"]
					},
					mounted:function(){
						// if(med.getrome('token')!=undefined){
						// 	this.coderoot()
						// }
						this.hooer()
					},
					methods:{
						//获取第一次登录状态
						hooer(){						
							var page=this;
							myAjax('post',httpa.iooert,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
									if(res.data.z==0){
										window.location.href='pwsone.html'
									}else{
										page.coderoot()
									}
								}
							});
						},
						//获取验证码
						coderoot(){
							myAjax('post',httpa.yanzhengma,{
								sc_token:med.getrome('token')
							},function(res){
								mui.toast(res.msg)
								console.log(res)
							})
						},
						//获取地址
						sueran(option){
							this.potop=option
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//个人信息
		personal(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						name:'',
						img:''
					},
					mounted:function(){ 
						this.username()
					},
					methods:{
						//上传头像
						derrro(){
							var page=this;
							$(".file_med").change(function (e) {
								var file = e.target.files;
								var form = new FormData();
								form.append('sc_token',med.getrome('token'));
								form.append('file',file[0]);
								myAjax('post',httpa.youxiang,{
								},function(res){
									mui.toast(res.msg);
									if(res.code==0){
										$("#diaoqu").hide()
										setTimeout(function(){
											page.username()
										},1500)
									}
									console.log(res)
								},'json',1,form)
							});
						},
						//获取个人信息
						username(){
							var page=this;
							myAjax('post',httpa.user,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.name=res.data.name
									page.img=URL+'/'+res.data.img
								}
								console.log(res)
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//修改昵称
		mname(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						name:''
					},
					mounted:function(){ 
						
					},
					methods:{
						//取消输入
						querx(){
							this.name=''
						},
						//修改昵称
						queren(){
							var page=this;
							mui.confirm('确认修改吗','确认','',function(type){
								if(type.index==1){
									myAjax('post',httpa.mname,{
										sc_token:med.getrome('token'),
										name:page.name
									},function(res){
										console.log(res)
										if(res.code==0){
											setTimeout(function(){
												window.history.go(-1)
											},1500)
										}
										mui.toast(res.msg)
									});
								}else{
								}
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//我的余额
		balance(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						yue:0,//余额
					},
					mounted:function(){
						this.yue=med.getcansu('price');
					},
					methods:{
						//获取地址
						sueran(option){
							this.potop=option
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//余额提现
		withdrawal(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						codeid:'',//银行卡号
						kaerti:'',//开户行
						name:'',//真实姓名
						price:'',//金额
						ztcall:0,
						poer:'',
						poer1:'',
						poer2:'',
					},
					mounted:function(){ 
						this.zhuangroot()
					},
					methods:{
						//获取银行卡提现状态
						zhuangroot(){
							var page=this;
							myAjax('post',httpa.yhciid,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									if(res.data.zt!=0){
										page.ztcall=res.data.zt
										page.kaerti=res.data.k_name
										page.codeid=res.data.k_num
										page.name=res.data.k_zname
									}
								}
							});
						},
						//提现
						tixiana(){
							var page=this;
							if(page.price==''){
								mui.toast("金额不能为空")
							}else if(page.name==''){
								mui.toast("真实姓名不能为空")
							}else if(page.kaerti==''){
								mui.toast("开户行不能空")
							}else if(page.codeid==''){
								mui.toast("银行卡号不能为空")
							}else{
								mui.confirm('确认提现吗','提现','',function(type){
									if(type.index==1){
										mui.prompt('请输入支付密码','输入支付密码','支付',['取消','确定'],function(optio){
											console.log(optio)
											if(optio.index==1){
												myAjax('post',httpa.pasword,{
													sc_token:med.getrome('token'),
													password:optio.value
												},function(res){
													if(res.code==0){
														myAjax('post',httpa.tixian,{
															sc_token:med.getrome('token'),
															num:page.price,
															k:page.kaerti,
															x:page.name,
															cdr:page.codeid,
															password:optio.value
														},function(res){
															mui.toast(res.msg)
															if(res.code==0){
																setTimeout(function(){
																	window.history.go(-1)
																},1500)
															}
															console.log(res)
														})
													}else{
														mui.toast(res.msg)
													}
													console.log(res)
												})
											}
										})
										document.querySelector('.mui-popup-input input').type='password'
									}else{
										mui.toast('您取消了支付');
									}
								})
							}
						},
						//获取地址
						sueran(option){
							this.potop=option
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//充值
		topup(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						num:'',//数量
						tupia:'',//上传图片64位
						yue:0,//余额
						inputs:'',//金额
						zhixing:'',//图片
						name:'',//户名
						time:''//时间
					},
					mounted:function(){ 
						this.yue=med.getcansu('price');
						this.xinxi()
					},
					methods:{
						//获取充值信息
						xinxi(){
							var page=this;
							myAjax('post',httpa.cztishi,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.list_lisa=res.data
								}
								console.log(res)
							})
						},
						//上传图片
						shangcu(e){
							var page=this;
							var file = e.target.files;
							var reader = new FileReader();
							reader.readAsDataURL(file[0]);
							reader.onload = function () 
							{
								page.zhixing=file[0];
								page.tupia=reader.result
							};
						},
						//确认充值
						queren(){
							var page=this;
							if(page.inputs==''&&page.inputs==0){
								mui.toast('请输入正确的金额')
							}else if(page.tupia==''){
								mui.toast('凭证不能为空')
							}else if(page.name==''){
								mui.toast('转账户名不能为空')
							}else if(page.time==''){
								mui.toast('转账时间不能为空')
							}else{
								var time_right=new Date(page.time);
								var time_top=time_right.valueOf();
								var form = new FormData();
								console.log(time_top)
								form.append('sc_token',med.getrome('token'));
								form.append('file',page.zhixing);
								form.append('num',page.inputs);
								form.append('cztime',time_top);
								form.append('name',page.name);
								console.log(page.zhixing)
								myAjax('post',httpa.cz,{
								},function(res){
									mui.toast(res.msg)
									console.log(res)
									if(res.code==0){
										setTimeout(function(){
											window.history.go(-1)
										},1500)
									}
								},'json',1,form)
							}
						},
						//获取地址
						sueran(option){
							this.potop=option
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//新建收货地址
		delivery(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						list:[],//列表
						yue:0,//余额
						name:'',
						phone:'',
						diqu:'',
						sheng:'',
						shi:'',
						qu:'',
						xiangxi:'',
						sex:'',
						ids:'',
						idr1:'',
						idr2:'',
						idr3:'',
						nnur:0,//区分省市县
						faner:false,
						idid:0,
						qubie:1
					},
					mounted:function(){
						var page=this;
						if(med.getcansu('id')!=undefined){
							page.idid=med.getcansu('id')
							page.xiuaaa()
							page.qubie=2
						}
					},
					methods:{
						//修改地址
						xiuaaa(){
							var page=this;
							console.log(page.idid)
							myAjax('post',httpa.xiugai,{
								sc_token:med.getrome('token'),
								id:page.idid
							},function(res){
								page.name=res.data.name
								page.phone=res.data.phone
								page.sex=res.data.sex
								page.sheng=res.data.sheng.name
								page.shi=res.data.shi.name
								page.qu=res.data.xian.name
								page.xiangxi=res.data.xaddress
								page.idr1=res.data.sheng.id
								page.idr2=res.data.shi.id
								page.idr3=res.data.xian.id
								console.log(res)
							})
						},
						//关闭弹窗
						hide(){
							this.faner=false
						},
						//选择列表
						xuanze(event,name){
							console.log(event)
							if(this.nnur==1){
								this.ids=event
								this.idr1=event
								this.sheng=name
							}else if(this.nnur==2){
								this.ids=event
								this.idr2=event
								this.shi=name
							}else if(this.nnur==3){
								this.ids=event
								this.idr3=event
								this.qu=name
							}else if(this.nnur==0){
								this.sex=name
							}
							if(event==undefined){
								this.sex=name
							}
							this.faner=false
						},
						//保存修改
						addres1(){
							var page=this;
							if(page.name==''){
								mui.toast('收货人不能为空')
							}else if(page.phone==''){
								mui.toast('手机号不能为空')
							}else if(page.sex==''){
								mui.toast('性别不能为空')
							}else if(page.idr1==''||page.idr2==''||page.idr3==''){
								mui.toast('地址不能为空')
							}else if(page.xiangxi==''){
								mui.toast('详细地址不能为空')
							}else{
								console.log(page.phone)
								myAjax('post',httpa.xiugai1,{
									sc_token:med.getrome('token'),
									name:page.name,
									phone:page.phone,
									sex:page.sex,
									sid:page.idr1,
									lid:page.idr2,
									id:page.idid,
									xid:page.idr3,
									xxmsg:page.xiangxi
								},function(res){
									if(res.code==0){
										setTimeout(function(){
											window.history.go(-1)
										},1500)
									}
									mui.toast(res.msg)
								})
							}
						},
						//确认
						addres(){
							var page=this;
							if(page.name==''){
								mui.toast('收货人不能为空')
							}else if(page.phone==''){
								mui.toast('手机号不能为空')
							}else if(page.sex==''){
								mui.toast('性别不能为空')
							}else if(page.idr1==''||page.idr2==''||page.idr3==''){
								mui.toast('地址不能为空')
							}else if(page.xiangxi==''){
								mui.toast('详细地址不能为空')
							}else{
								console.log(page.phone)
								myAjax('post',httpa.xdizhi,{
									sc_token:med.getrome('token'),
									name:page.name,
									phone:page.phone,
									sex:page.sex,
									sid:page.idr1,
									lid:page.idr2,
									xid:page.idr3,
									xxmsg:page.xiangxi
								},function(res){
									if(res.code==0){
										setTimeout(function(){
											window.history.go(-1)
										},1500)
									}
									mui.toast(res.msg)
								})
							}
						},
						//获取省市县列表
						list_acc(event){
							var page=this;
							if(event==0){
								page.nnur=0;
								page.faner=true
								page.list=[{name:'男'},{name:'女'}]
							}else{
								myAjax('post',httpa.sheng,{
									sc_token:med.getrome('token'),
									type:event,
									id:page.ids
								},function(res){
									page.nnur=event;
									page.faner=true
									page.list=res.data
									console.log(res);
								})
							}
						},
						//保存
						sueran(){
							myAjax('post',httpa.xdizhi,{
								sc_token:med.getrome('token'),
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//订单生成页面
		pay(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						list:[],//商品列表
						yue:0,//余额
						yues:0,//固定余额
						id:0,//商品id集合
						did:'',//地址id
						name:'',//名字
						shengshi:'',//地址集合
						phone:'',//手机号
						y_jiage:0,//总原价
						yunfei:'',//运费
						jifen:0,//积分
						jifen1:0,//积分
						jindou:0,//金豆
						jindou1:0,//金豆
						dikou:0,//抵扣状况，默认不抵扣
						dikou1:0,//抵扣状况，默认不抵扣
						butong:0,
						jsoner:false,
						showee:false
					},
					mounted:function(){
						this.yue=med.getcansu('price');
						this.yues=med.getcansu('price');
						this.id=med.getcansu('id');
						this.shangping()
						if(med.getcansu('umeid')!=undefined){
							this.did=med.getcansu('umeid')
							this.dizhi()
						}
					},
					methods:{
						//协议
						xieyi(){
							var page=this;
							myAjax('post',httpa.xiyi,{
								type:4
							},function(res){
								$("#yuern").show()
								$("#rongqi").html(res.data)
							});
						},
						//返回上一页
						fanhui(){
							if(this.did!=''){
								window.location.href='shopping.html'
							}else{
								window.history.go(-1)
							}
						},
						//获取勾选情况
						changger(e,event){
							if(e.target.checked == true) {
								// var flag = e.target.checked;
								if(event==1){//此时勾选了金豆
									this.yue=Number(this.yue)-Number(this.jindou1);
									this.dikou=1
								}else{//此时勾选了积分
									this.yue=Number(this.yue)-Number(this.jifen1);
									this.dikou1=1
								}
							} else {
								if(event==1){//上一次点击相同位置并且为取消，即上次是勾选
									this.yue=Number(this.yue)+Number(this.jindou1);
									this.dikou=0
								}else{//否则
									this.yue=Number(this.yue)+Number(this.jifen1);
									this.dikou1=0
								}
							}
						},
						//查看购物车商品
						shangping(){
							var page=this;
							console.log(page.id)
							myAjax('post',httpa.rootshop,{
								sc_token:med.getrome('token'),
								ids:page.id
							},function(res){
								if(res.code==0){
									page.list=res.data
									page.jifen=res.jinfen
									page.jindou=res.jindou
									if(page.list!=''){
										for(var i=0;i<page.list.length;i++){
											if(page.list[i].msg.ms==0){
												page.y_jiage=Number(page.y_jiage)+Number(page.list[i].gui.price)
											}else if(page.list[i].msg.ms==1){
												page.y_jiage=Number(page.y_jiage)+Number(page.list[i].gui.m_price)
											}
											if(page.list[i].msg.b==1){
												page.jsoner=true
											}
											page.jindou1=Number(page.jindou1)+Number(page.list[i].msg.jindou)+Number(page.list[i].msg.jidou_y)
											page.jifen1=Number(page.jifen1)+Number(page.list[i].msg.jifen)+Number(page.list[i].msg.jifen_y)
											page.yunfei=Number(page.yunfei)+Number(page.list[i].msg.yunfei)
										}
									}
									if(page.jindou<=page.jindou1){
										page.jindou1=page.jindou
									}else{
										
									}
								}
								console.log(res)
							})
						},
						//根据id获取地址
						dizhi(){
							var page=this;
							console.log(page.idid)
							myAjax('post',httpa.xiugai,{
								sc_token:med.getrome('token'),
								id:page.did
							},function(res){
								page.name=res.data.name
								page.phone=res.data.phone
								page.shengshi=res.data.sheng.name+''+res.data.shi.name+''+res.data.xian.name+''+res.data.xaddress
								console.log(res)
							})
						},
						//结算
						goushop(){
							var page=this;
							if(page.id==''){
								mui.toast('参数错误')
								return false;
							}else if(page.did==''){
								mui.toast('收货地址不能为空')
								return false;
							}else if(page.jsoner){
								if(!$('#checkboxid').is(':checked')){
									mui.toast('请勾选购买协议');
									return false;
								}
							}
							//} else{
								console.log(1111);
								mui.confirm('确认支付吗','支付','',function(type){
									if(type.index==1){
										page.shower()
										// mui.prompt('请输入支付密码','输入支付密码','支付',['取消','确定'],function(optio){
										// 	console.log(optio)
										// 	if(optio.index==1){
												
										// 	}
										// })
										// document.querySelector('.mui-popup-input input').type='password'
										
									}else{
										mui.toast('您取消了支付');
									}
								})
						},
						//支付
						zhifua(){
							var optivo='';
							$("input[type=number]").each(function(){
								if(optivo.length<6){
									optivo=optivo+this.value;
								}else{
									
								}
							})
							var page=this;
							if(optivo.length!=6){
								mui.toast('密码格式错误！')
							}else{
								myAjax('post',httpa.pasword,{
									sc_token:med.getrome('token'),
									password:optivo
								},function(res){
									if(res.code==0){
										myAjax('post',httpa.jiesuan,{
											sc_token:med.getrome('token'),
											gids:page.id,
											di:page.did,
											jf:page.dikou,
											jd:page.dikou1,
											password:optivo
										},function(res){
											mui.toast(res.msg)
											if(res.code==0){
												setTimeout(function(){
													page.taber('shopping.html')
												},2000)
											}
											console.log(res)
										})
									}else{
										mui.toast(res.msg)
										$(".out_none").val('');
									}
									console.log(res)
								})
							}
							console.log(optivo);
						},
						//支付弹窗打开
						shower(){
							this.showee=true
						},
						//支付弹窗关闭
						showhide(){
							this.showee=false
							$(".out_none").val('');
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//我的团队
		team(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						yue:0,//余额
						pages:1,//页数
						renshu:'',//人数
						dengji:1,
					},
					mounted:function(){
						this.yue=med.getcansu('price');
						this.tuandui()
						this.tuanlist()
					},
					methods:{
						//加载更多
						handleScroll() {
							this.pages=this.pages+1;
							this.tuanlist()
						},
						//获取团队列表
						tuanlist(){
							var page=this;
							myAjax('post',httpa.ztteam,{
								sc_token:med.getrome('token'),
								page:page.pages,
								limit:10
							},function(res){
								if(res.code==0){
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								}
								console.log(res);
							})
						},
						//获取我的团队
						tuandui(){
							var page=this;
							myAjax('post',httpa.team,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.renshu=res.data
								}
								console.log(res);
							})
						},
						//获取地址
						sueran(option){
							this.potop=option
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//我的团队
		order(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:'',
						list:[],
						id:0,//订单id
						pages:1,//页数
						renshu:'',//人数
					},
					mounted:function(){
						this.id=med.getcansu('id');
						this.dange()
					},
					methods:{
						//获取团队列表
						dange(){
							console.log(this.id)
							var page=this;
							myAjax('post',httpa.order1,{
								sc_token:med.getrome('token'),
								id:page.id
							},function(res){
								if(res.code==0){
									page.list_lisa=res.data
									page.list=res.data.sp
								}
								console.log(res);
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//福利签到
		advertising(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						banners:[],
						id:0,//订单id
						pages:1,//
						renshu:0,//默认未签到
						jindou:0,
						tianshu:0,
						text:'签到',
						list:[],
						videoElement: []
					},
					mounted:function(){
						this.qiandaoxinxi()
						this.tuxing()
						this.shiping()
						this.ggtuwen()
					},
					methods:{
						handlePlay(index) {
							var videos = document.getElementsByTagName('video');
							for (var i = videos.length - 1; i >= 0; i--) {
								(function(){
									var p = i;
									videos[p].addEventListener('play',function(){
										pauseAll(p);
									})
								})()
							}
						},
						//图文
						ggtuwen(){
							var page=this;
							myAjax('post',httpa.ggtuwen,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.list=res.data
								}
								console.log(res);
							})
						},
						//视频
						shiping(){
							var page=this;
							myAjax('post',httpa.ggvideo,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.list_lisa=res.data
								}
								console.log(res);
							})
						},
						//banner图
						tuxing(){
							var page=this;
							myAjax('post',httpa.ggbanner,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.banners=res.data
								}
								console.log(res);
							})
						},
						//签到
						qiandao(){
							var page=this;
							myAjax('post',httpa.qiandao,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.text='+'+page.jindou+'金豆'
									setTimeout(function(){
										page.qiandaoxinxi()
									},1500)
								}
								mui.toast(res.msg)
								console.log(res);
							})
						},
						//签到状态
						qiandaoxinxi(){
							var page=this;
							myAjax('post',httpa.qiandao1,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.renshu=res.data.zt
									page.jindou=res.data.jindou
									page.tianshu=res.data.tian
								}
								console.log(res);
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//记录
		jilu(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:'',
						list:[],
						id:0,//订单id
						pages:1,//
						renshu:0,//默认未签到
						jindou:0,
						tianshu:0,
						text:'提现记录'
					},
					mounted:function(){
						if(med.getcansu('type')==1){
							this.text='提现记录'
						}else{
							this.text='充值记录'
						}
						this.jindou=med.getcansu('type')
						this.qiandao()
					},
					methods:{
						//记录
						qiandao(){
							var page=this;
							myAjax('post',httpa.jilua,{
								sc_token:med.getrome('token'),
								page:page.pages,
								limit:10,
								type:page.jindou
							},function(res){
								if(res.code==0){
									page.list_lisa=res.data
								}
								console.log(res);
							})
						},
						//签到
						qiandaoxinxi(){
							var page=this;
							myAjax('post',httpa.qiandao1,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.renshu=res.data.zt
									page.jindou=res.data.jindou
									page.tianshu=res.data.tian
								}
								console.log(res);
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//兑换金券
		venosa(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:'',
						list:[],
						id:0,//订单id
						pages:1,//页数
						renshu:'',//人数
						inputs:'',
						price:0,
					},
					mounted:function(){
						// this.dange()
						if(med.getcansu('price')!=undefined){
							this.price=med.getcansu('price')
						}
					},
					methods:{
						//获取团队列表
						queren(){
							console.log(this.id)
							var page=this;
							mui.prompt('请输入支付密码','输入支付密码','支付',['取消','确定'],function(optio){
								console.log(optio)
								if(optio.index==1){
									myAjax('post',httpa.pasword,{
										sc_token:med.getrome('token'),
										password:optio.value
									},function(res){
										if(res.code==0){
											myAjax('post',httpa.jinjuan,{
												sc_token:med.getrome('token'),
												num:page.inputs,
												password:optio.value
											},function(res){
												if(res.code==0){
													setTimeout(function(){
														window.history.go(-1);
													},1500)
												}
												mui.toast(res.msg)
											})
										}else{
											mui.toast(res.msg)
										}
										console.log(res)
									})
								}
							})
							document.querySelector('.mui-popup-input input').type='password'
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//实名认证
		authentication(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:'',
						list:[],
						id:0,//订单id
						pages:1,//页数
						renshu:'',//人数
						inputs:'',
						price:0,
						zhixing:'',
						tupia:'',
						name:'',
						zhengjian:'',
						zhixing1:'',
						tupia1:'',
						canshu1:'',
						canshu2:''
					},
					mounted:function(){
						
					},
					methods:{
						//获取上传正面
						shangcu(e){
							var page=this;
							var file = e.target.files;
							var reader = new FileReader();
							reader.readAsDataURL(file[0]);
							reader.onload = function () 
							{
								page.zhixing=file[0];
								page.tupia=reader.result
								page.huoqu(page.zhixing,1)
							};
						},
						//获取上传反面
						shangcu1(e){
							var page=this;
							var file = e.target.files;
							var reader = new FileReader();
							reader.readAsDataURL(file[0]);
							reader.onload = function () 
							{
								page.zhixing1=file[0];
								page.tupia1=reader.result
								page.huoqu(page.zhixing1,2)
							};
						},
						huoqu(file,objeac){
							let self = this;
							  //判断支不支持FileReader
							  if (!file || !window.FileReader) return;
							  if (/^image/.test(file.type)) {
								//创建一个reader
								let reader = new FileReader();
								//将图片转成base64格式
								reader.readAsDataURL(file);
								//读取成功后的回调
								reader.onloadend = function() {
								  let result = this.result;
								  let img = new Image();
								  img.src = result;
								  console.log("********未压缩前的图片大小********");
									console.log(result.length);
										img.onload = function() {
										  let data = self.compress(img);
										   let blob = self.dataURItoBlob(data);
											  if(objeac==1){//正面
											      let files = new window.File([blob], file.name, {type: file.type})
												  console.log(files);
												  self.canshu1 = files;
											  }else{//反面
											      let files = new window.File([blob], file.name, {type: file.type})
												  console.log(files);
												  self.canshu2 = files;
											  }
											  console.log("*******base64转blob对象******");
										  }
									  }
								  }
						},
						// 压缩图片
						compress(img) {
						  let canvas = document.createElement("canvas");
						  let ctx = canvas.getContext("2d");
						  let initSize = img.src.length;
						  let width = img.width;
						  let height = img.height;
						  canvas.width = width;
						  canvas.height = height;
						  // 铺底色
						  ctx.fillStyle = "#fff";
						  ctx.fillRect(0, 0, canvas.width, canvas.height);
						  ctx.drawImage(img, 0, 0, width, height);
											
						  //进行最小压缩
						  let ndata = canvas.toDataURL("image/jpeg", 0.3);
						  console.log("*******压缩后的图片大小*******");
						  console.log(ndata)
						  console.log(ndata.length);
						  return ndata;
						},
						// base64转成bolb对象
						dataURItoBlob(base64Data) {
						      var byteString;
						      if (base64Data.split(",")[0].indexOf("base64") >= 0)
						        byteString = atob(base64Data.split(",")[1]);
						      else byteString = unescape(base64Data.split(",")[1]);
						      var mimeString = base64Data
						        .split(",")[0]
						        .split(":")[1]
						        .split(";")[0];
						      var ia = new Uint8Array(byteString.length);
						      for (var i = 0; i < byteString.length; i++) {
						        ia[i] = byteString.charCodeAt(i);
						      }
						      return new Blob([ia], { type: mimeString });
						    },
						//实名认证
						renzheng(){
							var page=this;
							if(page.name==''){
								mui.toast('真实姓名不能为空')
							}else if(page.tupia==''){
								mui.toast('凭证不能为空')
							}else if(page.zhengjian==''){
								mui.toast('身份证不能为空')
							}else{
								var form = new FormData();
								console.log(page.canshu1)
								form.append('sc_token',med.getrome('token'));
								form.append('img1',page.canshu1);
								form.append('img2',page.canshu2);
								form.append('name',page.name);
								form.append('idcard',page.zhengjian);
								myAjax('post',httpa.shiming,{
								},function(res){
									mui.toast(res.msg)
									console.log(res)
									if(res.code==0){
										setTimeout(function(){
											window.history.go(-1)
										},1500)
									}
								},'json',1,form)
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//修改设置登录密码
		password(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:'',
						list:[],
						id:0,//订单id
						pages:1,//页数
						renshu:'',//人数
						inputs:'',
						price:0,
						zhixing:'',
						tupia:'',
						phone:'',//手机号
						codet:'',//验证码
						code:240,//时间
						coder:1,//默认不显示
						pasw:'',//第一次密码
						pasw1:'',//第二次密码
						zhuangyu:true
					},
					mounted:function(){
						// this.hooer()
					},
					methods:{
						//获取第一次登录状态
						hooer(){						
							var page=this;
							myAjax('post',httpa.iooert,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
									if(res.data.l==0){
										page.zhuangyu=false
									}
								}
							});
						},
						//获取验证码
						codes(){
							var page=this;
							myAjax('post',httpa.micode,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
								   page.coder=2;
								   var setac=setInterval(function(){
									if(page.code==0){
										page.code=240;
										page.coder=1;
										clearInterval(setac)
									}else{
										page.code=page.code-1;
									}
								   },1000)
								}
								med.toast(res.msg)
							});
						},
						//确认修改
						loginpsw(){
							var page=this;
							if(page.pasw==''){
								mui.toast('密码不能为空')
							}else if(page.codet==''){
								mui.toast('验证码不能为空')
							}else{
								mui.confirm('确认修改吗','确认','',function(type){
									console.log(type)
									if(type.index==1){
										myAjax('post',httpa.mixiugai,{
											sc_token:med.getrome('token'),
											code:page.codet,
											password:page.pasw
										},function(res){
											mui.toast(res.msg)
											console.log(res)
											if(res.code==0){
												setTimeout(function(){
													window.history.go(-1)
												},1500)
											}
										})
									}else{
									}
								})
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//余额转赠
		makea(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:'',
						list:[],
						id:0,//订单id
						pages:1,//
						renshu:0,//默认未签到
						jindou:0,
						price:'',
						phone:''
					},
					mounted:function(){
						
					},
					methods:{
						herft(){
							mui.toast("获取剪贴内容")
							var page=this;
							setTimeout(function(){
								navigator.clipboard
								  .readText()
								  .then((v) => {
								    mui.toast("获取剪贴板成功");
										page.phone=v;
								  })
								  .catch((v) => {
								    mui.toast("获取剪贴板失败");
								  });
							},1000)
						},
						//记录
						queren(){
							var page=this;
							if(page.phone==''){
								mui.toast("转赠人手机号不能为空")
							}else if(page.price==''){
								mui.toast("转赠金额不能为空")
							}else{
								mui.prompt('请输入支付密码','输入支付密码','支付',['取消','确定'],function(optio){
									if(optio.index==1){
										myAjax('post',httpa.pasword,{
											sc_token:med.getrome('token'),
											password:optio.value
										},function(res){
											if(res.code==0){
												myAjax('post',httpa.zhuanzwng,{
													sc_token:med.getrome('token'),
													num:page.price,
													phone:page.phone,
													password:optio.value
												},function(res){
													if(res.code==0){
														window.history.go(-1);
													}
													mui.toast(res.msg)
												})
											}else{
												mui.toast(res.msg)
											}
											console.log(res)
										})
									}
								})
								document.querySelector('.mui-popup-input input').type='password'
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//客服
		service(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:'',
						list:[],
						id:0,//订单id
						pages:1,//
						renshu:0,//默认未签到
						jindou:0,
						text:'',
						img:''
					},
					mounted:function(){
						this.queren()
					},
					methods:{
						//记录
						queren(){
							var page=this;
							myAjax('post',httpa.kefu,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.img=res.data.img
									page.text=res.data.msg
								}
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//明细
		detail(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						list:[],
						id:0,//订单id
						pages:1,//页数
						renshu:'',//人数
						bei:0,
						sumjl:0,
						num:0,
						texts:'',
					},
					mounted:function(){
						this.num=med.getcansu('num');
						if(this.num==3){
							this.texts='积分记录'
						}else{
							this.texts='金豆记录'
						}
						this.dange()
						this.username()
					},
					methods:{
						//加载更多
						handleScroll() {
							this.pages=this.pages+1;
							this.dange()
						},
						//用户信息
						username(){
							var page=this;
							myAjax('post',httpa.user,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.bei=res.data.bei
									page.sumjl=res.data.sumjl
								}
								console.log(res)
							});
						},
						//获取记录
						dange(){
							console.log(this.id)
							var page=this;
							myAjax('post',httpa.moloner,{
								sc_token:med.getrome('token'),
								page:page.pages,
								limit:10,
								type:page.num
							},function(res){
								if(res.code==0){
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
									if(res.data.length==0){
										mui.toast("已经没有啦~");
										$("#userd").hide()
									}
								}
								console.log(res);
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//明细
		news(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:[],
						list:'',
						id:0,//订单id
						pages:1,//页数
						renshu:'',//人数
						bei:0,
						sumjl:0,
						ids:0,
						texts:'',
					},
					mounted:function(){
						this.ids=med.getcansu('id');
						this.ggtuwen()
					},
					methods:{
						//图文
						ggtuwen(){
							var page=this;
							myAjax('post',httpa.ggtuwena,{
								sc_token:med.getrome('token'),
								id:page.ids
							},function(res){
								if(res.code==0){
									page.list=res.data
									mui.toast(res.msg)
								}
								console.log(res);
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//注册
		registered(){
				var Vm=new Vue({
					el:'#app',
					data:{
						heran:1,
						code:240,
						coder:1,
						phone:'',
						codet:'',
						codes:'',//验证码
						phone1:'',
						password:'',
						qiea:1,//默认密码登录
						koot:'',
						password1:'',
						password2:'',
						password3:'',
						zijinpaw:'',//资金密码
						key:'',//推荐人key
					},
					mounted:function(){
						this.phone=med.getcansu('phone')
						this.key=med.getcansu('key')
						this.codes=med.getcansu('code')
					},
					methods:{
						//注册
						login(){
							var page=this;
							var keys;
							if(page.phone==''){
								mui.toast('参数错误')
							}else if(page.key==''){
								mui.toast('参数错误')
							}else if(page.password!=page.password1){
								mui.toast('两次登录密码不一致')
							}else if(page.password==''||page.password1==''){
								mui.toast('登录密码不能为空')
							}else if(page.zijinpaw==''){
								mui.toast('资金密码不能为空')
							}else{
								// if(med.getcansu('key')==undefined){
								// 	keys=0;
								// }else{
								// 	keys=med.getcansu('key');
								// }
								console.log(page.key)
								myAjax('post',httpa.orepool,{
									phone:page.phone,
									password:page.password,
									passwordz:page.zijinpaw,
									code:page.codes,
									key:page.key
								},function(res){
									console.log(res)
									if(res.code==0){
									   setTimeout(function(){
										   med.setrome('token',res.data.token);
										   page.taber('index.html')
									   },1500)
									}else if(res.code==250){
										setTimeout(function(){
										   page.taber('registered1.html?key='+page.key)
										},1500)
									}
									mui.toast(res.msg)
								});
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//视频内页
		video(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						heran:1,
						code:240,
						coder:1,
						phone:'',
						ids:'',
						urls:'',
						password:'',
						qiea:1,//默认密码登录
						koot:'',
						password1:'',
						password2:'',
						password3:'',
					},
					mounted:function(){ 
						this.ids=med.getcansu('id')
						// this.vides()
					},
					methods:{
						//获取单个视频地址
						vides(){
							var page=this;
							myAjax('post',httpa.dgcideo,{
								sc_token:med.getrome('token'),
								id:page.ids
							},function(res){
								console.log(res)
								if(res.code==0){
								  page.urls=URL+'/'+res.data.url
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//排行榜
		ranking(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						heran:1,
						list:[],
						coder:1,
						phone:'',
						ids:'',
						urls:'',
						password:{
							img:''
						},
						qiea:1,//默认密码登录
					},
					mounted:function(){ 
						this.vides()
					},
					methods:{
						//排行榜
						vides(){
							var page=this;
							myAjax('post',httpa.paihangbang,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
								  page.list=res.data
								  page.password=res.my
								  console.log(page.password)
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						}
					}
			})
		}
		//轮播内页
		videolun(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						heran:1,
						code:240,
						coder:1,
						phone:'',
						ids:'',
						urls:'',
						password:'',
						qiea:1,//默认密码登录
						koot:'',
						password1:'',
						password2:'',
						password3:'',
					},
					mounted:function(){ 
						this.ids=med.getcansu('id')
						this.vides()
					},
					methods:{
						//获取单个视频地址
						vides(){
							var page=this;
							myAjax('post',httpa.dgcideo1,{
								sc_token:med.getrome('token'),
								id:page.ids
							},function(res){
								console.log(res)
								if(res.code==0){
								  page.urls=URL+'/'+res.data.img
								  page.password2=res.data.msg
								  mui.toast(res.msg)
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//文票
		securities1(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						heran:1,
						code:240,
						coder:1,
						phone:'',
						ids:0,
						urls:'',
						password:'',
						qiea:1,//默认密码登录
						koot:'',
						password1:'',
						password2:'',
						showee:false,
						kort:{},
						timer:0,
						hours:0,
						minutes:0,
						timero:0,
						seconds:0,
						zhuangt:0,
						datero:0,
					},
					mounted:function(){ 
						this.ids=med.getcansu('num')
						// this.vides()
						this.shangoer()
						this.rootur()
						var page=this;
						setInterval(function(){
							page.timero=page.kort.time;
							page.timer=Number(page.kort.time)-Number(Date.parse(new Date())/1000);
							page.date_format(page.timer*1000)
						},1000)
					},
					methods:{
						//获取状态
						rootur(){
							var page=this;
							myAjax('post',httpa.alt_zt,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.zhuangt=res.data.js_zt
								}
							})
						},
						//获取信息
						shangoer(){
							var page=this;
							myAjax('post',httpa.zypaio,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.kort=res.data
								}
							});
						},
						date_format(micro_second) {
							var day = Math.floor(micro_second/1000/60/60/24);
							var h = Math.floor(micro_second/1000/60/60%24);
							var m = Math.floor(micro_second/1000/60%60);
							var s = Math.floor(micro_second/1000%60);
							this.datero=Number(day);
							this.hours=Number(h);
							this.minutes=Number(m);
							this.seconds=Number(s);
						},
						//获取信息
						jiasu(){
							var page=this;
							mui.confirm('确认加速吗','加速','',function(type){
								if(type.index==1){
									myAjax('post',httpa.jywpjs,{
										sc_token:med.getrome('token')
									},function(res){
										console.log(res)
										mui.toast(res.msg)
									});
								}else{
									mui.toast('您取消了加速');
								}
							})
						},
						//解仓
						times(){
							var page=this;
							myAjax('post',httpa.jywpsj,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								mui.toast(res.msg);
							});
						},
						//存票
						cunpiao(){
							var page=this;
							mui.prompt('请输入存票数量','输入存票数量','存票',['取消','确定'],function(optio){
								console.log(optio)
								if(optio.index==1){
									mui.prompt('请输入资金密码','输入资金密码','密码',['取消','确定'],function(optioa){
										console.log(optioa)
										if(optioa.index==1){
											myAjax('post',httpa.pasword,{
												sc_token:med.getrome('token'),
												password:optioa.value
											},function(res){
												 if(res.code==0){
													 myAjax('post',httpa.zhihuan,{
													 	sc_token:med.getrome('token'),
													 	num:optio.value,
													 	password:optioa.value
													 },function(ress){
													 	mui.toast(ress.msg)
													 	if(ress.code==0){
															setTimeout(function(){
													 			location.reload();
													 		},2000)
													 	}
													 	console.log(ress)
													 })
												}
												mui.toast(res.msg)
											})
										}
									})
									document.querySelector('.mui-popup-input input').type='password'
								}
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						},
					}
			})
		}
		//文票
		securities(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						heran:1,
						code:240,
						coder:1,
						phone:'',
						ids:0,
						urls:'',
						password:'',
						qiea:1,//默认密码登录
						koot:'',
						password1:'',
						password2:'',
						password3:'',
					},
					mounted:function(){ 
						this.vides()
					},
					methods:{
						//获取单个视频地址
						vides(){
							var page=this;
							myAjax('post',httpa.jpjdata,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.password1=res.data
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//提票到交易所
		ftticket(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						heran:1,
						phone:'',
						price:'',
						ids:0,
						urls:'',
						password:'',
						koot:'',
						codet:'',
					},
					mounted:function(){ 
						this.ids=med.getcansu('num')
						this.vides()
					},
					methods:{
						//获取提票信息
						vides(){
							var page=this;
							myAjax('post',httpa.fters1,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.password=res.data
								}
							});
						},
						//提票
						tixiana(){
							var page=this;
							if(page.price==''){
								mui.toast("数量不能为空")
							}else{
								mui.confirm('确认提票吗','提票','',function(type){
									if(type.index==1){
										mui.prompt('请输入支付密码','输入支付密码','支付',['取消','确定'],function(optio){
											console.log(optio)
											if(optio.index==1){
												myAjax('post',httpa.pasword,{
													sc_token:med.getrome('token'),
													password:optio.value
												},function(res){
													if(res.code==0){
														myAjax('post',httpa.tixian,{
															sc_token:med.getrome('token'),
															num:page.price,
															password:optio.value
														},function(ress){
															mui.toast(ress.msg)
															if(ress.code==0){
																setTimeout(function(){
																	window.history.go(-1)
																},1500)
															}
															console.log(ress)
														})
													}else{
														mui.toast(res.msg)
													}
													console.log(res)
												})
											}
										})
										document.querySelector('.mui-popup-input input').type='password'
									}else{
										mui.toast('您取消了提票');
									}
								})
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//专区
		jade(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						heran:1,
						code:240,
						coder:1,
						phone:'',
						ids:0,
						urls:'',
						password:'',
						qiea:1,//默认密码登录
						koot:'',
						password1:'',
						password2:'',
						password3:'',
					},
					mounted:function(){ 
						this.ids=med.getcansu('type')
						if(this.ids==1){
							this.koot='img/icon1/beijing.png'
						}else if(this.ids==2){
							this.koot='img/icon1/beijing3.png'
						}else if(this.ids==3){
							this.koot='img/icon1/beijing4.png'
						}
						// this.vides()
					},
					methods:{
						//获取单个视频地址
						vides(){
							var page=this;
							myAjax('post',httpa.dgcideo1,{
								sc_token:med.getrome('token'),
								id:page.ids
							},function(res){
								console.log(res)
								if(res.code==0){
								  page.urls=URL+'/'+res.data.img
								  page.password2=res.data.msg
								  mui.toast(res.msg)
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//商品详情
		particularss(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						shopid:0,
						URL:URL+'/',
						banner:[],//banner信息
						msg:{},//页面信息
						text:'',//富文本信息
						xuanze:'未选择商品',//选择商品
						guige:[],//选择规格
						erin:0,//选择规格
						biaoshi:0,//区分立即购买或购物车
						ids:0,//当前所选商品id
						num:1,//当前商品所选数量
						nameer:'',//所选商品名字
						yaner:'',//选中参数
						xieyia:'',//协议
						hidse:true,
						xinnum:0,
						wwww:true,
						videos:'',
						zhihuan:false,
						tuse:false,
						fatur:false,
						juan:0,
						minv:0,
						maxv:1000,
						oipyu:{},
						list:[],
						pricre:0,
						deretyt:false,
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
					},
					mounted:function(){
						if(med.getcansu('id')!=undefined){
							this.shopid=med.getcansu('id');
							this.shouop()
						}else{
							mui.toast('参数错误！')
						}
						if(med.getcansu('type')!=undefined){
							if(med.getcansu('type')==1){
								this.wwww=false
							}
						}
						if(med.getcansu('qaq')!=undefined){
							this.deretyt=true
							this.listyu()
						}
					},
					methods:{
						//点击爱心
						aixin(){
							var page=this;
							console.log(1)
							myAjax('post',httpa.ilove,{
								sc_token:med.getrome('token'),
								id:page.shopid
							},function(res){
								if(res.code==0){
									page.hidse=true
									page.hidse=false
									page.xinnum=res.data
									mui.toast('感谢您的喜欢~')
								}
							})
						},
						//获取商品详情
						shouop(){
							var page=this;
							myAjax('post',httpa.goodstext,{
								sc_token:med.getrome('token'),
								id:page.shopid
							},function(res){
								console.log(res)
								page.banner=res.data.banner
								page.videos=res.data.mp4
								page.msg=res.data.msg
								page.text=res.data.text
								page.guige=res.data.gui
								page.xinnum=res.data.msg.sales
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//置换
						naniuzh(){
							var page=this;
							if(!$('#checkboxid').is(':checked')) {
								mui.toast('请勾选协议')
								return false;
							}
							myAjax('post',httpa.zhihuanert,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.zhihuan=false
									page.fatur=false
									page.pricre=0;
									page.listyu();
								}
								mui.toast(res.msg)
							});
						},
						//获取置换积分
						zhihuany(){
							var page=this;
							myAjax('post',httpa.msgjs,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
									page.oipyu=res.data
									page.zhihuan=!page.zhihuan
								}else{
									mui.toast(res.msg)
								}
							});
						},
						//获取协议信息
						xieyi(option){
							myAjax('post',httpa.xiyi,{
								type:option
							},function(res){
								$("#yuern").show()
								$("#rongqi").html(res.data)
							});
						},
						//修改价格
						xiugai(mins,maxs,event){
							var page=this;
							page.fatur=false;
							mui.prompt('价格区间:'+mins+'-'+maxs,'输入价格','修改价格',['取消','确定'],function(optio){
								console.log(optio)
								if(optio.index==1){
									myAjax('post',httpa.updategoodsxp,{
										sc_token:med.getrome('token'),
										id:event,
										price:optio.value
									},function(res){
										if(res.code==0){
											page.pricre=0;
											page.listyu();
											page.fatur=true;
										}
										mui.toast(res.msg)
									});
								}else{
									mui.toast("您取消了修改")
									page.fatur=true;
								}
							})
							// document.querySelector('.mui-popup-input input').type='password'
						},
						//用户信息
						username(){
							var page=this;
							myAjax('post',httpa.user,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.juan=res.data.jifen
								}
								console.log(res)
							});
						},
						//清空全部商品
						qingkomg(){
							console.log(event)
							var page=this;
							if(page.list.length==0){
								mui.toast("暂时没有哦~")
								return false;
							}
							myAjax('post',httpa.qdelgoodsxp,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.fatur=false
									page.pricre=0;
									page.listyu();
								}
								mui.toast(res.msg)
							});
						},
						//删除购物车商品
						shanccu(event){
							console.log(event)
							var page=this;
							myAjax('post',httpa.delgoodsxp,{
								sc_token:med.getrome('token'),
								id:event,
							},function(res){
								console.log(res)
								if(res.code==0){
									page.pricre=0;
									page.listyu();
								}
								mui.toast(res.msg)
							});
						},
						//商品详情页
						oeery(option){
							this.taber('particularss.html?id='+option)
						},
						//选品区添加商品
						tianjia(event){
							var page=this;
							myAjax('post',httpa.addgoodsxp,{
								sc_token:med.getrome('token'),
								id:event,
							},function(res){
								console.log(res)
								if(res.code==0){
									page.pricre=0;
									page.listyu();
								}
								mui.toast(res.msg)
							});
						},
						//获取购物车列表信息
						listyu(){
							var page=this;
							myAjax('post',httpa.goodsxplist,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list=res.data
									for(var e=0;e<page.list.length;e++){
										page.pricre=Number(res.data[e].price)+Number(page.pricre);
									}
								}else{
									page.list=[]
								}
							});
						},
						//搜索
						sousuo(){
							this.paging.PageIndex=1;
							this.list_lisa=[];
							this.shangoer()
						},
						//申请置换
						shenuer(){
							this.zhihuany()
						},
						//购物车详情
						xiangq(){
							this.fatur=!this.fatur
						},
						//展开价格列表
						zankai(){
							this.tuse=true
						},
						//选择价格
						zankai1(option,event){
							this.texts=option+'-'+event
							this.minv=option;
							this.maxv=event;
							if(option=='10000'){
								this.texts=option+'-以上'
							}
							this.tuse=false
						},
					}
			})
		}
		//选品区
		selection(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						list:[],
						banners:'',
						banners1:'',
						texts:'0-1000',
						ids:0,
						urls:'',
						password:'',
						qiea:1,//默认密码登录
						koot:'',
						password1:'',
						password2:'',
						pricre:0.00,
						tuse:false,
						fatur:false,
						zhihuan:false,
						juan:0,
						minv:0,
						maxv:1000,
						oipyu:{},
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
					},
					mounted:function(){ 
						this.shangoer()
						this.banner()
						this.listyu()
						this.username()
					},
					methods:{
						//置换
						naniuzh(){
							var page=this;
							if(!$('#checkboxid').is(':checked')) {
								mui.toast('请勾选协议')
								return false;
							}
							myAjax('post',httpa.zhihuanert,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.zhihuan=false
									page.fatur=false
									page.pricre=0;
									page.listyu();
								}
								mui.toast(res.msg)
							});
						},
						//获取置换积分
						zhihuany(){
							var page=this;
							myAjax('post',httpa.msgjs,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
									page.oipyu=res.data
									page.zhihuan=!page.zhihuan
								}else{
									mui.toast(res.msg)
								}
							});
						},
						//获取协议信息
						xieyi(option){
							myAjax('post',httpa.xiyi,{
								type:option
							},function(res){
								$("#yuern").show()
								$("#rongqi").html(res.data)
							});
						},
						//修改价格
						xiugai(mins,maxs,event){
							var page=this;
							page.fatur=false;
							mui.prompt('价格区间:'+mins+'-'+maxs,'输入价格','修改价格',['取消','确定'],function(optio){
								console.log(optio)
								if(optio.index==1){
									myAjax('post',httpa.updategoodsxp,{
										sc_token:med.getrome('token'),
										id:event,
										price:optio.value
									},function(res){
										if(res.code==0){
											page.pricre=0;
											page.listyu();
											page.fatur=true;
										}
										mui.toast(res.msg)
									});
								}else{
									mui.toast("您取消了修改")
									page.fatur=true;
								}
							})
							// document.querySelector('.mui-popup-input input').type='password'
						},
						//用户信息
						username(){
							var page=this;
							myAjax('post',httpa.user,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									page.juan=res.data.jifen
								}
								console.log(res)
							});
						},
						//清空全部商品
						qingkomg(){
							console.log(event)
							var page=this;
							if(page.list.length==0){
								mui.toast("暂时没有哦~")
								return false;
							}
							myAjax('post',httpa.qdelgoodsxp,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.fatur=false
									page.pricre=0;
									page.listyu();
								}
								mui.toast(res.msg)
							});
						},
						//删除购物车商品
						shanccu(event){
							console.log(event)
							var page=this;
							myAjax('post',httpa.delgoodsxp,{
								sc_token:med.getrome('token'),
								id:event,
							},function(res){
								console.log(res)
								if(res.code==0){
									page.pricre=0;
									page.listyu();
								}
								mui.toast(res.msg)
							});
						},
						//商品详情页
						oeery(option){
							this.taber('particularss.html?id='+option+'&qaq='+1)
						},
						//选品区添加商品
						tianjia(event){
							var page=this;
							myAjax('post',httpa.addgoodsxp,{
								sc_token:med.getrome('token'),
								id:event,
							},function(res){
								console.log(res)
								if(res.code==0){
									page.pricre=0;
									page.listyu();
								}
								mui.toast(res.msg)
							});
						},
						//获取购物车列表信息
						listyu(){
							var page=this;
							myAjax('post',httpa.goodsxplist,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list=res.data
									for(var e=0;e<page.list.length;e++){
										page.pricre=Number(res.data[e].price)+Number(page.pricre);
									}
								}else{
									page.list=[]
								}
							});
						},
						//搜索
						sousuo(){
							this.paging.PageIndex=1;
							this.list_lisa=[];
							this.shangoer()
						},
						//申请置换
						shenuer(){
							this.zhihuany()
						},
						//购物车详情
						xiangq(){
							this.fatur=!this.fatur
						},
						//展开价格列表
						zankai(){
							this.tuse=true
						},
						//选择价格
						zankai1(option,event){
							this.texts=option+'-'+event
							this.minv=option;
							this.maxv=event;
							if(option=='10000'){
								this.texts=option+'-以上'
							}
							this.tuse=false
						},
						//获取banner图
						banner(){
							var page=this;
							myAjax('post',httpa.equity,{
							},function(res){
								page.banners=res.data.banner1
								page.banners1=res.data.banner2
							});
						},
						//获取商品列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.goodslist,{
								sc_token:med.getrome('token'),
								page:page.paging.PageIndex,
								limit:10,
								min:page.minv,
								max:page.maxv
							},function(res){
								console.log(res)
								if(res.count!=0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								}else{
									mui.toast('已经没有啦！')
									$("#userd").hide()
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
					}
			})
		}
		//保险仓
		insurance(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						banners:'',
						banners1:'',
						texts:'1000-3000',
						ids:0,
						price:'',
						password:'',
						qiea:1,//默认密码登录
						koot:'',
						password1:'',
						password2:'',
						password3:'',
						tuse:false,
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
						idsss:0,
						jine:0,
					},
					mounted:function(){ 
						this.price=med.getcansu('price')
						this.shangoer()
					},
					methods:{
						//确认
						queren(){
							var page=this;
							myAjax('post',httpa.bxccjlq,{
								sc_token:med.getrome('token'),
								id:page.idsss
							},function(res){
								console.log(res)
								$("#hongbao").hide()
								if(res.code==0){
									setTimeout(function(){
										window.location.reload()
									},1500)
								}
								mui.toast(res.msg)
							});
						},
						//打开转盘
						shenqing(event,pric){
							this.tuse=true
							this.jine=pric
							this.idsss=event
							$(".uuuuuus").text(pric)
						},
						//获取商品列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.orderlistbx,{
								sc_token:med.getrome('token'),
								page:page.paging.PageIndex,
								limit:10
							},function(res){
								console.log(res)
								if(res.code==0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//慈善
		charity(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						banners:'',
						banners1:'',
						texts:'1000-3000',
						ids:0,
						price:'',
						password:'',
						qiea:1,//默认密码登录
						koot:'',
						password1:'',
						password2:'',
						password3:'',
						tuse:false,
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
					},
					mounted:function(){ 
						// this.price=med.getcansu('price')
					},
					methods:{
						//打开转盘
						shenqing(){
							this.tuse=true
						},
						//获取商品列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.shoper,{
								page:page.paging.PageIndex,
								limit:10
							},function(res){
								console.log(res)
								if(res.count!=0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								}else{
									mui.toast('已经没有啦！')
									$("#userd").hide()
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						}
					}
			})
		}
		//慈善详情
		charitys(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
					},
					mounted:function(){ 
						
					},
					methods:{
						//获取商品列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.shoper,{
								page:page.paging.PageIndex,
								limit:10
							},function(res){
								console.log(res)
								if(res.count!=0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								}else{
									mui.toast('已经没有啦！')
									$("#userd").hide()
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						}
					}
			})
		}
		//存票仓
		saveticket(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						kort:{},
						timer:0,
						hours:0,
						minutes:0,
						timero:0,
						seconds:0,
						zhuangt:0,
					},
					mounted:function(){ 
						this.shangoer()
						this.rootur()
						var page=this;
						setInterval(function(){
							page.timero=page.kort.time;
							page.timer=Number(page.kort.time)-Number(Date.parse(new Date())/1000);
							page.date_format(page.timer*1000)
						},1000)
					},
					methods:{
						//获取状态
						rootur(){
							var page=this;
							myAjax('post',httpa.alt_zt,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.zhuangt=res.data.js_zt
								}
							})
						},
						//获取信息
						shangoer(){
							var page=this;
							myAjax('post',httpa.zypaio,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.kort=res.data
								}
							});
						},
						date_format(micro_second) {
							var day = Math.floor(micro_second/1000/60/60/24);
							var h = Math.floor(micro_second/1000/60/60%24);
							var m = Math.floor(micro_second/1000/60%60);
							var s = Math.floor(micro_second/1000%60);
							this.hours=Number(day)*24+Number(h);
							this.minutes=Number(m);
							this.seconds=Number(s);
						},
						//获取信息
						jiasu(){
							var page=this;
							mui.confirm('确认加速吗','加速','',function(type){
								if(type.index==1){
									myAjax('post',httpa.jywpjs,{
										sc_token:med.getrome('token')
									},function(res){
										console.log(res)
										mui.toast(res.msg)
									});
								}else{
									mui.toast('您取消了加速');
								}
							})
						},
						//解仓
						times(){
							var page=this;
							myAjax('post',httpa.jywpsj,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								mui.toast(res.msg);
							});
						},
						//存票
						cunpiao(){
							var page=this;
							mui.prompt('请输入存票数量','输入存票数量','存票',['取消','确定'],function(optio){
								console.log(optio)
								if(optio.index==1){
									mui.prompt('请输入资金密码','输入资金密码','密码',['取消','确定'],function(optioa){
										console.log(optioa)
										if(optioa.index==1){
											myAjax('post',httpa.pasword,{
												sc_token:med.getrome('token'),
												password:optioa.value
											},function(res){
												 if(res.code==0){
													 myAjax('post',httpa.zhihuan,{
													 	sc_token:med.getrome('token'),
													 	num:optio.value,
													 	password:optioa.value
													 },function(ress){
													 	mui.toast(ress.msg)
													 	if(ress.code==0){
													 		setTimeout(function(){
													 			location.reload();
													 		},2000)
													 	}
													 	console.log(ress)
													 })
												}
												mui.toast(res.msg)
											})
										}
									})
									document.querySelector('.mui-popup-input input').type='password'
								}
							})
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						}
					}
			})
		}
		//申请服务商
		providers(){
			var Vm=new Vue({
				el:'#app',
				data:{
					list_lisa:[],
					dates:{}
				},
				mounted:function(){ 
					this.inte()
				},
				methods:{
					//申请服务商
					poerui(){
						var page=this;
						myAjax('post',httpa.fwssq,{
							sc_token:med.getrome('token')
						},function(res){
							console.log(res)
							setTimeout(function(){
								window.history.go(-1)
							},1500)
							mui.toast(res.msg);
						})
					},
					//获取申请服务商信息
					inte(){
						var page=this;
						myAjax('post',httpa.sqmsg,{
							sc_token:med.getrome('token')
						},function(res){
							console.log(res)
							if(res.code==0){
								page.dates=res.data
							}
						})
					},
					//跳转
					taber(option){
						window.location.href=option
					}
				}
			})
		}
		//绑定交易所
		trading(){
				var Vm=new Vue({
					el:'#app',
					data:{
						phone:'',//手机号
						codet:'',//验证码
						pasw:'',//支付密码
						coder:1,//默认未点击
						code:240,//时间
						zt:0,//默认未绑定
					},
					mounted:function(){
						this.username()
					},
					methods:{
						//获取绑定交易所状态
						username(){
							var page=this;
							myAjax('post',httpa.send_zt,{
								sc_token:med.getrome('token')
							},function(res){
								if(res.code==0){
									if(res.data==0){
										
									}else{
										page.zt=1
										page.phone=res.data
									}
								}
								console.log(res)
							});
						},
						//获取验证码
						coderoot(){
							var page=this;
							myAjax('post',httpa.send_code,{
								sc_token:med.getrome('token'),
								phone:page.phone
							},function(res){
								console.log(res)
								if(res.code==0){
								   page.coder=2;
								   var setac=setInterval(function(){
									if(page.code==0){
										page.code=240;
										page.coder=1;
										clearInterval(setac)
									}else{
										page.code=page.code-1;
									}
								   },1000)
								}
								mui.toast(res.msg)
							});
						},
						loginpsw(){
							var page=this;
							if(page.phone==''){
								mui.toast("交易所手机账户不能为空!")
							}else if(page.codet==''){
								mui.toast("验证码不能为空")
							}else{
								myAjax('post',httpa.send_jys,{
									sc_token:med.getrome('token'),
									phone:page.phone,
									code:page.codet
								},function(res){
									if(res.code==0){
										setTimeout(function(){
											window.location.reload()
										},1500)
									}
									mui.toast(res.msg)
									console.log(res)
								});
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//提货详情
		upthegoods(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						potop:1,
						list_lisa:["1","2","3","4"],
						list:[],//商品列表
						yue:0,//余额
						yues:0,//固定余额
						id:0,//商品id集合
						did:'',//地址id
						name:'',//名字
						shengshi:'',//地址集合
						phone:'',//手机号
						y_jiage:0,//总原价
						yunfei:'',//运费
						jifen:0,//积分
						jifen1:0,//积分
						jindou:0,//金豆
						jindou1:0,//金豆
						dikou:0,//抵扣状况，默认不抵扣
						dikou1:0,//抵扣状况，默认不抵扣
						butong:0,
						jsoner:false,
						showee:false,
						pricre:0,
					},
					mounted:function(){
						// this.yue=med.getcansu('price');
						// this.yues=med.getcansu('price');
						// this.id=med.getcansu('id');
						// this.shangping()
						if(med.getcansu('umeid')!=undefined){
							this.did=med.getcansu('umeid')
							this.dizhi()
						}
						this.listyu()
					},
					methods:{
						//提货
						shentus(){
							var page=this;
							if(page.did==''){
								mui.toast("请先选择收货地址");
								return false;
							}
							myAjax('post',httpa.shenth,{
								sc_token:med.getrome('token'),
								id:page.did
							},function(res){
								console.log(res)
								if(res.code==0){
									
								}
								mui.toast(res.msg)
							});
						},
						//修改数量
						numacc(types,eids,numer){
							var page=this;
							if(numer==1&&eids==1){
								mui.toast("数量不能小于1")
							}else{
								var numio=0;
								if(eids==1){//做减法
									numio=Number(numer)-1;
								}else{//做加法
									numio=Number(numer)+1;
								}
								myAjax('post',httpa.updategoodsth,{
									sc_token:med.getrome('token'),
									id:types,
									num:numio
								},function(res){
									console.log(numio)
									console.log(res)
									if(res.code==0){
										page.pricre=0;
										page.listyu()
									}
									mui.toast(res.msg)
								});
							}
						},
						//获取购物车列表信息
						listyu(){
							var page=this;
							myAjax('post',httpa.goodsxplist,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.list=res.data
									for(var e=0;e<page.list.length;e++){
										page.pricre=Number(res.data[e].price)*Number(res.data[e].num)+Number(page.pricre);
									}
								}else{
									page.list=[]
								}
							});
						},
						//返回上一页
						fanhui(){
							if(this.did!=''){
								window.location.href='shopping.html'
							}else{
								window.history.go(-1)
							}
						},
						//获取勾选情况
						changger(e,event){
							if(e.target.checked == true) {
								if(event==1){//此时勾选了金豆
									this.yue=Number(this.yue)-Number(this.jindou1);
									this.dikou=1
								}else{//此时勾选了积分
									this.yue=Number(this.yue)-Number(this.jifen1);
									this.dikou1=1
								}
							} else {
								if(event==1){//上一次点击相同位置并且为取消，即上次是勾选
									this.yue=Number(this.yue)+Number(this.jindou1);
									this.dikou=0
								}else{//否则
									this.yue=Number(this.yue)+Number(this.jifen1);
									this.dikou1=0
								}
							}
						},
						//查看购物车商品
						shangping(){
							var page=this;
							console.log(page.id)
							myAjax('post',httpa.rootshop,{
								sc_token:med.getrome('token'),
								ids:page.id
							},function(res){
								if(res.code==0){
									page.list=res.data
									page.jifen=res.jinfen
									page.jindou=res.jindou
									if(page.list!=''){
										for(var i=0;i<page.list.length;i++){
											if(page.list[i].msg.ms==0){
												page.y_jiage=Number(page.y_jiage)+Number(page.list[i].gui.price)
											}else if(page.list[i].msg.ms==1){
												page.y_jiage=Number(page.y_jiage)+Number(page.list[i].gui.m_price)
											}
											if(page.list[i].msg.b==1){
												page.jsoner=true
											}
											page.jindou1=Number(page.jindou1)+Number(page.list[i].msg.jindou)+Number(page.list[i].msg.jidou_y)
											page.jifen1=Number(page.jifen1)+Number(page.list[i].msg.jifen)+Number(page.list[i].msg.jifen_y)
											page.yunfei=Number(page.yunfei)+Number(page.list[i].msg.yunfei)
										}
									}
									if(page.jindou<=page.jindou1){
										page.jindou1=page.jindou
									}else{
										
									}
								}
								console.log(res)
							})
						},
						//根据id获取地址
						dizhi(){
							var page=this;
							console.log(page.did)
							myAjax('post',httpa.xiugai,{
								sc_token:med.getrome('token'),
								id:page.did
							},function(res){
								page.name=res.data.name
								page.phone=res.data.phone
								page.shengshi=res.data.sheng.name+''+res.data.shi.name+''+res.data.xian.name+''+res.data.xaddress
								console.log(res)
							})
						},
						//结算
						goushop(){
							var page=this;
							if(page.did==''){
								mui.toast('收货地址不能为空')
								return false;
							}
							//} else{
								console.log(1111);
								mui.confirm('确认支付吗','支付','',function(type){
									if(type.index==1){
										page.shower()
										// mui.prompt('请输入支付密码','输入支付密码','支付',['取消','确定'],function(optio){
										// 	console.log(optio)
										// 	if(optio.index==1){
												
										// 	}
										// })
										// document.querySelector('.mui-popup-input input').type='password'
										
									}else{
										mui.toast('您取消了支付');
									}
								})
						},
						//支付
						zhifua(){
							var optivo='';
							$("input[type=number]").each(function(){
								if(optivo.length<6){
									optivo=optivo+this.value;
								}else{
									
								}
							})
							var page=this;
							if(optivo.length!=6){
								mui.toast('密码格式错误！')
							}else{
								myAjax('post',httpa.pasword,{
									sc_token:med.getrome('token'),
									password:optivo
								},function(res){
									if(res.code==0){
										console.log(page.did)
										myAjax('post',httpa.shenth,{
											sc_token:med.getrome('token'),
											di:page.did,
											password:optivo
										},function(res){
											mui.toast(res.msg)
											if(res.code==0){
												setTimeout(function(){
													page.taber('index.html')
												},2000)
											}
											console.log(res)
										})
									}else{
										mui.toast(res.msg)
										$(".out_none").val('');
									}
									console.log(res)
								})
							}
						},
						//支付弹窗打开
						shower(){
							this.showee=true
						},
						//支付弹窗关闭
						showhide(){
							this.showee=false
							$(".out_none").val('');
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//复制
						copys(){
							med.copy("inputs",this.lianjie)
						},
					}
			})
		}
		//限时竞拍
		Timelimit(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						type:'',
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
						avgas:0,
						maxs:0,
						mins:0,
						shuae:0,
						dnoen:false,
						rotateIn:false,
						pricers:0,
						prices:0,
						canci:0,
						zhihuan:false,
						qus:''
					},
					mounted:function(){
						if(med.getcansu('type')!=undefined){
							this.type=med.getcansu('type')
							this.prices=parseInt(med.getcansu('price'))
							this.canci=med.getcansu('qu')
							if(this.canci==1){
								this.qus="普通区"
							}else if(this.canci==2){
								this.qus="新手区"
							}else{
								this.qus="精英区"
							}
							console.log(this.type+''+this.prices+''+this.canci)
						}
						this.shangoer()
					},
					methods:{
						//一键置换
						dnakjdhow(){
							this.zhihuany()
						},
						//关闭弹窗
						guanbi(){
							this.zhihuan=false
						},
						//申请置换
						shenuer(){
							this.zhihuany()
							// this.zhihuan=!this.zhihuan
							this.dnoen=false;
						},
						//一键置换
						naniuzh(){
							var page=this;
							if(!$('#checkboxid').is(':checked')) {
								mui.toast('请勾选协议')
								return false;
							}
							myAjax('post',httpa.qaqert1,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.zhihuan=false
									page.fatur=false
									page.pricre=0;
								}
								mui.toast(res.msg)
							});
						},
						//获取置换积分信息
						zhihuany(){
							var page=this;
							myAjax('post',httpa.qaqert,{
								sc_token:med.getrome('token'),
							},function(res){
								console.log(res)
								if(res.code==0){
									page.oipyu=res.data
									mui.prompt('请输入购物券数量'+res.data.gwq+'进行置换',"请输入数量",'购物券置换',['取消','确定'],function(optio){
										console.log(optio)
										if(optio.index==1){
											var constt=document.querySelector('.mui-popup-input input')
											if(constt.value==res.data.gwq){
												page.zhihuan=!page.zhihuan
											}else{
												mui.toast("请输入正确的数量")
												return false;
											}
										}else{
											
										}
									})
									
								}else{
									mui.toast(res.msg)
								}
							});
						},
						//获取协议信息
						xieyi(option){
							myAjax('post',httpa.xiyi,{
								type:option
							},function(res){
								$("#yuern").show()
								$("#rongqi").html(res.data)
							});
						},
						//一键置换
						zhihuanyyy(){
							
						},
						//点击切换
						uutop(event,option){
							this.uutops=event
							this.uutopss=option
							clearInterval(this.kootu)
							this.date_format(0)
							this.lettop()
						},
						//刷新
						shuaxin(){
							this.lettop()
							this.rotateIn=true
							this.list_lisa=[]
							var page=this;
							setTimeout(function(){
								page.rotateIn=false
							},1000)
						},
						//一键抢单
						qiangdan(event){
						   var page=this;
						   mui.confirm('确认抢单吗','抢单','',function(type){
						      if(type.index==1){
						         myAjax('post',httpa.qiang_news,{
						            sc_token:med.getrome('token'),
						            id:event,
						            price:page.prices,
						            cc:page.type,
						            qq:page.canci
						         },function(ress){
									 console.log(ress)
									 page.daert=ress.data
						            if(ress.code==0){
										page.dnoen=true;
						               // page.list_lisa=[]
									   // page.zhihuany()
						               // page.lettop()
						            }else{
										page.shangoer()
									}
									mui.toast(ress.msg)
						         });
						      }else{
						         mui.toast('您取消了抢单');
						      }
						   })
						},
						//刷新
						shuaxin(){
							this.shangoer()
							this.shuae=1
							this.rotateIn=true
							this.list_lisa=[]
							var page=this;
							setTimeout(function(){
								page.rotateIn=false
							},1000)
						},
						//获取抢单列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.qidanlist_new,{
								sc_token:med.getrome('token'),
								price:page.prices,
								cc:page.type,
								qq:page.canci
							},function(res){
								console.log(res)
								if(res.code==0){
									page.avgas=Number(res.avg).toFixed(2)
									page.maxs=res.max
									page.mins=res.min
									page.paging.isTrue = true;
									page.list_lisa=res.data
									if(page.shuae==1){
										mui.toast("刷新成功！")
									}
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						}
					}
			})
		}
		//捡漏
		herule(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						ids:4,
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
						avgas:0,
						maxs:0,
						mins:0,
						shuae:0,
						rotateIn:false
					},
					mounted:function(){
						if(med.getcansu('ids')!=undefined){
							this.ids=med.getcansu('ids')
						}
						this.shangoer()
					},
					methods:{
						//刷新
						shuaxin(){
							this.shangoer()
							this.paging.PageIndex=1
							this.shuae=1
							this.rotateIn=true
							this.list_lisa=[]
							var page=this;
							setTimeout(function(){
								page.rotateIn=false
							},1000)
						},
						//抢单
						qiangdan(event){
							var page=this;
							page.shuae=0
							mui.confirm('确认抢单吗','抢单','',function(type){
								if(type.index==1){
									mui.prompt('请输入支付密码','输入支付密码','支付',['取消','确定'],function(optio){
										console.log(optio)
										if(optio.index==1){
											myAjax('post',httpa.pasword,{
												sc_token:med.getrome('token'),
												password:optio.value
											},function(res){
												if(res.code==0){
													myAjax('post',httpa.janlouordersu,{
														sc_token:med.getrome('token'),
														id:event,
														password:optio.value
													   },function(ress){
															console.log(res)
															if(ress.code==0){
																page.list_lisa=[]
																page.shangoer()
															}
															mui.toast(ress.msg)
													});
												}else{
													mui.toast(res.msg)
												}
												console.log(res)
											})
										}
									})
									document.querySelector('.mui-popup-input input').type='password'
								}else{
									mui.toast('您取消了抢单');
								}
							})
						},
						//获取抢单列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.jianlou,{
								sc_token:med.getrome('token'),
								page:page.paging.PageIndex,
								id:page.ids,
								limit:20
							},function(res){
								console.log(res)
								if(res.code==0){
									page.avgas=Number(res.avg).toFixed(2)
									page.maxs=res.max
									page.mins=res.min
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
									if(page.shuae==1){
										mui.toast("刷新成功！")
									}
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						}
					}
			})
		}
		//列表
		shplist(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						ids:0,
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
						avgas:0,
						maxs:0,
						mins:0,
						uhihs:true,
						opjgpodj:0,
						kosdjlas:0,//默认非保险仓页
					},
					mounted:function(){
						if(med.getcansu('ids')!=undefined){
							this.ids=med.getcansu('ids')
						}
						if(med.getcansu('type')!=undefined){
							this.uhihs=false
							this.opjgpodj=1
							console.log(this.opjgpodj)
						}
						if(med.getcansu('spaner')!=undefined){
							this.kosdjlas=1
						}
						this.shangoer()
					},
					methods:{
						//获取抢单列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.jpai_sp,{
								sc_token:med.getrome('token'),
								page:page.paging.PageIndex,
								id:page.ids,
								limit:20
							},function(res){
								console.log(res)
								if(res.code==0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								}
							});
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						}
					}
			})
		}
		//日常竞拍
		daily(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						list_lisa:[],
						ids:0,
						paging: {
							PageIndex: 1,
							PageSize: 10,
							isTrue: true,
						}, //分页
						avgas:0,
						maxs:0,
						mins:0,
						uhihs:true,
						opjgpodj:0,
						kosdjlas:0,//默认非保险仓页
					},
					mounted:function(){
						this.shangoer()
					},
					methods:{
						formatDate(nows) {
							var now=new Date(nows*1000)
							console.log(now)
							var year=now.getFullYear();  //取得4位数的年份
							var month=now.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
							var date=now.getDate();      //返回日期月份中的天数（1到31）
							var hour=now.getHours();     //返回日期中的小时数（0到23）
							var minute=now.getMinutes(); //返回日期中的分钟数（0到59）
							var second=now.getSeconds(); //返回日期中的秒数（0到59）
							return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
						},
						//获取抢单列表
						shangoer(){
							var page=this;
							myAjax('post',httpa.jplist,{
								sc_token:med.getrome('token'),
								page:page.paging.PageIndex,
								id:page.ids,
								limit:20
							},function(res){
								console.log(res)
								if(res.code==0){
									page.paging.isTrue = true;
									res.data.forEach(item=>{
										page.list_lisa.push(item)
									})
								}
							});
						},
						//前往竞拍
						qiangdan(){
							
						},
						//跳转
						taber(option){
							window.location.href=option
						},
						//切换
						btn_sanre(option){
							this.heran=option
						}
					}
			})
		}
		//预约
		subscribe(){
			Vue.use(httpVueLoader)
				var Vm=new Vue({
					el:'#app',
					data:{
						xuanzes:false,
						namer:'请选择',
						typer:0,//默认未选择
						cisu:'',
						pasw:'',
						pasws:'',
						joner:{},
						list:[]
					},
					mounted:function(){
						this.xinxi()
					},
					methods:{
						//预约信息
						xinxi(){
							var page=this;
							myAjax('post',httpa.my_yy,{
								sc_token:med.getrome('token')
							},function(res){
								console.log(res)
								if(res.code==0){
									page.joner=res.data
									page.list=res.data.msg
								}
							});
						},
						//预约
						queren(){
							var page=this;
							if($("#changcis").text()=='请选择场次'){
								mui.toast("请选择场次");
							}else if($("#inputtier").text()=='请选择时间'){
								mui.toast("请选择时间");
							}else if(page.pasw==''){
								mui.toast("支付密码不能为空");
							}else{
								myAjax('post',httpa.yysss,{
									sc_token:med.getrome('token'),
									time:$("#inputtier").text(),
									cc:$("#changcis").text(),
									password:page.pasw
								},function(res){
									console.log(res)
									if(res.code==0){
										setTimeout(function(){
											window.location.reload()
										},1500)
									}
									mui.toast(res.msg);
								});
							}
						},
						//跳转
						taber(option){
							window.location.href=option
						}
					}
			})
		}
		//公共函数调用方法,请勿删除
		confile(callback){
			callback()
		}
	}
	//类实例化
	var impclass=new Import()
	var faaer=eval('Import.prototype.'+subli)
	impclass.confile(faaer)