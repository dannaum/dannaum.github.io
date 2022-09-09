

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

        $(window).scroll(function () {
            if ($(".resouces-section").isInViewport()) {
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
animationsRender();

//on mouse enter of secondary-auction_hover
$('.secondary-auction_hover').mouseenter(function () {
    var indexCard = $(this).index();
    $('.auction-chart-hover-child').css('display', 'none');
    $(this).children('.auction-chart-hover-child').css('display', 'block');
    //auction-chart-timeline-line-active animate width ((indexCard+1) * 100) + '%'
    $('.auction-chart-timeline-line-active').animate({
        width: (indexCard * 25) + '%'
    }, 250);
    $('.auction-timeline').children('.auction-single-icon-wrap').each(function () {
        var index = $(this).index();
        //if index is less than and or equal to indexCard

        if (index <= indexCard) {
            $(this).addClass('auction-single-active');
            $(this).find('.auction-timeline_icon-wrap').addClass('auction-icon_active');
        }
        //else if index == indexCard
        else if (index == indexCard) {
            //this closest secondary-auction_hover find auction-chart-hover-child css display block
            $(this).closest('.secondary-auction_hover').find('.auction-chart-hover-child').css('display', 'block');
        }
        else {
            $(this).removeClass('auction-single-active');
            $(this).find('.auction-timeline_icon-wrap').removeClass('auction-icon_active');
        }
    });
    $('.auction-timeline').children('.auction-single-icon-wrap').eq(indexCard).addClass('auction-single-active');
    $('.auction-timeline').children('.auction-single-icon-wrap').eq(indexCard).find('.auction-timeline_icon-wrap').addClass('auction-icon_active');
});

$('.secondary-auction_hover').mouseleave(function () {
    $(this).children('.auction-chart-hover-child').css('display', 'none');
});

//on click of auction-single-icon-wrap
$('.auction-single-icon-wrap').click(function () {
    var index = $(this).index();
    auctionDrag.setStep(index);
});

var screenWidth = $(window).width();
var auctionTimelineSlide = $('.auction-timeline').outerWidth();
var auctionSlide = $('.secondary-auction_hover').outerWidth();
var auctionContent = Math.round($('.secondary-auction-timeline_content').outerWidth());
var auctionSlideN = $('.secondary-auction-timeline_divider').find('.secondary-auction_hover').length;
var auctionTotalWidth = Math.round(auctionSlide * auctionSlideN);
var auctionDrag = new Dragdealer('auction-timeline', {
    horizontal: true,
    steps: auctionSlideN,
    vertical: false,
    callback: function (x, y) {
        var steps = auctionDrag.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        $('.auction-single-icon-wrap').each(function (index) {
            var thisIndex = $(this).index();
            if (thisIndex <= a) {
                $(this).addClass('active-auction-icon');
                $(this).find('.auction-timeline_icon-wrap').addClass('auction-icon_active');
            }
            else {
                if (thisIndex > a) {
                    $(this).removeClass('active-auction-icon');
                    $(this).find('.auction-timeline_icon-wrap').removeClass('auction-icon_active');
                }
            }
        });
    },
    animationCallback: function (x, y) {
        $('.auction-chart-timeline-line-active').css('width', Math.round(x * 100) + '%');
        $('.auction-timeline_drag-line-active').css('width', Math.round(x * 100) + '%');
        $('.secondary-auction-timeline_divider').css('margin-left', -x * (auctionTotalWidth - auctionContent));
        $('.auction-timeline').css('margin-left', -x * (auctionTimelineSlide - screenWidth + 64));
    }
});

function dragDetector() {
    var screenWidth = $(window).width();
    var auctionTimelineSlide = $('.auction-timeline').outerWidth();
    var auctionSlide = $('.secondary-auction_hover').outerWidth();
    var auctionContent = Math.round($('.secondary-auction-timeline_content').outerWidth());
    var auctionSlideN = $('.secondary-auction-timeline_divider').find('.secondary-auction_hover').length;
    var auctionTotalWidth = Math.round(auctionSlide * auctionSlideN);
    auctionDrag = new Dragdealer('auction-timeline', {
        horizontal: true,
        steps: auctionSlideN,
        vertical: false,
        callback: function (x, y) {
            var steps = auctionDrag.getStep() + '';
            var stepsArray = steps.split(',');
            var a = stepsArray[0];
            var b = stepsArray[1];
            $('.auction-single-icon-wrap').each(function (index) {
                var thisIndex = $(this).index();
                if (thisIndex <= a) {
                    $(this).addClass('active-auction-icon');
                    $(this).find('.auction-timeline_icon-wrap').addClass('auction-icon_active');
                }
                else {
                    if (thisIndex > a) {
                        $(this).removeClass('active-auction-icon');
                        $(this).find('.auction-timeline_icon-wrap').removeClass('auction-icon_active');
                    }
                }
            });
        },
        animationCallback: function (x, y) {
            $('.auction-chart-timeline-line-active').css('width', Math.round(x * 100) + '%');
            $('.auction-timeline_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.secondary-auction-timeline_divider').css('margin-left', -x * (auctionTotalWidth - auctionContent));
            $('.auction-timeline').css('margin-left', -x * (auctionTimelineSlide - screenWidth + 64));
        }
    });
    if (auctionContent < auctionTotalWidth) {
        $('.auction-timeline_drag-component').css('opacity', 1);
    }
    else {
        $('.auction-timeline_drag-component').css('opacity', 0);
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
        $('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._5_text_blocks_2, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
        $('.auction-chart-hover-child').each(function () {
            $(this).removeClass('show-action-chart-hover-child');
        });
    }
    else {
        $('.auction-chart-hover-child').each(function () {
            $(this).addClass('show-action-chart-hover-child');
        });
    }
    dragDetector(); 
}
function pageLoaded() {
    screenWidth = $(window).width();
    if (screenWidth <= 991) {
        $('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, _5_text_blocks_2, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
    }
}
pageLoaded();

