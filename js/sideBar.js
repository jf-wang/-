$(function(){
	"use strict";
	////////////////////////////侧栏单击转换效果开始///////////////////////////////////////////
	$("#sideBar ul a li").click(function(){
			$(this).css("background","#ccc");
			$(this).parent("a").siblings("a").children("li").css("background","").css("font-weight","normal");
		}).mouseover(function(){
			$(this).css("font-weight","bold").css("cursor","pointer");
		}).mouseout(function(){
			$(this).css("font-weight","normal");
		});
	/////////////////////////////屏幕高度适配开始////////////////////////////////////////
	$(function () {
	    function initLayout() {
	        var h = document.documentElement.clientHeight;
	        if ($("#head").height() < 80) {
	            h = h - 70;
	        } else { h = h - 100; }
	        $('#sideBar').height(h);
	        $('#main').height(h);
	    }
	    initLayout();
	    $(window).resize(function () {
	        initLayout();
	    });
	});
	
	/////////////////////登录验证用户名和密码等信息开始//////////////////////////////////
	// var tem = localStorage.getItem("ZEIOT-msg");
	// if(tem === null){
	// 	window.open("login.html","_self");
	// 	}
	// var value = JSON.parse(tem)[0];
	// if(value.USER_ACCOUNT === undefined||value.USER_ACCOUNT === null||value.USER_ACCOUNT === "" || value.USER_PWD === undefined||value.USER_PWD === null||value.USER_PWD === ""){
	// 	window.open("login.html","_self");
	// 	}else{
	// 		$.ajax({
	// 					type: "POST",
	// 					contentType: "application/x-www-form-urlencoded",
    //                     url: getApiHost() + "/api/PlatUser/LoginValidate",
	// 					data: { User_Account: value.USER_ACCOUNT, USER_PWD: value.USER_PWD },
	// 					dataType: "json",
	// 					success: function (result) {
	// 						if(result === "0"){
	// 							window.open("login.html","_self");
	// 							localStorage.removeItem("ZEIOT-msg");
	// 							}else{
	// 									var userNameJob = $("#userDownBox .userName .userNameJob");
	// 									if (value.USER_NAME === "" || value.USER_NAME === null) {
	// 									    userNameJob.text(value.USER_ACCOUNT)
	// 									} else { userNameJob.text(value.USER_NAME); }
										
	// 								}
	// 					},
	// 					error: function (XMLHttpRequest, textStatus, errorThrown) {
	// 						console.log(XMLHttpRequest,textStatus,errorThrown);
	// 					}
	// 			});
	// 		}
	/////////////////////窗口关闭事件监听//////////////////////////////////
/*		window.onbeforeunload=onclose;
		function onclose()
		{ 
		return "您确定退出吗？";
		
		}*/
	
	/*$(window).unload(function(){
        //响应事件
        alert("获取到了页面要关闭的事件了！"); 
    });
*/
	/*var READYTOPROCESS = false;
	window.onbeforeunload = function closeWindow(e){
			if (!READYTOPROCESS){
				e = e || window.event;
				if (e){
					localStorage.removeItem("ZEIOT-msg");
					}
			}
		};*/
	/*window.onbeforeunload=onclose;
		function onclose()
		{
		var Sys = {};
		var warnning = '<fmt:message key="systemMessage.exitWarning" />';
		var ua = navigator.userAgent.toLowerCase();
		if (window.ActiveXObject)
		  {Sys.ie = ua.match(/msie ([\d.]+)/)[1];}
		else if (document.getBoxObjectFor)
		  {Sys.firefox = ua.match(/firefox\/([\d.]+)/)[1];}
		if(Sys.ie) {//for IE
		if(event.clientX>document.body.clientWidth&&event.clientY<0||event.altKey)
		{
		window.event.returnValue = warnning ;
		}
		}
		if(Sys.firefox) //for FF
		{return warnning;}
		}*/
	/*window.onbeforeunload = function() 
		{ 
		//用户点击浏览器右上角关闭按钮或是按alt+F4关闭 
		if(event.clientX>document.body.clientWidth&&event.clientY<0||event.altKey) 
		{ 
		// alert("点关闭按钮"); 
		localStorage.removeItem("ZEIOT-msg");
		window.event.returnValue="确定要退出本页吗?"; 
		} 
		//用户点击任务栏，右键关闭。s或是按alt+F4关闭 
		else if(event.clientY > document.body.clientHeight || event.altKey) 
		{ 
		// alert("任务栏右击关闭"); 
		localStorage.removeItem("ZEIOT-msg");
		 window.event.returnValue="确定要退出本页吗?"; 
		} 
		//其他情况为刷新 
		else 
		{ 
		alert("刷新页面"); 
		} 
		}; */
});