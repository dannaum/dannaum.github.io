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

        $('._9_tag_animation_parent').each(function (i) {
            var $item = $(this).find("._9_tag_animation");
            setTimeout(function () {
                $item.click();
            }, 50 * i);
        });
    }
}

animationsRender();

var screenWidth = $(window).width();

$('.knowledge-center_category-tag').eq(0).addClass('active');
$('.knowledge-center_category-tag').on('click', function () {
    var tag = $(this).text().toLowerCase();
    $('.knowledge-center_category-tag').removeClass('active');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.single-blog_item').css('display', 'block');
        $('.blog-hero_article-wrapper').css('display', 'block');
        $('.blog-articles_section').css('display', 'block');
        $('.blog-articles_section-search').css('display', 'none');
    }
    else {
        $(this).addClass('active');
        $('.blog-hero_article-wrapper').css('display', 'none');
        $('.blog-articles_section').css('display', 'none');
        $('.blog-articles_section-search').css('display', 'block');
        $('.single-blog_item').each(function () {
            var singleTag = $(this).find('.single-media-tag').eq(0).text().toLowerCase()
            var singleTag2 = $(this).find('.single-media-tag').eq(1).text().toLowerCase();
            if (singleTag == tag || singleTag2 == tag) {
                $(this).css('display', 'block');
            }
            else if (tag == 'all') {
				$('#blog-load-more').css('display', 'block');
                $(this).closest('.single-blog_item').css('display', 'block');
                $('.blog-hero_article-wrapper').css('display', 'block');
                $('.blog-articles_section').css('display', 'block');
                $('.blog-articles_section-search').css('display', 'none');
				blogItems.each(function () {
					$(this).removeClass("filtered-item");
					if ($(this).index() > 5) {
						$(this).css('display', 'none');
					}
					else
					{
						$(this).css('display', 'block');
						$(this).addClass('filtered-item');
					}
				});
            }
            else {
                $(this).css('display', 'none');
            }
        });
    }
});

var blogItems = $('.blog-static-results_grid').find('.single-blog_item');
blogItems.each(function () {
	if ($(this).index() > 5) {
		$(this).css('display', 'none');
	}
	else
	{
		$(this).css('display', 'block');
		$(this).addClass('filtered-item');
	}
});

$('#blog-load-more').on('click', function () {
    var lastIndex = $('.filtered-item:visible').last().index('.filtered-item');
    $(blogItems).each(function () {
        if ($(this).index() > 5 && $(this).index() < lastIndex + 7) {
            $(this).css('display', 'block');
			$(this).addClass('filtered-item');
        }
    });
	if ($(blogItems).last().index('.filtered-item') == lastIndex) {
		$('#blog-load-more').css('display', 'none');
	}
});

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
}
function pageLoaded() {
    screenWidth = $(window).width();
    if (screenWidth <= 991) {
        $('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
    }
}
pageLoaded();

$('.blog-static-results_grid').find('.single-blog-article').eq(0).attr('data-testid', 'blog_article_2');