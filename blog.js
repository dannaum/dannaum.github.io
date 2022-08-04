    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });

    $('.knowledge-center_category-tag').eq(0).addClass('active');
    $('.knowledge-center_category-tag').on('click', function(){
    var tag = $(this).text().toLowerCase();
    $('.knowledge-center_category-tag').removeClass('active');
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.single-blog_item').css('display', 'block');
        $('.blog-hero_article-wrapper').css('display', 'block');
        $('.blog-articles_section').css('display', 'block');
        $('.blog-articles_section-search').css('display', 'none');
    }
    else {
        $(this).addClass('active');
        $('.blog-hero_article-wrapper').css('display', 'none');
        $('.blog-articles_section').css('display', 'none');
        $('.blog-articles_section-search').css('display', 'block');
        $('.single-blog_item').each(function(){
            var singleTag = $(this).find('.single-media-tag').eq(0).text().toLowerCase()
            var singleTag2 = $(this).find('.single-media-tag').eq(1).text().toLowerCase();
            if(singleTag == tag || singleTag2 == tag){
                $(this).css('display', 'block');
            }
            else if(tag == 'all') {
                $(this).closest('.single-blog_item').css('display', 'block');
                $('.blog-hero_article-wrapper').css('display', 'block');
                $('.blog-articles_section').css('display', 'block');
                $('.blog-articles_section-search').css('display', 'none');
            }
            else {
                $(this).css('display', 'none');
            }
        });
        }
    });

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
        $('._9_tag_animation_parent').each(function (i) {
            var $item = $(this).find("._9_tag_animation");
            setTimeout(function() { 
                $item.click();
            }, 50*i);
        });
    }