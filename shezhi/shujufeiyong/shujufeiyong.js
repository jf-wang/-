var xmids = localStorage.getItem("lastname");
$.ajax({
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    url: "***",
    data: { id: xmids, uid: uid, pwd: pwd },
    dataType: "json",
    success: function(result) {
        var ds = JSON.parse(result);
        console.log(ds)
        $(".yue").val(ds.Table[0].money); //余额
        $(".hispay").val(ds.Table[0].hispay); //收费标准
        $(".hissertimes").val(ds.Table[0].hissertimes); //数据期限
        $(".hiszs").val(ds.Table[0].hiszs); //数据总量
        $(".xiangmushuaxuan").find('option[value="' + ds.Table[0].hisjg + '"]').attr("selected", true)
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("数据请求失败,或当前网络不可用");
    }
});



$(".tijiao").click(function() { //续费提交
    var yue = $(".yue").val(); //余额
    var hispay = $(".hispay").val(); //收费标准
    var xiangmuxufei = $(".xiangmuxufei").val(); //续费月份
    if (xiangmuxufei * hispay > yue) {
        alert("余额不足");
    } else {
        var ss = xiangmuxufei * hispay
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { id: xmids, money: -ss, uid: uid, pwd: pwd },
            dataType: "json",
            success: function(result) {
                alert(result);
                location.reload() //刷新页面
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,或当前网络不可用");
            }
        });
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { id: xmids, months: xiangmuxufei, uid: uid, pwd: pwd },
            dataType: "json",
            success: function(result) {
                alert(result);
                location.reload() //刷新页面
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,或当前网络不可用");
            }
        });
    }
})
$(".xiuzheng").click(function() { //修正数据存储间隔
    var xiangmushuaxuan = $(".xiangmushuaxuan").val();
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { id: xmids, hisjg: xiangmushuaxuan, uid: uid, pwd: pwd },
        dataType: "json",
        success: function(result) {
            alert(result);
            location.reload() //刷新页面
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,或当前网络不可用");
        }
    });
})