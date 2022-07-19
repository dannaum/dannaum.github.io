//on page load
$(document).ready(function() {
    var peBContent = $('.pe-101-content-basics').outerWidth();
    var peCard = $('.pe-101_grid-single').outerWidth();
    var peBCardLength = $('.pe-101_grid-4-basics').find('.pe-101_grid-single').length;
    var peBCardsGrid = $('.pe-101_grid-4-basics').outerWidth();
    var peSCardsGrid = $('.pe-101_grid-4-strategies').outerWidth();
    var peSCardLength = $('.pe-101_grid-4-strategies').children().length;
    var peBSlider = new Dragdealer('pe-101b-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: peBCardsGrid,
        reflow: true,
        animationCallback: function(x, y) {
            $('.pe-101-b_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.pe-101_grid-4-basics').css('margin-left', +x * (peBContent - peBCardsGrid));
        }
    });

    var peBSlider = new Dragdealer('pe-101s-drag-tool', {
        speed: 0.1,
        requestAnimationFrame: true,
        horizontal: true,
        vertical: false,
        xPrecision: peBCardsGrid,
        reflow: true,
        animationCallback: function(x, y) {
            $('.pe-101-s_drag-line-active').css('width', Math.round(x * 100) + '%');
            $('.pe-101_grid-4-strategies').css('margin-left', +x * (peBContent - peSCardsGrid));
        }
    });
});