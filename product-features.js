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

            $(window).scroll(function () {
                if ($(".resouces-section").isInViewport()) {
                    setTimeout(function() {
                        $('.single-resource-wrap-item').each(function (i) {
                            var $item = $(this).find("._8_fundcards");
                            setTimeout(function() { 
                            $item.click();
                            }, 100*i);
                        });
                    }, 500);
                    
                }
            });
        }
    }

        animationsRender();

    var screenWidth = $(window).width();

    $('.product-features_slide-nav-number').click(function() {  
        var index = $(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.product-features_hero-slide-nav').find('.w-slider-dot').eq(index).click();
        //for each ".product-features_slide-nav_single"
        $('.product-features_slide-nav_single').each(function() {
            //if this index == index
            if($(this).index() == index) {
                //show this
                $(this).css('display', 'block');
            }
            //else
            else {
                //hide this
                $(this).css('display', 'none');
            }
        });
    });
    //on click of ".product-features_hero-slider-slide"
    $('.product-features_hero-slider-slide').click(function() {
        //find the index of this
        var index = $(this).index();
        $('.product-features_slide-nav-number').eq(index).click();
    });


    function observeTransform(el, callback) {
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var observer = new MutationObserver(function (mutations, observer) {
            callback();
        });
        observer.observe(el, {
            attributes: true,
            attributeFilter: ['style']
        });
    }
    observeTransform(document.querySelector('.product-features_hero-slider-slide'), function () {
        //for each ".w-slider-dot"
        $('.w-slider-dot').each(function () {
            //if this has class w-active
            if ($(this).hasClass('w-active')) {
                //get this index 
                var index = $(this).index('.w-slider-dot');
                //click on ".product-features_slide-nav-number" at index
                $('.product-features_slide-nav-number').eq(index).click();
            }
        });
    });

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
        }

    