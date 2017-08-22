jiazai()

function jiazai() {
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: {},
        dataType: "json",
        success: function(result) {
            var ds = JSON.parse(result);
            $(".number").text(ds.Table.length)
            for (var i = 0; i < ds.Table.length; i++) {
                var code = ds.Table[i].code; //编号
                var updatetime = ds.Table[i].updatetime; //更新时间
                var ip = ds.Table[i].ip; //地址
                var port = ds.Table[i].port; //端口
                var data = ds.Table[i].data.length / 2
                var id = ds.Table[i].id;
                var data2 = ds.Table[i].data;
                var ww = $(" <tr>" +
                    "<td>" + code + "</td>" +
                    "<td>" + ip + "</td>" +
                    "<td>" + port + "</td>" +
                    "<td>" + updatetime + "</td>" +
                    "<td>" + data + "</td>" +
                    "<td><span onclick='xiangxi(this)'  class='zaixianxiangxi'>详细</span></td>" +
                    "<td class='id'>" + id + "</td>" +
                    "<td class='id'>" + data2 + "</td>" +
                    "</tr>");
                ww.appendTo("tbody");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,数据保存失败");
        }
    });
}
$(".biaohao").bind('keypress', function(event) {
    if ($(".head_input").val() == "") {
        $("tbody").text("")
        jiazia()
    } else {
        var name = $(".biaohao").val();
        $("tbody").text("")
        $.ajax({
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { code: name },
            dataType: "json",
            success: function(result) {
                var ds = JSON.parse(result);
                $(".number").text(ds.Table.length)
                for (var i = 0; i < ds.Table.length; i++) {
                    var code = ds.Table[i].code; //编号
                    var updatetime = ds.Table[i].updatetime; //更新时间
                    var ip = ds.Table[i].ip; //地址
                    var port = ds.Table[i].port; //端口
                    var data = ds.Table[i].data.length / 2
                    var id = ds.Table[i].id;
                    var data2 = ds.Table[i].data;
                    var ww = $(" <tr>" +
                        "<td>" + code + "</td>" +
                        "<td>" + ip + "</td>" +
                        "<td>" + port + "</td>" +
                        "<td>" + updatetime + "</td>" +
                        "<td>" + data + "</td>" +
                        "<td><span onclick='xiangxi(this)'  class='zaixianxiangxi'>详细</span></td>" +
                        "<td class='id'>" + id + "</td>" +
                        "<td class='id'>" + data2 + "</td>" +
                        "</tr>");
                    ww.appendTo("tbody");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,数据保存失败");
            }
        });
    }

})

function xiangxi(row) { //详情
    var data2 = $(row).parent().siblings().eq(6).html(); //获取当前的编号
    alert(data2)
}