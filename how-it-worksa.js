($.fn.isInViewport = function () {
	var a = $(this).offset().top,
		c = a + $(this).outerHeight(),
		b = $(window).scrollTop(),
		d = b + $(window).height();
	return c > b && a < d;
});
for (var b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
	var c = b.item(a);
	c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="letter">$2</span>');
}

var aPlayed = false;

function animationsRender() {

	if ($(window).width() > 991) {

		var a = anime.timeline({ loop: !1, autoplay: !1 });
		a.add({
			targets: ".fadeup0 .letter",
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutQuint",
			duration: 800,
			delay: (b, a) => 30 * a,
			begin() {
				$(".fadeup0").css("opacity", "1");
			},
		});

		a.play();
		$(window).focus(function () {
			if (!aPlayed) {
				a.restart();
				aPlayed = true;
			}
			else {

			}
		});

		var b = anime.timeline({ loop: !1, autoplay: !1 });
		b.add({
			targets: ".fadeup1 .letter",
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutQuint",
			duration: 800,
			delay: (b, a) => 30 * a,
			begin() {
				$(".fadeup1").css("opacity", "1");
			},
		});


		$(window).scroll(function () {
			if ($('.fadeup1').isInViewport()) {
				b.play();

			}
			else if ($(".resouces-section").isInViewport()) {
				$('.single-resource-wrap-item').each(function (i) {
					var $item = $(this).find("._8_fundcards");
					setTimeout(function () {
						$item.click();
					}, 100 * i);
				});

			}
		});
	}
}

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
	})

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



animationsRender();
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
	if (screenWidth > 991) {
		$('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
	}
}
function pageLoaded() {
	screenWidth = $(window).width();
	if (screenWidth <= 991) {
		$('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
	}
}
pageLoaded();

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

var screenWidth = $(window).width();
var playButton = $('#play-video');
var video = $('#video-player').get(0);

$(document).on('click', '#play-video', function (e) {
	playButton.css('display', 'none');
	video.play();
	video.setAttribute('controls', 'controls');
	return false;
});

$(document).on('click', '.our-method_section', function (e) {
	if (video.paused === false) {
		video.pause();
		video.setAttribute('controls', 'controls');
	} else {
	}
	return false;
});
