//入口函数
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
var productid = getSearch('productid ');
  $.ajax({
    url :'http://localhost:3000/api/getmoneyctrlproduct',
    data :{
      productid:productid
    },
    dataType :'json',
    success:function(info) {
      console.log(info);
      var htmlStr = template('monTp1',info);
      $('.content2').html(htmlStr);
    }
  })

})