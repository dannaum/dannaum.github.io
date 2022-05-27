//on page load
$(document).ready(function(){
    /*
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
    */

    $('.past-future_slider').on('click', '.past-future-arrows', function(e) {
        //var a = past-future_slider find w-slider-dot w-active index + 1
        var a = $(this).closest('.past-future_slider').find('.w-slider-nav').children('.w-slider-dot.w-active').index() + 1;
        dd.setStep(a, 1, snap=false)
    });
    var availWidth = $('.past-future_slider').outerWidth() -
                  $('.past-future_slider-wrap').outerWidth();
    var dd = new Dragdealer('content-scroller', {
        steps: 4,
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        snap: true,
        xPrecision: availWidth,
        reflow: true,
        callback: function(x, y) {
            dd.reflow(x, y);
            if (x == 0) {
                //past-future_slider find w-slider-dot eq 
                $('.past-future_slider').find('.w-slider-dot').eq(0).click();
            } else if (x == 0.3333333333333333) {
                //past-future_slider find w-slider-dot eq 1 and click
                $('.past-future_slider').find('.w-slider-dot').eq(1).click();
                //else if x == 2
            } else if (x == 0.6666666666666666) {
                //past-future_slider find w-slider-dot eq 2 and click
                $('.past-future_slider').find('.w-slider-dot').eq(2).click();
                //else if x == 3
            } else if (x == 1) {
                //past-future_slider find w-slider-dot eq 3 and click
                $('.past-future_slider').find('.w-slider-dot').eq(3).click();
            }
        },
        animationCallback: function(x, y) {
            $('.past-future-slider-active_line').css('width', Math.round(x * 100) + '%');
            $('.past-future_slider').css('margin-left', -x * availWidth);
        }
    });

});