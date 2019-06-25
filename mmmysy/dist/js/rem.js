/* 
  适配rem
  rem的设计图  750px
  主要需要订好设计图上  1rem等于多少px

  750 / 15     1rem = 50px    需要设计图的宽度750   html的fontSize: 50px
*/
$(window).resize(function() {
  // console.log(111)
  // 获取屏幕的宽度
  let width = $(window).width()
  // if (width > 750) {
  //   width = 750
  // }
  // if (window < 320) {
  //   width = 320
  // }
  width = Math.max(width, 320)
  width = Math.min(width, 750)
  let fontSize = width / 15

  // 设计图的大小 / 50px   = 屏幕的大小 / 当前屏的fontSize
  $('html').css('fontSize', fontSize.toFixed(2)*2 + 'px')
})

// 页面一加载，就触发resize事件
$(window).resize()
