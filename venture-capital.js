
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

		a.play();
		$(window).focus(function () {
			if (!aPlayed) {
				a.restart();
				aPlayed = true;
			}
			else {

			}
		});

	}

	$(window).scroll(function () {
		if ($(".fadeuppe").isInViewport()) {
			petitle.play();
		}
	});
}

animationsRender();



var htmlCards = $(".home-pe-101_wrappers").eq(0);
var htmlCards1 = $(".home-pe-101_wrappers").eq(1);
var htmlCards2 = $(".home-pe-101_wrappers").eq(2);

function pe101Cards() {
	if (cachedWidth > 991) {
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

	var vcContent = $('.private-market-value_content').outerWidth();
	var vcGraph = $('.direct-invest_graph-wrap').outerWidth();
	vcOneGraph = new Dragdealer('vc-one-drag-tool', {
		speed: 0.1,
		requestAnimationFrame: true,
		horizontal: true,
		vertical: false,
		xPrecision: vcGraph,
		animationCallback: function (x, y) {
			$('.vc-one_drag-line-active').css('width', Math.round(x * 100) + '%');
			$('.direct-invest_graph-wrap').css('margin-left', -x * (vcGraph - vcContent + 32));
		}
	});
	if (vcContent < vcGraph) {
		$('.vc-one_drag-component').css('opacity', '1');
	}
	else {
		$('.vc-one_drag-component').css('opacity', '0');
	}

	var vcContentTwo = $('.growth-vintage_img-wrapper').outerWidth();
	var vcGraphTwo = $('.vc-funds_two-graph-wrap').outerWidth();
	vcTwoGraph = new Dragdealer('vc-two-drag-tool', {
		speed: 0.1,
		requestAnimationFrame: true,
		horizontal: true,
		vertical: false,
		xPrecision: vcGraphTwo,
		animationCallback: function (x, y) {
			$('.vc-one_drag-line-active-two').css('width', Math.round(x * 100) + '%');
			$('.vc-funds_two-graph-wrap').css('margin-left', -x * (vcGraphTwo - vcContentTwo + 32));
		}
	});
	if (vcContentTwo < vcGraphTwo) {
		$('.vc-one_drag-component-two').css('opacity', '1');
	}
	else {
		$('.vc-one_drag-component-two').css('opacity', '0');
	}

}

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
	if (screenWidth > 991) {
		$('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
	}
	dragDetector();
	pe101Cards();
}
pe101Cards();
function pageLoaded() {
	screenWidth = $(window).width();
	if (screenWidth <= 991) {
		$('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
	}
}
pageLoaded();
