$(document).ready(function(){
    if ($(window).width() <=991) {
        $('.legal-dt').on('click', function(){
            $('.legal-tabs_menu').toggle();
        });
        $('.legal-tab-link').on('click', function(){
            $('.legal-tabs_menu').toggle();
        });
    }
});