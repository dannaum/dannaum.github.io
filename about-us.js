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
});