function imgPreview(fileDom) {
    //判断是否支持FileReader
    if (window.FileReader) {
        var reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    }

    //获取文件
    var file = fileDom.files[0];
    var imageType = /^image\//;
    //是否是图片
    if (!imageType.test(file.type)) {
        alert("请选择图片！");
        return;
    }
    //读取完成
    reader.onload = function(e) {
        //获取图片dom
        var img = document.getElementById("preview");
        //图片路径设置为读取的图片
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
jiazia()
    /**页面加载 */
function jiazia() {
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: {},
        dataType: "json",
        success: function(result) {
            var ds = JSON.parse(result);
            console.log(ds);
            for (var i = 0; i < ds.Table.length; i++) {
                var number = ds.Table.length; //项目数
                $(".number").text(number);
                var id = ds.Table[i].id; //获取id
                var imgurl = ""; //图片路径
                var biaohao = ds.Table[i].code; //编号
                var name = ds.Table[i].name; //项目名称
                var hisjg = ds.Table[i].hisjg; //数据间隔
                var hiszs = ds.Table[i].hiszs; //数据总量
                var hispay = ds.Table[i].hispay; //数据月费
                var hissertimes = ds.Table[i].hissertimes; //数据期限
                var sbpay = ds.Table[i].sbpay; //设备服务费
                var sbtongdao = ds.Table[i].sbtongdao; //通道数
                var money = ds.Table[i].money; //余额
                var smsmoney = ds.Table[i].smsmoney; //短信余额
                var bz = ds.Table[i].bz; //备注
                var sendmsg = ds.Table[i].sendmsg; //短信报警
                // console.log(sendmsg)
                $.ajax({
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    url: "***",
                    async: false,
                    data: { path: "Mapsp", name: id + '.jpg', od: od, nd: nd },
                    dataType: "json",
                    success: function(result) {
                        console.log(result)
                        if (result == 1) {
                            imgurl = imgUrl + id + ".jpg";
                        } else {
                            imgurl = "../../imges/list_logo.png"
                        }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("数据请求失败,或当前网络不可用");
                    }
                });
                if (sendmsg == 1) { //判断sendmsg，1为启用0位禁用
                    sendmsg = "启用"
                } else {
                    sendmsg = "禁用"
                }
                var sendmsgtels = ds.Table[i].sendmsgtels; //接受号码
                var cc = $("<tr>" +
                    "<td><img src=" + imgurl + "></td>" +
                    "<td>" + biaohao + "</td>" +
                    "<td>" + name + "</td>" +
                    "<td>" + hisjg + "</td>" +
                    "<td>" + hiszs + "</td>" +
                    "<td>" + hispay + "</td>" +
                    "<td>" + hissertimes + "</td>" +
                    "<td>" + sbpay + "</td>" +
                    "<td>" + sbtongdao + "</td>" +
                    "<td>" + money + "</td>" +
                    "<td>" + smsmoney + "</td>" +
                    "<td>" + bz + "</td>" +
                    "<td><div class='sendmsg2'>" + sendmsg + "</div></td>" +
                    "<td>" + sendmsgtels + "</td>" +
                    "<td>" +
                    "<span class='gaoji' onclick='gaoji(this)' data-toggle='modal' data-target='#myModal_gaoji'>高级</span>|" +
                    "<span class='bianji' onclick='bianji(this)' data-toggle='modal' data-target='#myModal_bianji'>编辑</span>|" +
                    "<span class='del' onclick='del(this)' data-toggle='modal' data-target='#myModal_del'>删除</span>" +
                    "</td>" +
                    "<td class='id'>" + id + "</td>" +
                    "</tr>")
                cc.appendTo("tbody");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,或当前网络不可用");
        }
    });
}

$(".head_input").bind('keypress', function(event) { //搜索
    if ($(".head_input").val() == "") {
        $("tbody").text("")
        jiazia()
    } else {
        var name = $(".head_input").val();
        $("tbody").text("")
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { name: name },
            dataType: "json",
            success: function(result) {
                var ds = JSON.parse(result);
                // console.log(ds);
                for (var i = 0; i < ds.Table.length; i++) {
                    var number = ds.Table.length; //项目数
                    $(".number").text(number);
                    var id = ds.Table[i].id; //获取id
                    var imgurl = "http://ys.zeiot.cn" + ds.Table[i].img.split("~")[1]; //图片路径
                    var biaohao = ds.Table[i].code; //编号
                    var name = ds.Table[i].name; //项目名称
                    var hisjg = ds.Table[i].hisjg; //数据间隔
                    var hiszs = ds.Table[i].hiszs; //数据总量
                    var hispay = ds.Table[i].hispay; //数据月费
                    var hissertimes = ds.Table[i].hissertimes; //数据期限
                    var sbpay = ds.Table[i].sbpay; //设备服务费
                    var sbtongdao = ds.Table[i].sbtongdao; //通道数
                    var money = ds.Table[i].money; //余额
                    var smsmoney = ds.Table[i].smsmoney; //短信余额
                    var bz = ds.Table[i].bz; //备注
                    var sendmsg = ds.Table[i].sendmsg; //短信报警
                    // console.log(sendmsg)
                    if (sendmsg == 1) { //判断sendmsg，1为启用0位禁用
                        sendmsg = "启用"
                    } else {
                        sendmsg = "禁用"
                    }
                    var sendmsgtels = ds.Table[i].sendmsgtels; //接受号码
                    var cc = $("<tr>" +
                        "<td><img src=" + imgurl + "></td>" +
                        "<td>" + biaohao + "</td>" +
                        "<td>" + name + "</td>" +
                        "<td>" + hisjg + "</td>" +
                        "<td>" + hiszs + "</td>" +
                        "<td>" + hispay + "</td>" +
                        "<td>" + hissertimes + "</td>" +
                        "<td>" + sbpay + "</td>" +
                        "<td>" + sbtongdao + "</td>" +
                        "<td>" + money + "</td>" +
                        "<td>" + smsmoney + "</td>" +
                        "<td>" + bz + "</td>" +
                        "<td><div class='sendmsg2'>" + sendmsg + "</div></td>" +
                        "<td>" + sendmsgtels + "</td>" +
                        "<td>" +
                        "<span class='gaoji' onclick='gaoji(this)' data-toggle='modal' data-target='#myModal_gaoji'>高级</span>|" +
                        "<span class='bianji' onclick='bianji(this)' data-toggle='modal' data-target='#myModal_bianji'>编辑</span>|" +
                        "<span class='del' onclick='del(this)' data-toggle='modal' data-target='#myModal_del'>删除</span>" +
                        "</td>" +
                        "<td class='id'>" + id + "</td>" +
                        "</tr>")
                    cc.appendTo("tbody");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,或当前网络不可用");
            }
        });
    }
})

