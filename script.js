$(document).ready(function(){

	// Rotate Squares
	$(window).bind('scroll', function() {
		let scrolled = $(window).scrollTop();

		$('.left-square').css('transform', 'rotate(' + (20 - (scrolled / 10)) + 'deg)');
		$('.right-square').css('transform', 'rotate(' + (-20 + (scrolled / 10)) + 'deg)');
	});
});