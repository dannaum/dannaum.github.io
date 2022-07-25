//on page load
$(document).ready(function () {
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
    //on click of ".product-features_hero-slider-slide"
    $('.product-features_hero-slider-slide').click(function() {
        //find the index of this
        var index = $(this).index();
        $('.product-features_slide-nav-number').eq(index).click();
    });


    function observeTransform(el, callback) {
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var observer = new MutationObserver(function (mutations, observer) {
            callback();
        });
        observer.observe(el, {
            attributes: true,
            attributeFilter: ['style']
        });
    }
    observeTransform(document.querySelector('.product-features_hero-slider-slide'), function () {
        //for each ".w-slider-dot"
        $('.w-slider-dot').each(function () {
            //if this has class w-active
            if ($(this).hasClass('w-active')) {
                //get this index 
                var index = $(this).index('.w-slider-dot');
                //click on ".product-features_slide-nav-number" at index
                $('.product-features_slide-nav-number').eq(index).click();
            }
        });
    });
});