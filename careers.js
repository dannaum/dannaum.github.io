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
    //on click of ".hiring-steps_single-step-wrap" get index
    $('.hiring-steps_single-step-wrap').click(function () {
        var index = $(this).index();
        //hiring-steps_bottom-slider find "w-slide-dot" click eq index
        $('.hiring-steps_bottom-slider').find('.w-slider-dot').eq(index).click();
    });
    //element class 'tool-tips".remove()
    $('.tool-tips').remove();
    $(".single-career-grid-wrap").click(function () {
        //if this has class "active"
        if ($(this).hasClass("active")) {
        //remove class "active"
        $(this).removeClass("active");
        } else {
        //'single-career-value_wrap' removeClass 'active'
        $(".single-career-grid-wrap").removeClass("active");
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
                            var newDeptTag = $(".positions_filter-tags-departments").append('<a href="#" class="positions_single-tag w-inline-block" data-depname="'+ newDeptName +'"><div class="label">' + newDeptName +'</div></a>');
    
                            $.each(item.children, function (i, item) {
                                //if item.jobs length > 0
                                if (item.jobs.length > 0) {
                                    let teamWrap = $('<div class="positions_grid-team"></div>');
                                    $('<div class="positions_grid-title-wrapper"><h3 class="h4 color-text-white bottom-margin-i-xl" data-depname="'+ newDeptName +'">' + item.name + '</h3></div>').appendTo(teamWrap);
                                    let teamJobGrid = $('<div class="positions_grid-job-list"></div>').appendTo(teamWrap);
                                        $.each(item.jobs, function (i, jobs) {
                                            if (item.jobs.length > 0) {
                                                $('<div class="positions_grid-single-job" data-jobid="'+ jobs.id + '" data-jobloc="'+ jobs.location.name + '" data-depname="'+ newDeptName +'"><div><p class="paragraph-medium color-text-white">' + jobs.title + '</p><p class="paragraph-medium color-text-white">' + jobs.location.name + '</p></div><img src="https://uploads-ssl.webflow.com/62552717df37959f6bb9ae63/6256dade3416c8a5d3825a04_job-list_arrow.svg" alt=""></div>').appendTo(teamJobGrid);
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

    $.getJSON(
        "https://boards-api.greenhouse.io/v1/boards/moonfare/offices?render_as=list",
        function (data) {
        var location = data.offices;

        $.each(location, function (i, item) {
            if (item.name.length > 0) {
            var newDeptTag = $(".positions_filter-tags-locations").append(
                '<a href="#" class="positions_single-tag w-inline-block" data-jobloc="' + item.name + '"><div class="label">' + item.name + '</div></a>'
            );
            }
        });
        }
    );
    //positions_single-tag-all on click
    $(".positions_single-tag-all").click(function () {
        //this toggle class active
        $(this).addClass("active");
        $(".positions_single-tag").removeClass("active");
        //hide/show
    });

    $(".positions_filter-tags-departments").on('click', '.positions_single-tag', function() {
        //positions_single-tag-all remove class active
        $(".positions_single-tag-all").removeClass("active");
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
        $(".positions_single-tag").each(function () {
            if ($(this).hasClass("active")) {
            //this data-depname to locale lowercase
            var tagFilterDep = $(this).data('depname');
            if (arrayTags.includes(tagFilterDep)) {
                arrayTags.splice(arrayTags.indexOf(tagFilterDep), 1);
            } else {
                arrayTags.push(tagFilterDep);
            }
            $(".positions_grid-single-job").each(function () {
                //this data-depname to locale lowercase
                var jobDep = $(this).data('depname');
                if (arrayTags.indexOf(jobDep) == -1) {
                $(this).closest(".positions_grid-team").css("display", "none");
                } else {
                $(this).closest(".positions_grid-team").css("display", "block");
                }
            });
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
});