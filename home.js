    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });

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
    var homeBenefitsImageWrap = $('.benefits-home-content').outerWidth();
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
        $(".home-pe-101_cards").eq(1).css("display", "none");
        $(".home-pe-101_cards").eq(2).css("display", "none");
            $(".home-pe-101_selector").hover(function() {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
                $(".home-pe-101_selector").find('.paragraph-small-copy').css("opacity", "0");
                $(this).find('.paragraph-small-copy').css("opacity", "1");
                var index = $(this).index();
                $(".home-pe-101_cards").css("display", "none");
                $(".home-pe-101_cards").eq(index).css("display", "grid");
            });
    }
    else {
        var htmlCards = $(".home-pe-101_cards").eq(0).html();
        var htmlCards1 = $(".home-pe-101_cards").eq(1).html();
        var htmlCards2 = $(".home-pe-101_cards").eq(2).html();
        $(".home-pe-101_cards").remove();
        $(".home-pe-101_selector").eq(0).after('<div class="home-pe-101_cards">'+ htmlCards +'</div>');
        $(".home-pe-101_selector").eq(1).after('<div class="home-pe-101_cards">'+ htmlCards1 +'</div>');
        $(".home-pe-101_selector").eq(2).after('<div class="home-pe-101_cards">'+ htmlCards2 +'</div>');

        $(".home-pe-101_selector").click(function() {
            if ($(this).hasClass("active")) {
                $('.home-pe-101_selector').removeClass("active");
                $(".home-pe-101_cards").css("display", "none");
            }
            else {
                $(this).addClass("active");
                var index = $(this).index('.home-pe-101_selector');
                $(".home-pe-101_cards").css("display", "none");
                $(".home-pe-101_cards").each(function() {
                    var index1 = $(this).index('.home-pe-101_cards');
                    if (index1 == index) {
                        $(this).css("display", "grid");
                    }
                    else {
                        $(this).css("display", "none");
                    }
                });
            }
        });
        $(".home-pe-101_cards").eq(0).css("display", "grid");
    }

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
    
            var d = anime.timeline({ loop: !1, autoplay: !1 });
            d.add({
                targets: ".fadeup3 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 300 + 30 * a,
                begin() {
                    $(".fadeup3").css("opacity", "1");
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
            var institutionsSectoinTitle = anime.timeline({ loop: !1, autoplay: !1 });
            institutionsSectoinTitle.add({
                targets: ".fadeup-institutions-section .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 300 + 30 * a,
                begin() {
                    $(".fadeup-institutions-section").css("opacity", "1");
                },
            });
            var joinCommunityTitle = anime.timeline({ loop: !1, autoplay: !1 });
            joinCommunityTitle.add({
                targets: ".fadeup-join-community-title .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 300 + 30 * a,
                begin() {
                    $(".fadeup-join-community-title").css("opacity", "1");
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
                else if ($(".fadeup-institutions-section").isInViewport()) {
                    institutionsSectoinTitle.play();
                }
                else if ($(".fadeup-join-community-title").isInViewport()) {
                    joinCommunityTitle.play();
                }
                else if ($(".partners-logos_img").isInViewport()) {
                    $('.partners-logos_img').each(function (i) {
                        var $item = $(this); 
                        setTimeout(function() { 
                          $item.click();
                        }, 100*i);
                    });
                }
                else if ($(".resouces-grid-right").isInViewport()) {
                    setTimeout(function() {
                        $('.resources-right-grid_item').each(function (i) {
                            var $item = $(this).find("._8_fundcards");
                            setTimeout(function() { 
                            $item.click();
                            }, 100*i);
                        });
                    }, 500);
                }
            });
        }
        else {
            const chart = new Chart(ctx, config);
        }
    }
        animationsRender();
        function dragDetector() {
            if(homeBenefitsImageWrap < sp500Width){
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