
// 
$(".openBtn_tablet").on('click',function () {
  $("#g-nav").slideToggle();
});

$(".openBtn_smartphone").on('click',function () {
    $("#g-nav").fadeToggle();
});

// 
let resflag = "";
$(window).resize(function () {
  if(window.matchMedia("(min-width: 899px)").matches){
    $("#g-nav").css("display", "block");
    resflag = true;
  } 
  if(window.matchMedia("(max-width: 898px)").matches){
    if(resflag === true){
      $("#g-nav").css("display", "none");
      resflag = "";
    }
  }
});

// 
// bxSlider
$(document).ready(function(){
  $('.slider').bxSlider({
    auto: true,
    slideWidth: 898,
  });
});
