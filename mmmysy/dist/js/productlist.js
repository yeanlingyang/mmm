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
var productid = getSearch('categoryid');
var pageid = 1;
var currentPage;
$(function() {
  //发送ajax
  render();
//  封装
  function render() {
    $.ajax({
      url :'http://localhost:3000/api/getproductlist',
      data : {
        pageid:pageid,
        categoryid :productid 
      },
      dataType :'json',
      success:function(info) {
        console.log(info);
        var htmlStr = template('productTpl',{list: info.result.list });
        $('.content ul').html(htmlStr);
        currentPage=info.result.count/10;
        console.log(currentPage);
        //声明一个空的字符串
        var str = '';
        for (var i = 1;i<=currentPage;i++) {
          str+= '<option value='+i+'>第' + i + '页</option>'
        }
        //获取选择器里的数值
        $('#panagitor').html(str);
        $('#panagitor').val(pageid);
      }
    });
  }
  //给页数添加change事件事件
  $('#panagitor').on('change',function() {
    pageid =$(this).val();
    console.log(pageid);
    //重新渲染页面
    render();
  })
  //给上一页添加点击事件
  $('.one').on('click',function() {
    pageid--;
    var length =$('option').length;
    if(pageid<1) {
      pageid=1;
      return;
    }
    render();
  })
  //给下一页添加点击事件
    $('.two').on('click',function() {
      pageid++;
      var length = $('option').length;
      if(pageid>length) {
        pageid = length;
        return;
      }
      render();
    })
    // 发送ajax请求  渲染导航
    $.ajax({
      url :'http://localhost:3000/api/getcategorybyid',
      data :{
        categoryid :productid
      },
      dataType:'json',
      success:function(info) {
        console.log(info);
        var htmlStr = template('listTp1',info.result);
        $('.classify').html(htmlStr);
      }
    })
}) 