$(window).on('load',function() {
	$('#loader-wrapper').fadeOut('slow', function(){
		$('body').removeAttr('style');
	});
});
function routeTo(page) {
	window.location.pathname = page;
}
$(document).ready(function(){



	$('.next_step').click(function () {
        $('.admission_inquiry .r-tabs-state-active').next('.r-tabs-state-default').children('.r-tabs-anchor').trigger('click');
    });
    $('.prev_step').click(function () {
        $('.admission_inquiry .r-tabs-state-active').prev('.r-tabs-state-default').children('.r-tabs-anchor').trigger('click');
    });
	var headerHeight = $('header').outerHeight();
	$('header + section').css({'padding-top': headerHeight});
	$(window).on('load resize', function(){
		var headerHeight = $('header').outerHeight();
		$('header + section').css({'padding-top': headerHeight});
	});

	$(window).scroll(function(){
		if($(document).scrollTop() > 100){
			$('header').addClass('fixed_header');
		}
		else{
			$('header').removeClass('fixed_header');
		}
	});

	$('.banner_slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		draggable: false,
		nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
		prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-caret-left" aria-hidden="true"></i></button>'
	});

	$(".jump_to_next a").click(function () {
		var headerHeight = $('header').outerHeight();
		if($(window).width() < 576){
			$('html,body').animate({
				scrollTop: $("#home_about_section").offset().top - headerHeight + 20
			}, 1000);
		}
		else{
			$('html,body').animate({
				scrollTop: $("#home_about_section").offset().top - headerHeight / 2
			}, 1000);
		}
	});

	$(function () {
		$('#development_tab').responsiveTabs({
			startCollapsed: 'accordion',
			setHash: false,
			duration: 500,
			animation: 'slide'
		});
    });
    setTimeout(function(){
    	if($(window).width() < 768){
    		$('.admission_inquiry .development_tab_content.blue_arrow .r-tabs-anchor').trigger('click');
    	}
	},100);

	$(".back_to_top").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	$(window).scroll(function(){
		if ($(window).scrollTop() > 600) {
			$('.back_to_top').fadeIn();
		} else {
			$('.back_to_top').fadeOut();
		}
	});

	$(".about_school_section .about_content a.more_btn").click(function(){
		$(this).parent(".about_content").addClass("full_description");
		$(this).fadeOut("fast", function(){
			$(this).next(".less_btn").fadeIn("fast");
		});
	});
	$(".about_school_section .about_content a.less_btn").click(function(){
		$(this).parent(".about_content").removeClass("full_description");
		$(this).fadeOut("fast", function(){
			$(this).prev(".more_btn").fadeIn("fast");
		});
	});

	$(".word_card .work_content a.more_btn").click(function(){
		$(this).parent(".work_content").addClass("full_description");
		$(this).fadeOut("fast", function(){
			$(this).next(".less_btn").fadeIn("fast");
		});
	});
	$(".word_card .work_content a.less_btn").click(function(){
		$(this).parent(".work_content").removeClass("full_description");
		$(this).fadeOut("fast", function(){
			$(this).prev(".more_btn").fadeIn("fast");
		});
	});

	AOS.init();

	$(".banner_text h2 .title").lettering();
	$(".banner_text h3").lettering();
	$("a.banner_btn").lettering();
	$('.banner_text h3').css({'visibility': 'hidden','opacity': 0});
	$('.banner_text h2').css({'visibility': 'hidden','opacity': 0});
	$('a.banner_btn').css({'visibility': 'hidden','opacity': 0});
	setTimeout(function(){
		animation();
	},1800);

	$('button.slick-arrow').click(function() {
		$('.single_slide.slick-current.slick-active .banner_text h3').css({'visibility': 'hidden','opacity': 0});
		$('.single_slide.slick-current.slick-active .banner_text h2').css({'visibility': 'hidden','opacity': 0});
		$('.single_slide.slick-current.slick-active a.banner_btn').css({'visibility': 'hidden','opacity': 0});
		setTimeout(function(){
			animation();
		},1000);
	});

	function animation() {
		var title1 = new TimelineMax();
		title1.to(".single_slide.slick-current.slick-active .banner_text h3", 0.5, {visibility: 'visible' ,opacity: 1})
		title1.to(".single_slide.slick-current.slick-active .banner_text h2", 0.5, {visibility: 'visible' ,opacity: 1});
		title1.staggerFromTo(".single_slide.slick-current.slick-active .banner_text h2 .title span", 0.7, 
			{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -100},
			{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
		title1.to(".single_slide.slick-current.slick-active a.banner_btn", 0.5, {visibility: 'visible' ,opacity: 1});
	}

	$(function() {
		$("#datepicker,#datepicker1").datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd/mm/yy'
		});
	});
});
