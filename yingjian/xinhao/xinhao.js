 $.ajax({
     type: "POST",
     contentType: "application/x-www-form-urlencoded",
     url: "***",
     data: {},
     dataType: "json",
     success: function(result) {
         var ds = JSON.parse(result);
         console.log(ds);
         $(".number").text(ds.Table.length)
         for (var i = 0; i < ds.Table.length; i++) {
             var code = ds.Table[i].code; //编号
             var name = ds.Table[i].name; //信号类型名称
             var xmname = ds.Table[i].xmname; //项目
             var mark = ds.Table[i].mark; //单位
             var k = ds.Table[i].k; //修正k
             var b = ds.Table[i].b; //修正b
             var bz = ds.Table[i].bz; //备注
             var rgb = ds.Table[i].rgb;
             var id = ds.Table[i].id;
             var qq = $("<tr>" +
                 "<td>" + code + "</td>" +
                 "<td>" + name + "</td>" +
                 "<td>" + xmname + "</td>" +
                 "<td>" + mark + "</td>" +
                 "<td>" + k + "</td>" +
                 "<td>" + b + "</td>" +
                 "<td>" + bz + "</td>" +
                 "<td style='background:" + rgb + ";'>" + rgb + "</td>" +
                 "<td>" +
                 "<span class='bianji' onclick='bianji(this)' data-toggle='modal' data-target='#myModal_xinhao_bianji'>编辑</span>" +
                 "</td>" +
                 "<td class='id'>" + id + "</td>" +
                 "</tr>");
             qq.appendTo("tbody");
         }
         dd()
     },
     error: function(XMLHttpRequest, textStatus, errorThrown) {
         alert("数据请求失败,数据保存失败");
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
             //  option.appendTo(".shezhi_xiangmu");
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
             option.appendTo(".shezhi_xiangmu");
         }
     },
     error: function(XMLHttpRequest, textStatus, errorThrown) {
         alert("数据请求失败,或当前网络不可用");
     }
 });
 $(".licheng_top").blur(function() {
     var y1 = $(".licheng_top").val();
     var y2 = $(".lichneg_bottom").val();
     var x1 = $(".monilaing_top").val();
     var x2 = $(".monilaing_bottom").val();
     var k = (y2 - y1) / (x2 - x1);
     var b = y1 - (k * x1);
     $(".xiuzheng_k").val(k);
     $(".xiuzheng_b").val(b);
 })
 $(".lichneg_bottom").blur(function() {
     var y1 = $(".licheng_top").val();
     var y2 = $(".lichneg_bottom").val();
     var x1 = $(".monilaing_top").val();
     var x2 = $(".monilaing_bottom").val();
     var k = (y2 - y1) / (x2 - x1);
     var b = y1 - (k * x1);
     $(".xiuzheng_k").val(k);
     $(".xiuzheng_b").val(b);
 })
 $(".monilaing_top").blur(function() {
     var y1 = $(".licheng_top").val();
     var y2 = $(".lichneg_bottom").val();
     var x1 = $(".monilaing_top").val();
     var x2 = $(".monilaing_bottom").val();
     var k = (y2 - y1) / (x2 - x1);
     var b = y1 - (k * x1);
     $(".xiuzheng_k").val(k);
     $(".xiuzheng_b").val(b);
 })
 $(".monilaing_bottom").blur(function() {
     var y1 = $(".licheng_top").val();
     var y2 = $(".lichneg_bottom").val();
     var x1 = $(".monilaing_top").val();
     var x2 = $(".monilaing_bottom").val();
     var k = (y2 - y1) / (x2 - x1);
     var b = y1 - (k * x1);
     $(".xiuzheng_k").val(k);
     $(".xiuzheng_b").val(b);
 })

 $(".xinjian").click(function() { //新建的时候
     var code = $(".xinjian_code").val(); //编号
     var name = $(".xinjian_name").val(); //名称
     var xmname = $(".xinjian_xmname").val(); //项目
     var mark = $(".xinghao_danwei").val(); //单位
     var k = $(".xiuzheng_k").val(); //k
     var b = $(".xiuzheng_b").val(); //b
     var bz = $(".xinjina_bz").val(); //备注
     var rgb = $(".rgb").val() //rgb
     $.ajax({
         type: "POST",
         contentType: "application/x-www-form-urlencoded",
         url: "***",
         data: { code: code, name: name, xmid: xmname, mark: mark, k: k, b: b, bz: bz, rgb: rgb, uid: uid, pwd: pwd },
         dataType: "json",
         success: function(result) {
             alert("添加成功")
             location.reload() //刷新页面
         },
         error: function(XMLHttpRequest, textStatus, errorThrown) {
             alert("数据请求失败,或当前网络不可用");
         }
     });
 });

 function bianji(com) { //编辑s
     window.parent.zhezhao();
     var code = $(com).parent().siblings().eq(0).html(); //获取当前的编号
     var name = $(com).parent().siblings().eq(1).html(); //获取当前的编号
     var xmname = $(com).parent().siblings().eq(2).html(); //获取当前的编号
     var mark = $(com).parent().siblings().eq(3).html(); //获取当前的编号
     var k = $(com).parent().siblings().eq(4).html();
     var b = $(com).parent().siblings().eq(5).html();
     var bz = $(com).parent().siblings().eq(6).html();
     var rgb = $(com).parent().siblings().eq(7).html();
     var id = $(com).parent().siblings().eq(8).html();

     $(".shezhi_bianhao").val(code);
     $(".shezhi_name").val(name);
     //  $(".shezhi_xiangmu").val(xmname);
     $(".shezhi_danwei").val(mark);
     $(".xiuzheng_k").val(k);
     $(".xiuzheng_b").val(b);
     $(".shezhi_beizhu").val(bz);
     $(".rgb").val(rgb);
     $(".tainjia_bianji").click(function() {
         var baocun_id = id;
         var baocun_code = $(".shezhi_bianhao").val();
         var baocun_name = $(".shezhi_name").val();
         var baocun_xmname = $(".shezhi_xiangmu").val();
         var baocun_mark = $(".shezhi_danwei").val();
         var baocun_k = $(".xiuzheng_k").val();
         var baocun_b = $(".xiuzheng_b").val();
         var baocun_rgb = $(".background_shezhi").val();
         var baocun_bz = $(".shezhi_beizhu").val()
         $.ajax({
             type: "POST",
             contentType: "application/x-www-form-urlencoded",
             url: "***",
             data: { id: baocun_id, code: baocun_code, name: baocun_name, xmid: baocun_xmname, mark: baocun_mark, k: baocun_k, b: baocun_b, rgb: baocun_rgb, bz: baocun_bz, uid: uid, pwd: pwd },
             dataType: "json",
             success: function(result) {
                 location.reload() //刷新页面
                     //  console.log(result)
             },
             error: function(XMLHttpRequest, textStatus, errorThrown) {
                 alert("数据请求失败,或当前网络不可用");
             }
         });
     })
 }