//-----------------------------------------------页面加载
jiazia()
var uid = localStorage.getItem("id");
var pwd = localStorage.getItem("passWord")

function jiazia() {

    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { grade: 1 },
        async: false, //关闭异步
        dataType: "json",
        success: function(result) {
            var ds = JSON.parse(result);
            var shifou
            $(".number").text(ds.Table.length)
            for (var i = 0; i < ds.Table.length; i++) {
                var code = ds.Table[i].code; //登录名
                var name = ds.Table[i].name; //姓名
                var tel = ds.Table[i].tel; //联系方式
                var bz = ds.Table[i].bz; //备注
                var power = ds.Table[i].power_; //权限
                var xmname = ds.Table[i].xmname; //默认项目
                var id = ds.Table[i].id;
                var pwd = ds.Table[i].pwd;
                // console.log(ds.Table[i].xmids)
                // console.log(power)
                if (ds.Table[i].xmids.length > 1) {
                    shifou = "是"
                } else {
                    shifou = "否"
                }
                var ee = $("<tr>" +
                    "<td>" + code + "</td>" +
                    "<td>" + name + "</td>" +
                    "<td>" + tel + "</td>" +
                    "<td>" + bz + "</td>" +
                    "<td>" + power + "</td>" +
                    "<td >" + xmname + "</td>" +
                    "<td class='shifou'>" + shifou + "</td>" +
                    "<td>" +
                    "<span class='xuanzexiangmu' onclick='xuanze(this)'  data-toggle='modal' data-target='#myModal_xuanzexiangmu'>选择项目</span>" +
                    "</td>" +
                    "<td>" +
                    "<span class='gaoji' onclick='pwds(this)' data-toggle='modal' data-target='#myModal_passwork'>重置密码</span>|" +
                    "<span class='bianji' onclick='bianji(this)' data-toggle='modal' data-target='#myModal_bianji'>编辑</span>|" +
                    "<span class='del' onclick='del(this)' data-toggle='modal' data-target='#myModal_del'>删除</span>" +
                    "</td>" +
                    "<td class='ids'>" + id + "</td>" +
                    "<td class='ids'>" + pwd + "</td>" +
                    "</tr>");

                ee.appendTo("tbody");

            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,或当前网络不可用");
        }
    });
}
$.ajax({
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    url: "***",
    data: {},
    dataType: "json",
    success: function(result) {
        var ds = JSON.parse(result);
        //  console.log(ds);
        for (var i = 0; i < ds.Table.length; i++) {
            var option = $("<option value=" + ds.Table[i].id + ">" + ds.Table[i].name + "</option>");
            option.appendTo(".xiangmushuaxuan");
        }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("数据请求失败,或当前网络不可用");
    }
});

/////////////-------------------------------------------
function bianji(row) { //点击编辑时候
    window.parent.zhezhao();
    var name = $(row).parent().siblings().eq(0).html(); //获取当前的登录名
    var code = $(row).parent().siblings().eq(1).html(); //姓名
    var tel = $(row).parent().siblings().eq(2).html(); //电话
    var bz = $(row).parent().siblings().eq(3).html(); //备注
    var power = $(row).parent().siblings().eq(4).html(); //权限
    var id = $(row).parent().siblings().eq(8).html();
    if (power = "监控") {
        $(".quanxian_yonghuxinxi option[text='监控']").attr("selected", true);
    } else if (power = "维护") {
        $(".quanxian_yonghuxinxi option[text='维护']").attr("selected", true);
    } else if (power = "管理") {
        $(".quanxian_yonghuxinxi option[text='管理']").attr("selected", true);
    }
    $(".user_pasd_yonghuxinxi").val(name);
    $(".yonghu_name").val(code);
    $(".phone_yonghu").val(tel);
    $(".beizhu_bianji").val(bz);
    $(".tainjia_bianji").click(function() {
        var baocun_name = $(".user_pasd_yonghuxinxi").val();
        var baocun_code = $(".yonghu_name").val();
        var baocun_tel = $(".phone_yonghu").val();
        var baocun_power = $(".quanxian_yonghuxinxi").val();
        // var baocun_id = id;
        var baocun_beizhu = $(".beizhu_bianji").val();
        // console.log(id)
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { id: id, code: baocun_code, name: baocun_name, tel: baocun_tel, bz: baocun_beizhu, power: baocun_power, uid: uid, pwd: pwd },
            dataType: "json",
            success: function(result) {
                console.log(this.data);
                alert(result)
                location.reload() //刷新页面
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,数据保存失败");
            }
        });
    })
}

