    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });
    var screenWidth = $(window).width();
    //video player start
    var playButton = $('#play-video');
    var video = $('#video-player').get(0);

    $(document).on('click', '#play-video, #video-player', function (e) {
        if (video.paused === false) {
            video.pause();
        } else {
            playButton.css('display', 'none');
            video.play();
            video.setAttribute('controls', 'controls');
        }
        return false;
    });

    $(document).on('click', '#home-page-hero-section, .how-it-works_hero-section', function (e) {
        if (video.paused === false) {
            video.pause();
            video.setAttribute('controls', 'controls');
        } else {
        }
        return false;
    });

    //video player end

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
                delay: (b, a) => 30 * a,
                begin() {
                    $(".fadeup1").css("opacity", "1");
                },
            });


            $(window).scroll(function() {
                if ($('.fadeup1').isInViewport()) {
                    b.play();
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

        $(window).resize(function() {
            var wwidth = $(window).width();
            if(screenWidth!==wwidth){
                 screenWidth = $(window).width();
                 animationsRender();
                 dragDetector();
            }
        });