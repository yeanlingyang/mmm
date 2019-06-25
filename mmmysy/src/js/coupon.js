// 回调函数
$(function() {
  //发送ajax   渲染数据
  $.ajax({
    url :'http://localhost:3000/api/getcoupon',
    dataType:'json',
    success:function(info) {
      console.log(info);
      var htmlStr = template('couTp1',info);
      $('.content ul').html(htmlStr);
    }
  })
})