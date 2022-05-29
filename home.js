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

    //if w-nav-button has class w--open
    //w-nav-button click function
    $('.w-nav-button').on('click', function(){
        //if this has class w--open
        if($(this).hasClass('w--open')){
            //body css overflow auto
            $('body').css('overflow', 'auto');
        }
        //else
        else {
            //body css overflow hidden
            $('body').css('overflow', 'hidden');
        }
    });

    var closedFundSlidesN = $('.past-future_slider-mask').find('.past-future_slider-slide').length;
    var closedFundSlideW = $('.past-future_slider-slide').outerWidth();
    var availWidth = $('.past-future_slider').outerWidth() - $('.past-future_slider-wrap').outerWidth();
    var dd = new Dragdealer('content-scroller', {
        steps: 4,
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
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
            $('.past-future_slider').css('margin-left', -x * (closedFundSlideW * (closedFundSlidesN - 1) / 16 + 6) + 'REM');
        }
    });

    $('.past-future_slider-wrap').on('click', '.past-future_right-arrow', function(e) {
        var steps = dd.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        dd.setStep(parseInt(a)+1, b);

    });

    $('.past-future_slider-wrap').on('click', '.past-future_left-arrow', function(e) {
        var steps = dd.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        dd.setStep(parseInt(a)-1, b);
    });

    var sp500Width = $('.home-benefits_image').outerWidth();
    var sp500slider = new Dragdealer('home-benefits-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: sp500Width,
        reflow: true,
        animationCallback: function(x, y) {
            $('.home-benefits_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.home-benefits_image').css('margin-left', -x * sp500Width / 16 + 'REM');
        }
    });


});