$(function(){
	$('.line svg').click(function(){
		$(this).toggleClass('active')
	});
});
$(function(){
	$('.btn_menu').click(function(){
		$('.left-menu').toggleClass('active')
		$('.btn_menu').toggleClass('active')
	});
});