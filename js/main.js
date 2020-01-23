jQuery(function($){
	$('a[href*="#"]').on('click.smoothscroll', function( e ){
		var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
		if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
		var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
		if( ! $target.length ) return;
		e.preventDefault();
		$('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 1500, 'swing', function(){
			window.location.hash = hash;
		});
	});
});

/*scrollup*/
$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});