//------------------------------------------------------
$(".tainjia").click(function() { //新建的时候取值
    var bianhao = $(".bianhao").val(); //获取项目编号
    var name = $(".name").val(); //获取项目名称
    var beizhu = $(".beizhu").val(); //获取备注
    var fuwufei = $(".fuwufei").val(); //服务费
    var tongdaoshu = $(".tongdaoshu").val(); //通道数
    var jiange = $(".jiange").val(); //间隔
    var zongliang = $(".zongliang").val(); //总量
    var yuefei = $(".yuefei").val(); //月费
    var haoma = $(".haoma").val(); //号码
    if (bianhao != "" && name != "" && fuwufei != "" && tongdaoshu != "" && jiange != "" && zongliang != "" && yuefei != "") {
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { code: bianhao, name: name, bz: beizhu, sbpay: fuwufei, sbtongdao: tongdaoshu, hisjg: jiange, hiszs: zongliang, hispay: yuefei, sendmsgtels: haoma, uid: uid, pwd: pwd },
            dataType: "json",
            success: function(result) {
                alert(result)
                location.reload() //刷新页面
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("新建项目失败");
            }
        });
    } else {
        alert("*号为必填项")
    }
});

//------------------------------------------------------
function bianji(com2) { //点击编辑的时候
    window.parent.zhezhao();
    var biaohao = $(com2).parent().siblings().eq(1).html(); //获取当前的编号
    var name = $(com2).parent().siblings().eq(2).html(); //项目名
    var hisjg = $(com2).parent().siblings().eq(3).html(); //数据间隔
    var hiszs = $(com2).parent().siblings().eq(4).html(); //数据总量
    var hispay = $(com2).parent().siblings().eq(5).html(); //数据月费
    var hissertimes = $(com2).parent().siblings().eq(6).html(); //数据期限
    var sbpay = $(com2).parent().siblings().eq(7).html(); //设备服务费
    var sbtongdao = $(com2).parent().siblings().eq(8).html(); //通道数
    var money = $(com2).parent().siblings().eq(9).html(); //余额
    var smsmoney = $(com2).parent().siblings().eq(10).html(); //短信余额
    var bz = $(com2).parent().siblings().eq(11).html(); //备注
    var sendmsg = $(com2).parent().siblings().eq(12).html(); //短信报警状态
    var sendmsgtels = $(com2).parent().siblings().eq(13).html(); //接受号码
    var id = $(com2).parent().siblings().eq(14).html(); //id
    // console.log(biaohao)
    $(".bianhao_bianji").val(biaohao);
    $(".name_bianji").val(name);
    $(".beizhu_bianji").val(bz);
    $(".fuwufei_bianji").val(sbpay);
    $(".tongdaoshu_bianji").val(sbtongdao);
    $(".jiange_bianji").val(hisjg);
    $(".zongliang_bianji").val(hiszs);
    $(".yuefei_bianji").val(hispay);
    $(".haoma_bianji").val(sendmsgtels);
    $(".bianjiid").val(id)
    console.log($(".beizhu_bianji").val())
    $(".baoxun_bianji").click(function() { //编辑点击保存的时候
        // window.parent.zhezhao();
        var baocun_binhao = $(".bianhao_bianji").val(); //获取编号值
        var baocun_name = $(".name_bianji").val(); //项目名
        var baocun_beizhu = $(".beizhu_bianji").val(); //备注
        var baocun_shebeifuwufei = $(".fuwufei_bianji").val(); //服务费
        var baocun_tongdaoshu = $(".tongdaoshu_bianji").val(); //通道数
        var baocun_jiange = $(".jiange_bianji").val(); //间隔
        var baocun_zongliang = $(".zongliang_bianji").val(); //总量
        var baocun_yuefei = $(".yuefei_bianji").val(); //月费
        var baocun_duanxin = $(".duanxin_bianji").val(); //短信
        var baocun_haoma = $(".haoma_bianji").val(); //接受号码
        var baocun_id = $(".bianjiid").val(); //获取id
        // console.log(baocun_beizhu);
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { id: baocun_id, code: baocun_binhao, name: baocun_name, bz: baocun_beizhu, sbpay: baocun_shebeifuwufei, sbtongdao: baocun_tongdaoshu, hisjg: baocun_jiange, hiszs: baocun_zongliang, hispay: baocun_yuefei, sendmsg: baocun_duanxin, sendmsgtels: baocun_haoma, uid: uid, pwd: pwd },
            dataType: "json",
            success: function(result) {
                alert(result)
                location.reload() //刷新页面
                    // console.log(this.data)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,数据保存失败");
            }
        });
    })
}
//------------------------------------------------------
function del(com3) { //删除
    window.parent.zhezhao();
    var id = $(com3).parent().siblings().eq(14).html(); //id
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