if ($(window).width() <= 991) {
    $('.nav_dt').click(function() {
        var $this = $(this);
        setTimeout(function() {
        $('.navbar_menu-links').animate({
            //scroll to top of $this
            scrollTop: $this.offset().top - $('.navbar_menu-links').offset().top + $('.navbar_menu-links').scrollTop()
        }, 1000);
    }, 500);
    });
    var navbar_section_outer_height = $('.navbar_section').outerHeight();
    $('.fq-dt').click(function() {
        var $this = $(this);
        setTimeout(function() {
            if ($this.hasClass('w--open')) {
                $('body, html').animate({
                    scrollTop: $($this).offset().top - navbar_section_outer_height
                }, 1000);
            }
    }, 500);
    });
}
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