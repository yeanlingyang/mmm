//入口函数
$(function() {
  //发送ajax  渲染滑动
  $.ajax({
    url :'http://localhost:3000/api/getbaicaijiatitle',
    dataType :'json',
    success:function(info) {
      console.log(info);
      var htmlStr = template('baicaiTp1',info);
      $('.nav ul').html(htmlStr);
    }
  })
  //获取id
  function getSearch(k) {
    var str = location.search;
    str = decodeURI(str);
    str = str.slice(1);
    var arr = str.split('&')
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      var key = arr[i].split('=')[0]
      var value = arr[i].split('=')[1]
      obj[key] = value;
    }
    return obj[k];
  }
    var id = getSearch('titleid ');
    //发送ajax请求  渲染页面
    $('.nav').on('click','li a',function() {
      id = $(this).data('id');
      $(this).parent().addClass('current').siblings().removeClass('current')
     render(id);
    })
    //封装
    render(1);
    function render(id) {
      $.ajax({
        url :'http://localhost:3000/api/getbaicaijiaproduct',
        data:{
          titleid :id
        },
        dataType:'json',
        success:function(info) {
          console.log(info);
          var htmlStr = template('baicaiTp2',info);
          $('.content ul').html(htmlStr);
        }
      })
    }
})