//on page load
$(document).ready(function() {

    var auctionSlide = $('.secondary-auction_hover').outerWidth();
    console.log(auctionSlide * 5);
    var screenWidth = $(window).width();
    var auctionTimelineSlide = $('.auction-timeline').outerWidth();
    var chartPrecision = $('.auction-timeline_drag-element').outerWidth();
    var auctionDrag = new Dragdealer('auction-timeline', {
    horizontal: true,
    steps: 5,
    vertical: false,
    xPrecision: chartPrecision,
    callback: function(x, y) {
        //auctionDrag getStep(x, y) in var
        var steps = auctionDrag.getStep() + '';
        var stepsArray = steps.split(',');
        var a = stepsArray[0];
        var b = stepsArray[1];
        //for each callback
        //auction-single-icon-wrap each
        $('.auction-single-icon-wrap').each(function(index) {
            //this get index
            var thisIndex = $(this).index();
            //if thisIndex equals or less than a
            if (thisIndex <= a) {
                //this add class active-auction-icon
                $(this).addClass('active-auction-icon');
                //this find auction-timeline_icon-wrap
                $(this).find('.auction-timeline_icon-wrap').addClass('auction-icon_active');
            }
            else
            {
                //if thisIndex greater than a
                if (thisIndex > a) {
                    //this remove class active-auction-icon
                    $(this).removeClass('active-auction-icon');
                    //this find auction-timeline_icon-wrap
                    $(this).find('.auction-timeline_icon-wrap').removeClass('auction-icon_active');
                }
            }
        });

    },
    animationCallback: function(x, y) {
        $('.auction-chart-timeline-line-active').css('width', Math.round(x * 100) + '%');
        $('.auction-timeline_drag-line-active').css('width', Math.round(x * 100) + '%');
        $('.secondary-auction-timeline_divider').css('margin-left', -x * (5 * auctionSlide - screenWidth) );
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
    
});