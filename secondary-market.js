//on page load
$(document).ready(function() {
    //on mouse enter of secondary-auction_hover
    $('.secondary-auction_hover').mouseenter(function() {
        //this get index
        var indexCard = $(this).index();
        //auction-timeline child auction-single-icon-wrap with eq indexCard
        //this child auction-chart-hover-child css display block
        //auction-chart-hover-child display none
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