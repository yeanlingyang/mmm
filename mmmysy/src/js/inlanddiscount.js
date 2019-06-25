//入口函数
$(function() {
  //发送ajax   渲染页面
  $.ajax({
    url :'http://localhost:3000/api/getinlanddiscount',
    dataType :'json',
    success:function(info) {
      console.log(info);
      var htmlStr = template('countTp1',info);
      $('.content ul').html(htmlStr);
    }
  })
});