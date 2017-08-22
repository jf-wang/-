var xmid = localStorage.getItem("lastname"); //页面加载
var shuzu = [];
$.ajax({
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    url: "***",
    data: { xmid: xmid },
    dataType: "json",
    success: function(result) {
        var ds = JSON.parse(result);
        for (var i = 0; i < ds.Table.length; i++) {
            var option1 = $("<option value='" + ds.Table[i].id + "'>" + ds.Table[i].name + "</option>");
            option1.appendTo(".bumenlist");
            var sendmsg = ds.Table.sendmsg;
        }
        /**列出电话列表 */
        var strs = new Array(); //定义一数组 
        strs = ds.Table[0].sendmsgtels.split(","); //字符分割 
        $(".firstphont").val(strs[0]);
        $(".secondphont").val(strs[1]);
        $(".thirdphont").val(strs[2]);
        $(".fourthphont").val(strs[3]);
        $(".fifthphont").val(strs[4]);
        /**列出电话列表end */
        /**判断短信激活状态 */
        if (ds.Table[0].sendmsg == 1) {
            $(".qiyongjinyong option[value='1']").attr("selected", "selected");
        } else if (ds.Table[0].sendmsg == 0) {
            $(".qiyongjinyong option[value='0']").attr("selected", "selected");
        };
        /**判断短信激活状态 end*/
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("数据请求失败,数据保存失败");
    }
});
$(".baocun").click(function() { //保存的时候
    var buid = $(".bumenlist").val(); //部门id
    var sendmsg = $(".qiyongjinyong").val(); //短信是否启用
    var cc = "";
    if ($(".firstphont").val() == "") {
        cc = ""
    } else if ($(".secondphont").val() == "") {
        cc = $(".firstphont").val();
    } else if ($(".thirdphont").val() == "") {
        cc = $(".firstphont").val() + ',' + $(".secondphont").val();
    } else if ($(".fourthphont").val() == "") {
        cc = $(".firstphont").val() + ',' + $(".secondphont").val() + ',' + $(".thirdphont").val();
    } else if ($(".fifthphont").val() == "") {
        cc = $(".firstphont").val() + ',' + $(".secondphont").val() + ',' + $(".thirdphont").val() + ',' + $(".fourthphont").val();
    } else {
        cc = $(".firstphont").val() + ',' + $(".secondphont").val() + ',' + $(".thirdphont").val() + ',' + $(".fourthphont").val(); + ',' + $(".fifthphont").val();
    }
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { id: buid, sendmsg: sendmsg, sendmsgtels: cc, uid: uid, pwd: pwd },
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
$(".bumenlist").change(function() { //当列表变化的时候
    var bmid = $(".bumenlist").val();
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { xmid: xmid, id: bmid },
        dataType: "json",
        success: function(result) {
            var ds = JSON.parse(result);
            if (ds.Table[0].sendmsg == 1) {
                $(".qiyongjinyong option[value='1']").attr("selected", "selected");
            } else if (ds.Table[0].sendmsg == 0) {
                $(".qiyongjinyong option[value='0']").attr("selected", "selected");
            }
            var strs = new Array(); //定义一数组 
            strs = ds.Table[0].sendmsgtels.split(","); //字符分割 
            $(".firstphont").val(strs[0]);
            $(".secondphont").val(strs[1]);
            $(".thirdphont").val(strs[2]);
            $(".fourthphont").val(strs[3]);
            $(".fifthphont").val(strs[4]);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,数据保存失败");
        }
    });
});
$.ajax({ //请求出账户余额，和短信余额
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    url: "***",
    data: { id: xmid },
    dataType: "json",
    success: function(result) {
        var ds = JSON.parse(result);
        $(".hispay").val(ds.Table[0].money);
        $(".yue").val(ds.Table[0].smsmoney);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("数据请求失败,数据保存失败");
    }
});
$(".tijiao").click(function() { //点击提交的时候
    var ss = $(".zhuanru").val();
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { uid: uid, pwd: pwd, smsmoney: ss, id: xmid },
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