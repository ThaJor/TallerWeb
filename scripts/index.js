$(document).ready(function (){
	$("a.menu").hover(function(){
 $(this).addClass("cmenu");
 },function(){
 $("a").removeClass("cmenu");
 });


$("a.menu").on("click", function () {
	$(this).addClass("tmenu");

	});

$("a.menu").on("focusout", function () {

	$(this).removeClass("tmenu");

	})

$("footer a,p").hover(function(){
 $(this).addClass("colfoot");
 },function(){
 $("footer a,p").removeClass("colfoot");
 });

});

