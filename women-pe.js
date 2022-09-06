var navbarHeight = $('.navbar-section').outerHeight();
var videoPlayerPos = $('#video-player').offset().top;


//for each ".women-pe_video-slider-slide"
$('.women-pe_video-slider-slide').each(function (index, element) {
    var index = $(this).index('.women-pe_video-slider-slide')
    //this find ".women-pe_episode-tag-number" text(index +1)
    $(this).find('.women-pe_episode-tag-number').text(index + 1);
});

$(".women-pe_single-video").click(function (e) {
    var index = $(this).closest('.women-pe_video-slider-slide').index('.women-pe_video-slider-slide');
    $('.women-pe_video-slide-nav').find('.w-slider-dot').eq(index).click();
    $('.women-pe_video-pause-icon').css("display", "none");
    $('.women-pe_video-play-icon').css("display", "block");
    $(this).find('.women-pe_video-pause-icon').css("display", "block");
    $(this).find('.women-pe_video-play-icon').css("display", "none");
    var bg = $(this).css('background-image');
    bg = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");
    var videoLink = $(this).find('.video-link').text();
    $("#video-player").attr("src", videoLink);
    $("#video-player").attr("source", videoLink);
    $('#video-player').attr('poster', bg);
    $('#play-video').show();
    $('html, body').animate({
        scrollTop: videoPlayerPos
    }, 500);
});

//on click of "#play-video"
$("#play-video").click(function (e) {
    //#video-player play
    $("#video-player")[0].play();
    //#video-player controls
    $("#video-player").attr("controls", "controls");
    //hide #play-video
    $("#play-video").hide();
});