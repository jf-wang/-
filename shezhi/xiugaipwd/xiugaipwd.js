$(".true").click(function() {
    var pwd = localStorage.getItem("passWord");
    var id = localStorage.getItem("id");
    var pwd1 = md5($(".originalPassword").val());
    var pwd2 = md5($(".newPassword").val());
    var pwd3 = md5($(".repetitionPassword").val());
    console.log(pwd)
    if (pwd1 == pwd) {
        if (pwd2 == pwd3) {
            $.ajax({
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                url: "***",
                data: { id: id, pwd1: pwd1, pwd2: pwd2 },
                dataType: "json",
                success: function(result) {
                    alert("密码修改成功")
                    location.reload() //刷新页面
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("数据请求失败,数据保存失败");
                }
            });
        } else {
            alert("两次密码不一致")
        }
    } else {
        alert("原密码不正确")
    }
})