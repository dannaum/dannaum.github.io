
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
            var fas = anime.timeline({ loop: !1, autoplay: !1 });
            fas.add({
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

            var viewedCareersGraph = false;
            var heroVisualScrollAdd
            var heroVisual = $(".home-page_hero-visual");
            var heroVisualWidth = (heroVisual).width();
            var currentScroll = $(window).scrollTop() + $(window).height();
            var viewedCareerValues = false;

            $(window).scroll(function() {
                heroVisualScrollAdd = $(this).scrollTop();
                heroVisual.width(heroVisualScrollAdd + heroVisualWidth);
                if ($(".fadeup1").isInViewport()) {
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
                        const chart = new Chart(ctx, config);
                        viewedCareersGraph = true;
                    }
                    else{
                    }
                    
                }
                else if ($(".chart-timeline").isInViewport()) {
                    $('.chart-timeline-line').click();
                    $('.chart-single-item_animation').each(function (i) {
                        var $item = $(this);
                        setTimeout(function() { 
                        $item.click();
                        }, 150*i);
                    });
                    
                }
                else if ($(".careers_values-title").isInViewport()) {
                    d.play();
                    if (!viewedCareerValues) {
                        $('.single-career-grid-wrap-single').each(function (i) {
                            var $item = $(this);
                            var title = $(this).find('.h6');
                            var par = $(this).find('.paragraph-medium');
                            setTimeout(function() { 
                                title.delay(500).animate({
                                    opacity: 1
                                }, 500);
                                par.delay(500).animate({
                                    opacity: 1
                                }, 500);
                                $item.animate({
                                    width: '100%'
                                }, 500);
                            }, i * 100);
                        });
                        viewedCareerValues = true;
                    }
                    else{
                    }
                    
                }
                else if ($(".fadeup4").isInViewport()) {
                    e.play();
                    
                }
                else if ($(".fadeup5").isInViewport()) {
                    fas.play();
                    
                }
                else if ($(".positions_section").isInViewport()) {
                    //for each ".positions_grid-single-job"
                    $('.positions_grid-single-job').each(function (i) {
                        //this find "._8_fundcards" and trigger click
                        $(this).find("._8_fundcards").trigger("click");
                    });
                    
                }
            });
        }
        else {
            const chart = new Chart(ctx, config);
        }
    }
    animationsRender();


    //blue-highlight wrap in span "tool-tip_wrapper"
    $('.blue-highlight').wrap('<span class="tool-tip_wrapper"></span>');
    //get text of highlight class  and save it in array 
    var highlight = [];
    var tip_single = [];
    var tip_single_elems = []
    $('.blue-highlight').each(function(index, el) {
        highlight.push($(this).text().toLocaleLowerCase().trim());
    });
    //
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

    $.getJSON(
        "https://boards-api.greenhouse.io/v1/boards/moonfare/departments?render_as=list",
        function (data) {
        var data = data.departments;
        var departments = $('.positions_grid-right');
        $.each(data, function (i, item) {
            if (item.jobs.length > 0) {
                var newDeptName = item.name;
                var newDeptTag = $(".positions_filter-tags-departments").append('<a href="#" class="positions_single-tag w-inline-block" data-depname="'+ newDeptName +'"><div class="dept-name">' + newDeptName +'</div></a>');
                let teamWrap = $('<div class="positions_grid-team"></div>');
                $('<div class="positions_grid-title-wrapper"><h3 class="h4 color-text-white bottom-margin-i-xl" data-depname="'+ newDeptName +'">' + item.name + '</h3></div>').appendTo(teamWrap);
                $.each(item.jobs, function (i, jobs) {
                    let teamJobGrid = $('<div class="positions_grid-job-list _8_fundcards_parent"></div>').appendTo(teamWrap);
                    $('<div class="_8_fundcards"></div><div class="positions_grid-single-job" data-jobid="'+ jobs.id + '" data-jobloc="'+ jobs.location.name + '" data-depname="'+ newDeptName +'"><div><p class="paragraph-medium color-text-white">' + jobs.title + '</p><p class="paragraph-medium color-text-white">' + jobs.location.name + '</p></div><img class="careers-arrow-icon" src="https://uploads-ssl.webflow.com/5fd0f5501ea5ad3d2b7f9c33/62ab54d1a565a57a507df176_pale-arrow.svg" alt=""></div>').appendTo(teamJobGrid);
                    departments.append(teamWrap);
                });
            }
        });
        }
    );

    $.getJSON(
        "https://boards-api.greenhouse.io/v1/boards/moonfare/offices?render_as=list",
        function (data) {
        var location = data.offices;

        $.each(location, function (i, item) {
            if (item.name.length > 0) {
            var newDeptTag = $(".positions_filter-tags-locations").append(
                '<a href="#" class="positions_single-tag w-inline-block" data-jobloc="' + item.name + '"><div class="loc-name">' + item.name + '</div></a>'
            );
            }
        });
        }
    );

    $(".positions_grid-right").on('click', '.positions_grid-single-job', function() {
        var jobId = $(this).data('jobid');
        window.location.href = "/open-position?gh_jid=" + jobId;
    });
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
    var totalTeams = $('.our-teams_slider').find('.our-teams_slider-single').length;
    var screenWidth = $(window).width();
    var ourTeamsSlider = $('.our-teams_slider-single').outerWidth();
    var ourTeamsDrag = new Dragdealer('our-team-drag', {
    horizontal: true,
    vertical: false,
    xPrecision: ourTeamsSlider,
    animationCallback: function(x, y) {
        $('.our-teams_drag-line-active').css('width', Math.round(x * 100) + '%');
        $('.our-teams_slider').css('margin-left', -x * ((ourTeamsSlider * totalTeams) - screenWidth +32));
    }
    });

    $(".our-teams_slider-wrap").on('click', '.our-teams_slider-right-arrow', function() {
        var barValue = ourTeamsDrag.getValue() + '';
        var barValueArray = barValue.split(',');
        var a = barValueArray[0];
        var b = barValueArray[1];
        ourTeamsDrag.setValue(parseFloat(a)+0.1, b);

    });
    
    $(".our-teams_slider-wrap").on('click', '.our-teams_slider-left-arrow', function() {
        var barValue = ourTeamsDrag.getValue() + '';
        var barValueArray = barValue.split(',');
        var a = barValueArray[0];
        var b = barValueArray[1];
        ourTeamsDrag.setValue(parseFloat(a)-0.1, b);

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

    $(".hiring-steps_dt").click(function () {
        $(".hiring-step_icon").removeClass("opened-hiring-step-bg");
        $(".hiring-step_icon-img").removeClass("opened-hiring-step_icon-img")
        if ($(this).hasClass("w--open")) {
        $(".hiring-step_icon").removeClass("opened-hiring-step-bg");
        $(".hiring-step_icon-img").removeClass("opened-hiring-step_icon-img")
        }
        else {
            $(this).closest(".hiring-steps_single").find(".hiring-step_icon").addClass("opened-hiring-step-bg");
            $(this).closest(".hiring-steps_single").find(".hiring-step_icon-img").addClass("opened-hiring-step_icon-img");
        }
    });

    //on click of hiring-steps_single
    $(".hiring-steps_single").click(function () {
        //this find hiring-steps_dt and trigger click
        $(this).find(".hiring-steps_dt").trigger("click");
    });

        function dragDetector() {
            if(timelineSlide < chartSlider){
                $('.careers_chart-drag-element').css('display', 'block');
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
                $('.animated-word').css('opacity', '1');
            }
            dragDetector();
        }

        


        $(".single-career-grid-wrap-left").click(function () {
            var selfl = $(this);
            var careeValueWrap = $(".single-career-grid-wrap-single");
            var selfanimate = $(this).find('.single-career-expansion-animate');
                if ($(selfl).hasClass("active-left")) {
                    $(careeValueWrap).animate({
                        opacity: 0
                    }, 500);
                    $(selfl).find('.h6').animate({
                        opacity: 0
                    }, 500);
                    $(selfl).find('.paragraph-medium').animate({
                        opacity: 0
                    }, 500);
                    setTimeout(function () {
                        selfanimate.animate({
                            width: '250px',
                            height: '250px',
                        }, 500);
                    }, 500);
                    setTimeout(function () {
                        $(".single-career-grid-wrap-left").removeClass("active-left");
                        $(".single-career-grid-wrap-right").removeClass("active-right");
                        $(".single-career-value-p-wrap").css("height", "0rem");
                    }, 500);
                    setTimeout(function() {
                        $(careeValueWrap).animate({
                            opacity: 1
                        }, 500);
                        $(selfl).find('.h6').animate({
                            opacity: 1
                        }, 500);
                        $(selfl).find('.paragraph-medium').animate({
                            opacity: 1
                        }, 500);
                    }, 1000);
        
                    } else {
        
                    $(careeValueWrap).animate({
                        opacity: 0
                    }, 500);
                    $(selfl).find('.h6').animate({
                        opacity: 0
                    }, 500);
                    $(selfl).find('.paragraph-medium').animate({
                        opacity: 0
                    }, 500);
                    setTimeout(function() {
                        $(".single-career-grid-wrap-left").removeClass("active-left");
                        $(".single-career-grid-wrap-right").removeClass("active-right");
                        $(".single-career-value-p-wrap").css("height", "0rem");
                        $(selfl).find(".single-career-value-p-wrap").css("height", "auto");
                        $(selfl).addClass("active-left");
                        }, 500);
                    setTimeout(function () {
                        selfanimate.animate({
                            width: '100%',
                            height: '100%',
                        }, 500);
                    }, 500);
                    setTimeout(function() {
                        $(careeValueWrap).animate({
                            opacity: 1
                        }, 500);
                        $(selfl).find('.h6').animate({
                            opacity: 1
                        }, 500);
                        $(selfl).find('.paragraph-medium').animate({
                            opacity: 1
                        }, 500);
                    }, 1000);
                }
        });
        $(".single-career-grid-wrap-right").click(function () {
            var selfl = $(this);
            var careeValueWrap = $(".single-career-grid-wrap-single");
            var selfanimate = $(this).find('.single-career-expansion-animate');
                if ($(selfl).hasClass("active-right")) {
                    $(careeValueWrap).animate({
                        opacity: 0
                    }, 500);
                    $(selfl).find('.h6').animate({
                        opacity: 0
                    }, 500);
                    $(selfl).find('.paragraph-medium').animate({
                        opacity: 0
                    }, 500);
                    setTimeout(function () {
                        selfanimate.animate({
                            width: '250px',
                            height: '250px',
                        }, 500);
                    }, 500);
                    setTimeout(function () {
                        $(".single-career-grid-wrap-left").removeClass("active-left");
                        $(".single-career-grid-wrap-right").removeClass("active-right");
                        $(".single-career-value-p-wrap").css("height", "0rem");
                    }, 500);
                    setTimeout(function() {
                        $(careeValueWrap).animate({
                            opacity: 1
                        }, 500);
                        $(selfl).find('.h6').animate({
                            opacity: 1
                        }, 500);
                        $(selfl).find('.paragraph-medium').animate({
                            opacity: 1
                        }, 500);
                    }, 1000);
        
                    } else {
        
                    $(careeValueWrap).animate({
                        opacity: 0
                    }, 500);
                    $(selfl).find('.h6').animate({
                        opacity: 0
                    }, 500);
                    $(selfl).find('.paragraph-medium').animate({
                        opacity: 0
                    }, 500);
                    setTimeout(function() {
                        $(".single-career-grid-wrap-left").removeClass("active-left");
                        $(".single-career-grid-wrap-right").removeClass("active-right");
                        $(".single-career-value-p-wrap").css("height", "0rem");
                        $(selfl).find(".single-career-value-p-wrap").css("height", "auto");
                        $(selfl).addClass("active-right");
                        }, 500);
                    setTimeout(function () {
                        selfanimate.animate({
                            width: '100%',
                            height: '100%',
                        }, 500);
                    }, 500);
                    setTimeout(function() {
                        $(careeValueWrap).animate({
                            opacity: 1
                        }, 500);
                        $(selfl).find('.h6').animate({
                            opacity: 1
                        }, 500);
                        $(selfl).find('.paragraph-medium').animate({
                            opacity: 1
                        }, 500);
                    }, 1000);
                }
        });

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