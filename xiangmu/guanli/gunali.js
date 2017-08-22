//----------------------------------------------------
var cid = ""

function gaoji(com) { //点击高级的时候获取
    window.parent.zhezhao();
    var biaohao = $(com).parent().siblings().eq(1).html(); //获取当前的编号
    var name = $(com).parent().siblings().eq(2).html(); //项目名
    var yue = $(com).parent().siblings().eq(9).html(); //余额
    var id = $(com).parent().siblings().eq(14).html(); //id
    cid = id
    $(".bianhao_gaoji").val(biaohao);
    $(".name_gaoji").val(name);
    $(".yue_gaoji").val(yue)
        //上传图片
    $("#btnUploadFile").click(function() {
        var data = new FormData();
        var files = $("#fileUpload").get(0).files;
        if (files.length > 0) {
            data.append("UploadedImage", files[0]);
        }
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            contentType: false,
            processData: false,
            data: data,
            dataType: "json",
            success: function(result) {
                alert(result);
                console.log(this.url)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {

                alert(textStatus);
            }
        });
    })

    $(".chongzhi_tijiao").click(function() { //充值提交的时候
        var chongzhi = $(".chongzhi").val(); //获取充值
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { id: cid, money: chongzhi, uid: uid, pwd: pwd },
            dataType: "json",
            success: function(result) {
                alert(result);
                $(".yue_gaoji").val("");
                $.ajax({
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    url: "***",
                    data: { id: cid, uid: uid, pwd: pwd },
                    async: false,
                    dataType: "json",
                    success: function(result) {
                        var ds = JSON.parse(result);
                        $(".yue_gaoji").val("" + ds.Table[0].money + "");
                        $(".chongzhi").val("")
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("数据请求失败,数据保存失败");
                    }
                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,数据保存失败");
            }
        });
    });
    $(".logo_top").click(function() { //点击上传logo

    })
    $(".tainjia_gaoji").click(function() { //点击确定的时候
        location.reload() //刷新页面
    })
}
$(".quxiao_gaoji").click(function() {
    location.reload() //刷新页面
})