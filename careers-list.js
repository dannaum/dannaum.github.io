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
        }
    }

    animationsRender();

    $('.blue-highlight').wrap('<span class="tool-tip_wrapper"></span>');
    //get text of highlight class  and save it in array 
    var highlight = [];
    var tip_single = [];
    var tip_single_elems = []
    var screenWidth = $(window).width();
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
    //element class 'tool-tips".remove()
    $('.tool-tips').remove();
    //on page load

    $.getJSON(
        "https://boards-api.greenhouse.io/v1/boards/moonfare/departments?render_as=list",
        function (data) {
        var data = data.departments;
        var departments = $('.careers-list_positions-grid');
        $.each(data, function (i, item) {
            if (item.jobs.length > 0) {
                var newDeptName = item.name;
                var newDeptTag = $(".positions_filter-tags-departments").append('<a href="#" class="positions_single-tag-dark w-inline-block" data-depname="'+ newDeptName +'"><div class="dept-name">' + newDeptName +'</div></a>');
                let teamWrap = $('<div class="positions_grid-team"></div>');
                $('<div class="positions_grid-title-wrapper"><h3 class="h4 bottom-margin-i-xl" data-depname="'+ newDeptName +'">' + item.name + '</h3></div>').appendTo(teamWrap);
                let teamJobGrid = $('<div class="positions_grid-job-list"></div>').appendTo(teamWrap);
                $.each(item.jobs, function (i, jobs) {
                    $('<div class="positions_grid-single-job-dark" data-jobid="'+ jobs.id + '" data-jobloc="'+ jobs.location.name + '" data-depname="'+ newDeptName +'"><div><p class="paragraph-medium">' + jobs.title + '</p><p class="paragraph-medium">' + jobs.location.name + '</p></div><img class="careers-arrow-icon" src="https://uploads-ssl.webflow.com/62552717df37959f6bb9ae63/627147c90e683729d9417309_careers-list-icon.svg" alt=""></div>').appendTo(teamJobGrid);
                    //jobs.location.name to var myloc
                    var myloc = jobs.location.name;
                    //if positions_filter-tags-locations children text dont have myloc append myloc to positions_filter-tags-locations
                    if ($(".positions_filter-tags-locations").children().text().indexOf(myloc) == -1) {
                        $(".positions_filter-tags-locations").append('<a href="#" class="positions_single-tag-dark w-inline-block" data-jobloc="' + myloc + '"><div class="loc-name">' + myloc + '</div></a>');
                    }
                    departments.append(teamWrap);
                });
            }
        });
        }
    );
    //on click of positions_single-tag-all
    $('.positions_single-tag-all-dark').click(function () {
        //this siblings 'positions_single-tag active' trigger click
        $(this).siblings('.positions_single-tag-dark.active').trigger('click');
        //this siblings ".positions_single-tag" remove class "active"
        $(this).siblings(".positions_single-tag-dark").removeClass("active");
        $(this).addClass("active");
    });

    $(".positions_team-filters").on('click', '.positions_single-tag-dark', function() {
        //this sibling positions_single-tag-all
        $(this).siblings('.positions_single-tag-all-dark').removeClass('active');
        $(this).toggleClass("active");
        //if click on positions_single-tag eq 0
        $(".positions_single-tag-dark").each(function () {
                            
            if (!$(this).hasClass("active")) {
                //positions_grid-team css display block
                $(".positions_grid-single-job-dark").css("display", "flex");
                //positions_single-job css display block
                $(".positions_grid-title-wrapper").css("display", "block");
                //positions_grid-team css display block
                $(".positions_grid-team").css("display", "block");    
            }
        });

        var arrayTags = Array();
        var arrayLocs = Array();
        
        $(".positions_single-tag-dark").each(function () {

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
                $(".positions_grid-single-job-dark").each(function () {
                    //this data-depname to locale lowercase
                    var jobDep = $(this).data('depname').toLowerCase();
                    var jobLoc = $(this).data('jobloc').toLowerCase();
                    //if arrayTags length = 0
                    //if arrayTags less than 1
                    //if arrayTags length <1 && arrayLocs length <1
                    if (arrayTags.length < 1 && arrayLocs.length < 1) {
                        //positions_grid-team css display block
                        $(".positions_grid-single-job-dark").css("display", "flex");
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
    $(".careers-list_positions-grid").on('click', '.positions_grid-single-job-dark', function() {
        var jobId = $(this).data('jobid');
        //redirect to "mf-v2.webflow.io/open-position" + ?jobId=jobId
        window.location.href = "/open-position?gh_jid=" + jobId;
    });
    
    var navBarHeight = $('.navbar_section').outerHeight();
    $('#send-resume').click(function(){
        $('html, body').animate({
            scrollTop: $("#careers-list").offset().top - navBarHeight
        }, 1000);
    });

    //ANIMATIONS START


    function dragDetector() {
        if(careersChartContent < myChartWidth){
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
        dragDetector();
    }