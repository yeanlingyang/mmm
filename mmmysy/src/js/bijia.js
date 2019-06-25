$(function() {
  
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
  var id = getSearch('productid');
  //发送ajax  渲染页面
  $.ajax({
    url :'http://localhost:3000/api/getproduct',
    data : {
      productid:id
    },
    dataType:'json',
    success:function(info) {
      // console.log(info);
      // $('.right').html(template('shop-tmp', info));
      var htmlStr = template('bijiaTp1',info.result);
      $('.all').html(htmlStr); 
      
    }
  })
    //发送ajax  渲染页面


  $.ajax({
    url :'http://localhost:3000/api/getproductcom',
    data : {
      productid :id
    },
    dataType:'json',
    success:function(info) {
      console.log(info);
      var htmlStr = template('bijiaTp2',info);
      $('.evaluate  ul').html(htmlStr);
    }
  })
})