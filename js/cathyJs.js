//返回api服务器地址
function getApiHost() {
    //return "http://localhost:10286";
    return "http://192.168.5.111:81";
}

//返回image服务器地址
function getImageHost() {
   return "http://192.168.5.111:81";    
}

//alert（有遮罩层）
function bootAlert(title, cont) {
    var strAlert = "<div class=\"modal bs-example-modal-sm\" id=\"myAlert\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" data-backdrop=\"static\" ><div class=\"modal-dialog modal-sm\" role=\"document\" id=\"divMyAlert\"  style='width:300px'><div class=\"modal-content\"><div class=\"modal-header\" style=\"padding:10px 15px;\"><h4 class=\"modal-title\" id=\"myModalLabel\">[title]</h4></div><div class=\"modal-body\">[alertCont]</div><div class=\"modal-footer\" style=\"text-align: center; padding: 10px 15px;\"><button type=\"button\" class=\"btn btn-info\"  onclick='$(\"#myAlert\").modal(\"hide\");'>确定</button></div></div></div></div>";
    strAlert = strAlert.replace("[title]", title);
    strAlert = strAlert.replace("[alertCont]", cont);
    if ($("#divAlert").length == 0) {
        $("<div id='divAlert'></div>").appendTo($("body"));
    }
    $("#divAlert").html(strAlert);
    $('#myAlert').modal('show');
    //垂直居中
    var height = $(window).height() / 2 - $("#divMyAlert").height() / 2;
    $("#divMyAlert").css("margin-top", height);
}

//alert（无遮罩层）
function bootAlertNoMask(title, cont) {
    var strAlert = "<div class=\"modal bs-example-modal-sm\" id=\"myAlertNoMask\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalNoMaskLabel\" data-backdrop=\"false\" ><div id=\"divModalNoMask\" class=\"modal-dialog modal-sm\" role=\"document\" style=\"width:300px\"><div class=\"modal-content\"><div class=\"modal-header\" style=\"padding:10px 15px;\"><h4 class=\"modal-title\" id=\"myModalNoMaskLabel\">[title]</h4></div><div class=\"modal-body\">[alertCont]</div><div class=\"modal-footer\" style=\"text-align: center; padding: 10px 15px;\"><button type=\"button\" class=\"btn btn-info\"  onclick='alertClose()'>确定</button></div></div></div></div>";
    strAlert = strAlert.replace("[title]", title);
    strAlert = strAlert.replace("[alertCont]", cont);
    if ($("#myAlertNoMask").length == 0) {
        $("<div id='divAlertNoMask'></div>").appendTo($("body"));
    }
    $("#divAlertNoMask").html(strAlert);
    $('#myAlertNoMask').modal('show');
    //垂直居中
    var height = $(window).height() / 2 - $("#divModalNoMask").height() / 2;
    var left = $(window).width() / 2 - $("#divModalNoMask").width() / 2;
    $("#divModalNoMask").css("margin-top", height);
    $("#divModalNoMask").css("margin-left", left);
}

//confirm（有遮罩层） condition 如有多个以$分隔
function bootConfirm(title, cont, condition, callback) {
    var strAlert = "<div class=\"modal bs-example-modal-sm\" id=\"myConfirm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalConfirmLabel\" data-backdrop=\"static\" ><div id=\"divMyConfirm\" class=\"modal-dialog modal-sm\" role=\"document\" style='width:300px'><div class=\"modal-content\"><div class=\"modal-header\" style=\"padding:10px 15px;\"><h4 class=\"modal-title\" id=\"myModalConfirmLabel\">[title]</h4></div><div class=\"modal-body\">[alertCont]</div><div class=\"modal-footer\" style=\"text-align: center; padding: 10px 15px;\"><button type=\"button\" class=\"btn btn-info\"  onclick='bootConfirmOk(\"" + condition + "\"," + callback + ")'>确定</button><button type=\"button\" class=\"btn btn-default\" onclick='$(\"#myConfirm\").modal(\"hide\");'>关闭</button></div></div></div></div>";
    strAlert = strAlert.replace("[title]", title);
    strAlert = strAlert.replace("[alertCont]", cont);
    if ($("#divConfirm").length == 0) {
        $("<div id='divConfirm'></div>").appendTo($("body"));
    }
    $("#divConfirm").html(strAlert);
    $('#myConfirm').modal('show');
    //垂直居中
    var height = $(window).height() / 2 - $("#divMyConfirm").height() / 2;
    $("#divMyConfirm").css("margin-top", height);
}

//condition 如有多个以$分隔
function bootConfirmOk(condition, callback) {
    $("#myConfirm").modal("hide");
    callback(condition);
}

