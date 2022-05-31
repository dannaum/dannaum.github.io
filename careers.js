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

    $(".single-career-grid-wrap-left").click(function () {
        //if this has class "active"
        if ($(this).hasClass("active-left")) {
            $(".single-career-grid-wrap-left").removeClass("active-left");
            $(".single-career-grid-wrap-right").removeClass("active-right");
            $(".single-career-value-p-wrap").css("height", "0rem");
        } else {
        //'single-career-value_wrap' removeClass 'active'
        $(".single-career-grid-wrap-left").removeClass("active-left");
        $(".single-career-grid-wrap-right").removeClass("active-right");
        //single-career-value-p-wrap height 0 rem
        $(".single-career-value-p-wrap").css("height", "0rem");
        //this find single-career-value-p-wrap height auto
        $(this).find(".single-career-value-p-wrap").css("height", "auto");
        $(this).addClass("active-left");
        }
    });
    $(".single-career-grid-wrap-right").click(function () {
        //if this has class "active"
        if ($(this).hasClass("active-right")) {
            $(".single-career-grid-wrap-left").removeClass("active-left");
            $(".single-career-grid-wrap-right").removeClass("active-right");
            $(".single-career-value-p-wrap").css("height", "0rem");
        } else {
        //'single-career-value_wrap' removeClass 'active'
        $(".single-career-grid-wrap-left").removeClass("active-left");
        $(".single-career-grid-wrap-right").removeClass("active-right");
        //single-career-value-p-wrap height 0 rem
        $(".single-career-value-p-wrap").css("height", "0rem");
        //this find single-career-value-p-wrap height auto
        $(this).find(".single-career-value-p-wrap").css("height", "auto");
        $(this).addClass("active-right");
        }
    });

    $.getJSON(
        "https://boards-api.greenhouse.io/v1/boards/moonfare/departments?render_as=tree",
        function (data) {
        var data = data.departments;
        var departments = $('.positions_grid-right');
    
        $.each(data, function (i, item) {
                //each item.children
                $.each(item.children, function (i, item) {
                    //each item.children
                    $.each(item.children, function (i, item) {
                        //each item.children
                        $.each(item.children, function (i, item) {
                            var newDeptName = item.name;
                            var newDeptTag = $(".positions_filter-tags-departments").append('<a href="#" class="positions_single-tag w-inline-block" data-depname="'+ newDeptName +'"><div class="dep-name">' + newDeptName +'</div></a>');
    
                            $.each(item.children, function (i, item) {
                                //if item.jobs length > 0
                                if (item.jobs.length > 0) {
                                    let teamWrap = $('<div class="positions_grid-team"></div>');
                                    $('<div class="positions_grid-title-wrapper"><h3 class="h4 color-text-white bottom-margin-24" data-depname="'+ newDeptName +'">' + item.name + '</h3></div>').appendTo(teamWrap);
                                    let teamJobGrid = $('<div class="positions_grid-job-list"></div>').appendTo(teamWrap);
                                        $.each(item.jobs, function (i, jobs) {
                                            if (item.jobs.length > 0) {
                                                $('<div class="positions_grid-single-job" data-jobid="'+ jobs.id + '" data-jobloc="'+ jobs.location.name + '" data-depname="'+ newDeptName +'"><div><p class="paragraph-medium paragraph-bold color-text-white">' + jobs.title + '</p><p class="paragraph-medium color-text-white">' + jobs.location.name + '</p></div><img class="careers-arrow-icon" src="https://uploads-ssl.webflow.com/62552717df37959f6bb9ae63/6256dade3416c8a5d3825a04_job-list_arrow.svg" alt=""></div>').appendTo(teamJobGrid);
                                            }
                                });
                                departments.append(teamWrap);
                            }
                        });
                    });
                });
            });
        });
        }
    );
//
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

    var ourTeamsSlider = $('.single-our-team_wrap').outerWidth();
    var ourTeamsDrag = new Dragdealer('our-team-drag', {
    horizontal: true,
    vertical: false,
    xPrecision: ourTeamsSlider,
    animationCallback: function(x, y) {
        $('.our-teams_drag-line-active').css('width', Math.round(x * 100) + '%');
        $('.our-teams_slider').css('margin-left', -x * (ourTeamsSlider*10/16) + 'REM');
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
        if ($(this).hasClass("w--open")) {
        $(".hiring-step_icon").removeClass("opened-hiring-step-bg");
        $(".hiring-step_icon-img").removeClass("opened-hiring-step_icon-img")
        }
        else {
            $(this).closest(".hiring-steps_single").find(".hiring-step_icon").addClass("opened-hiring-step-bg");
            $(this).closest(".hiring-steps_single").find(".hiring-step_icon-img").addClass("opened-hiring-step_icon-img");
        }
    });