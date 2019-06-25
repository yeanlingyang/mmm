//入口函数
$(function() {
  //发送ajax  渲染
  let shopid=0;
  let areaid=0;
  render();
  function render() {
    $.ajax({
      url:'http://localhost:3000/api/getgsproduct',
      data: {
        shopid:shopid,
        areaid:areaid
      },
      dataType:'json',
      success:function(info) {
        console.log(info);
        var htmlStr = template('cuttp1',info);
        $('.content ul').html(htmlStr);
      }
    })
  }
  // 发送ajax请求   获取地区
  $('.first').on('click',function() {
    //点击京东，显示name列表
    $('.name').show();
    //动态渲染列表
    $.ajax({
      url :'http://localhost:3000/api/getgsshop',
      dataType:'json',
      success:function(info) {
        console.log(info);
        var htmlStr = template('nameTp1',info);
        $('.name ul').html(htmlStr);
      }
    })
  })
  $('.second').on('click',function() {
    //点击华北，显示name列表
    $('.name').show();
    //动态渲染列表
    $.ajax({
      url :'http://localhost:3000/api/getgsshoparea',
      dataType:'json',
      success:function(info) {
        console.log(info);
        var htmlStr = template('areaTp1',info);
        $('.name ul').html(htmlStr);
      }
    })
  })
  //给每个里 注册点击事件   （事件委托）  店铺
  $('.name').on('click','.chooseshop',function() {
    //获取当前内容的值
    $('.first').text($(this).text());
    //获取id
    shopid = $(this).data('id');
    $('.name').hide();
    //重新渲染页面
    render();
  })
  //给每个li 注册点击事件   （事件委托）地址
  $('.name').on('click','.choosearea',function() {
    //获取当前内容的值
    $('.second').text($(this).text());
    //获取id
    areaid = $(this).data('id');
    $('.name').hide();
    //重新渲染页面
    render();
  })

  //给blank 设置点击事件  点击时切换显示隐藏
  $('.all').click(function() {
    $('.blank').show();
  })
  $('.blank').click(function() {
    $(this).hide();
  })
})