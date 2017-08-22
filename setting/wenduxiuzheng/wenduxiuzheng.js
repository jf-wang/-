$(".first").blur(function() {
    var x1 = $(".first").val(); //1
    if (x1.split(".")[0].length > 1 || x1.split(".")[1].length > 1) {
        alert("请输入-9.9~9.9范围之内的数字")
    }
});
$(".second").blur(function() {
    var x2 = $(".second").val(); //1
    if (x2.split(".")[0].length > 1 || x2.split(".")[1].length > 1) {
        alert("请输入-9.9~9.9范围之内的数字")
    }
});
$(".thirdly").blur(function() {
    var x3 = $(".thirdly").val(); //1
    if (x3.split(".")[0].length > 1 || x3.split(".")[1].length > 1) {
        alert("请输入-9.9~9.9范围之内的数字")
    }
});
$(".fourth").blur(function() {
    var x4 = $(".fourth").val(); //1
    if (x4.split(".")[0].length > 1 || x4.split(".")[1].length > 1) {
        alert("请输入-9.9~9.9范围之内的数字")
    }
});
$(".fifth").blur(function() {
    var x5 = $(".fifth").val(); //1
    if (x5.split(".")[0].length > 1 || x5.split(".")[1].length > 1) {
        alert("请输入-9.9~9.9范围之内的数字")
    }
});
$(".sixth").blur(function() {
    var x6 = $(".sixth").val(); //1
    if (x6.split(".")[0].length > 1 || x6.split(".")[1].length > 1) {
        alert("请输入-9.9~9.9范围之内的数字")
    }
});





$(".true").click(function() {
    var code = $(".shebei_mber").val();
    var ip = "123.56.92.58";
    var port = 1086;
    var x1 = $(".first").val(); //1
    var x2 = $(".second").val(); //1
    var x3 = $(".thirdly").val(); //1
    var x4 = $(".fourth").val(); //1
    var x5 = $(".fifth").val(); //1
    var x1 = $(".sixth").val(); //1

    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { code: code, ip: ip, port: port, x1: x1, x2: x2, x3: x3, x4: x4, x5: x5, x6: x6, uid: uid, pwd: pwd },
        dataType: "json",
        success: function(result) {
            alert("修改成功")
            location.reload() //刷新页面 
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,数据保存失败");
        }
    });
})