function del(com2) { //删除用户的时候
    window.parent.zhezhao();
    var pwd = localStorage.getItem("passWord")
    var id = $(com2).parent().siblings().eq(8).html();
    $(".queding_del").click(function() {
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { id: id, uid: uid, pwd: pwd },
            dataType: "json",
            success: function(result) {
                alert(result)
                location.reload() //刷新页面
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,数据保存失败");
            }
        });
    })
}
$(".tainjia_xinzeng").click(function() { //新增用户的时候
    var code = $(".qiye_code").val(); //cod
    var name = $(".qiye_name").val(); //账户
    var passwork = md5($(".user_pasd_xiangmu").val()); //密码
    var phone = $(".phone_xiangmu").val(); //电话
    var quanxian = $(".quanxian_xiangmu").val(); //权限
    var beizhu = $(".haoma_bianji").val(); //备注

    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { grade: 1, code: code, name: name, pwd: passwork, tel: phone, power: quanxian, bz: beizhu, uid: uid, pwd: pwd },
        dataType: "json",
        success: function(result) {
            alert(result)
            location.reload() //刷新页面
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,数据保存失败");
        }
    });
});

$(".xiangmushuaxuan").click(function() {

    if ($(".xiangmushuaxuan").val() == "") {
        $("tbody").text("")
        jiazia()
    } else {
        $("tbody").text("")
        var xiangmushuaxuan = $(".xiangmushuaxuan").val();
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { xmid: xiangmushuaxuan },
            async: false, //关闭异步
            dataType: "json",
            success: function(result) {
                var ds = JSON.parse(result);
                console.log(ds)
                var shifou
                $(".number").text(ds.Table.length)
                for (var i = 0; i < ds.Table.length; i++) {
                    var code = ds.Table[i].code; //登录名
                    var name = ds.Table[i].name; //姓名
                    var tel = ds.Table[i].tel; //联系方式
                    var bz = ds.Table[i].bz; //备注
                    var power = ds.Table[i].power_; //权限
                    var xmname = ds.Table[i].xmname; //默认项目
                    var id = ds.Table[i].id;
                    var pwd = ds.Table[i].pwd;
                    if (ds.Table[i].xmids.length > 1) {
                        shifou = "是"
                    } else {
                        shifou = "否"
                    }
                    var ee = $("<tr>" +
                        "<td>" + code + "</td>" +
                        "<td>" + name + "</td>" +
                        "<td>" + tel + "</td>" +
                        "<td>" + bz + "</td>" +
                        "<td>" + power + "</td>" +
                        "<td class='xmname'>" + xmname + "</td>" +
                        "<td class='shifou'>" + shifou + "</td>" +
                        "<td>" +
                        "<span class='xuanzexiangmu' onclick='xuanze(this)'  data-toggle='modal' data-target='#myModal_xuanzexiangmu'>选择项目</span>" +
                        "</td>" +
                        "<td>" +
                        "<span class='gaoji' onclick='pwd(this)' data-toggle='modal' data-target='#myModal_passwork'>重置密码</span>|" +
                        "<span class='bianji' onclick='bianji(this)' data-toggle='modal' data-target='#myModal_bianji'>编辑</span>|" +
                        "<span class='del' onclick='del(this)' data-toggle='modal' data-target='#myModal_del'>删除</span>" +
                        "</td>" +
                        "<td class='ids'>" + id + "</td>" +
                        "<td class='ids'>" + pwd + "</td>" +
                        "</tr>");

                    ee.appendTo("tbody");

                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,或当前网络不可用");
            }
        });
    }
})