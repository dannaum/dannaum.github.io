//on page load
$(document).ready(function() {

    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });

    var auctionSlide = $('.secondary-auction_hover').outerWidth();
    var auctionSlideN = $('.secondary-auction-timeline_divider').find('.secondary-auction_hover').length;
    var screenWidth = $(window).width();
    var auctionTimelineSlide = $('.auction-timeline').outerWidth();
    var chartPrecision = $('.auction-timeline_drag-element').outerWidth();
    var auctionDrag = new Dragdealer('auction-timeline', {
    horizontal: true,
    steps: auctionSlideN,
    vertical: false,
    xPrecision: chartPrecision,
    callback: function(x, y) {
        var steps = auctionDrag.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        $('.auction-single-icon-wrap').each(function(index) {
            var thisIndex = $(this).index();
            if (thisIndex <= a) {
                $(this).addClass('active-auction-icon');
                $(this).find('.auction-timeline_icon-wrap').addClass('auction-icon_active');
            }
            else
            {
                if (thisIndex > a) {
                    $(this).removeClass('active-auction-icon');
                    $(this).find('.auction-timeline_icon-wrap').removeClass('auction-icon_active');
                }
            }
        });

    },
    animationCallback: function(x, y) {
        $('.auction-chart-timeline-line-active').css('width', Math.round(x * 100) + '%');
        $('.auction-timeline_drag-line-active').css('width', Math.round(x * 100) + '%');
        $('.secondary-auction-timeline_divider').css('margin-left', -x * (auctionSlideN * auctionSlide - screenWidth) );
        $('.auction-timeline').css('margin-left', -x * (auctionTimelineSlide - screenWidth + 128));
    }
    });


    //on mouse enter of secondary-auction_hover
    $('.secondary-auction_hover').mouseenter(function() {
        var indexCard = $(this).index();
        $('.auction-chart-hover-child').css('display', 'none');
        $(this).children('.auction-chart-hover-child').css('display', 'block');
        //auction-chart-timeline-line-active animate width ((indexCard+1) * 100) + '%'
        $('.auction-chart-timeline-line-active').animate({
            width: (indexCard * 25) + '%'
        }, 250);
        $('.auction-timeline').children('.auction-single-icon-wrap').each(function() {
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

    $('.secondary-auction_hover').mouseleave(function() {
        $(this).children('.auction-chart-hover-child').css('display', 'none');
    });
    
    //on click of auction-single-icon-wrap
    $('.auction-single-icon-wrap').click(function() {
        var index = $(this).index();
        auctionDrag.setStep(index);
    });

    if ($(window).width() > 991) {

        for (var b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
            var c = b.item(a);
            c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="letter">$2</span>');
        }

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

        $(window).scroll(function() {
            if ($(".fadeup1").isInViewport()) {
                b.play();
            }
            else if ($(".resouces-grid-right").isInViewport()) {
                $('.resources-right-grid_item').each(function (i) {
                    var $item = $(this).find("._8_fundcards");
                    setTimeout(function() { 
                      $item.click();
                    }, 100*i);
                });
            }

        });
    }
});