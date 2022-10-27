$('.inv-mg-paste').keyup(function () {

	if ($(this).val().length == 0) {
		$('.ism-static-results').show();
		$('.ism-dynamic-results').hide();
	} else {
		$('.ism-dynamic-results').show();
		$('.ism-static-results').hide();
	}
}).keyup();


$('.ism-button').find('.ism-popup').on('click', function () {
	$('.ism_popup-main').toggleClass('active');
	$('body').css('overflow', 'hidden');
});

$('.ism-popup_close-button').click(function (e) {
	e.preventDefault();
	$('.inv-mg-paste').val('');
	$('.inv-mg-paste').trigger('input');
	var el = document.querySelector('.inv-mg-paste');
	if ($('.inv-mg-paste').val().length == 0) {
		$('.ism-static-results').show();
		$('.ism-dynamic-results').hide();
	}
	else {
		$('.ism-static-results').hide();
		$('.ism-dynamic-results').show();
	}

	el.dispatchEvent(new Event('input', { bubbles: true }));
	$('.ism_popup-main').toggleClass('active');
	$('body').css('overflow', 'auto');
});

$(".ism_popup-main").click(function (e) {
	if (event.target == this) {
		e.preventDefault();
		$('.inv-mg-paste').val('');
		$('.inv-mg-paste').trigger('input');
		var ela = document.querySelector('.inv-mg-paste');
		if ($('.inv-mg-paste').val().length == 0) {
			$('.ism-static-results').show();
			$('.ism-dynamic-results').hide();
		}
		else {
			$('.ism-static-results').hide();
			$('.ism-dynamic-results').show();
		}

		ela.dispatchEvent(new Event('input', { bubbles: true }));
		$('.ism_popup-main').toggleClass('active');
		$('body').css('overflow', 'auto');
	}
});

$('#ism-form').on('keyup keypress', function (e) {
	var keyCode = e.keyCode || e.which;
	if (keyCode === 13) {
		e.preventDefault();
		return false;
	}
});

$('.who-we-are_single-member').click(function () {
	$(this).siblings('.who-we-are_members-single_bio').addClass('active');
	$('body').css('overflow', 'hidden');
});


$('.popup_close-button-bio').click(function () {
	$(this).closest('.who-we-are_members-single_bio').removeClass('active');
	$('body').css('overflow', 'visible');
});

$('.who-we-are_members-single_bio').on('click', function () {
	if (event.target == this) {
		$(this).removeClass('active');
		$('body').css('overflow', 'visible');
	}
});


