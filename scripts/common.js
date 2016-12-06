$(document).ready(function (){
	$(".secciones").hover(function(){
 $(this).addClass("cmenu");
 },function(){
 $("a").removeClass("cmenu");
 });


$("#menu-1").on("click", function () {
	$(this).addClass("tmenu");

	});

$("#menu-1").on("focusout", function () {

	$(this).removeClass("tmenu");

	})

$(".nave").hover(function(){
 $(this).addClass("cmenu");
 },function(){
 $("a").removeClass("cmenu");
 });

$("#menu-1").on("click",function(){

	$(".desplegable").fadeToggle(500);
	
});

$("footer a,p").hover(function(){
 $(this).addClass("colfoot");
 },function(){
 $("footer a,p").removeClass("colfoot");
 });

$(".celu").on("click",function(){

	$("#cajahead").fadeToggle(500);
});

});
