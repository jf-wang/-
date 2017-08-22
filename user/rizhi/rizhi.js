// $(function() {
//     $('.date_picker').date_input();
// })
jeDate({
    dateCell: "#dateinfo3",
    format: "YYYY-MM-DD",
    isinitVal: false,
    isTime: false, //isClear:false,
    minDate: "1900-01-1 00:00:00",
    okfun: function(val) {

    }
})
jeDate({
    dateCell: "#dateinfo4",
    format: "YYYY-MM-DD",
    isinitVal: true,
    isTime: false, //isClear:false,
    minDate: "1900-01-01 00:00:00",
    okfun: function(val) {

    }
})
var weeks = ["日", "一", "二", "三", "四", "五", "六"];
var setTime = null;

function getDateTime() {
    if (setTime != null) {
        clearTimeout(setTime);
    }
    var dateTime = new Date();
    var year = dateTime.getFullYear() - 1;
    var month = dateTime.getMonth();
    var date = dateTime.getDate();
    var week = dateTime.getDay();
    document.getElementById('show').innerHTML = (year + '-' + changeTime(month) + '-' + changeTime(date));
    setTime = setTimeout(getDateTime, 1000);
}
getDateTime();

function changeTime(num) {
    if (num < 10) {
        return "0" + num;
    }
    return num;
}
setTimeout(function() {
    var xmid = localStorage.getItem("xmid"); //获取项目id
    var sdate = document.getElementById("show").innerHTML + " " + "00:00:00";
    var edate = $("#dateinfo4").val() + " " + "23:59:59";
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { xmid: xmid, sdate: sdate, edate: edate },
        dataType: "json",
        success: function(result) {
            console.log(this.data);
            var ds = JSON.parse(result);
            console.log(ds)
            for (var i = 0; i < ds.Table.length; i++) {
                var yhname = ds.Table[i].yhname; //操作账户
                var times = ds.Table[i].times; //操作时间
                var bz = ds.Table[i].bz; //操作内容
                var ff = $(
                    "<tr>" +
                    "<td>" + yhname + "</td>" +
                    "<td>" + times + "</td>" +
                    "<td>" + bz + "</td>" +
                    "</tr>");
                ff.appendTo(".table1");
            }
            dd()
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,数据保存失败");
        }
    });
}, 1000);
$(".chaxun").click(function() {
    $("td").remove()
    var xmid = localStorage.getItem("xmid"); //获取项目id
    var sdate = $("#dateinfo3").val() + " " + "00:00:00";
    var edate = $("#dateinfo4").val() + " " + "23:59:59";
    // console.log(sdate, edate);
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "***",
        data: { xmid: xmid, sdate: sdate, edate: edate },
        dataType: "json",
        success: function(result) {
            console.log(this.data);
            var ds = JSON.parse(result);
            console.log(ds)
            for (var i = 0; i < ds.Table.length; i++) {
                var yhname = ds.Table[i].yhname; //操作账户
                var times = ds.Table[i].times; //操作时间
                var bz = ds.Table[i].bz; //操作内容
                var gg = $(
                    "<tr>" +
                    "<td>" + yhname + "</td>" +
                    "<td>" + times + "</td>" +
                    "<td>" + bz + "</td>" +
                    "</tr>");
                gg.appendTo(".table1");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("数据请求失败,数据保存失败");
        }
    });
})