$("#ab-one_no").click(function () {
	$("body").css("overflow", "hidden"),
		$("#ab-no").css("display", "block"),
		$("#ab-yes").css("display", "none"),
		$("#ab-two_cashflow").css("display", "none"),
		$("#cashflow-ab_test").css("display", "flex"),
		$("#cashflow-ab_test").fadeIn(500);
}),
	$("#ab-one_yes").click(function () {
		$("body").css("overflow", "hidden"),
			$("#ab-no").css("display", "none"),
			$("#ab-yes").css("display", "flex"),
			$("#ab-two_cashflow").css("display", "none"),
			$("#cashflow-ab_test").css("display", "flex"),
			$("#cashflow-ab_test").fadeIn(500),
			(responsiveAnimationHeight = $(".ab-test-cf-animation-wrapper").outerHeight()),
			dragDetector();
	}),
	$("#ab-two_yes").click(function () {
		$("body").css("overflow", "hidden"),
			$("#ab-no").css("display", "none"),
			$("#ab-yes").css("display", "none"),
			$("#ab-two_cashflow").css("display", "block"),
			$("#cashflow-ab_test").css("display", "flex"),
			$("#cashflow-ab_test").fadeIn(500);
	}),
	$(".ab-test_button-option-three.first").click(function () {
		let o = $(this);
		$(this).hasClass("opened-dd")
			? (991 > $(window).width()
				? ($(o).find(".pill-plus_icon").css("display", "flex"),
					$(o).find(".pill-minus_icon").css("display", "none"),
					$(".ab-test_button-option-three_animated-bg").animate({ width: "100%", height: "0px" }, 500),
					setTimeout(function () {
						$(".closed-funds_ab-content").animate({ opacity: 0 }, 500), $(".relative-button").animate({ opacity: 1 }, 500), $(".minus-button").animate({ opacity: 0 }, 500);
					}, 500))
				: ($(o).find(".pill-plus_icon").css("display", "flex"),
					$(o).find(".pill-minus_icon").css("display", "none"),
					$(".relative-button").animate({ opacity: 1 }, 500),
					$(".closed-funds_ab-content").animate({ opacity: 0 }, 500),
					$(".minus-button").animate({ opacity: 0 }, 500),
					setTimeout(function () {
						$(".ab-test_button-option-three_animated-bg").animate({ width: "0%", height: "0%" }, 500);
					}, 500)),
				$(this).toggleClass("opened-dd"))
			: (991 > $(window).width()
				? ($(o).find(".pill-plus_icon").css("display", "none"),
					$(o).find(".pill-minus_icon").css("display", "flex"),
					$(".closed-funds_ab-content").animate({ opacity: 1 }, 500),
					$(".ab-test_button-option-three_animated-bg").animate({ height: responsiveAnimationHeight + "px", width: "100%" }, 500))
				: ($(".relative-button").animate({ opacity: 0 }, 500),
					$(o).find(".pill-plus_icon").css("display", "none"),
					$(o).find(".pill-minus_icon").css("display", "flex"),
					setTimeout(function () {
						$(".ab-test_button-option-three_animated-bg").animate({ width: "100%", height: "100%" }, 500),
							setTimeout(function () {
								$(".minus-button").animate({ opacity: 1 }, 500), $(".closed-funds_ab-content").animate({ opacity: 1 }, 500);
							}, 500);
					}, 500)),
				$(this).toggleClass("opened-dd"));
	});

function dragDetector() {
	var o = Math.round($(".closed-funds_ab-content").outerWidth()),
		i = Math.round($(".closed-funds_ab-wrapper-mask").outerWidth()),
		e = $(".closed-funds_ab-item").length;
	(abdd = new Dragdealer("ab-scroller", {
		steps: e,
		speed: 0.1,
		requestAnimationFrame: !0,
		horizontal: !0,
		vertical: !1,
		animationCallback: function (e, n) {
			$(".past-future-slider-active_line.ab-test").css("width", Math.round(100 * e) + "%"), $(".closed-funds_ab-wrapper-mask").css("margin-left", -e * (i - o));
		},
	})),
		o < i ? $(".past-future-drag-component.ab-test-component").css("opacity", "1") : $(".past-future-drag-component.ab-test-component").css("opacity", "0");
}

$(".ab-test_button-option").mouseover(function () {
	$(this).find(".hs6, .paragraph-small").addClass("color-text-white");
}),
	$(".ab-test_button-option").mouseout(function () {
		$(this).find(".hs6, .paragraph-small").removeClass("color-text-white");
	}),
	$(".ab-test_button-option-two").mouseover(function () {
		$(".ab-test_button-option-two").removeClass("active-hover"), $(".ab-test_button-text").css("opacity", "0"), $(this).find(".ab-test_button-text").css("opacity", "1"), $(this).addClass("active-hover");
	}),
	$(".ab-test_button-option-three").mouseover(function () {
		$(".ab-test_button-option-three").removeClass("active-hover"),
			$(".ab-test_button-option-three_cta").removeClass("active-hover-cta"),
			$(".ab-test_button-text").css("opacity", "0"),
			$(this).find(".ab-test_button-text").css("opacity", "1"),
			$(this).addClass("active-hover");
	}),
	$(".ab-test_button-option-three_cta").mouseover(function () {
		$(".ab-test_button-option-three").removeClass("active-hover"), $(".ab-test_button-option-three_cta").removeClass("active-hover-cta"), $(this).addClass("active-hover-cta");
	}),
	$(".cashflow_ab-test_close-button, .cashflow_ab-test_close-button-two, .cashflow_ab-test_close-button-three").click(function () {
		$("body").css("overflow", "auto"), $("#cashflow-ab_test").fadeOut();
	}),
	$("#cashflow-ab_test").click(function (o) {
		o.target === o.currentTarget && ($("#cashflow-ab_test").fadeOut(), $("body").css("overflow", "auto"));
	}),

	dragDetector();
