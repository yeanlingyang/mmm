//入口函数
$(function() {
  //发送ajax  渲染页面
  $.ajax({
    url :'http://localhost:3000/api/getsitenav',
    dataType:'json',
    success:function(info) {
    console.log(info);
    var htmlStr = template('sitTp1',info);
    $('.nav .link').html(htmlStr);
  }
  })
})