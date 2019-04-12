$(function(){
	$('.line svg').click(function(){
		$(this).toggleClass('active')
	});
	$("#menu, #top").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        // event.preventDefault();



        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),



        //узнаем высоту от начала страницы до блока на который ссылается якорь

        top = $(id).offset().top;



        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1500);

    });
});
$(function(){
	$('.btn_menu').click(function(){
		$('.menu ul').toggleClass('active')
		$('.btn_menu').toggleClass('active')
	});
});

$(function(){
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header').addClass("sticky");
}
else{
$('.header').removeClass("sticky");
}
});
});

$(function(){

	if( window.innerWidth >= 992 ){
 
      $('.news .row .single-news:first-child').addClass('col-md-12')
	$('.news .row .single-news:nth-child(2)').addClass('col-md-4')
	$('.news .row .single-news:nth-child(3)').addClass('col-md-4')
	$('.news .row .single-news:nth-child(4)').addClass('col-md-4')
	$('.news .row .single-news:nth-child(5)').addClass('col-md-6')
	$('.news .row .single-news:nth-child(6)').addClass('col-md-6')
 } else {
     $('.news .row .single-news:first-child').addClass('col-md-6 col-12')
	$('.news .row .single-news:nth-child(2)').addClass('col-md-6 col-12')
	$('.news .row .single-news:nth-child(3)').addClass('col-md-6 col-12')
	$('.news .row .single-news:nth-child(4)').addClass('col-md-6 col-12')
	$('.news .row .single-news:nth-child(5)').addClass('col-md-6 col-12')
	$('.news .row .single-news:nth-child(6)').addClass('col-md-6 col-12')
 } 
	
	
	
});

 var touchHover = function() {
    $('[data-hover]').click(function(e){
        e.preventDefault();
        var $this = $(this);
        var onHover = $this.attr('data-hover');
        var linkHref = $this.attr('href');
        if (linkHref && $this.hasClass(onHover)) {
            location.href = linkHref;
            return false;
        }
        $this.toggleClass(onHover);
    });
};
$(document).ready(function() { touchHover(); });


$(function($) {
  var allAccordions = $('.accordion div.data');
  var allAccordionItems = $('.accordion .accordion-item');
  $('.accordion > .accordion-item').click(function() {
    if($(this).hasClass('open'))
    {
      $(this).removeClass('open');
      $(this).next().slideUp("slow");

    }
    else
    {
    //allAccordionItems.removeClass('open');
    $(this).addClass('open');
    $(this).next().slideDown("slow");
    return false;
    }
  });
});


$(document).ready(function() {
  $('#next_btn').click(function() {
    var $next = $('.news-pagination .row.active ').next();
  //  $('.news-pagination .row ').removeClass('active');
    $next.addClass('active');
    if ($(".news-pagination .row").last().hasClass("active")) {
      $('#next_btn').removeClass('active');
      $('.page .arrow').css('active');
    } 
   
    
  });
});

// $(document).ready(function() {
//   $('#prev_btn').click(function() {
//     var $prev = $('.news-pagination .row.active ').prev();
//     $('.news-pagination .row ').removeClass('active');
//     $prev.addClass('active');
//   });
// });