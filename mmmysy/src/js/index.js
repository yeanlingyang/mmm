$(function() {
  //发送ajax请求 渲染页面
  $.ajax({
    url :' http://localhost:3000/api/getindexmenu',
    dataType :'json',
    success:function(info) {
      console.log(info);
      var htmlStr = template('indexTp1',info);
      $('.nav ul').html(htmlStr);
    }
  });

  //点击第八个
  $('.nav ul').on('click','li:nth-child(8)',function() {
    $(this).nextAll().toggleClass('active');
  });

  // 折扣
  $.ajax({
    url :'http://localhost:3000/api/getmoneyctrl',
    dataType:'json',
    success:function(info) {
      var htmlStr = template('countTp1',info);
      $('.content ul').html(htmlStr);
    }
  })

})