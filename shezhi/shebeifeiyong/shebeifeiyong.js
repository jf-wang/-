var xmids = localStorage.getItem("lastname");
$.ajax({ //获取项目余额
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    url: "***",
    data: { id: xmids },
    dataType: "json",
    success: function(result) {
        var ds = JSON.parse(result);
        // console.log(ds)
        $(".zhanghuyue").val(ds.Table[0].money)
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("数据请求失败,数据保存失败");
    }
});
$.ajax({ //获取设备
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    url: "***",
    data: { xmid: xmids },
    dataType: "json",
    success: function(result) {
        var ds = JSON.parse(result);
        // console.log(result)
        // $(".zhanghuyue").val(ds.Table[0].smsmoney)
        for (var i = 0; i < ds.Table.length; i++) {
            var code = ds.Table[i].code; //编号
            var name = ds.Table[i].name; //名称
            var bmname = ds.Table[i].bmname; //部门名称
            var tongdao = ds.Table[i].tongdao; //通道数
            var bz = ds.Table[i].bz; //备注
            var pay = ds.Table[i].pay; //服务费
            var sertimes = ds.Table[i].sertimes; //服务期限
            var id = ds.Table[i].id;
            // console.log(id)
            var rr = $("<tr>" +
                "<td><input class='input' name='Fruit' type='checkbox' value='" + id + "' /></td>" +
                "<td>" + code + "</td>" +
                "<td>" + name + "</td>" +
                "<td>" + bmname + "</td>" +
                "<td>" + tongdao + "</td>" +
                "<td>" + pay + "</td>" +
                "<td>" + sertimes + "</td>" +
                "<td>" + bz + "</td>" +
                "</tr>");
            rr.appendTo(".tbody");
        }
        dd()
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("数据请求失败,数据保存失败");
    }
});

$(".head_btn").click(function() {
    var yuefen = $(".xiangmushuaxuan").val(); //月份
    var zhanghuyue = $(".zhanghuyue").val();
    obj = document.getElementsByName("Fruit");
    check_val = [];
    for (k in obj) {
        if (obj[k].checked)
            check_val.push(obj[k].value);
    }
    var ssbb = []
    for (var i = 0; i < check_val.length; i++) {
        $.ajax({ //获取项目余额
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            async: false, //关闭异步
            data: { xmid: xmids, id: check_val[i] },
            dataType: "json",
            success: function(result) {
                var ds = JSON.parse(result);
                // console.log(ds.Table[0])
                var pay = ds.Table[0].pay;
                var ss = pay * yuefen;
                ssbb.push(ss)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,数据保存失败");
            }
        });
    };
    var ss = 0
    for (var i = 0; i < ssbb.length; i++) {
        ss += parseInt(ssbb[i]);
    };
    if (ss > zhanghuyue) {
        alert("余额不足");
    } else if (check_val.length < 1) {
        alert("请勾选设备")
    } else if (ss < zhanghuyue) {
        $.ajax({ //扣钱
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            url: "***",
            data: { id: xmids, money: -ss, uid: uid, pwd: pwd },
            dataType: "json",
            success: function(result) {
                alert("操作成功")
                location.reload() //刷新页面
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("数据请求失败,数据保存失败");
            }
        });
        for (var i = 0; i < check_val.length; i++) {
            $.ajax({ //获取项目余额
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                url: "***",
                async: false, //关闭异步
                data: { id: check_val[i], months: yuefen, uid: uid, pwd: pwd },
                dataType: "json",
                success: function(result) {

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("数据请求失败,数据保存失败");
                }
            });
        }
    };
});


$("#checkAll").click(function() {
    $('input[name="Fruit"]').attr("checked", this.checked);
});