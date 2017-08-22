$(function () {

    "use strict";
    var iniSideBar = $("#sideBar").children("ul").children("a:first-child");
    //////////////////////////////////////////导航栏单击事件/////////////////////////////////////////
    $("#topNav .titleText").click(function () {
        iniSideBar.children("li").css("background", "#ccc");
        iniSideBar.siblings("a").children("li").css("background", "");
        var index = $(this).index();
        var sideUl = $("#sideBar ul:eq(" + index + ")");
        sideUl.css("display", "block");
        sideUl.siblings("ul").css("display", "none");
        $(this).parent("#topNav").children("ul:first-child").css("background", "#015db2");
        $(this).css("background", "#f5f5f5");
        $(this).children("a").children("li").css("color", "#0c66b2");
        $(this).children("a").children("#icon1").attr("src", "../imges/core_icon1s.png");
        $(this).children("a").children("#icon2").attr("src", "../imges/");
        $(this).children("a").children("#icon3").attr("src", "../imges/");
        $(this).children("a").children("#icon4").attr("src", "../imges/");
        $(this).children("a").children("#icon4").attr("src", "../imges/");
        $(this).children("a").children("#icon4").attr("src", "../imges/");
        $(this).children("a").children("#icon4").attr("src", "../imges/");


        $(this).siblings("ul").css("background", "");
        $(this).siblings("ul").children("a").children("li").css("color", "#fff");
        $(this).siblings("ul").children("a").children("#icon1").attr("src", "../imges/icon1.png");
        $(this).siblings("ul").children("a").children("#icon2").attr("src", "../imges/icon2.png");
        $(this).siblings("ul").children("a").children("#icon3").attr("src", "../imges/icon3.png");
        $(this).siblings("ul").children("a").children("#icon4").attr("src", "../imges/icon4.png");
        $(this).siblings("ul").children("a").children("#icon5").attr("src", "../imges/icon5.png");
        $(this).siblings("ul").children("a").children("#icon6").attr("src", "../imges/icon6.png");
        $(this).siblings("ul").children("a").children("#icon7").attr("src", "../imges/icon7.png");



        $(this).parents("#head").siblings("#userOption").children("ul").children("li").css("background", "rgb(25,179,234)");
        $(this).parents("#head").siblings("#userOption").children("li").children("a").css("color", "rgb(16,134,176)");
        $(this).parents("#head").siblings("#userOption").removeClass("show");
        $(this).parents("#head").siblings("#userDownBox").removeClass("chooseOn");
    });
    /////////////////////////////用户名区域单击事件//////////////////////////////////////////////
    $("#userDownBox .userName ").click(function () {
        iniSideBar.children("li").css("background", "#ccc");
        iniSideBar.siblings("a").children("li").css("background", "");
        $(this).parent("#userDownBox").toggleClass("chooseOn");
        if ($(this).parent("#userDownBox").hasClass("chooseOn")) {
            $(this).parent("#userDownBox").siblings("#userOption").removeClass("hidden").addClass("show");
        } else {
            $(this).parent("#userDownBox").siblings("#userOption").removeClass("show").addClass("hidden");
        };

        $(this).parent("#userDownBox").siblings("#userOption").children("ul").children("li").children("a").css("color", "#333");
    });
    ///////////////////////////////下拉浮窗点鼠标单击事件开始//////////////////////////////////////
    $("#userOption ul li").click(function () {
        var ul = $("#sideBar #sideBar-userCenter");
        ul.css("display", "block");
        ul.siblings("ul").css("display", "none");
        $(this).css({ background: 'rgb(16,134,176)' });
        $(this).css("color", "#0d72c8");
        $(this).parents("#userOption").removeClass("show");
        var topIndex = $(this).index();
        if (topIndex < 2) {
            var sideBarLi = $("#sideBar-userCenter").children("a:eq(" + topIndex + ")").children("li");
            sideBarLi.css("background", "rgb(25,179,234)");
            sideBarLi.parent("a").siblings("a").children("li").css("background", "");
        }

        $(this).parent("ul").parent("#userOption").siblings("#head").children("#topNav").children(".titleText").css("background", "rgb(25,179,234)");
        $(this).parent("ul").parent("#userOption").siblings("#head").children("#topNav").children(".titleText").children("a").children("li").css("color", "");
        $(this).parent("ul").parent("#userOption").siblings("#head").children("#topNav").children(".titleText").children("a").children("span").css("background-image", "url(../image/navIconOff.png)");
    });

    ///////////////////////////////下拉浮窗点鼠标离开事件开始//////////////////////////////////////
    $("#userOption").mouseleave(function () {
        //console.log($(this).children("ul").children("li").children("a").attr("style").fontcolor());
        $(this).removeClass("show").addClass("hidden");
        $(this).siblings("#userDownBox").removeClass("chooseOn");
        $(this).children("ul").children("li").css({ background: 'rgb(25,179,234)', color: '#000' });
    });
    /////////////////////////////////退出登录单击事件//////////////////////////////////////
    $("#userOption ul li a:contains('退出登录')").click(function () {
        localStorage.removeItem("ZEIOT-msg");
        localStorage.removeItem("userName");
        localStorage.removeItem("passWord");

        window.open('login.html', '_self');


    });
    ////////////////////////////////////生成100以内的随机数////////////////////////////////////////
    var num = Math.floor(Math.random() * 100);
    $("#topRightSet .alarm .alarmNumber").text(num);

    ////////////////////////////////////////下拉浮窗点击还原事件开始////////////////////////////
    var userDownBox = $("#userDownBox");
    var userOption = $("#userOption");
    $("#topRightSet .userSet,#topRightSet .alarm,#topNav .titleText,#sideBar ul li").mouseover(function () {
        userOption.children("ul").children("li").css({ background: 'rgb(25,179,234)', color: '#000' });
        userDownBox.removeClass("chooseOn");
        userOption.removeClass("show").addClass("hidden");
    });
    ////////////////////////////////////////小齿轮设置单击事件开始////////////////////////////
    $("#topRightSet .userSet").click(function () {
        iniSideBar.children("li").css("background", "#ccc");
        iniSideBar.siblings("a").children("li").css("background", "");
        var ulset = $("#sideBar #sideBar-userSet");
        ulset.css("display", "block");
        ulset.siblings("ul").css("display", "none");
        $(this).parent("div").parent("#topRightSet").siblings("#topNav").children(".titleText").css("background", "");
        $(this).parent("div").parent("#topRightSet").siblings("#topNav").children(".titleText").children("a").children("li").css("color", "");
        $(this).parent("div").parent("#topRightSet").siblings("#topNav").children(".titleText").children("a").children("span").css("background-image", "url(../image/navIconOff.png)");
    });


    ////////////////////////////////////////侧栏缩进效果  开始////////////////////////////
    $("#cela").mouseover(function () {
        $(this).children("#cela_img").attr("src", "../imges/xiaob.jpg");
    }).mouseout(function () {
        $(this).children("#cela_img").attr("src", "../imges/xiaoh.jpg");
    });

    $("#celas").mouseover(function () {
        $(this).children("#cela_imgs").attr("src", "../imges/dabs.jpg");
    }).mouseout(function () {
        $(this).children("#cela_imgs").attr("src", "../imges/dahs.jpg");
    });




    $(document).ready(function () {
        $("#cela_img").click(function () {
            $("#sideBar").animate({ width: 'toggle' });
            $("#main").css("width", "99.2%");
            $("#main").css("left", "0.8%");
            $("#cela").attr("style", "display:none;");
            $("#celas").attr("style", "display:block;");
        });
    });


    $(document).ready(function () {
        $("#cela_imgs").click(function () {
            $("#sideBar").animate({ width: 'toggle' });
            if ($("#head").css("height") === "70px") {
                $("#main").css("width", "84.2%");
                $("#main").css("left", "15.8%");
            }
            else {
                $("#main").css("width", "88.7%");
                $("#main").css("left", "11.3%");
            }
            $("#cela").fadeIn(2000);
            $("#cela").attr("style", "display:block;");
            $("#celas").attr("style", "display:none;");
        });
    });
    ////////////////////////////////////////侧栏缩进效果  结束////////////////////////////












});





