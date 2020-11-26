// 헤더 스크립트
var header = $('.header')
var btnTop = $('.btn_top') 


$(window).scroll(function(){
  var scrollTopValue = $(document).scrollTop()
  
  if(scrollTopValue > 0){
    header.addClass('active')      
  }else(
    header.removeClass('active')      
  )


  if(scrollTopValue > 900){
    btnTop.fadeIn()   
  }else(
    btnTop.fadeOut()   
  )
})

btnTop.click(function(){
$('html, body').animate({scrollTop:0},400)
}) 
 