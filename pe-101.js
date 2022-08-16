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
        }
    }

        animationsRender();
        
    var screenWidth = $(window).width();
    var peBContent = $('.pe-101-content-basics').outerWidth();
    var peCard = $('.pe-101_grid-single').outerWidth();
    var peBCardLength = $('.pe-101_grid-4-basics').find('.pe-101_grid-single').length;
    var peBCardsGrid = $('.pe-101_grid-4-basics').outerWidth();
    var peSCardsGrid = $('.pe-101_grid-4-strategies').outerWidth();
    var peSCardLength = $('.pe-101_grid-4-strategies').children().length;
    var peBSlider = new Dragdealer('pe-101b-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: peBCardsGrid,
        reflow: true,
        animationCallback: function(x, y) {
            $('.pe-101-b_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.pe-101_grid-4-basics').css('margin-left', +x * (peBContent - peBCardsGrid));
        }
    });

    var peBSlider = new Dragdealer('pe-101s-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: peBCardsGrid,
        reflow: true,
        animationCallback: function(x, y) {
            $('.pe-101-s_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.pe-101_grid-4-strategies').css('margin-left', +x * (peBContent - peSCardsGrid));
        }
    });

    var resizeDone;
        $(window).resize(function() {
            clearTimeout(resizeDone);
            resizeDone = setTimeout(doneResizing, 500);
            
        });

        function doneResizing(){
            screenWidth = $(window).width();
            if(screenWidth > 991){
                $('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
            }
        }
