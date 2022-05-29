/* JOB FILTERS
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
*/