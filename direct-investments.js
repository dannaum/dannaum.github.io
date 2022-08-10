
    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });
    /*
    //pastFutureSlider
    var pastFutureSlider = $('.past-future_slider');
    var pastFutureSlideNumber = $(pastFutureSlider).find('.w-slider-nav').children('.w-slider-dot').length;
    //in past-future_slider find past-future_slide-nav and append "past-future_single-dot" with number of past-future_slider_nav_length, to first child add class active-dot
    for(var i = 0; i < pastFutureSlideNumber; i++){
        $('.past-future_slider').find('.past-future_slide-nav').append('<div class="past-future_single-dot"></div>');
        //in past-future_total show pastFutureSlideNumber
        $('.past-future_total').text(pastFutureSlideNumber);
    }
    //to first child add class active-dot
    $('.past-future_slider').find('.past-future_slide-nav').children('.past-future_single-dot').first().addClass('active-dot');
    //past-future-arrows on click
    $('.past-future-arrows').on('click', function(){
        var pastFutureActiveDot = $(this).closest('.past-future_slider').find('.w-slider-nav').children('.w-slider-dot.w-active').index(); 
        //past-future_single-dot remove class active-dot
        $(this).closest(pastFutureSlider).find('.past-future_slide-nav').children('.past-future_single-dot').removeClass('active-dot');
        //this find past-future_slide-nav, on child eq pastFutureActiveDot add class active-dot
        $(this).closest(pastFutureSlider).find('.past-future_slide-nav').children('.past-future_single-dot').eq(pastFutureActiveDot).addClass('active-dot');
        //past-future_count text pastFutureActiveDot + 1
        $(this).closest(pastFutureSlider).find('.past-future_count').text(pastFutureActiveDot + 1);
    });
    */

    var screenWidth = $(window).width();
    var closedFundsWrapper = $(".past-future_top-content").outerWidth();
    var closedFundsMask = $('.past-future_slider-mask').outerWidth();
    var closedFundSlidesN = $('.past-future_slider-mask').find('.past-future_slider-slide').length;
    var closedFundSlideO = $('.past-future_slider-slide').outerWidth();
    var dd = new Dragdealer('content-scroller', {
        steps: closedFundSlidesN,
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        reflow: true,
        animationCallback: function(x, y) {
            $('.past-future-slider-active_line').css('width', Math.round(x * 100) + '%');
            $('.past-future_slider-mask').css('margin-left', -x * (closedFundsMask - closedFundsWrapper));
        }
    });

    $('.past-future_slider-wrap').on('click', '.past-future_right-arrow', function(e) {
        var steps = dd.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        dd.setStep(parseInt(a)+1, b);

    });

    $('.past-future_slider-wrap').on('click', '.past-future_left-arrow', function(e) {
        var steps = dd.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        dd.setStep(parseInt(a)-1, b);
    });
    
    var sp500Width = $('.direct-invest_graph').outerWidth();
    var sp500slider = new Dragdealer('home-benefits-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: sp500Width,
        reflow: true,
        animationCallback: function(x, y) {
            $('.home-benefits_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.direct-invest_graph-wrap').css('margin-left', -x * (sp500Width - screenWidth +64));
        }
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

            $(document).ready(function () {
                a.play();
                $(window).focus(function() {
                    if (!aPlayed) {
                        a.restart();
                        aPlayed = true;
                    }
                    else {
                        
                    }
                });
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
            

            var heroVisualScrollAdd
            var heroVisual = $(".home-page_hero-visual");
            var heroVisualWidth = (heroVisual).width();
            var currentScroll = $(window).scrollTop() + $(window).height();
            $(window).scroll(function() {
                heroVisualScrollAdd = $(this).scrollTop();
                heroVisual.width(heroVisualScrollAdd + heroVisualWidth);
                if ($(".fadeup1").isInViewport()) {
                    b.play();
                }
                else if ($(".fadeup5").isInViewport()) {
                    fd5.play();
                }
                else if ($(".past-future_slider").isInViewport()) {
                    $('.past-future_slider-slide').each(function (i) {
                        var $item = $(this).find("._8_fundcards");
                        setTimeout(function() { 
                        $item.click();
                        }, 100*i);
                    });
                }
                else if ($(".resouces-section").isInViewport()) {
                    $('.resources-right-grid_item').each(function (i) {
                        var $item = $(this).find("._8_fundcards");
                        setTimeout(function() { 
                        $item.click();
                        }, 100*i);
                    });
                }
            });
        }
    }

        animationsRender();
        function dragDetector() {
            if(sp500Width > screenWidth){
                $('.home-benefits_drag-element').css('display', 'block');
            }
            if(closedFundsWrapper < closedFundsMask){
                $('.past-future-drag-component').css('display', 'block');
            }
        }
        dragDetector();

        $(window).resize(function() {
            var wwidth = $(window).width();
            if(screenWidth!==wwidth){
                 screenWidth = $(window).width();
                 animationsRender();
                 dragDetector();
            }
        });