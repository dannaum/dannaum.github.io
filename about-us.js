//on page load
$(document).ready(function () {
    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });
    //blue-highlight wrap in span "tool-tip_wrapper"
    $('.blue-highlight').wrap('<span class="tool-tip_wrapper"></span>');
    //get text of highlight class  and save it in array 
    var highlight = [];
    var tip_single = [];
    var tip_single_elems = []
    $('.blue-highlight').each(function(index, el) {
        highlight.push($(this).text().toLocaleLowerCase().trim());
    });
    $(".tool-tip_single_wrapper").each(function(index, el) {
        tip_single.push($(this).find('.tool-tip_title').text().toLocaleLowerCase().trim());
        tip_single_elems.push($(this))
    });
    //match highlight and tip_single if matched append tip_single to highlight
    for (var i = 0; i < highlight.length; i++) {
        for (var j = 0; j < tip_single.length; j++) {
            if (highlight[i] == tip_single[j]) {
                //blue-highlight get href link
                var href = $('.blue-highlight').eq(i).attr('href');
                $('.blue-highlight').eq(i).parent().append(' <div class="tool-tip_single_wrapper"><div class="tool-tip_single"><div class="tool-tip_title-wrap">MOONFARE GLOSSARY</div><div class="tool-tip_content"><p class="paragraph-medium bottom-margin-i-m tool-tip_title">'+$(tip_single_elems[j]).find('.tool-tip_title').text()+'</p><p class="paragraph-small bottom-margin-i-l tool-tip_paragraph">'+$(tip_single_elems[j]).find('.tool-tip_paragraph').text()+'</p><a class="text-link" href="'+$(tip_single_elems[j]).find('.text-link').attr('href')+'">Visit Glossary</a></div></div></div>');
            }
        }
    }
    //tool-tip_wrapper mouse enter
    $('.tool-tip_wrapper').mouseenter(function () {
        //this find "tool-tip_single" and set css to display block
        $(this).find('.tool-tip_single_wrapper').css('display', 'block');
    });
    $('.tool-tip_wrapper').mouseleave(function () {
        //this find "tool-tip_single" and set css to display block
        $(this).find('.tool-tip_single_wrapper').css('display', 'none');
    });
    $('.tool-tips').remove();
    //careers_chart-legend-single-item eq0 on click
    $(".careers_chart-legend-single-item").click(function () {
        $('.careers_chart-legend-single-item').removeClass('active');
        $(this).toggleClass('active');
    });
    //on hover element 'chart-single-icon-wrap'
    $('.chart-single-icon-wrap').mouseenter(function () { 
        //this find "chart-hover-child" and set css display block
        $(this).find(".chart-hover-child").css("display", "block");
    });
    //chart-single-icon-wrap hover out
    $(".chart-single-icon-wrap").mouseleave(function () {
        //this find "chart-hover-child" and set css display none
        $(this).find(".chart-hover-child").css("display", "none");
    });

    var chartSlider = $('#myChart').outerWidth();
    var timelineSlide = $('.chart-timeline').outerWidth();
    var myChartDrag = new Dragdealer('careers-drag', {
    horizontal: true,
    vertical: false,
    xPrecision: chartSlider,
    animationCallback: function(x, y) {
        $('.careers-chart_drag-line-active').css('width', Math.round(x * 100) + '%');
        $('#myChart').css('margin-left', -x * (chartSlider/2) /16 + 'REM');
        $('.chart-timeline').css('margin-left', -x * (timelineSlide/2) /16 + 'REM');
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

        //on window scroll
        $(window).scroll(function(){
            //if fadeup1 is in viewport
            if($('.fadeup1').isInViewport()){
                b.play();
            }
            //else if fadeup2 is in viewport
            else if ($(".fadeup2").isInViewport()) {
                c.play();
                $('.careers_chart_legend_item').each(function (i) {
                    var $item = $(this).find("._8_fundcards");
                    setTimeout(function(e) { 
                      $item.click();
                    }, 100*i);
                });
            }
            else if ($(".chart-timeline").isInViewport()) {
                $('.chart-timeline-line').click();
                $('.chart-single-item_animation').each(function (i) {
                    var $item = $(this);
                    setTimeout(function() { 
                      $item.click();
                    }, 50*i);
                });
            }
        });

        var g,
            f = $(".careers_hero-visual"),
            h = f.width(),
            i = $(window).scrollTop() + $(window).height();
        $(window).scroll(function () {
            (g = $(this).scrollTop()), f.width(h + g);
        });
    }
});