$(document).ready(function(){
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

    $(window).on('orientationchange', function(event) {
        if(closedFundsWrapper < closedFundsMask){
            $('.past-future-drag-component').css('display', 'block');
        }
    });
    $(window).resize(function(){
        if(closedFundsWrapper < closedFundsMask){
            $('.past-future-drag-component').css('display', 'block');
        }
    });
    if(closedFundsWrapper < closedFundsMask){
        $('.past-future-drag-component').css('display', 'block');
    }

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
    $(window).on('orientationchange', function(event) {
        if(homeBenefitsImageWrap < sp500Width){
            $('.home-benefits_drag-element').css('display', 'block');
        }
    });
    $(window).resize(function(){
        if(homeBenefitsImageWrap < sp500Width){
            $('.home-benefits_drag-element').css('display', 'block');
        }
    });
    if(homeBenefitsImageWrap < sp500Width){
        $('.home-benefits_drag-element').css('display', 'block');
    }

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

        var c = anime.timeline({ loop: !1, autoplay: !1 });
        c.add({
            targets: ".fadeup2 .letter",
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutQuint",
            duration: 800,
            delay: (b, a) => 300 + 30 * a,
            begin() {
                $(".fadeup2").css("opacity", "1");
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

        var e = anime.timeline({ loop: !1, autoplay: !1 });
        e.add({
            targets: ".fadeup4 .letter",
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutQuint",
            duration: 800,
            delay: (b, a) => 300 + 30 * a,
            begin() {
                $(".fadeup4").css("opacity", "1");
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
          

        $(window).scroll(function() {
            if ($(".fadeup1").isInViewport()) {
                b.play();
            }
            else if ($(".fadeup2").isInViewport(100)) {
                c.play();
            }
            else if ($(".fadeup3").isInViewport()) {
                d.play();
            }
            else if ($(".fadeup4").isInViewport()) {
                e.play();
            }
            else if ($(".fadeup5").isInViewport()) {
                fd5.play();
            }
            else if ($(".partners-logos_img").isInViewport()) {
                $('.partners-logos_img').each(function (i) {
                    var $item = $(this); 
                    setTimeout(function() { 
                      $item.click();
                    }, 100*i);
                });
            }
            else if ($(".invest-your-way_single-item").isInViewport()) {
                $('.invest-your-way_single-item').each(function (i) {
                    var $item = $(this).find("._8_fundcards");
                    setTimeout(function() { 
                      $item.click();
                    }, 100*i);
                });
            }
            else if ($(".past-future_slider").isInViewport()) {
                $('.past-future_slider-slide').each(function (i) {
                    var $item = $(this).find("._8_fundcards");
                    setTimeout(function() { 
                      $item.click();
                    }, 100*i);
                });
            }
            else if ($(".alt-single-press_wrap_item").isInViewport()) {
                $('.alt-single-press_wrap_item').each(function (i) {
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

        var g,
            f = $(".home-page_hero-visual"),
            h = f.width(),
            i = $(window).scrollTop() + $(window).height();
        $(window).scroll(function () {
            (g = $(this).scrollTop()), f.width(h + g);
        });
    }
    

});