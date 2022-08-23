if ($(window).width() > 991) {
    $(".home-pe-101_wrappers").eq(1).css("display", "none");
    $(".home-pe-101_wrappers").eq(2).css("display", "none");
    $(".home-pe-101_selector").hover(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".home-pe-101_selector").find('.paragraph-small-copy').css("opacity", "0");
        $(this).find('.paragraph-small-copy').css("opacity", "1");
        var index = $(this).index();
        $(".home-pe-101_wrappers").css("display", "none");
        $(".home-pe-101_wrappers").eq(index).css("display", "block");
    });
}
else {
    var htmlCards = $(".home-pe-101_wrappers").eq(0).html();
    var htmlCards1 = $(".home-pe-101_wrappers").eq(1).html();
    var htmlCards2 = $(".home-pe-101_wrappers").eq(2).html();
    $(".home-pe-101_wrappers").remove();
    $(".home-pe-101_selector").eq(0).after('<div class="home-pe-101_wrappers">' + htmlCards + '</div>');
    $(".home-pe-101_selector").eq(1).after('<div class="home-pe-101_wrappers hidden-div">' + htmlCards1 + '</div>');
    $(".home-pe-101_selector").eq(2).after('<div class="home-pe-101_wrappers hidden-div">' + htmlCards2 + '</div>');

    $(".home-pe-101_selector").click(function () {
        if ($(this).hasClass("active")) {
            $('.home-pe-101_selector').removeClass("active");
            $(".home-pe-101_wrappers").css("display", "none");
            $(".home-pe-101_selector").find('.paragraph-small-copy').css("opacity", "0");
        }
        else {
            $(".home-pe-101_selector").find('.paragraph-small-copy').css("opacity", "0");
            $('.home-pe-101_selector').removeClass("active");
            $(this).addClass("active");
            $(this).find('.paragraph-small-copy').css("opacity", "1");
            var index = $(this).index('.home-pe-101_selector');
            $(".home-pe-101_wrappers").css("display", "none");
            $(".home-pe-101_wrappers").each(function () {
                var index1 = $(this).index('.home-pe-101_wrappers');
                if (index1 == index) {
                    $(this).css("display", "block");
                }
                else {
                    $(this).css("display", "none");
                }
            });
        }
    });
    $(".home-pe-101_wrappers").eq(0).css("display", "block");
}