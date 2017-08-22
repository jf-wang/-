jiazia()

function jiazia() {
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: {},
        async: false,
        dataType: "json",
        success: function(result) {
            var ds = JSON.parse(result);
            console.log(ds);
            for (var i = 0; i < ds.Table.length; i++) {
                var number = ds.Table.length; //项目数
                $(".number").text(number);
                var name = ds.Table[i].name; //项目名称
                var hisjgtimes = ds.Table[i].hissertimes.split(" ")[0]; //数据期限
                var smsmoney = ds.Table[i].smsmoney; //剩余金额
                var imgurl = ""; //图片路径
                var xmid = ds.Table[i].id; //取得id掉XMBJ接口用
                var homepage = ds.Table[i].homepage;
                $.ajax({
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    url: "***",
                    async: false,
                    data: { path: "Mapsp", name: xmid + '.jpg', od: od, nd: nd },
                    dataType: "json",
                    success: function(result) {
                        console.log(result)
                        if (result == 1) {
                            imgurl = imgUrl + xmid + ".jpg";
                        } else {
                            imgurl = "../../imges/list_logo.png"
                        }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("数据请求失败,或当前网络不可用");
                    }
                });
                if (smsmoney < 5) {
                    smsmoney = "短信余额不足5元！"
                } else {
                    smsmoney = ""
                }
                var dqbj = "";
                var wqrbj = "";
                var shebiBJ = "";
                $.ajax({
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    url: "***",
                    async: false,
                    data: { xmid: xmid },
                    dataType: "json",
                    success: function(result) {
                        dqbj = result.split(",")[0];
                        //  console.log(dqbj)
                        wqrbj = result.split(",")[1];
                        //  console.log(wqrbj)
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("数据请求失败,或当前网络不可用");
                    }
                });
                $.ajax({
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    url: "***",
                    data: { xmid: xmid },
                    async: false, //关闭异步
                    dataType: "json",
                    success: function(result) {
                        //  console.log(result)
                        //  console.log(this.data)
                        shebiBJ = result
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("数据请求失败,或当前网络不可用");
                    }
                });
                var j = i + 1;
                var dd = $("<a href='../../zhao/index.html' target='_parent' ><li onclick='XMBJ_num(this)'>" +
                    "<div style='display:none;'>" + xmid + "</div>" +
                    "<div class='bor'>" +
                    "<div class='list_head'>" +
                    "<span>" + name + "</span>" +
                    "</div>" +
                    "<div class='list_con'>" +
                    "<img class='list_logo' src=" + imgurl + ">" +
                    "<div class='list_div'>" +
                    "<ul class='list_bj'>" +
                    "<li>当前报警：<span class='hj_nuber'>" + dqbj + "</span></li>" +
                    "<li>未确认报警：<span class='wqr_bj'>" + wqrbj + "</span></li>" +
                    "<li>数据期限：<span class='bj_time'>" + hisjgtimes + "</span></li>" +
                    "</ul>" +
                    "</div>" +
                    "</div>" +
                    "<div class='list_foot'>" +
                    "<div class='foot_img'></div>" +
                    "<span class='yue'>" + smsmoney + "</span>" +
                    "<span class='daoqi'>" + shebiBJ + "</span>" +
                    "<span class='homepage'>" + homepage + "</span>" +
                    "</div>" +
                    "</div>" +
                    "</li></a>");
                // console.log(ds.Table[i].smsmoney)
                dd.appendTo(".big_list");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,或当前网络不可用");
        }
    });
}
$(".head_input").bind('keypress', function(event) { //搜索
    if ($(".head_input").val() == "") {
        $(".big_list").text("")
        jiazia()
    } else {
        var name = $(".head_input").val();
        $(".big_list").text("")
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { name: name },
            // async: false,
            dataType: "json",
            success: function(result) {
                var ds = JSON.parse(result);
                console.log(ds);
                for (var i = 0; i < ds.Table.length; i++) {
                    var number = ds.Table.length; //项目数
                    $(".number").text(number);
                    var name = ds.Table[i].name; //项目名称
                    var hisjgtimes = ds.Table[i].hissertimes.split(" ")[0]; //数据期限
                    var smsmoney = ds.Table[i].smsmoney; //剩余金额
                    var imgurl = ""; //图片路径
                    var xmid = ds.Table[i].id; //取得id掉XMBJ接口用
                    var homepage = ds.Table[i].homepage;
                    $.ajax({
                        type: "POST",
                        contentType: "application/x-www-form-urlencoded",
                        url: "***",
                        async: false,
                        data: { path: "Mapsp", name: xmid + '.jpg', od: od, nd: nd },
                        dataType: "json",
                        success: function(result) {
                            console.log(result)
                            if (result == 1) {
                                imgurl = imgUrl + xmid + ".jpg";
                            } else {
                                imgurl = "../../imges/list_logo.png"
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert("数据请求失败,或当前网络不可用");
                        }
                    });
                    if (smsmoney < 5) {
                        smsmoney = "短信余额不足5元！"
                    } else {
                        smsmoney = ""
                    }
                    var dqbj = "";
                    var wqrbj = "";
                    var shebiBJ = "";
                    $.ajax({
                        type: "POST",
                        contentType: "application/x-www-form-urlencoded",
                        url: "***",
                        async: false,
                        data: { xmid: xmid },
                        dataType: "json",
                        success: function(result) {
                            dqbj = result.split(",")[0];
                            //  console.log(dqbj)
                            wqrbj = result.split(",")[1];
                            //  console.log(wqrbj)
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert("数据请求失败,或当前网络不可用");
                        }
                    });
                    $.ajax({
                        type: "POST",
                        contentType: "application/x-www-form-urlencoded",
                        url: "***",
                        data: { xmid: xmid },
                        async: false, //关闭异步
                        dataType: "json",
                        success: function(result) {
                            //  console.log(result)
                            //  console.log(this.data)
                            shebiBJ = result
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert("数据请求失败,或当前网络不可用");
                        }
                    });
                    var j = i + 1;
                    var dd = $("<a href='../../zhao/index.html' target='_parent' ><li onclick='XMBJ_num(this)'>" +
                        "<div style='display:none;'>" + xmid + "</div>" +
                        "<div class='bor'>" +
                        "<div class='list_head'>" +
                        "<span>" + name + "</span>" +
                        "</div>" +
                        "<div class='list_con'>" +
                        "<img class='list_logo' src=" + imgurl + ">" +
                        "<div class='list_div'>" +
                        "<ul class='list_bj'>" +
                        "<li>当前报警：<span class='hj_nuber'>" + dqbj + "</span></li>" +
                        "<li>未确认报警：<span class='wqr_bj'>" + wqrbj + "</span></li>" +
                        "<li>数据期限：<span class='bj_time'>" + hisjgtimes + "</span></li>" +
                        "</ul>" +
                        "</div>" +
                        "</div>" +
                        "<div class='list_foot'>" +
                        "<div class='foot_img'></div>" +
                        "<span class='yue'>" + smsmoney + "</span>" +
                        "<span class='daoqi'>" + shebiBJ + "</span>" +
                        "<span class='homepage'>" + homepage + "</span>" +
                        "</div>" +
                        "</div>" +
                        "</li></a>");
                    // console.log(ds.Table[i].smsmoney)
                    dd.appendTo(".big_list");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,或当前网络不可用");
            }
        });
    }
});

function XMBJ_num(self) {
    var XMBJ_id = $(self).children("div").eq(0).html();
    var XMBJ_name = $(self).children("div").eq(1).children("div").eq(0).children("span").html();
    var homepage = $(self).children("div").find(".homepage").html();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("lastname", XMBJ_id);
        localStorage.setItem("xiangmu_name", XMBJ_name);
        localStorage.setItem("homepage", homepage);
    } else {
        alert("抱歉！您的浏览器不支持 Web Storage ...");
    }
}