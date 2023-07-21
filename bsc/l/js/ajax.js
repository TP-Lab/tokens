/*
*封装一个自己的ajax函数
*有5个参数，最后一个参数可选
*
* @param method(必选)    请求类型  get 和 post
* @param url(必选)       请求的url地址   相同域名下的页面（此函数不支持跨域请求）
* @param data(必选)      请求协带的数据  以js对象的形式定义，如：{name:'张三'}
* @param callback(必选)  回调函数,可接收一个参数，这个参数就是服务器响应的数据
* @param type(可选)      指定服务器响应的数据类型（可选值：json,xml,text），如果是json模式，则使用json解析数据，默认为text普通字符串
*/
function myAjax(method,url,data,callback,type,event=0,option=''){
	//如果不填type则默认为json
	if(type==undefined){
		type='json';
	}
	//创建兼容 XMLHttpRequest 对象
	var xhr;
	if (window.XMLHttpRequest){//IE7+, Firefox, Chrome, Opera, Safari
	  xhr=new XMLHttpRequest();
	}else{// code for IE6, IE5
	  xhr=new ActiveXObject("Microsoft.X MLHTTP");
	}
 
	//给请求添加状态变化事件处理函数
	xhr.onreadystatechange = function (){
		//判断状态码
		if(xhr.status==200 && xhr.readyState==4){
			//根据type参数，判断返回的内容需要进行怎样的处理
			if(type=='json'){
				//获得 json 形式的响应数据，并使用parse方法解析
				var res = JSON.parse(xhr.responseText);
				if(res.code==716){
					med.toast('登录已失效');
					setTimeout(function(){
						window.location.href='login.html'
					},2000)
				}else if(res.code==2022){
					mui.toast(res.msg);
					// setTimeout(function(){
					// 	location.reload();
					// },2000)
				}
			}else if(type=='xml'){
				//获得 XML 形式的响应数据
				var res = responseXML;
			}else{
				//获得字符串形式的响应数据
				var res = xhr.responseText;
			}
			//调用回调函数,并将响应数据传入回调函数
			callback(res);
		}
	};
	
	//判断data是否有数据
	var param = '';
	//这里使用stringify方法将js对象格式化为json字符串
	if(JSON.stringify(data) != '{}'){
		url += '?';
		for(var i in data){
			param += i+'='+data[i]+'&';   //将js对象重组，拼接成url参数存入param变量中
		}
		//使用slice函数提取一部分字符串，这里主要是为了去除拼接的最后一个&字符
		//slice函数：返回一个新的字符串。包括字符串从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。
		param = param.slice(0,param.length-1);  
	}
 
	//判断method是否为get
	if(method == "get"){
		//是则将数据拼接在url后面
		url = url+param;
	}
 
	//初始化请求
	xhr.open(method,url,true);
 
	//如果method == post
	if(method == "post"){
		if(event==0){
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		}else{
			param=option
		}
		//发送请求
		xhr.send(param);
	}else{
		//发送请求
		xhr.send(null);
	}
	
}