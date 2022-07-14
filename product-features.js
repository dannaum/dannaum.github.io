
    $('.product-features_slide-nav-number').click(function() {  
        var index = $(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.product-features_hero-slide-nav').find('.w-slider-dot').eq(index).click();
        //for each ".product-features_slide-nav_single"
        $('.product-features_slide-nav_single').each(function() {
            //if this index == index
            if($(this).index() == index) {
                //show this
                $(this).css('display', 'block');
            }
            //else
            else {
                //hide this
                $(this).css('display', 'none');
            }
        });
    });