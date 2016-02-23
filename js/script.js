var curPosition = 50;
var curSlide = 2;
var hoverHeader = false;
var topShow = 800;

function changeTitle(){
	switch(curPosition){
		case 0:   curSlide = 1; break;
		case 50:  curSlide = 2; break;
		case 100: curSlide = 3; break;
	}
	$(".text-1").css({"opacity":"0","display":"none"});
	$(".text-2").css({"opacity":"0","display":"none"});
	$(".text-3").css({"opacity":"0","display":"none"});
	$(".text-"+curSlide).css({"opacity":"1","display":"inline-block"});
}

$(document).ready(function(){
	$(".left-arrow").on("click",function(){
		if(curPosition == 0){
			curPosition = 100;
		}
		else{
			curPosition -= 50;
		}
		$("header").css({"backgroundPosition":curPosition+"%"});
		changeTitle();
	});
	$(".right-arrow").on("click",function(){
		if(curPosition == 100){
			curPosition = 0;
		}
		else{
			curPosition += 50;
		}
		$("header").css({"backgroundPosition":curPosition+"%"});
		changeTitle();
	});

	$("#up").on("click", function(e){
		$("html, body").animate({scrollTop: 0}, 1000);
		e.preventDefault();
	});

	$(window).on("scroll", function(){
		if($(this).scrollTop() > topShow){
			$("#up").css({"transform": "translateX(0)"});
		}
		else{
			$("#up").css({"transform": "translateX(100px)"});
		}
	});
});