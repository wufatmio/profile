(function ($) {
	'use strict';

	// Preloader
	$(window).on("load", function() {
		$('.preloader').fadeOut();
		$('.preloader_div').delay(350).fadeOut('slow');
	});
	
	new WOW().init();
	
	// hide navbar first
	if ($(this).scrollTop()<=100) {
		$(".navbar").hide();
	}

	// fade in navbar after scroll down
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
	
	// Numerical Animation
	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	
	// Typed Config
	$(".typed").typed({
		strings: [
			"Web Developer.", 
			"A Student.",
			"Still Learning more..."
		],
		typeSpeed: 100,
		backSpeed: 0,
		loop: true
	});
	
	// Smooth Scroll
	
	$(".nav_head").click(function() {
		$('html, body').animate({
			scrollTop: $("#head").offset().top
		}, 500);
	});
	
	$(".nav_about").click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 500);
	});
	
	$(".nav_works").click(function() {
		$('html, body').animate({
			scrollTop: $("#works").offset().top
		}, 500);
	});
	
	$(".nav_contact").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 500);
	});
})(jQuery);