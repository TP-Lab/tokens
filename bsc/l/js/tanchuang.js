var appid='test';//全局token，测试
var wrrotas=window.innerWidth;
var system='';//判断当前操作是手机还是电脑
var appssss='enate';//当前操作dome
var str = '{"msg":"操作成功", "message":200}';//定义成功返回值
var str1 = '{"msg":"取消操作", "message":0,"data":""}';//定义失败返回值
var sUserAgent = navigator.userAgent.toLowerCase();
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad"; 
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os"; 
var bIsMidp = sUserAgent.match(/midp/i) == "midp"; 
var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb"; 
var bIsAndroid = sUserAgent.match(/android/i) == "android"; 
var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
var wideh=window.innerWidth;//获取当前屏幕宽度
if(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {window.system='MT';}else{window.system='PC';}
class Poset{
//目前支持对话,确认框 类型为input,text
alert(title,type,prosp,list,tavrt){
	console.log(title,type,prosp)
	if(type==undefined){
		type='text'
	}
	if(prosp==undefined){
		prosp="alerts"
	}
	if(list==undefined){
		list="text"
	}
	if(tavrt==undefined){
		tavrt="提示"
	}
	Poset.prototype.empty_num()
	// 当前版本为1.0.0版本
	const hears=window.innerHeight;//获取当前屏幕高度
	const codes=(wideh-400)/2+'px';//计算得出弹窗距离左边的距离
	const divs='<div class="w100__ h100__ pfixed top0p alerts"><div class="bac_black opa_6 w100__ h100__"></div><div class="pabsolute gaoduaaaaa widths"><div class="ptop20p bac_white prelative top0p brad5p pbottom20p"><div class="wmargin94__ ju_lr"><div class="c_3 fsize110 fw550">提示</div><div class="" onclick="Poset.prototype.up_alert()"><img src="/static/src/errcode.png" class="w20p"></div></div><div class="wmargin94__ mtop20p c_3 pbottom10p">'+title+'</div><div class="wmargin94__ ju_right mtop20p"><div class="p4_20p brad5p c_F btn_alert mright10p" onclick="Poset.prototype.confile('+prosp+')"><span>确认</span></div><div class="p4_20p brad5p" onclick="Poset.prototype.rootser('+prosp+')"><span>取消</span></div></div></div></div></div>';
	const inputs='<div class="w100__ h100__ pfixed top0p alerts"><div class="bac_black opa_6 w100__ h100__"></div><div class="pabsolute gaoduaaaaa widths"><div class="ptop20p bac_white prelative top0p brad5p pbottom20p"><div class="wmargin94__ ju_lr"><div class="c_3 fsize110 fw550">'+tavrt+'</div><div class="" onclick="Poset.prototype.up_alert()"><img src="/static/src/errcode.png" class="w20p"></div></div><div class="wmargin94__ mtop30p c_3 pbottom10p b19 brad5p"><input type="'+list+'" name="" id="ipunt" value="" placeholder="'+title+'" class="w90__  brad10p out_none b_none fsize100 pleft10p ptop10p"/></div><div class="wmargin94__ ju_right mtop20p"><div class="p4_20p brad5p c_F btn_alert mright10p" onclick="Poset.prototype.confile('+prosp+')"><span>确认</span></div><div class="p4_20p brad5p" onclick="Poset.prototype.rootser('+prosp+')"><span>取消</span></div></div></div></div></div>';
	const ids=document.getElementById(""+appssss+"");//指定id
	const htmls=ids.innerHTML;
	if(htmls!='null'){
		if(type=='input'){
			$("#"+appssss+"").append(inputs)
		}
		else if(type=='text'){
			$("#"+appssss+"").append(divs)
		}
		const gahu=document.getElementsByClassName('gaoduaaaaa')[0];
		const widths= document.getElementsByClassName('widths')[0];
		document.getElementsByClassName("alerts")[0].style.display="none";
		$(".alerts").fadeIn()
		window.shoa=gahu.offsetHeight;//获取当前弹窗盒子总高度
		if(system=='PC'){
			widths.style.width='400px';
			widths.style.margin='0px 0px 0px '+codes;
		}else if(system=='MT'){
			widths.style.width='88%';
			widths.style.margin='0px 0px 0px 6%';
		}
		gahu.style.top=(hears-shoa)/2+'px';
	}else{
		if(type=='input'){
			$(".alerts").html(inputs)
		}else if(type=='text'){
			$(".alerts").html(divs)
		}
		$(""+appssss+"").hide()
		if(system=='PC'){
			$(".widths").css({'width':'400px','margin-left':codes})
		}else if(system=='MT'){
			$(".widths").css({'width':'88%','margin-left':'6%'})
		}
		$(".gaoduaaaaa").css('top',(hears-shoa)/2)
		$(".alerts").fadeIn()
	}
}
//取消调用
up_alert(){
	$(".alerts").fadeOut()//隐藏
	setTimeout(function(){
		Poset.prototype.empty_num()
	},500)
}
//确认返回--返回值
confirm(option){
	$(".alerts").fadeOut()//隐藏
	if(option==1){
		//当前是确认的返回值
		if($("#ipunt").val()){
			var input=$("#ipunt").val()
			var strs = '{"msg":"操作成功", "message":200,"data":"'+input+'"}';//定义成功返回值
			return JSON.parse(strs);
		}else{
			return JSON.parse(str);
		}
	}else if(option==2){
		//当前是取消的返回值
		return JSON.parse(str1);
	}else{
		console.error('未知错误！');
		return false;
	}
}
//确认操作
confile(callback){
	console.warn(1)
      var confirms=Poset.prototype.confirm(1);
	  if(confirms.message==200){
		  callback(true,confirms.data);
	  }
	  setTimeout(function(){
	  	Poset.prototype.empty_num()
	  },500)
}
//取消操作
rootser(callback){
	var roos=Poset.prototype.confirm(2);
	if(roos.message==0){
		  callback(false,roos.data);
	}
	setTimeout(function(){
		Poset.prototype.empty_num()
	},500)
}
//存储缓存方法
setrome(cname,cvalue,exdays){
  var d = new Date();
  d.setTime(d.getTime()+((exdays?exdays:1)*1*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取缓存方法
getrome(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
//获取页面传递参数方法
getcansu(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 var search = decodeURI(window.location.search);
     var r = search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
//复制文本
copy(event,data){
	//参数说明event为隐藏的input的id值,data为需要复制的值
	console.log(data)
	$("#"+event+"").val(data);
	 $("#"+event+"").select();
	 document.execCommand("Copy")
	 Poset.prototype.toast("复制成功！")
	 $("#tanchuang").hide()
}
//消息自动提示框
toast(event,place){
	 Poset.prototype.empty_num()
	 var site='';//定义弹窗出现的位置
	 if(place=='top'){
		 site='top20__'
	 }else if(place=='center'){
		 site='top50__'
	 }else if(place=='bottom'){
		 site='bottom20__'
	 }else{
		 site='bottom20__'
	 }
	const lenght=event.length;
	const chang=Poset.prototype.getlenght(event)
	const width=window.innerWidth;//当前屏幕宽度的一半
	const htmls='<div class="pfixed '+site+' w100__ left0p  brad10p toast" id="toast"><div class="bac_black  opa_8 pabsolute top0p  c_F brad10p hrrgia">	</div><div class="pabsolute dblock left0p   top0p c_F  fsize95 ptop10p pleft20p pright20p pbottom10p"  id="herccc"><div class="in66__">'+event+'</div></div></div>'
	document.getElementById(""+appssss+"").innerHTML+=htmls;
	const herccc=document.getElementById("herccc").offsetHeight;//获取当前文本框高度
	const widht=document.getElementById("herccc").offsetWidth-40; //获取当前文本框宽度
	$(".toast").hide()
	if(system=='PC'){
		if(widht<=200){
			$(".hrrgia").css({"width":widht+40+'px',"height":herccc+'px',"margin-left":(width-widht-40)/2 +'px'})
			$("#herccc").css({"margin-left":(width-widht-40)/2})
		}else{
			$("#herccc").width(200)//PC端文本框宽度
			$("#herccc").css({"margin-left":(width-200+40)/2+'px'})
			$(".hrrgia").css({"margin-left":(width-200)/2,"width":280+'px',"height":herccc+20+'px'})//PC端文本框宽度
		}
	}else if(system=='MT'){
		if(widht<=(width/2)-40){//s小于当前屏幕宽度的一半
		$(".hrrgia").css({"width":widht+40+'px',"height":herccc+'px'})
		$(".hrrgia").css("margin-left",(width-widht-40)/2 +'px')
		$("#herccc").css({"margin-left":(width-widht-40)/2})
		}else{
		$("#herccc").width((width/2)-40+'px')//文本框宽度
		$(".hrrgia").css({"margin-left":"25%","width":(width/2)+'px'})
		if(chang<=36	){
			$(".hrrgia").height(herccc+20)
		}
		else if(chang<=46){
			$(".hrrgia").height(herccc+40)
		}else{
			$(".hrrgia").height(herccc+60)
		}
		$("#herccc").css({"margin-left":((width-((width/2)))/2)+'px'})
		}
	}
	$(".toast").height(herccc+20+'px')
	$(".toast").fadeIn()
	setTimeout(function(){
		$(".toast").fadeOut(function(){
			 Poset.prototype.empty_num()
		})
	},1500)
}
//成功,失败，加载框
success(text,type){
	if(type==undefined){
		type="success"
	}
	Poset.prototype.empty_num()
	var danikdha=(window.innerWidth-150)/2;//获取屏幕宽度
	if(type=='loading'){
		var html='<div class="pfixed top30__ success talcenter left05p w200p longin"><canvas id="mycanval" width="200" height="80" class=""></canvas></div>'
		var madshid=(wideh-200)/2;
		document.getElementById(""+appssss+"").innerHTML+=html;
		document.getElementsByClassName("longin")[0].style.margin='0px 0px 0px '+madshid+'px'
		$(".success").hide()
		var mycanvas= document.getElementById('mycanval');
		if(mycanvas.getContext){
		  var ctx = mycanvas.getContext('2d');
		}
		function circle({x,y,r,color}){
		  this.x = x;
		  this.y = y;
		  this.r = r;
		  this.color = color
		}
		circle.prototype.draw=function(){
		    ctx.beginPath();
		    ctx.fillStyle=this.color;
		    ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false); 
		    ctx.closePath();
		    ctx.fill();
		 }
		var colorli=['#FB5A1B','#F5C253','#69E012','#36A43D','#143476']
		var xli=[20,60,100,140,180];   
		var cirli = [];
		var rli=[8,6,4,3,0]
		function initCircleGroup(){
		    for(let i=0;i<xli.length;i++){
		      cirli.push(new circle({
		        x: xli[i],
		        y: 15,
		        r: rli[i],
		        color: colorli[i]
		        }))
		     }
		  }
		function resetCircleGroup(){
		  for(let i=0;i<cirli.length;i++){
		    cirli[i].r=rli[i];
		  }
		}
		initCircleGroup();
		function bigger(cir,i){
		   cir.r+=0.4;
		  // console.log(cir.r)
		    cir.draw()
		  if(cir.r>=15){
		     flag=0;
		     sraf=window.requestAnimationFrame(()=>{
		       smaller(cir,i);
		     });
		  }
		} 
		var flag=0;
		function smaller(cir,i){
		  cir.r-=0.4; 
		  if(cir.r<0){
		    cir.r=0;
		  }
		  cir.draw();
		  if(cir.r===0&&i===4){
		     resetCircleGroup();
		     flag=1;
		  } 
		  if(flag==0){
		     sraf=window.requestAnimationFrame(()=>{
		       smaller(cir,i);
		     });
		  }
		} 
		function draw(){
		  ctx.clearRect(0,0,300,300);
		  for(let i=0;i<cirli.length;i++){
		        bigger(cirli[i],i)
		  }
		  raf=window.requestAnimationFrame(draw);
		}
		ctx.clearRect(0,0,300,300);
		ctx.save();
		raf=window.requestAnimationFrame(draw);
		$(".success").fadeIn()
	}else{
		var html='<div class="w100__ pfixed top30__ success"><div class="w150p bac_black opa_7 h130p brad5p pabsolute top0p homessr"></div><div class="w150p talcenter pabsolute top0p homessr"><div class="c_F fw700 h80p w100__"><canvas id="myCanvas" width="150" height="80"></canvas></div><div class="c_F h40_lin talcenter fsize110">'+text+'</div></div></div>'
		document.getElementById(""+appssss+"").innerHTML+=html;
		document.getElementsByClassName("homessr")[0].style.margin='0px 0px 0px '+danikdha+'px'
		document.getElementsByClassName("homessr")[1].style.margin='0px 0px 0px '+danikdha+'px'
		$(".success").hide()
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		if(type=='success'){
			ctx.moveTo(44, 40);
			ctx.lineTo(76, 72);
			ctx.lineWidth="5";
			ctx.strokeStyle="#FFFFFF";
			ctx.stroke();
			ctx.moveTo(73, 72);
			ctx.lineTo(125, 20);
			ctx.lineWidth="5";
			ctx.strokeStyle="#FFFFFF";
			ctx.stroke();
		}else if(type=='error'){
			 ctx.moveTo(50, 20);//
			 ctx.lineTo(100, 72);
			 ctx.lineWidth="5";
			 ctx.strokeStyle="#FFFFFF";
			 ctx.stroke();
			 ctx.moveTo(50, 72);
			 ctx.lineTo(100, 20);
			 ctx.lineWidth="5";
			 ctx.strokeStyle="#FFFFFF";
			 ctx.stroke();
		}
		$(".success").fadeIn()
		setTimeout(function(){
				 $(".success").fadeOut(function(){
					 Poset.prototype.empty_num()
				 })
		},1500)
	}
}
//关闭加载框
loadings(){
	setTimeout(function(){
			 $(".success").fadeOut(function(){
				 Poset.prototype.empty_num()
			 })
	},1500)
}
//封装ajax
Ajax_type(url,data,type,callback){
$.ajax({
	url: url,
	data:data,
	type:type,
	dataType: "json",
	success: function (res) { //获取返回值，进行相应操作        
		window.res_data=JSON.stringify(res);
		Ajax_fun(res_data,callback)
	},         
    error: function () { 
		console.log("出错！")
	}, //如果弹窗跳出，代表服务端路径错误，或服务端出错，或服务端没有返回指定的json数据格式
    beforeSend: function () {
		console.log("开始！")
	},  //请求服务端的时候执行（不管对错）一开始加载数据就会执行
    complete: function ()
	{  
	}//处理完毕之后，不管返回到sussess还是error中   数据加载完毕执行
});
}
//ajax回调函数
Ajax_fun(event,callback){
	const callbacks=callback
	const list=[];
	const obj=JSON.parse(event)
	list.push(obj)
	callbacks(list);
}
//获取字节
getlenght(val) {  
	 var str = new String(val);  
	 var bytesCount = 0;  
	 for (var i = 0 ,n = str.length; i < n; i++) {  
		 var c = str.charCodeAt(i);  
		 if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
			 bytesCount += 1;  
		 } else {  
			 bytesCount += 2;  
		 }  
	 }  
	 return bytesCount;  
 } 
 //清空操作
empty_num(){
	 document.getElementById(""+appssss+"").innerHTML='';
 }
}
var med=new Poset();
//跳转页面
function jump(data){
	$data=data;
	console.log($data)
	$("#iframes").attr("src",$data)
}