//编辑窗口 Dialog
function bootDialog(title, width, height, ifrsrc) {
    var strDialog = "<div class=\"modal fade\" id=\"feedEdit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"feedEditLabel\" data-backdrop=\"static\" > <div class=\"modal-dialog\" id='divMyBootDialog' role=\"document\" style=\"width:" + width + "px;\"><div class=\"modal-content\"><div class=\"modal-header\"><h4 class=\"modal-title\" id=\"feedEditLabel\">[title]</h4></div><iframe id=\"ifr\" src=\"\" width=\"100%\" height=\"" + height + "px\" frameborder=\"0\" scrolling=\"no\"></iframe></div></div></div>";

    strDialog = strDialog.replace("[title]", title);
    if ($("#myBootDialog").length == 0) {
        $("<div id='divBootDialog'></div>").appendTo($("body"));
    }
    $("#divBootDialog").html(strDialog);
    $("#ifr").attr("src", ifrsrc);
    $("#feedEdit").modal("show");
    //垂直居中
    var height = $(window).height() / 2 - height / 2 - 50;
    var left = $(window).width() / 2 - $("#divMyBootDialog").width() / 2;
    $("#divMyBootDialog").css("margin-top", height);
    $("#divMyBootDialog").css("margin-left", left);
}

//关闭编辑窗口 Dialog
function closeBootDialog() {
    $("#feedEdit").modal("hide");
}

//初始化Dialog的body高度
function initBootDialogBodyHeight() {
    var footHeight = $(".modal-footer").height() + 25;
    if (footHeight <= 63) {
        footHeight = 63;
    }
    else {
        footHeight = footHeight - 25;
    }
    if (navigator.userAgent.indexOf("Trident") != -1 || navigator.userAgent.indexOf("MSIE") != "-1") {

        footHeight = footHeight+0;
    }
    else {
        footHeight = footHeight + 35;
    }

    $(".modal-body").height($("#ifr", (window.parent.document)).height() - footHeight);
}

//生成strwhere查询条件   格式为：字段>={值}$字段={值}$字段 like '%?%' {值}
function JsWhere(data) {
    var strWhere = "";
    var paras = data.split('&');
    for (var i = 0; i < paras.length; i++) {
        var proValue = paras[i].split('=');
        if (proValue[1] + "" != "") {
            var element = $("#" + proValue[0]);
            if ((element.attr("property") + "") != "undefined") {
                if (element.attr("type") == "select") {
                    if (proValue[1] != "-1") {
                        strWhere += element.attr("property") + element.attr("relation");
                        strWhere += "{" + proValue[1] + "}" + "$";
                    }
                }
                else {
                    strWhere += element.attr("property") + element.attr("relation");
                    strWhere += "{" + proValue[1] + "}" + "$";
                }
            }
        }
    }
    if (strWhere != "") {
        strWhere = strWhere.substr(0, strWhere.length - 1);
    }
    return strWhere;
}

//只允许输入实数
function clearNoNum(obj) {
    //先把非数字的都替换掉，除了数字和.
    obj.value = obj.value.replace(/[^\d.-]/g, "");
    //必须保证第一个为数字而不是.
    obj.value = obj.value.replace(/^\./g, "");
    //保证只有出现一个.而没有多个.
    obj.value = obj.value.replace(/\.{2,}/g, ".");
    //保证.只出现一次，而不能出现两次以上
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    //保证只有出现一个-而没有多个-
    obj.value = obj.value.replace(/-{2,}/g, "-");
    //保证.只出现一次，而不能出现两次以上
    obj.value = obj.value.replace("-", "$#$").replace(/-/g, "").replace("$#$", "-");
}

//只允许输入整数
function clearNoInt(obj) {
    //先把非数字的都替换掉，除了数字和.
    obj.value = obj.value.replace(/[^\d-]/g, "");
    //保证只有出现一个-而没有多个-
    obj.value = obj.value.replace(/-{2,}/g, "-");
    //保证.只出现一次，而不能出现两次以上
    obj.value = obj.value.replace("-", "$#$").replace(/-/g, "").replace("$#$", "-");
}

//除法函数，用来得到精确的除法结果 
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。 
//调用：accDiv(arg1,arg2) 
//返回值：arg1除以arg2的精确结果 
function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))
        return (r1 / r2) * pow(10, t2 - t1);
    }
}

//乘法函数，用来得到精确的乘法结果 
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。 
//调用：accMul(arg1,arg2) 
//返回值：arg1乘以arg2的精确结果 
function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

//加法函数，用来得到精确的加法结果 
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。 
//调用：accAdd(arg1,arg2) 
//返回值：arg1加上arg2的精确结果 
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}

//减法函数，用来得到精确的减法结果 
//说明：javascript的减法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的减法结果。 
//调用：accSubtr(arg1,arg2) 
//返回值：arg1减去arg2的精确结果 
function accSubtr(arg1, arg2) {
    var r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}