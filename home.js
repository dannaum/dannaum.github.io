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
                else if ($('.home-benefits_image-title').isInViewport()) {
                    if (!viewedSPGraph) {
                        const chart = new Chart(ctx, config);
                        viewedSPGraph = true;
                        
                    }
                    else if  (viewedSPGraph) {
                    }
                }
                else if ($(".fadeup5").isInViewport()) {
                    fd5.play();
                    //timeout 500 ms
                    setTimeout(function() {
                        $('.past-future_slider-slide').each(function (i) {
                            var $item = $(this).find("._8_fundcards");
                            setTimeout(function() { 
                            $item.click();
                            }, 100*i);
                        });
                    }, 500);

                }
                else if ($(".fadeuppe").isInViewport()) {
                    petitle.play();
                    
                }
            });
        }
        else {
            const chart = new Chart(ctx, config);
        }
    }
    animationsRender();

    var screenWidth = $(window).width();
    var closedFundsWrapper = $(".past-future_content").outerWidth();
    var closedFundsMask = $('.past-future_slider-mask').outerWidth();
    var closedFundSlidesN = $('.past-future_slider-mask').find('.past-future_slider-slide').length;
    var closedFundSlidesOW = $('.past-future_slider-mask').find('.past-future_slider-slide').outerWidth();
    var closedFundsTotalWidth = (closedFundSlidesN * closedFundSlidesOW);
    var dd = new Dragdealer('content-scroller', {
        steps: closedFundSlidesN,
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        reflow: true,
        animationCallback: function(x, y) {
            $('.past-future-slider-active_line').css('width', Math.round(x * 100) + '%');
            $('.past-future_slider-mask').css('margin-left', -x * (64 +closedFundsTotalWidth - closedFundsWrapper));
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
    
    var homeBenefitsImageWrap = $('.home-benefits-section').outerWidth();
    var sp500Width = $('.home-benefits_image').outerWidth();
    var sp500slider = new Dragdealer('home-benefits-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: sp500Width,
        reflow: true,
        animationCallback: function(x, y) {
            $('.home-benefits_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.home-benefits_image-wrap').css('margin-left', -x * (sp500Width - screenWidth +64));
        }
    });

    $('.book-demo').on('click', function(){
        //popup_main animate opacity from 0 to 100
        $('.popup_main').animate({opacity: 1}, 500).toggle();
        $('body').css('overflow', 'hidden');
    });
    //on click of popup_close-button
    $('.popup_close-button').on('click', function(){
        //popup_main animate opacity from 100 to 0
        $('.popup_main').animate({opacity: 0}, 500);
        //after 500ms toggle popup_main
        setTimeout(function(){
            $('.popup_main').toggle();
        }, 500);
        $('body').css('overflow', 'auto');
    });


    $('.alt-single-press_wrap').each(function() {
        var parent_index = $(this).parent().index();
        $(this).attr('data-testid', 'alt-single-press-wrap-' + parent_index);
    });
    
    $('.past-future_single-card').each(function() {
        var parent_index = $(this).parent().index();
        $(this).attr('data-testid', 'closed-funds-card-' + parent_index);
    });

    $(".testimonials_slider-slide").eq(0).find(".hs5").addClass("current-testimonial-quote"),
        $(".testimonials_click").click(function () {
            $(".hs5").removeClass("current-testimonial-quote");
            var a = $(".testimonials_slider-nav").find(".w-slider-dot.w-active").index();
            $(".testimonials_slider-slide").eq(a).find(".hs5").addClass("current-testimonial-quote");
        });

        if ($(window).width() > 991) {
            $(".home-pe-101_wrappers").eq(1).css("display", "none");
            $(".home-pe-101_wrappers").eq(2).css("display", "none");
                $(".home-pe-101_selector").hover(function() {
                    $(this).siblings().removeClass("active");
                    $(this).addClass("active");
                    $(".home-pe-101_selector").find('.paragraph-small-copy').css("opacity", "0");
                    $(this).find('.paragraph-small-copy').css("opacity", "1");
                    var index = $(this).index();
                    $(".home-pe-101_wrappers").css("display", "none");
                    $(".home-pe-101_wrappers").eq(index).css("display", "block");
                });
        }
        else {
            var htmlCards = $(".home-pe-101_wrappers").eq(0).html();
            var htmlCards1 = $(".home-pe-101_wrappers").eq(1).html();
            var htmlCards2 = $(".home-pe-101_wrappers").eq(2).html();
            $(".home-pe-101_wrappers").remove();
            $(".home-pe-101_selector").eq(0).after('<div class="home-pe-101_wrappers">'+ htmlCards +'</div>');
            $(".home-pe-101_selector").eq(1).after('<div class="home-pe-101_wrappers hidden-div">'+ htmlCards1 +'</div>');
            $(".home-pe-101_selector").eq(2).after('<div class="home-pe-101_wrappers hidden-div">'+ htmlCards2 +'</div>');
    
            $(".home-pe-101_selector").click(function() {
                if ($(this).hasClass("active")) {
                    $('.home-pe-101_selector').removeClass("active");
                    $(".home-pe-101_wrappers").css("display", "none");
                    $(".home-pe-101_selector").find('.paragraph-small-copy').css("opacity", "0");
                }
                else {
                    $(".home-pe-101_selector").find('.paragraph-small-copy').css("opacity", "0");
                    $('.home-pe-101_selector').removeClass("active");
                    $(this).addClass("active");
                    $(this).find('.paragraph-small-copy').css("opacity", "1");
                    var index = $(this).index('.home-pe-101_selector');
                    $(".home-pe-101_wrappers").css("display", "none");
                    $(".home-pe-101_wrappers").each(function() {
                        var index1 = $(this).index('.home-pe-101_wrappers');
                        if (index1 == index) {
                            $(this).css("display", "block");
                        }
                        else {
                            $(this).css("display", "none");
                        }
                    });
                }
            });
            $(".home-pe-101_wrappers").eq(0).css("display", "block");
        }

        function dragDetector() {
            var closedFundsWrapper = $(".past-future_content").outerWidth();
            console.log('closedFundsWrapper',closedFundsWrapper);
            var closedFundsMask = $('.past-future_slider-mask').outerWidth();
            var closedFundSlidesN = $('.past-future_slider-mask').find('.past-future_slider-slide').length;
            var closedFundSlidesOW = $('.past-future_slider-mask').find('.past-future_slider-slide').outerWidth();
            var closedFundsTotalWidth = (closedFundSlidesN * closedFundSlidesOW);
            console.log('closedFundsTotalWidth',closedFundsTotalWidth);
            var homeBenefitsImageWrap = $('.home-benefits-section').outerWidth();
            var sp500Width = $('.home-benefits_image').outerWidth();
            dd.reflow();
            if(homeBenefitsImageWrap < sp500Width){
                $('.home-benefits_drag-element').css('display', 'block');
            }
            else {
                $('.home-benefits_drag-element').css('display', 'none');
            }
            if(closedFundsWrapper < (closedFundsTotalWidth)){
                $('.past-future-drag-component').css('display', 'block');
            }
            else {
                $('.past-future-drag-component').css('display', 'none');
            }
        }
        dragDetector();
        var resizeDone;
        $(window).resize(function() {
            clearTimeout(resizeDone);
            resizeDone = setTimeout(doneResizing, 500);
            
        });

        function doneResizing(){
            screenWidth = $(window).width();
            if(screenWidth > 991){
                $('.animated-word').css('opacity', '1');
            }
            dragDetector();
        }