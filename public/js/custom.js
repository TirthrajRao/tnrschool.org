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
		$('.admission_inquiry .development_tab_content.active_tab_on_load .r-tabs-anchor').trigger('click');
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
		$("#datepicker,#datepicker1,#datepicker2,#datepicker3").datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd/mm/yy'
		});
	});

	$('a.add_more_member').click(function(){
		var addFamilyMember = (`<div class="single_family_member_detail">
			<div class="form-row">
			<div class="col-sm-6 form-group">
			<input type="text" class="form-control" placeholder="Name">
			</div>
			<div class="col-sm-3 col-6 form-group">
			<input type="text" class="form-control" placeholder="Age">
			</div>
			<div class="col-sm-3 col-6 form-group">
			<input type="text" class="form-control" placeholder="M/F">
			</div>
			<div class="col-sm-6 form-group">
			<input type="text" class="form-control" placeholder="Relation With Applicant">
			</div>
			<div class="col-sm-6 form-group">
			<input type="text" class="form-control" placeholder="Occupation">
			</div>
			</div>
			<hr>
			</div>`);
		$(".all_family_members").append(addFamilyMember);
	});
	
	$('a.add_more_experience').click(function(){
		var addFamilyMember = (`<div class="single_experience">
			<div class="form-row">
			<div class="col-12 form-group">
			<input type="text" placeholder="Name of Organization & City" class="form-control">
			</div>
			<div class="col-lg-3 col-sm-6 form-group">
			<input type="text" id="datepicker2" placeholder="From" class="form-control">
			</div>
			<div class="col-lg-3 col-sm-6 form-group">
			<input type="text" id="datepicker3" placeholder="To" class="form-control">
			</div>
			<div class="col-lg-3 col-sm-6 form-group">
			<input type="text" placeholder="Duration" class="form-control">
			</div>
			<div class="col-lg-3 col-sm-6 form-group">
			<input type="text" placeholder="Last Salary" class="form-control">
			</div>
			<div class="col-md-12 form-group">
			<textarea placeholder="Responsibilities (Please mention classes and subjects taught if applicable)" class="form-control"></textarea>
			</div>
			</div>
			<hr>
			</div>`);
		$(".all_experience").append(addFamilyMember);
	});

	$('a.add_education').click(function(){
		var addEducation = (`<div class="single_education">
			<div class="form-row">
			<div class="form-group col-md-6">
			<select class="form-control course_select">
			<option selected disabled>Course</option>
			<option value="SSC">SSC</option>
			<option value="HSC">HSC</option>
			<option value="Graduation">Graduation</option>
			<option value="PostGraduation">Post Graduation</option>
			<option value="Professional">Professional</option>
			<option value="Other">Other</option>
			</select>
			</div>
			<div class="form-group col-md-6">
			<input type="text" class="form-control" placeholder="Name of Institute & City">
			</div>
			<div class="form-group col-md-6">
			<input type="text" class="form-control" placeholder="University/Board">
			</div>
			<div class="form-group col-md-6">
			<input type="text" class="form-control" placeholder="Year of Completion">
			</div>
			<div class="form-group col-md-6">
			<select class="form-control">
			<option selected disabled>Medium of Instruction</option>
			<option>English</option>
			<option>Gujarati</option>
			<option>Hindi</option>
			<option>Other</option>
			</select>
			</div>
			<div class="form-group col-md-6">
			<input type="text" class="form-control disable_for_HSC_and_SSC" placeholder="Degree Obtained" disabled="disabled">
			</div>
			<div class="form-group col-md-6">
			<input type="text" class="form-control" placeholder="Marks Obtained">
			</div>
			<div class="form-group col-md-6">
			<input type="text" class="form-control" placeholder="Subjects">
			</div>
			</div>
			<hr>
			</div>`);
		$(".all_education_detial").append(addEducation);
		$('.course_select').on('change', function(){
			if(this.value == 'Graduation' || this.value == 'PostGraduation' || this.value == 'Professional' || this.value == 'Other'){
				$(this).parents('.single_education').children('.form-row').children('.form-group').children('.disable_for_HSC_and_SSC').removeAttr("disabled");
			}else{
				$(this).parents('.single_education').children('.form-row').children('.form-group').children('.disable_for_HSC_and_SSC').attr('disabled', 'disabled');
			}
		});
	});

	$('.post_apply_for').on('change', function(){
		if(this.value == 'Teacher'){
			$('.subject_and_class').fadeIn();
		}else{
			$('.subject_and_class').fadeOut();
		}
	});

	$('.course_select').on('change', function(){
		if(this.value == 'Graduation' || this.value == 'PostGraduation' || this.value == 'Professional' || this.value == 'Other'){
			$(this).parents('.single_education').children('.form-row').children('.form-group').children('.disable_for_HSC_and_SSC').removeAttr("disabled");
		}else{
			$(this).parents('.single_education').children('.form-row').children('.form-group').children('.disable_for_HSC_and_SSC').attr('disabled', 'disabled');
		}
	});
	
	setTimeout(function(){
		AOS.init();
	}, 300);
});