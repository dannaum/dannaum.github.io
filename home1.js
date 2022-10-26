$.fn.isInViewport = function () {
	var a = $(this).offset().top,
		c = a + $(this).outerHeight(),
		b = $(window).scrollTop(),
		d = b + $(window).height();
	return c > b && a < d;
};

for (
	var b = document.getElementsByClassName("animated-word"), a = 0;
	a < b.length;
	a++
) {
	var c = b.item(a);
	c.innerHTML = c.innerHTML.replace(
		/(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
		'$1<span class="letter">$2</span>'
	);
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
			} else {
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
			delay: (b, a) => 300 + 30 * a,
			begin() {
				$(".fadeup1").css("opacity", "1");
			},
		});

		var fd5 = anime.timeline({ loop: !1, autoplay: !1 });
		fd5.add({
			targets: ".fadeup5 .letter",
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutQuint",
			duration: 800,
			delay: (b, a) => 300 + 30 * a,
			begin() {
				$(".fadeup5").css("opacity", "1");
			},
		});
		var petitle = anime.timeline({ loop: !1, autoplay: !1 });
		petitle.add({
			targets: ".fadeuppe .letter",
			translateY: [100, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: "easeOutQuint",
			duration: 800,
			delay: (b, a) => 300 + 30 * a,
			begin() {
				$(".fadeuppe").css("opacity", "1");
			},
		});

		var viewedSPGraph = false;
		var heroVisualScrollAdd;
		var heroVisual = $(".home-page_hero-visual");
		var heroVisualWidth = heroVisual.width();
		var currentScroll = $(window).scrollTop() + $(window).height();
		$(window).scroll(function () {
			heroVisualScrollAdd = $(this).scrollTop();
			heroVisual.width(heroVisualScrollAdd + heroVisualWidth);
			if ($(".fadeup1").isInViewport()) {
				b.play();
			} else if ($(".home-benefits_image-title").isInViewport()) {
				if (!viewedSPGraph) {
					const chart = new Chart(ctx, config);
					viewedSPGraph = true;
				} else if (viewedSPGraph) {
				}
			} else if ($(".fadeup5").isInViewport()) {
				fd5.play();
				//timeout 500 ms
				setTimeout(function () {
					$(".past-future_slider-slide").each(function (i) {
						var $item = $(this).find("._8_fundcards");
						setTimeout(function () {
							$item.click();
						}, 100 * i);
					});
				}, 500);
			} else if ($(".fadeuppe").isInViewport()) {
				petitle.play();
			}
		});
	} else {
		const chart = new Chart(ctx, config);
	}
}
animationsRender();

var screenWidth = $(window).width();
var closedFundsWrapper = Math.round($(".past-future_content").outerWidth());
var closedFundSlidesN = $(".past-future_slider-mask").find(".past-future_slider-slide").length;
var closedFundSlidesOW = Math.round($(".past-future_slider-mask").find(".past-future_slider-slide").outerWidth());
var closedFundsTotalWidth = Math.round($(".past-future_slider-mask").outerWidth());

var dd = new Dragdealer("content-scroller", {
	steps: closedFundSlidesN,
	speed: 0.1,
	requestAnimationFrame: true,
	horizontal: true,
	vertical: false,
	animationCallback: function (x, y) {
		$(".past-future-slider-active_line").css("width", Math.round(x * 100) + "%");
		$(".past-future_slider").css("margin-left", -x * (closedFundsTotalWidth - closedFundsWrapper + 32));
	},
});

$(".past-future_slider-wrap").on(
	"click",
	".past-future_right-arrow",
	function (e) {
		var steps = dd.getStep() + "";
		var stepsArray = steps.split(",");
		var a = stepsArray[0];
		var b = stepsArray[1];
		dd.setStep(parseInt(a) + 1, b);
	}
);

$(".past-future_slider-wrap").on(
	"click",
	".past-future_left-arrow",
	function (e) {
		var steps = dd.getStep() + "";
		var stepsArray = steps.split(",");
		var a = stepsArray[0];
		var b = stepsArray[1];
		dd.setStep(parseInt(a) - 1, b);
	}
);

var homeBenefitsImageWrap = $(".home-benefits-section").outerWidth();
var sp500Width = $(".home-benefits_image").outerWidth();
var sp500slider = new Dragdealer("home-benefits-drag-tool", {
	speed: 0.1,
	requestAnimationFrame: true,
	horizontal: true,
	vertical: false,
	xPrecision: sp500Width,
	reflow: true,
	animationCallback: function (x, y) {
		$(".home-benefits_drag-line-active").css("width", Math.round(x * 100) + "%");
		$(".home-benefits_image-wrap").css("margin-left", -x * (sp500Width - homeBenefitsImageWrap + 128));
	},
});

$(".book-demo").on("click", function () {
	//popup_main animate opacity from 0 to 100
	$(".popup_main").animate({ opacity: 1 }, 500).toggle();
	$("body").css("overflow", "hidden");
});
//on click of popup_close-button
$(".popup_close-button").on("click", function () {
	//popup_main animate opacity from 100 to 0
	$(".popup_main").animate({ opacity: 0 }, 500);
	//after 500ms toggle popup_main
	setTimeout(function () {
		$(".popup_main").toggle();
	}, 500);
	$("body").css("overflow", "auto");
});

//on click of ".popup_main" but not children
$(".popup_main").on("click", (e) => {
	if (e.target !== e.currentTarget) return;
	// popup_main animate opacity from 100 to 0
	$(".popup_main").animate({ opacity: 0 }, 500);
	setTimeout(() => {
		$(".popup_main").toggle();
	}, 500);
	$("body").css("overflow", "auto");
});

