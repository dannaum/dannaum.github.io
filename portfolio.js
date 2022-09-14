($.fn.isInViewport = function () {
	const a = $(this).offset().top;
	const c = a + $(this).outerHeight();
	const b = $(window).scrollTop();
	const d = b + $(window).height();
	return c > b && a < d;
});
for (let b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
	const c = b.item(a);
	c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, "$1<span class=\"letter\">$2</span>");
}

let aPlayed = false;

function animationsRender() {
	if ($(window).width() > 991) {
		const a = anime.timeline({ loop: !1, autoplay: !1 });
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
		$(window).focus(() => {
			if (!aPlayed) {
				a.restart();
				aPlayed = true;
			}
		});

		const b = anime.timeline({ loop: !1, autoplay: !1 });
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

		$(window).scroll(() => {
			if ($(".fadeup1").isInViewport()) {
				b.play();
			}
			else if ($(".resouces-section").isInViewport()) {
				$(".single-resource-wrap-item").each(function (i) {
					const $item = $(this).find("._8_fundcards");
					setTimeout(() => {
						$item.click();
					}, 100 * i);
				});
			}
		});
	}
}

animationsRender();

let screenWidth = $(window).width();
const homeBenefitsImageWrap = $(".direct-invest_graph-wrap-div").outerWidth();
const sp500Width = $(".direct-invest_graph").outerWidth();
const sp500slider = new Dragdealer("home-benefits-drag-tool", {
	speed: 0.1,
	requestAnimationFrame: true,
	horizontal: true,
	vertical: false,
	xPrecision: sp500Width,
	animationCallback(x, y) {
		$(".home-benefits_drag-line-active").css("width", `${Math.round(x * 100)}%`);
		$(".direct-invest_graph-wrap-div").css("margin-left", -x * (sp500Width - homeBenefitsImageWrap + 32));
	},
});

function dragDetector() {
	const homeBenefitsImageWrap = $(".direct-invest_graph-wrap-div").outerWidth();
	const sp500Width = $(".direct-invest_graph").outerWidth();
	const sp500slider = new Dragdealer("home-benefits-drag-tool", {
		speed: 0.1,
		requestAnimationFrame: true,
		horizontal: true,
		vertical: false,
		xPrecision: sp500Width,
		animationCallback(x, y) {
			$(".home-benefits_drag-line-active").css("width", `${Math.round(x * 100)}%`);
			$(".direct-invest_graph-wrap-div").css("margin-left", -x * (sp500Width - homeBenefitsImageWrap + 32));
		},
	});

	if (homeBenefitsImageWrap < sp500Width) {
		$(".home-benefits_drag-element").css("opacity", "1");
	} else {
		$(".home-benefits_drag-element").css("opacity", "0");
	}
}
dragDetector();
let resizeDone;
let cachedWidth = $(window).width();
$(window).resize(() => {
	const newWidth = $(window).width();
	if (newWidth !== cachedWidth) {
		clearTimeout(resizeDone);
		resizeDone = setTimeout(doneResizing, 500);
		cachedWidth = newWidth;
	}
});

function doneResizing() {
	screenWidth = $(window).width();
	if (screenWidth > 991) {
		$(".animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button").css("opacity", "1");
	}
	dragDetector();
}
function pageLoaded() {
	screenWidth = $(window).width();
	if (screenWidth <= 991) {
		$(".animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button").css("opacity", "1");
	}
}
pageLoaded();
