$(function() {
 
//发送ajax请求
$.ajax({
  url:'http://localhost:3000/api/getcategorytitle',
  getType :'json',
  success:function(info) {
    var htmlStr = template('outTp1',info);
    $('.content ul').html(htmlStr);
  }
});
//点击时，显示
  $('.content .parentWrap').on('click','.groupTitle',function() {
    var id = $(this).data('id');
    $(this).next().toggleClass('active').parent().siblings().children().removeClass('active'); 
    //发送ajax请求
    $.ajax({
      url:'http://localhost:3000/api/getcategory',
      data: {
        titleid :id
      },
      dataType :'json',
      success:function(info) {
        console.log(info);
        var htmlStr = template('inTp1',info);
        $('.nav ul').html(htmlStr);
      }
    })
  })
 
})