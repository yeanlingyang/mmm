// 入口函数
$(function() {
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
    var id = getSearch('brandtitleid');
  //发送ajax  渲染页面
  $.ajax({
    url :'http://localhost:3000/api/getbrand',
    data: {
      brandtitleid :id
    },
    dayaTyype:'json',
    success:function(info) {
      console.log(info);
      var htmlStr =template('brandTp1',info);
      $('.content ul').html(htmlStr);
    }
  })
})