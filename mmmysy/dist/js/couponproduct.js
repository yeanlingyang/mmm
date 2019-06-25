// 入口函数
$(function() {
  //获取商品的id
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
  var id = getSearch('couponid');
  var arr=[];
  //发送ajax  渲染页面
  $.ajax({
    url :'http://localhost:3000/api/getcouponproduct',
    data: {
      couponid:id
    },
    dataType:'json',
    success:function(info) {
      console.log(info);
      var htmlStr = template('proTp1',info);
      $('.title ul').html(htmlStr);
      // for (var i = 0; i < info.result.length; i++) {
      //   arr[i] = info.result[i].couponProductImg
      // }
    }
  })
  //轮播图效果
  //设置点击效果
  $('.title').on('click','img',function(e) {
    e.stopPropagation();
    $('.loading').show();
  })
  var $lis = $('.box li');
  var count = 0;
  $('.arrows .right').click(e => {
    e.stopPropagation();
    count++;
    if (count > $lis.length - 1) {
      count = 0;
    }
    $lis.eq(count).fadeIn().siblings().fadeOut();
  });

  $('.arrows .left').click(e => {
    e.stopPropagation();
    count--;
    if (count < 0) {
      count = $lis.length - 1;
    }
    $lis.eq(count).fadeIn().siblings().fadeOut();
  })

  $(document).on('click', () => $('.loading').hide())
})