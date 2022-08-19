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

            
                a.play();
                $(window).focus(function() {
                    if (!aPlayed) {
                        a.restart();
                        aPlayed = true;
                    }
                    else {
                        
                    }
                });

            var heroVisualScrollAdd
            var heroVisual = $(".home-page_hero-visual");
            var heroVisualWidth = (heroVisual).width();
            var currentScroll = $(window).scrollTop() + $(window).height();
            var viewedCareersGraph = false;
            $(window).scroll(function() {
                heroVisualScrollAdd = $(this).scrollTop();
                heroVisual.width(heroVisualScrollAdd + heroVisualWidth);

                if($('.fadeup1').isInViewport()){
                        b.play();
                        
                }

                else if ($(".fadeup2").isInViewport()) {
                        c.play();
                        var legendItems = $(".careers_chart-legend").find("._8_fundcards_parent").find("._8_fundcards");
                        $(legendItems).each(function (i) {
                            var $item = $(this);
                            setTimeout(function(e) { 
                            $item.click();
                            }, 100*i);
                        });
                    if (!viewedCareersGraph) {
                        const myChart = new Chart(document.getElementById('myChart'),config);
                        function toggleDataFirst() {
                        myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.show(0), myChart.hide(1), myChart.hide(2);
                        }
                        function toggleDataSecond() {
                            myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.hide(0), myChart.show(1), myChart.hide(2);
                        }
                        function toggleDataThird() {
                            myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.hide(0), myChart.hide(1), myChart.show(2);
                        }
                        function toggleDataAll() {
                            myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.show(0), myChart.show(1), myChart.show(2);
                        }
                        document.querySelector("#first-chart").addEventListener("click", toggleDataFirst);
                        document.querySelector("#second-chart").addEventListener("click", toggleDataSecond);
                        document.querySelector("#third-chart").addEventListener("click", toggleDataThird);
                        document.querySelector("#all-chart").addEventListener("click", toggleDataAll);
                        viewedCareersGraph = true;
                    }
                    
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
        }
        else {
            const myChart = new Chart(document.getElementById('myChart'),config);
            function toggleDataFirst() {
            myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.show(0), myChart.hide(1), myChart.hide(2);
            }
            function toggleDataSecond() {
                myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.hide(0), myChart.show(1), myChart.hide(2);
            }
            function toggleDataThird() {
                myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.hide(0), myChart.hide(1), myChart.show(2);
            }
            function toggleDataAll() {
                myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.show(0), myChart.show(1), myChart.show(2);
            }
            document.querySelector("#first-chart").addEventListener("click", toggleDataFirst);
            document.querySelector("#second-chart").addEventListener("click", toggleDataSecond);
            document.querySelector("#third-chart").addEventListener("click", toggleDataThird);
            document.querySelector("#all-chart").addEventListener("click", toggleDataAll);
        }

    }

    animationsRender();

    $('.blue-highlight').wrap('<span class="tool-tip_wrapper"></span>');
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

    for (var i = 0; i < highlight.length; i++) {
        for (var j = 0; j < tip_single.length; j++) {
            if (highlight[i] == tip_single[j]) {
                //blue-highlight get href link
                var href = $('.blue-highlight').eq(i).attr('href');
                $('.blue-highlight').eq(i).parent().append(' <div class="tool-tip_single_wrapper"><div class="tool-tip_single"><div class="tool-tip_title-wrap">MOONFARE GLOSSARY</div><div class="tool-tip_content"><p class="paragraph-medium bottom-margin-i-m tool-tip_title">'+$(tip_single_elems[j]).find('.tool-tip_title').text()+'</p><p class="paragraph-small bottom-margin-i-l tool-tip_paragraph">'+$(tip_single_elems[j]).find('.tool-tip_paragraph').text()+'</p><a class="text-link" href="'+$(tip_single_elems[j]).find('.text-link').attr('href')+'">Visit Glossary</a></div></div></div>');
            }
        }
    }
    $('.tool-tip_wrapper').mouseenter(function () {
        $(this).find('.tool-tip_single_wrapper').css('display', 'block');
    });
    $('.tool-tip_wrapper').mouseleave(function () {
        $(this).find('.tool-tip_single_wrapper').css('display', 'none');
    });
    $('.tool-tips').remove();
    $(".careers_chart-legend-single-item").click(function () {
        $('.careers_chart-legend-single-item').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.chart-single-icon-wrap').mouseenter(function () { 
        $(this).find(".chart-hover-child").css("display", "block");
    });
    $(".chart-single-icon-wrap").mouseleave(function () {
        $(this).find(".chart-hover-child").css("display", "none");
    });

    var screenWidth = $(window).width();
    var myChartWidth = $('#myChart').outerWidth();
    var careersChartContent = $('.wrapper-content').outerWidth();
    var careersChartTimeline = $('.chart-timeline').innerWidth();
    var careersChartTimelineWrap = $('.chart-timeline_wrap').innerWidth();
    var myChartDrag = new Dragdealer('careers-drag', {
    horizontal: true,
    vertical: false,
    xPrecision: myChartWidth,
    animationCallback: function(x, y) {
        $('#myChart').css('margin-left', -x * (myChartWidth - careersChartContent));
        $('.chart-timeline').css('margin-left', -x * (myChartWidth - careersChartContent));
    }
    });
        function dragDetector() {
            var myChartWidth = $('#myChart').outerWidth();
            var careersChartContent = $('.wrapper-content').outerWidth();
            var careersChartTimeline = $('.chart-timeline').innerWidth();
            var careersChartTimelineWrap = $('.chart-timeline_wrap').innerWidth();
            myChartDrag = new Dragdealer('careers-drag', {
            horizontal: true,
            vertical: false,
            xPrecision: myChartWidth,
            animationCallback: function(x, y) {
                $('#myChart').css('margin-left', -x * (myChartWidth - careersChartContent));
                $('.chart-timeline').css('margin-left', -x * (myChartWidth - careersChartContent));
            }
            });
            if(careersChartContent < myChartWidth){
                $('.careers_chart-drag-element').css('opacity', '1');
            }
            else{
                $('.careers_chart-drag-element').css('opacity', '0');
            }
        }

        dragDetector();
        var resizeDone;
        $(window).resize(function() {
            clearTimeout(resizeDone);
            resizeDone = setTimeout(doneResizing, 500);
            
        });

        function doneResizing(){
            screenWidth = $(window).width();
            if(screenWidth > 991){
                    /*$('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').animate ({
                        opacity: 0,
                    }, 500);
                    */
                $('.animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button').css('opacity', '1');
            }
            dragDetector();
        }
        

        function toggleDataFirst() {
            myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.show(0), myChart.hide(1), myChart.hide(2);
        }
        function toggleDataSecond() {
            myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.hide(0), myChart.show(1), myChart.hide(2);
        }
        function toggleDataThird() {
            myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.hide(0), myChart.hide(1), myChart.show(2);
        }
        function toggleDataAll() {
            myChart.isDatasetVisible(0), myChart.isDatasetVisible(1), myChart.isDatasetVisible(2), myChart.show(0), myChart.show(1), myChart.show(2);
        }