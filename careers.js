//on page load
$(document).ready(function () {
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

    $(".single-career-grid-wrap").click(function () {
        //if this has class "active"
        if ($(this).hasClass("active")) {
            $(".single-career-grid-wrap").removeClass("active");
            $(".single-career-value-p-wrap").css("height", "0rem");
        } else {
        //'single-career-value_wrap' removeClass 'active'
        $(".single-career-grid-wrap").removeClass("active");
        //single-career-value-p-wrap height 0 rem
        $(".single-career-value-p-wrap").css("height", "0rem");
        //this find single-career-value-p-wrap height auto
        $(this).find(".single-career-value-p-wrap").css("height", "auto");
        $(this).addClass("active");
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
                                                $('<div class="positions_grid-single-job" data-jobid="'+ jobs.id + '" data-jobloc="'+ jobs.location.name + '" data-depname="'+ newDeptName +'"><div><p class="paragraph-medium paragraph-bold color-text-white">' + jobs.title + '</p><p class="paragraph-medium color-text-white">' + jobs.location.name + '</p></div><img src="https://uploads-ssl.webflow.com/62552717df37959f6bb9ae63/6256dade3416c8a5d3825a04_job-list_arrow.svg" alt=""></div>').appendTo(teamJobGrid);
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
    //on click of positions_single-tag-all
    $('.positions_single-tag-all').click(function () {
        //this toggle class "active"
        $(this).addClass("active");
        //click on this siblings positions_single-tag active
        //this siblings 'positions_single-tag active' trigger click
        $(this).siblings('.positions_single-tag.active').trigger('click');
        //this siblings ".positions_single-tag" remove class "active"
        $(this).siblings(".positions_single-tag").removeClass("active");
    });

    $(".positions_team-filters").on('click', '.positions_single-tag', function() {
        //this sibling positions_single-tag-all
        $(this).siblings('.positions_single-tag-all').removeClass('active');
        $(this).toggleClass("active");
        //if click on positions_single-tag eq 0
        $(".positions_single-tag").each(function () {
                            
        if (!$(this).hasClass("active")) {
            //positions_grid-team css display block
            $(".positions_grid-single-job").css("display", "flex");
            //positions_single-job css display block
            $(".positions_grid-title-wrapper").css("display", "block");
            //positions_grid-team css display block
            $(".positions_grid-team").css("display", "block");
            
            }
        });
        var arrayTags = Array();
        var arrayLocs = Array();
        
        $(".positions_single-tag").each(function () {

            if ($(this).hasClass("active")) {

                if ($(this).data("jobloc")) {
                    var jobLoc = $(this).data("jobloc").toLowerCase();
                    if (arrayLocs.indexOf(jobLoc) == -1) {
                    arrayLocs.push(jobLoc);
                    } else {
                    arrayLocs.splice(arrayLocs.indexOf(jobLoc), 1);
                    }
                }
                if ($(this).data("depname")) {
                    var depName = $(this).data("depname").toLowerCase();
                    if (arrayTags.indexOf(depName) == -1) {
                    arrayTags.push(depName);
                    } else {
                    arrayTags.splice(arrayTags.indexOf(depName), 1);
                    }
                }
                $(".positions_grid-single-job").each(function () {
                    //this data-depname to locale lowercase
                    var jobDep = $(this).data('depname').toLowerCase();
                    var jobLoc = $(this).data('jobloc').toLowerCase();
                    //if arrayTags length = 0
                    //if arrayTags less than 1
                    //if arrayTags length <1 && arrayLocs length <1
                    if (arrayTags.length < 1 && arrayLocs.length < 1) {
                        //positions_grid-team css display block
                        $(".positions_grid-single-job").css("display", "flex");
                        //positions_single-job css display block
                        $(".positions_grid-title-wrapper").css("display", "block");
                        //positions_grid-team css display block
                        $(".positions_grid-team").css("display", "block");
                    }
                    //else if

                    else if (arrayTags.length < 1) {
                        //filter this by arrayTags
                        if (arrayLocs.indexOf(jobLoc) != -1) {
                            $(this).css("display", "flex");
                        }
                        else {
                        //this css display none
                        $(this).css("display", "none");
                        }
                    }
                    //if arrayLocs length = 0
                    else if (arrayLocs.length < 1) {
                        //filter this by arrayTags
                        if (arrayTags.indexOf(jobDep) != -1) {
                            $(this).css("display", "flex");
                        }
                        else {
                            //this css display none
                            $(this).css("display", "none");
                        }
                    }
                    //if arrayLocs length > 0 and arrayTags length > 0
                    else if (arrayLocs.length > 0 && arrayTags.length > 0) {
                        //filter this by arrayTags and arrayLocs
                        if (arrayTags.indexOf(jobDep) != -1 && arrayLocs.indexOf(jobLoc) != -1) {
                            $(this).css("display", "flex");
                        }
                        else {
                            $(this).css("display", "none");
                        }
                    }
                });
            }
        });
        //for each positions_grid-job-list
        $(".positions_grid-job-list").each(function () {
            //if this children visible is 0
            if ($(this).children(":visible").length == 0) {
                //this parent hide
                $(this).parent().hide();
            }
        });

    });
    $(".positions_grid-right").on('click', '.positions_grid-single-job', function() {
        //this get href
        //this data jobs id
        var jobId = $(this).data('jobid');
        //redirect to "mf-v2.webflow.io/open-position" + ?jobId=jobId
        window.location.href = "/open-position?gh_jid=" + jobId;
    });
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

    /* OURTEAMS DRAG */
    $('.our-teams_slider-wrap').on('click', '.our-teams_slider-right-arrow', function(e) {
        var barValue = ourTeamsDrag.getValue() + '';
        var barValueArray = barValue.split(',');
        var a = barValueArray[0];
        var b = barValueArray[1];
        ourTeamsDrag.setValue(parseFloat(a)+0.1, b);

    });

    $('.our-teams_slider-wrap').on('click', '.our-teams_slider-left-arrow', function(e) {
        var barValue = ourTeamsDrag.getValue() + '';
        var barValueArray = barValue.split(',');
        var a = barValueArray[0];
        var b = barValueArray[1];
        ourTeamsDrag.setValue(parseFloat(a)-0.1, b);

    });

    var ourTeamsSlider = $('.single-our-team_wrap').outerWidth();
    var ourTeamsDrag = new Dragdealer('our-team-drag', {
    horizontal: true,
    vertical: false,
    xPrecision: ourTeamsSlider,
    animationCallback: function(x, y) {
        $('.our-teams_drag-line-active').css('width', Math.round(x * 100) + '%');
        $('.our-teams_slider').css('margin-left', -x * (ourTeamsSlider*9/16) + 'REM');
    }
    });

    /* CHART DRAG */
    var chartSlider = $('#myChart').outerWidth();
    var timelineSlide = $('.chart-timeline').outerWidth();
    var ourTeamsDrag = new Dragdealer('careers-drag', {
    horizontal: true,
    vertical: false,
    xPrecision: chartSlider,
    animationCallback: function(x, y) {
        $('.careers-chart_drag-line-active').css('width', Math.round(x * 100) + '%');
        $('#myChart').css('margin-left', -x * (chartSlider/2) /16 + 'REM');
        $('.chart-timeline').css('margin-left', -x * (timelineSlide/2) /16 + 'REM');
    }
    });

    //on click of hiring-steps_dt
    $(".hiring-steps_dt").click(function () {
        //if this has class w--open
        if ($(this).hasClass("w--open")) {
        //hiring-step_icon removeClass opened-hiring-step-bg
        $(".hiring-step_icon").removeClass("opened-hiring-step-bg");
        //hiring-step_icon-img removeClass opened-hiring-step_icon-img
        $(".hiring-step_icon-img").removeClass("opened-hiring-step_icon-img")
        }
        else {
            $(this).closest(".hiring-steps_single").find(".hiring-step_icon").addClass("opened-hiring-step-bg");
            $(this).closest(".hiring-steps_single").find(".hiring-step_icon-img").addClass("opened-hiring-step_icon-img");
        }
    });
});