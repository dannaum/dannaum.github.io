//on page load
$(document).ready(function() {
    $('p:contains("start-sidebar")').each(function() {
        $(this).nextUntil('p:contains("end-sidebar")').wrapAll('<div class="glossary-article-siderbar" />');
    });

    $('p:contains("start-sidebar")').remove();
    $('p:contains("end-sidebar")').remove();
    $(".blog-rich-text").find("h2").each(function() {
        var text = $(this).text();
        $('.glossary-article_navigation').append("<a class='glossary-article_navigation-link'><h3 class='hs7 bottom-margin-0'>" + text + "</h3></a>");
    });
    $(".glossary-article_navigation-link").first().addClass("active");

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    //window on scroll
    $(window).on('scroll', function() {
        $(".blog-rich-text").find("h2").each(function() {
            if ($(this).isInViewport()) {
                var whichSection = $(this).index("h2");
                $('.glossary-article_navigation-link').removeClass('active');
                $('.glossary-article_navigation-link').eq(whichSection).addClass('active');
            }
        });
    });
    
    $('.glossary-article_navigation-link').on('click', function() {
        var tabText = $(this).text();
        var navbarHeight = $('.navbar_section').outerHeight();
        var whichSection = $(this).index(".glossary-article_navigation-link");
        $('html, body').animate({
            scrollTop: $('.blog-rich-text').find("h2").eq(whichSection).offset().top - (navbarHeight * 2)
        }, 1000);
    });
    if ($(window).width() > 991) {
        if ($(".glossary-article_navigation").children(".glossary-article_navigation-link").length > 0) {
            $(".glossary-article_navigation").css("display", "block");
        }
    }

    $(window).on('resize orientationchange', function() {
        if ($(window).width() < 991) {
            $(".glossary-article_navigation").css("display", "none");
        }
        else if ($(window).width() > 991 && $(".glossary-article_navigation").children(".glossary-article_navigation-link").length > 0) {
            $(".glossary-article_navigation").css("display", "block");
        }
    });
    /*
    else {
        $('.investing-moonfare_tab-link').on('click', function() {
            var navbarHeight = $('.navbar_section').outerHeight();
            var whichSection = $(this).index();
            //scroll to ".investing-moonfare_tab-content" eq to whichSection - navbarHeight
            $('html, body').animate({
                scrollTop: $('.investing-moonfare_tab-content').eq(whichSection).offset().top - (navbarHeight * 2)
            }, 1000);
            $('.investing-moonfare_tabs-right').css('display', 'block');
            $('.investing-moonfare_tab-link-responsive-defalt').css('display', 'flex');
            $('.investing-moofare_tabs-right-wrapper').css('display', 'block');
            var tabText = $(this).text();
            $('.investing-moonfare_tab-link-responsive-defalt-text').text(tabText);
            //'.investing-moonfare_tab-content' each
            $('.investing-moonfare_tab-content').each(function() {
                //if this index == whichSection
                if ($(this).index() == whichSection) {
                    //show
                    $(this).css('display', 'block');
                }
                else {
                    //hide
                    $(this).css('display', 'none');
                }
    
            });
        });
        
        $('.investing-moonfare_tab-link-responsive-defalt').on('click', function() {
            $(this).css('display', 'none');
            $('.investing-moonfare_tab-content').css('display', 'none');
        });
    }
    */
});