$(".alt-single-press_wrap").each(function () {
	var parent_index = $(this).parent().index();
	$(this).attr("data-testid", "alt-single-press-wrap-" + parent_index);
});

$(".closed-funds_ab-item").each(function () {
	var this_index = $(this).index();
	$(this).attr("data-testid", "closed-funds-card-ab" + this_index);
});

$(".past-future_slider-slide").each(function () {
	var parent_index = $(this).index();
	$(this).find('.past-future_single-card').attr("data-testid", "closed-funds-card-" + parent_index);
});

$(".testimonials_slider-slide")
	.eq(0)
	.find(".hs5")
	.addClass("current-testimonial-quote"),
	$(".testimonials_click").click(function () {
		$(".hs5").removeClass("current-testimonial-quote");
		var a = $(".testimonials_slider-nav")
			.find(".w-slider-dot.w-active")
			.index();
		$(".testimonials_slider-slide")
			.eq(a)
			.find(".hs5")
			.addClass("current-testimonial-quote");
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
	})

var htmlCards = $(".home-pe-101_wrappers").eq(0);
var htmlCards1 = $(".home-pe-101_wrappers").eq(1);
var htmlCards2 = $(".home-pe-101_wrappers").eq(2);

function pe101Cards() {
	if ($(window).width() > 991) {
		if ($("#mainpewrap").children(".home-pe-101_wrappers").length == 0) {
			$("#mainpewrap").append(htmlCards);
			$("#mainpewrap").append(htmlCards1);
			$("#mainpewrap").append(htmlCards2);
		}
		else {
			$(".home-pe-101_wrappers").eq(1).css("display", "none");
			$(".home-pe-101_wrappers").eq(2).css("display", "none");
		}
	} else {
		if ($(".home-pe-101_selectors").children(".home-pe-101_wrappers").length == 0) {
			$('#homepe1').after(htmlCards);
			$("#homepe2").after(htmlCards1);
			$("#homepe3").after(htmlCards2);
		}
	}

}
pe101Cards();

$(".home-pe-101_selector").mouseover(function () {
	$(".home-pe-101_selector").removeClass("active");
	$(this).addClass("active");
	$(".home-pe-101_selector").find(".paragraph-small-copy").css("opacity", "0");
	$(this).find(".paragraph-small-copy").css("opacity", "1");
	var index = $(this).index(".home-pe-101_selector");
	$(".home-pe-101_wrappers").css("display", "none");
	$(".home-pe-101_wrappers").each(function () {
		var index1 = $(this).index(".home-pe-101_wrappers");
		if (index1 == index) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});
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
	var n = Math.round($(".past-future_content").outerWidth()),
		l = Math.round($(".past-future_slider-mask").outerWidth());
	(dd = new Dragdealer("content-scroller", {
		steps: closedFundSlidesN,
		speed: 0.1,
		requestAnimationFrame: !0,
		horizontal: !0,
		vertical: !1,
		animationCallback: function (o, i) {
			$(".past-future-slider-active_line").css("width", Math.round(100 * o) + "%"), $(".past-future_slider").css("margin-left", -o * (l - n + 32));
		},
	}));
	var closedFundsWrapper = Math.round($(".past-future_content").outerWidth());
	var closedFundsTotalWidth = Math.round($(".past-future_slider-mask").outerWidth());

	dd = new Dragdealer("content-scroller", {
		steps: closedFundSlidesN,
		speed: 0.1,
		requestAnimationFrame: true,
		horizontal: true,
		vertical: false,
		animationCallback: function (x, y) {
			$(".past-future-slider-active_line").css("width", Math.round(x * 100) + "%");
			$(".past-future_slider").css("margin-left", -x * (closedFundsTotalWidth - closedFundsWrapper + 32));
		},
	});

	if (closedFundsWrapper < closedFundsTotalWidth) {
		$(".past-future-drag-component").css("opacity", "1");
	} else {
		$(".past-future-drag-component").css("opacity", "0");
	}

	var homeBenefitsImageWrap = $(".home-benefits-section").outerWidth();
	var sp500Width = $(".home-benefits_image").outerWidth();
	sp500slider = new Dragdealer("home-benefits-drag-tool", {
		speed: 0.1,
		requestAnimationFrame: true,
		horizontal: true,
		vertical: false,
		xPrecision: sp500Width,
		reflow: true,
		animationCallback: function (x, y) {
			$(".home-benefits_drag-line-active").css("width", Math.round(x * 100) + "%");
			$(".home-benefits_image-wrap").css("margin-left", -x * (sp500Width - homeBenefitsImageWrap + 128));
		},
	});

	if (homeBenefitsImageWrap < sp500Width + 32) {
		$(".home-benefits_drag-element").css("opacity", "1");
	} else {
		$(".home-benefits_drag-element").css("opacity", "0");
	}
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
	if (screenWidth > 991) {
		$(
			".animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button"
		).css("opacity", "1");
	}
	dragDetector();
	pe101Cards();
}
function pageLoaded() {
	screenWidth = $(window).width();
	if (screenWidth <= 991) {
		$(
			".animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button"
		).css("opacity", "1");
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

function checkCurrencies() {
	var paragraphCurrency = document.getElementsByTagName("p");
	var countryH = getCookie("country-based");
	if (countryH === "IN") {
		for (var i = 0; i < paragraphCurrency.length; i++) {
			if (paragraphCurrency[i].innerHTML.indexOf("€50,000") > -1) {
				paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
					"€50,000",
					"$60,000"
				);
			}
			if (paragraphCurrency[i].innerHTML.indexOf("€2 billion") > -1) {
				paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
					"€2 billion",
					"$2 billion"
				);
			}
		}
	}
}
checkCurrencies();