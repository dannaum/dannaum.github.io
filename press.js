    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });

    var screenWidth = $(window).width();

    $('.knowledge-center_category-tag').eq(0).addClass('active');
    $('.knowledge-center_category-tag').on('click', function(){
        $(this).siblings('.knowledge-center_category-tag').removeClass('active');
        var tagName = $(this).text().toLowerCase();
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.single-pr-item').removeClass('filtered-item');
            $('.press-search-coverage-grid').css('display', 'none');
            $('.press-static-coverage-grid').css('display', 'block');
            $('.press-search-button').css('display', 'none');
        }
        else {
            $(this).addClass('active');
            $('.single-pr-item').removeClass('filtered-item');
            $('.press-static-coverage-grid').css('display', 'none');
            $('.press-search-coverage-grid').css('display', 'block');
            $('.press-search-button').css('display', 'block');
            $('.press-search-coverage-grid').find('.single-pr-item').each(function(){
                var languageTag = $(this).find('.single-media-tag');
                if($(languageTag).text().toLowerCase() == tagName){
                    $(this).addClass('filtered-item');
                    $(this).css('display', 'block');
                    $('.filtered-item').each(function(){
                        if($(this).index('.filtered-item') > 5){
                            $(this).css('display', 'none');
                        }
                    });
                }
                else if(tagName == 'all'){
                    $(this).css('display', 'block');
                    $(this).removeClass('filtered-item');
                    $('.press-search-coverage-grid').css('display', 'none');
                    $('.press-static-coverage-grid').css('display', 'block');
                }
                else {
                    $(this).css('display', 'none');
                }
            });
        }
        var len = $('.filtered-item').length;
        if(len == $('.filtered-item:visible').length){
            $('.press-search-button').css('display', 'none');
        }
    });

    $('.press-search-button').on('click', function(){
        var lastIndex = $('.filtered-item:visible').last().index('.filtered-item');
        $('.filtered-item').each(function(){
            if($(this).index('.filtered-item') > 5 && $(this).index('.filtered-item') < lastIndex + 7){
                $(this).css('display', 'block');
            }
            if($('.filtered-item:hidden').length < 1){
                $('.press-search-button').css('display', 'none');
            }
        });
    });

    for (var b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
        var c = b.item(a);
        c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="letter">$2</span>');
    }

    var aPlayed = false;

    function animationsRender()    {
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
                $(window).focus(function () {
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
            var c = anime.timeline({ loop: !1, autoplay: !1 });
            c.add({
                targets: ".fadeup2 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 30 * a,
                begin() {
                    $(".fadeup2").css("opacity", "1");
                },
            });

            var pressFilters = $('.knowledge-center_category-tags').find('._9_tag_animation');
            $(pressFilters).each(function (i) {
                var $item = $(this);
                setTimeout(function() { 
                    $item.click();
                }, 100*i);
            });

            var pressFiles = $('.resource-card-wrap').find('._9_tag_animation');

            //on window scroll
            $(window).scroll(function(){
                //if fadeup1 is in viewport
                if($('.fadeup1').isInViewport()){
                    b.play();
                    
                }
                //else if fadeup2 is in viewport
                else if($('.fadeup2').isInViewport()){
                    c.play();
                    $(pressFiles).each(function (i) {
                        var $item = $(this);
                        setTimeout(function() { 
                            $item.click();
                        }, 100*i);
                    });
                    
                };
            });
        }
    }

        animationsRender();
