//on page load
$(document).ready(function() {

    var auctionSlide = $('.secondary-auction_hover').outerWidth();
    var auctionSlideN = $('.secondary-auction-timeline_divider').find('.secondary-auction_hover').length;
    var screenWidth = $(window).width();
    var auctionTimelineSlide = $('.auction-timeline').outerWidth();
    var chartPrecision = $('.auction-timeline_drag-element').outerWidth();
    var auctionDrag = new Dragdealer('auction-timeline', {
    horizontal: true,
    steps: auctionSlideN,
    vertical: false,
    xPrecision: chartPrecision,
    callback: function(x, y) {
        var steps = auctionDrag.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        $('.auction-single-icon-wrap').each(function(index) {
            var thisIndex = $(this).index();
            if (thisIndex <= a) {
                $(this).addClass('active-auction-icon');
                $(this).find('.auction-timeline_icon-wrap').addClass('auction-icon_active');
            }
            else
            {
                if (thisIndex > a) {
                    $(this).removeClass('active-auction-icon');
                    $(this).find('.auction-timeline_icon-wrap').removeClass('auction-icon_active');
                }
            }
        });

    },
    animationCallback: function(x, y) {
        $('.auction-chart-timeline-line-active').css('width', Math.round(x * 100) + '%');
        $('.auction-timeline_drag-line-active').css('width', Math.round(x * 100) + '%');
        $('.secondary-auction-timeline_divider').css('margin-left', -x * (auctionSlideN * auctionSlide - screenWidth) );
        $('.auction-timeline').css('margin-left', -x * (auctionTimelineSlide - screenWidth + 128));
    }
    });


    //on mouse enter of secondary-auction_hover
    $('.secondary-auction_hover').mouseenter(function() {
        var indexCard = $(this).index();
        $('.auction-chart-hover-child').css('display', 'none');
        $(this).children('.auction-chart-hover-child').css('display', 'block');
        //auction-chart-timeline-line-active animate width ((indexCard+1) * 100) + '%'
        $('.auction-chart-timeline-line-active').animate({
            width: (indexCard * 25) + '%'
        }, 250);
        $('.auction-timeline').children('.auction-single-icon-wrap').each(function() {
            var index = $(this).index();
            //if index is less than and or equal to indexCard

            if (index <= indexCard) {
                $(this).addClass('auction-single-active');
                $(this).find('.auction-timeline_icon-wrap').addClass('auction-icon_active');
            }
            //else if index == indexCard
            else if (index == indexCard) {
                //this closest secondary-auction_hover find auction-chart-hover-child css display block
                $(this).closest('.secondary-auction_hover').find('.auction-chart-hover-child').css('display', 'block');
            }
            else {
                $(this).removeClass('auction-single-active');
                $(this).find('.auction-timeline_icon-wrap').removeClass('auction-icon_active');
            }
        });
        $('.auction-timeline').children('.auction-single-icon-wrap').eq(indexCard).addClass('auction-single-active');
        $('.auction-timeline').children('.auction-single-icon-wrap').eq(indexCard).find('.auction-timeline_icon-wrap').addClass('auction-icon_active');
    });

    $('.secondary-auction_hover').mouseleave(function() {
        $(this).children('.auction-chart-hover-child').css('display', 'none');
    });
    
    //on click of auction-single-icon-wrap
    $('.auction-single-icon-wrap').click(function() {
        var index = $(this).index();
        auctionDrag.setStep(index);
    });
});