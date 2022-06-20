setTimeout(function() {
    if ($(".positions_grid-right").children().length < 1) {
        $(".positions_grid-right").append('<a href="https://www.moonfare.com/current-openings" class="positions_grid-single-job-empty"><p class="paragraph-medium color-text-white">There is currently no open position in this department.</p></a>');
    }
}, 1000);

var totalTeams = $('.our-teams_slider').find('.our-teams_slider-single').length;
    var screenWidth = $(window).width();
    var ourTeamsSlider = $('.our-teams_slider-single').outerWidth();
    var ourTeamsDrag = new Dragdealer('our-team-drag', {
    horizontal: true,
    vertical: false,
    xPrecision: ourTeamsSlider,
    animationCallback: function(x, y) {
        $('.our-teams_drag-line-active').css('width', Math.round(x * 100) + '%');
        $('.our-teams_slider').css('margin-left', -x * ((ourTeamsSlider * totalTeams) - screenWidth +32));
    }
    });

    $(".our-teams_slider-wrap").on('click', '.our-teams_slider-right-arrow', function() {
        var barValue = ourTeamsDrag.getValue() + '';
        var barValueArray = barValue.split(',');
        var a = barValueArray[0];
        var b = barValueArray[1];
        ourTeamsDrag.setValue(parseFloat(a)+0.1, b);

    });
    
    $(".our-teams_slider-wrap").on('click', '.our-teams_slider-left-arrow', function() {
        var barValue = ourTeamsDrag.getValue() + '';
        var barValueArray = barValue.split(',');
        var a = barValueArray[0];
        var b = barValueArray[1];
        ourTeamsDrag.setValue(parseFloat(a)-0.1, b);

    });