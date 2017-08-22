 $.ajax({ //页面加载
     type: "POST",
     contentType: "application/x-www-form-urlencoded",
     url: "***",
     data: {},
     dataType: "json",
     success: function(result) {
         var ds = JSON.parse(result);
         //  console.log(ds);
         $(".number").text(ds.Table.length)
         for (var i = 0; i < ds.Table.length; i++) {
             var id = ds.Table[i].id;
             var code = ds.Table[i].code; //编号
             var bz = ds.Table[i].bz; //备注
             var name = ds.Table[i].name; //设备类型名称
             var addr = ds.Table[i].addr; //系数
             var xmname = ds.Table[i].xmname; //项目
             var ii = $("<tr>" +
                 "<td>" + code + "</td>" +
                 "<td>" + name + "</td>" +
                 "<td>" + addr + "</td>" +
                 "<td>" + xmname + "</td>" +
                 "<td>" + bz + "</td>" +
                 "<td>" +
                 "<span class='bianji'  onclick='bianji(this)' data-toggle='modal' data-target='#myModal_shebeibianji'>编辑</span>" +
                 "</td>" +
                 "<td class='id'>" + id + "</td>" +
                 "</tr>");
             ii.appendTo("tbody");
         }
         dd();
     },
     error: function(XMLHttpRequest, textStatus, errorThrown) {
         alert("数据请求失败,或当前网络不可用");
     }
 });
 $.ajax({
     type: "POST",
     contentType: "application/x-www-form-urlencoded",
     url: "***",
     data: {},
     dataType: "json",
     success: function(result) {
         var ds = JSON.parse(result);
         //  console.log(ds);
         for (var i = 0; i < ds.Table.length; i++) {
             var option = $("<option value=" + ds.Table[i].id + ">" + ds.Table[i].name + "</option>");
             option.appendTo(".xinjian_xmname");
             //  option.appendTo(".shebei_xmname");
         }
     },
     error: function(XMLHttpRequest, textStatus, errorThrown) {
         alert("数据请求失败,或当前网络不可用");
     }
 });
 $.ajax({
     type: "POST",
     contentType: "application/x-www-form-urlencoded",
     url: "***",
     data: {},
     dataType: "json",
     success: function(result) {
         var ds = JSON.parse(result);
         //  console.log(ds);
         for (var i = 0; i < ds.Table.length; i++) {
             var option = $("<option value=" + ds.Table[i].id + ">" + ds.Table[i].name + "</option>");
             //  option.appendTo(".xinjian_xmname");
             option.appendTo(".shebei_xmname");
         }
     },
     error: function(XMLHttpRequest, textStatus, errorThrown) {
         alert("数据请求失败,或当前网络不可用");
     }
 });

 function bianji(com) { //编辑
     window.parent.zhezhao();
     var biaohao = $(com).parent().siblings().eq(0).html(); //获取当前的编号
     var name = $(com).parent().siblings().eq(1).html(); //获取当前的编号
     var addr = $(com).parent().siblings().eq(2).html(); //获取当前的编号
     var xmnane = $(com).parent().siblings().eq(3).html(); //获取当前的编号
     var bz = $(com).parent().siblings().eq(4).html(); //获取当前的编号
     var id = $(com).parent().siblings().eq(5).html();
     //  console.log(id)
     $(".shebei_bianhao").val(biaohao);
     $(".shebei_name").val(name);
     $(".shebei_addr").val(addr);
     //  $(".shebei_xmname").val(xmnane);
     $(".shebei_bz").val(bz);
     $(".tainjia_bianji").click(function() {
         var baocun_id = id;
         var baocun_code = $(".shebei_bianhao").val();
         var baocun_name = $(".shebei_name").val();
         var baocun_addr = $(".shebei_addr").val();
         var baocun_xmname = $(".shebei_xmname").val();
         var baocun_bz = $(".shebei_bz").val();
         $.ajax({
             type: "POST",
             contentType: "application/x-www-form-urlencoded",
             url: "***",
             data: { id: baocun_id, code: baocun_code, name: baocun_name, addr: baocun_addr, xmid: baocun_xmname, bz: baocun_bz, uid: uid, pwd: pwd },
             dataType: "json",
             success: function(result) {
                 location.reload(); //刷新页面
             },
             error: function(XMLHttpRequest, textStatus, errorThrown) {
                 alert("数据请求失败,或当前网络不可用");
             }
         });
     });
 };
 $(".tainjia").click(function() { //新建
     var code = $(".xinjian_bianhao").val(); //编号
     var name = $(".xinjian_name").val(); //名称
     var addr = $(".xinjian_addr").val(); //系数
     var xmname = $(".xinjian_xmname").val(); //项目
     var bz = $(".xinjian_bz").val(); //备注
     $.ajax({
         type: "POST",
         contentType: "application/x-www-form-urlencoded",
         url: "***",
         data: { code: code, name: name, addr: addr, xmid: xmname, bz: bz, uid: uid, pwd: pwd },
         dataType: "json",
         success: function(result) {
             //  console.log(result)
             //  console.log(this.data);
             location.reload(); //刷新页面
         },
         error: function(XMLHttpRequest, textStatus, errorThrown) {
             alert("数据请求失败,或当前网络不可用");
         }
     });
 });