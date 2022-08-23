
    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });

    var screenWidth = $(window).width();


    for (var b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
        var c = b.item(a);
        c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="letter">$2</span>');
    }

    var aPlayed = false;

    function animationsRender() {
        if(screenWidth > 991){

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
            $(window).focus(function() {
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
                if ($(".fadeup5").isInViewport()) {
                    fd5.play();
                    
                }
                if ($(".past-future_slider").isInViewport()) {
                    $('.past-future_slider-slide').each(function (i) {
                        var $item = $(this).find("._8_fundcards");
                        setTimeout(function() { 
                        $item.click();
                        }, 100*i);
                    });
                    
                }
                if ($(".resouces-section").isInViewport()) {
                    $('.single-resource-wrap-item').each(function (i) {
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

    var screenWidth = $(window).width();
    var closedFundsWrapper = $(".past-future_content").outerWidth();
    var closedFundSlidesN = $('.past-future_slider-mask').find('.past-future_slider-slide').length;
    var closedFundSlidesOW = $('.past-future_slider-mask').find('.past-future_slider-slide').outerWidth();
    var closedFundsTotalWidth = (closedFundSlidesN * closedFundSlidesOW);
    var dd = new Dragdealer('content-scroller', {
        steps: closedFundSlidesN,
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        animationCallback: function(x, y) {
            $('.past-future-slider-active_line').css('width', Math.round(x * 100) + '%');
            $('.past-future_slider').css('margin-left', -x * (closedFundsTotalWidth - closedFundsWrapper + 32));
        },
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
    
    var homeBenefitsImageWrap = $('.direct-invest_graph-wrap-div').outerWidth();
    var sp500Width = $('.direct-invest_graph').outerWidth();
    var sp500slider = new Dragdealer('home-benefits-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: sp500Width,
        animationCallback: function(x, y) {
            $('.home-benefits_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.direct-invest_graph-wrap-div').css('margin-left', -x * (sp500Width - homeBenefitsImageWrap + 32));
        }
    });

    function dragDetector() {
        var closedFundsWrapper = $(".past-future_content").outerWidth();
        var closedFundSlidesN = $('.past-future_slider-mask').find('.past-future_slider-slide').length;
        var closedFundSlidesOW = $('.past-future_slider-mask').find('.past-future_slider-slide').outerWidth();
        var closedFundsTotalWidth = (closedFundSlidesN * closedFundSlidesOW);
        dd = new Dragdealer('content-scroller', {
            steps: closedFundSlidesN,
            speed: 0.1,
            requestAnimationFrame: true,
            horizontal: true,
            vertical: false,
            animationCallback: function(x, y) {
                $('.past-future-slider-active_line').css('width', Math.round(x * 100) + '%');
                $('.past-future_slider').css('margin-left', -x * (closedFundsTotalWidth - closedFundsWrapper + 32));
            },
        });

        if(closedFundsWrapper < (closedFundsTotalWidth)){
            $('.past-future-drag-component').css('opacity', '1');
        }
        else {
            $('.past-future-drag-component').css('opacity', '0');
        }

            var homeBenefitsImageWrap = $('.direct-invest_graph-wrap-div').outerWidth();
            var sp500Width = $('.direct-invest_graph').outerWidth();
            sp500slider = new Dragdealer('home-benefits-drag-tool', {
                speed: 0.1,
                requestAnimationFrame: true,
                horizontal: true,
                vertical: false,
                xPrecision: sp500Width,
                animationCallback: function(x, y) {
                    $('.home-benefits_drag-line-active').css('width', Math.round(x * 100) + '%');
                    $('.direct-invest_graph-wrap-div').css('margin-left', -x * (sp500Width - homeBenefitsImageWrap + 32));
                }
            });

            if(homeBenefitsImageWrap < sp500Width){
                $('.home-benefits_drag-element').css('opacity', '1');
            }
            else {
                $('.home-benefits_drag-element').css('opacity', '0');
            }
        
    }

    dragDetector();
        var resizeDone;
        var cachedWidth = $(window).width();
        $(window).resize(function(){
            var newWidth = $(window).width();
            if(newWidth !== cachedWidth){
                clearTimeout(resizeDone);
                resizeDone = setTimeout(doneResizing, 500);
                cachedWidth = newWidth;
            }
        });

        function doneResizing(){
            screenWidth = $(window).width();
            if(screenWidth > 991){
                $('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
            }
            dragDetector();
        }