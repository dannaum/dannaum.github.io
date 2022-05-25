//on page load
$(document).ready(function(){
    //pastFutureSlider
    var pastFutureSlider = $('.past-future_slider');
    var pastFutureSlideNumber = $(pastFutureSlider).find('.w-slider-nav').children('.w-slider-dot').length;
    //in past-future_slider find past-future_slide-nav and append "past-future_single-dot" with number of past-future_slider_nav_length, to first child add class active-dot
    for(var i = 0; i < pastFutureSlideNumber; i++){
        $('.past-future_slider').find('.past-future_slide-nav').append('<div class="past-future_single-dot"></div>');
        //in past-future_total show pastFutureSlideNumber
        $('.past-future_total').text(pastFutureSlideNumber);
    }
    //to first child add class active-dot
    $('.past-future_slider').find('.past-future_slide-nav').children('.past-future_single-dot').first().addClass('active-dot');
    //past-future-arrows on click
    $('.past-future-arrows').on('click', function(){
        var pastFutureActiveDot = $(this).closest('.past-future_slider').find('.w-slider-nav').children('.w-slider-dot.w-active').index(); 
        //past-future_single-dot remove class active-dot
        $(this).closest(pastFutureSlider).find('.past-future_slide-nav').children('.past-future_single-dot').removeClass('active-dot');
        //this find past-future_slide-nav, on child eq pastFutureActiveDot add class active-dot
        $(this).closest(pastFutureSlider).find('.past-future_slide-nav').children('.past-future_single-dot').eq(pastFutureActiveDot).addClass('active-dot');
        //past-future_count text pastFutureActiveDot + 1
        $(this).closest(pastFutureSlider).find('.past-future_count').text(pastFutureActiveDot + 1);
    });

    var availWidth = $('.past-future_slider').outerWidth() -
                    $('.past-future_slider-wrap').outerWidth();
    new Dragdealer('content-scroller', {
    horizontal: true,
    vertical: false,
    xPrecision: availWidth,
    animationCallback: function(x, y) {
        $('.past-future-slider-active_line').css('width', Math.round(x * 100) + '%');
        $('.past-future_slider').css('margin-left', -x * availWidth);
    }
    });

});