//on page load
$(document).ready(function(){
    
    screenWidth = $(window).width();
    var sp500Width = $('.direct-invest_graph').outerWidth();
    var sp500slider = new Dragdealer('home-benefits-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: sp500Width,
        reflow: true,
        animationCallback: function(x, y) {
            $('.home-benefits_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.direct-invest_graph-wrap').css('margin-left', -x * (sp500Width - screenWidth));
        }
    });

    if(sp500Width > screenWidth){
        $('.past-future-drag-component').css('display', 'block');
        $('.home-benefits_drag-element').css('display', 'block');
    }

});