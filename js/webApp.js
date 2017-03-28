/**
 * Created by Xieyu on 2017/3/28.
 */

var height=$(window).height();
var width=$(window).width();
//界面跳转选择
$(".select1").click(function(){
    $('html,body').animate({scrollTop: '0px'}, 800);
    $(".select1").css("opacity",1);
    $(".select2").css("opacity",0.2);
    $(".select3").css("opacity",0.2);

});
$(".select2").click(function(){
    $('html,body').animate({scrollTop: height}, 800);
    $(".select1").css("opacity",0.2);
    $(".select2").css("opacity",1);
    $(".select3").css("opacity",0.2);
});
$(".select3").click(function(){
    $('html,body').animate({scrollTop: 2*height}, 800);
    $(".select1").css("opacity",0.2);
    $(".select2").css("opacity",0.2);
    $(".select3").css("opacity",1);
});