var resizeDone;
var cachedWidth = $(window).width();
$(window).resize(function () {
	var newWidth = $(window).width();
	if (newWidth !== cachedWidth) {
		clearTimeout(resizeDone);
		resizeDone = setTimeout(doneResizing, 500);
		cachedWidth = newWidth;
	}
});

function doneResizing() {
	screenWidth = $(window).width();
	(screenWidth = $(window).width()) > 991 && $(".ab-test_button-option-three.first").hasClass("opened-dd")
		? ($(".ab-test_button-option-three_animated-bg").css("height", "100%"), $(".minus-button").css("opacity", "1"))
		: screenWidth < 991 && $(".ab-test_button-option-three.first").hasClass("opened-dd")
			? ($(".ab-test_button-option-three_animated-bg").css("height", "auto"), $(".ab-test_button-option-three_animated-bg").css("width", "auto"))
			: screenWidth < 991 && !$(".ab-test_button-option-three.first").hasClass("opened-dd")
				? ($(".ab-test_button-option-three_animated-bg").css("height", "0px"), $(".ab-test_button-option-three_animated-bg").css("width", "100%"))
				: screenWidth > 991 && !$(".ab-test_button-option-three.first").hasClass("opened-dd") && ($(".ab-test_button-option-three_animated-bg").css("height", "0%"), $(".ab-test_button-option-three_animated-bg").css("width", "0%")),
		(responsiveAnimationHeight = $(".ab-test-cf-animation-wrapper").outerHeight());
	dragDetector();
}

$('.ab-test_button-option-two').mouseover(function () {
	$('.ab-test_button-option-two').removeClass('active-hover');
	$(this).addClass('active-hover');
});


$('.ab-test_button-option-three').mouseover(function () {
	$('.ab-test_button-option-three').removeClass('active-hover');
	$('.ab-test_button-option-three_cta').removeClass('active-hover');
	$(this).addClass('active-hover');
});

$('.ab-test_button-option-three_cta').mouseover(function () {
	$('.ab-test_button-option-three').removeClass('active-hover');
	$('.ab-test_button-option-three_cta').removeClass('active-hover');
	$(this).addClass('active-hover');
});

$('.cashflow_ab-test_close-button, .cashflow_ab-test_close-button-two, .cashflow_ab-test_close-button-three').click(function () {
	$('#cashflow-ab_test').fadeOut();
});

$('#cashflow-ab_test').click(function (e) {
	if (e.target !== e.currentTarget) {
		return;
	}
	else {
		$('#cashflow-ab_test').fadeOut();
	}
});


$(document).ready(function () {
	var leadershiptabLink = $('.leadership-tab-link').length;
	var leadershiptabLinkPercent = 100 / leadershiptabLink;
	$('.leadership-line-active').css('width', leadershiptabLinkPercent + '%');
	if ($(window).width() < 991) {
		$('.leadership-dropdown').eq(0).find(".leadership-dt").click();
	}
});


$(".leadership-tab-link").click(function () {
	$(".leadership-tab-link").removeClass("active");
	$(this).addClass("active");
	var myDistance = $(this).offset().left - $('.leadership-tabs').offset().left;
	$('.leadership-line-active').css({ 'transform': 'translateX(' + myDistance + 'px' });
	var myIndex = $(this).index();
	$('#leadership-slide-nav').children('.w-slider-dot').eq(myIndex).click();
});