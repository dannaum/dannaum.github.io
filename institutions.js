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
                else if ($(".fadeup2").isInViewport()) {
                    c.play();
                    setTimeout(function() {
                        $('.institutional-solutions_single-card').each(function (i) {
                            var $item = $(this).find("._8_fundcards");
                            setTimeout(function() { 
                            $item.click();
                            }, 100*i);
                        });
                    }, 500);
                    
                }
                else if ($(".fadeup3").isInViewport()) {
                    d.play();
                    
                }
                else if ($(".partners-logos_img").isInViewport()) {
                    $('.partners-logos_img').each(function (i) {
                        var $item = $(this); 
                        setTimeout(function() { 
                        $item.click();
                        }, 100*i);
                    });
                    
                }
            });
        }
    }

    animationsRender();

    
   //on click of .book-demo
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

    $('input[type=submit]').click(function() {
        var req = $('.required-form-field');
        $('.form-field').removeClass('invalid-form-field');
        $.each(req, function(e){
            var curr_val = $(this).val();
                if(! curr_val)
                    {
                        $(this).addClass('invalid-form-field');
                        $('html, body').animate({            // added for scrolling purposes
                        scrollTop: $(this).offset().top -100
                    }, -200);
                        return false;
                }
        });
    });

   $('#hubspot-form').submit(function() {
      $('html,body').animate({
        scrollTop: $("#snd-msg-form").offset().top - $(window).height()/2
        }, 1000);
        setTimeout(function() {
        $('.form-field').delay(2000).val('');
        },1000)
       
    });
    var instSolutionsWrap = $('.institutional-solutions_grid-wrap').outerWidth();
    var instSolutions = $('.institutional-solutions_grid').outerWidth();
    var screenWidth = $(window).width();
    var instSolutionsDragDealer = new Dragdealer('inst-solutions-drag', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: instSolutions,
        
        callback: function (x,y ) {
            var thisss = instSolutionsDragDealer.getValue();
        },
        animationCallback: function(x, y) {
            $('.institutional_solutions_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.institutional-solutions_grid').css('margin-left', -x * (instSolutions - instSolutionsWrap + 32));
        }
    });


    function dragDetector() {
        var instSolutionsWrap = $('.institutional-solutions_grid-wrap').outerWidth();
        var instSolutions = $('.institutional-solutions_grid').outerWidth();
        var instSolutionsDragDealer = new Dragdealer('inst-solutions-drag', {
            speed: 0.1,
            requestAnimationFrame: true,
            horizontal: true,
            vertical: false,
            xPrecision: instSolutions,
            
            callback: function (x,y ) {
                var thisss = instSolutionsDragDealer.getValue();
            },
            animationCallback: function(x, y) {
                $('.institutional_solutions_drag-line-active').css('width', Math.round(x * 100) + '%');
                $('.institutional-solutions_grid').css('margin-left', -x * (instSolutions - instSolutionsWrap + 32));
            }
        });
        if(instSolutions > instSolutionsWrap){
            $('.institutional_solutions_drag-element').css('opacity', '1');
        }
        else{
            $('.institutional_solutions_drag-element').css('opacity', '0');
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

        