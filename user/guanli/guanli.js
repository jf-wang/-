function pwds(com4) { //重置密码
    window.parent.zhezhao();
    var id = $(com4).parent().siblings().eq(8).html();
    var pwd = $(com4).parent().siblings().eq(9).html();
    $(".passwork_true").click(function() {
        var pwd_first = md5($(".passwork_first").val()); //原密码
        var pwd_second = md5($(".passwork_second").val()); //新密码
        var pwd_third = md5($(".passwork_third").val()); //确认密码
        if (pwd_first == pwd) {
            if (pwd_second == pwd_third) {
                $.ajax({
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    url: "***",
                    data: { id: id, pwd: pwd_second },
                    dataType: "json",
                    success: function(result) {
                        alert("修改成功")
                        location.reload() //刷新页面
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("数据请求失败,数据保存失败");
                    }
                });
            } else {
                alert("两次密码不一致")
            }
        } else {
            alert("原密码输入错误")
        }
    });
};
$.ajax({
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    url: "***",
    data: {},
    dataType: "json",
    success: function(result) {
        var ds = JSON.parse(result);
        for (var i = 0; i < ds.Table.length; i++) {
            var li = $("<li value=" + ds.Table[i].id + "  onclick='left_xzxm(this)'>" + ds.Table[i].name + "</li>");
            li.appendTo("#before");
        }

    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("数据请求失败,或当前网络不可用");
    }
});

var num;
var Dqname = ""

function gognyong() {
    var xmidss = ""
    for (var i = 0; i < $("#after li").length; i++) {
        xmidss += $("#after").find("li").eq(i).val() + ","
    }
    xmidss = xmidss.substring(0, xmidss.length - 1);
    $.ajax({ //xmid
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { id: Dqname, xmids: xmidss, uid: uid, pwd: pwd },
        dataType: "json",
        success: function(result) {
            $("#after").text("");
            $(".quanxian").text("")
            $.ajax({
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                url: "***",
                data: { id: Dqname },
                dataType: "json",
                success: function(result) {
                    var ds = JSON.parse(result);
                    var xmids = ds.Table[0].xmids;
                    var xmid = ds.Table[0].xmid;
                    console.log(ds.Table[0].xmids)
                    $.ajax({ //xmids
                        type: "POST",
                        contentType: "application/x-www-form-urlencoded",
                        url: "***",
                        async: false,
                        data: { xmids: xmids },
                        dataType: "json",
                        success: function(result) {
                            var ds = JSON.parse(result);
                            for (var i = 0; i < ds.Table.length; i++) {
                                var li = $("<li value=" + ds.Table[i].id + "  onclick='right_xzxm(this)'>" + ds.Table[i].name + "</li>");
                                li.appendTo("#after");
                            }
                            for (var i = 0; i < ds.Table.length; i++) {
                                var li = $("<option value=" + ds.Table[i].id + " >" + ds.Table[i].name + "</option>");
                                li.appendTo(".quanxian");
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert("数据请求失败,或当前网络不可用");
                        }
                    });
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("数据请求失败,或当前网络不可用");
                }
            });
            console.log(this.data)
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,或当前网络不可用");
        }
    });
    $("#before").text("")
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: {},
        dataType: "json",
        success: function(result) {
            var ds = JSON.parse(result);
            for (var i = 0; i < ds.Table.length; i++) {
                var li = $("<li value=" + ds.Table[i].id + "  onclick='left_xzxm(this)'>" + ds.Table[i].name + "</li>");
                li.appendTo("#before");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,或当前网络不可用");
        }
    });
}

function left_xzxm(com) {
    var id = $(com).val();
    var name = $(com).text();
    $(com).removeClass("active");
    $(com).addClass('active');
    num = $(com).index();
    var cc = $("#before li").eq(num).val();
    $("#before li").eq(num).attr("onclick", "right_xzxm(this)")
    $("#after").append($("#before li").eq(num).removeClass("active"));
    gognyong()
}


function right_xzxm(com2) {
    $(com2).removeClass("active");
    $(com2).addClass('active');
    num2 = $(com2).index();
    $("#after li").eq(num2).attr("onclick", "left_xzxm(this)")
    $("#before").append($("#after li").eq(num2).removeClass("active"));
    gognyong()


}

$("#right").click(function() {
    $("#before li").attr("onclick", "right_xzxm(this)")
    $("#after").append($("#before li").removeClass("active"));
    gognyong()
});

$("#left").click(function() {
    $("#after li").attr("onclick", "left_xzxm(this)")
    $("#before").append($("#after li").removeClass("active"));
    gognyong()
});

function xuanze(coms) { //点击选择项目的时候获取
    window.parent.zhezhao();
    var idccc = $(coms).parent().siblings().eq(8).html();
    Dqname = idccc
    var user = $(coms).parent().siblings().eq(1).html();
    $("#after").text("")
    $(".user_pasd").val(user)
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { id: idccc },
        dataType: "json",
        success: function(result) {
            var ds = JSON.parse(result);
            var xmids = ds.Table[0].xmids;
            var xmid = ds.Table[0].xmid;
            console.log(ds.Table[0].xmids)
            $.ajax({ //xmids
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                url: "***",
                async: false,
                data: { xmids: xmids },
                dataType: "json",
                success: function(result) {
                    var ds = JSON.parse(result);
                    // console.log(ds)
                    for (var i = 0; i < ds.Table.length; i++) {
                        var li = $("<li value=" + ds.Table[i].id + "  onclick='right_xzxm(this)'>" + ds.Table[i].name + "</li>");
                        li.appendTo("#after");
                    }
                    for (var i = 0; i < ds.Table.length; i++) {
                        var li = $("<option value=" + ds.Table[i].id + " >" + ds.Table[i].name + "</option>");
                        li.appendTo(".quanxian");
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("数据请求失败,或当前网络不可用");
                }
            });
            $.ajax({ //xmid
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                url: "***",
                data: { xmid: xmid },
                dataType: "json",
                success: function(result) {
                    var ds = JSON.parse(result);
                    for (var i = 0; i < ds.Table.length; i++) {
                        $(".quanxian").find('option[value="' + ds.Table[0].id + '"]').attr("selected", true)
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("数据请求失败,或当前网络不可用");
                }
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,或当前网络不可用");
        }
    });
    $(".xuanzexiangmu_true").click(function() { //选择项目的时候确定
        var xmidss = ""
        for (var i = 0; i < $("#after li").length; i++) {
            xmidss += $("#after").find("li").eq(i).val() + ","
        }
        xmidss = xmidss.substring(0, xmidss.length - 1);
        $.ajax({ //xmid
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { id: idccc, xmids: xmidss, uid: uid, pwd: pwd },
            dataType: "json",
            success: function(result) {
                location.reload() //刷新页面
                console.log(this.data)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,或当前网络不可用");
            }
        });
    })
    $(".quanxian").click(function() { //q权限选择xmid
        var id = $(".quanxian").val();
        $.ajax({ //xmid
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { id: idccc, xmid: id, uid: uid, pwd: pwd },
            dataType: "json",
            success: function(result) {
                // alert(this.data)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,或当前网络不可用");
            }
        });
    })
}