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
        "https://boards-api.greenhouse.io/v1/boards/moonfare/departments?render_as=list",
        function (data) {
        var data = data.departments;
        var departments = $('.positions_grid-right');

        $.each(data, function (i, item) {
            if (item.jobs.length > 0) {
            let teamWrap = $('<div class="positions_grid-team"></div>');
            $('<h3 class="h4 color-text-white bottom-margin-i-xl team-name">' + item.name + '</h3>').appendTo(teamWrap);
            let teamJobGrid = $('<div class="positions_grid-job-list"></div>').appendTo(teamWrap);
            var newDeptTag = $(".positions_filter-tags-departments").append(
                '<a href="#" class="positions_single-tag w-inline-block"><div class="label">' + item.name +'</div></a>'
            );
            $.each(item.jobs, function (i, jobs) {
                $('<a href="https://mf-v2.webflow.io/open-position" class="positions_grid-single-job"><div class="hidden-tag">' + item.name + '</div><div class="hidden-div gh-job-id">'+ jobs.id +' </div><div><p class="paragraph-medium color-text-white">' + jobs.title + '</p><p class="paragraph-medium color-text-white job-location">' + jobs.location.name + '</p></div><img src="https://uploads-ssl.webflow.com/62552717df37959f6bb9ae63/6256dade3416c8a5d3825a04_job-list_arrow.svg" alt=""></a>').appendTo(teamJobGrid);
            });
            departments.append(teamWrap);
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
                '<a href="#" class="positions_single-tag-loc w-inline-block"><div class="label">' + item.name + '</div></a>'
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
        //add class "active" to positions_single-tag eq 0
        $(".team-name").parent().removeClass("hidden");
        //hidden-tag parent css display flex
        $(".hidden-tag").parent().css("display", "flex");
    });

    $(".positions_filter-tags-departments").on('click', '.positions_single-tag', function() {
        //positions_single-tag-all remove class active
        $(".positions_single-tag-all").removeClass("active");
        $(this).toggleClass("active");
        //if click on positions_single-tag eq 0
        $(".positions_single-tag").each(function () {
        if (!$(this).hasClass("active")) {
            //".team-name" parent removeClass "hidden"
            $(".team-name").parent().removeClass("hidden");
            //hidden-tag parent css display flex
            $(".hidden-tag").parent().css("display", "flex");
            }
    });
        var arrayTags = Array();
        //this innerHtml save in var tagText to lowercase
        //for each "positions_single-tag" if class has "active"
        $(".positions_single-tag").each(function () {
            if ($(this).hasClass("active")) {
            //if arrayTags includes tagtext then splice it, else push
            var tagText = $(this).find('.label').html().toLowerCase();
            if (arrayTags.includes(tagText)) {
                arrayTags.splice(arrayTags.indexOf(tagText), 1);
            } else {
                arrayTags.push(tagText);
            }
            //arrayTags.push($(this).find(".label").text().toLowerCase());
            $(".team-name").each(function () {
                //this get html to lowercase in var teamText
                var teamText = $(this).html().toLowerCase();
                //if teamText is not in arrayTags add class "hidden" to parent "positions_grid-team"
                if (arrayTags.indexOf(teamText) == -1) {
                $(this).parent().addClass("hidden");
                } else {
                $(this).parent().removeClass("hidden");
                }
            });
            $(".hidden-tag").each(function () {
                //this get html to lowercase in var teamText
                var teamText = $(this).html().toLowerCase();
                //if teamText is not in arrayTags add class "hidden" to parent "positions_grid-team"
                if (arrayTags.indexOf(teamText) == -1) {
                //this parent css display none
                $(this).parent().css("display", "none");
                } else {
                //this parent css display block
                $(this).parent().css("display", "flex");
                }
            });
            }
        });
    });
    //positions_grid-single-job on click
    $(".positions_grid-single-job").click(function () {
        //this get href
        var jobId = $(this).find(".gh-job-id").html();
        //this get this href attr
        var jobUrl = $(this).attr("href");
        //set this href attr to jobUrl
        //console log jobId
        //console log JobUrl
    });
    $(".positions_team-filters").on('click', '.positions_single-tag-loc', function() {
        //this toggle class active
        $(this).toggleClass("active");
        //positions_single-tag-loc for each
        $(".positions_single-tag-loc").each(function () {
            if (!$(this).hasClass("active")) {
                //team-loc parent css display flex
                $(".job-location").closest('.positions_grid-single-job').css("display", "flex");
                }
            var arrayTagsLoc = Array();
            $(".positions_single-tag-loc").each(function () {
            //if this has class active
            if ($(this).hasClass("active")) {
                var tagTextLoc = $(this).find('.label').html().toLowerCase();
                if (arrayTagsLoc.includes(tagTextLoc)) {
                arrayTagsLoc.splice(arrayTagsLoc.indexOf(tagTextLoc), 1);
                } else {
                arrayTagsLoc.push(tagTextLoc);
                }
                $(".job-location").each(function () {
                var teamTextLoc = $(this).html().toLowerCase();
                if (arrayTagsLoc.indexOf(teamTextLoc) == -1) {
                    $(this).closest('.positions_grid-single-job').css("display", "none");
                } else {
                    $(this).closest('.positions_grid-single-job').css("display", "flex");
                }
                });
            }
            });
        });
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
