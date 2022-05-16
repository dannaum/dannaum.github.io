//on page load
$(document).ready(function() {
    //on hover element 'chart-single-icon-wrap'
    $('.auction-single-icon-wrap').mouseenter(function () { 
        //this find "chart-hover-child" and set css display block
        $(this).find(".auction-chart-hover-child").css("display", "block");
    });
    //chart-single-icon-wrap hover out
    $(".auction-chart-single-icon-wrap").mouseleave(function () {
        //this find "chart-hover-child" and set css display none
        $(this).find(".auction-chart-hover-child").css("display", "none");
    });
});