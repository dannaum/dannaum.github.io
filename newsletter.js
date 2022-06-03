//on page load
$(document).ready(function() {
        
    $('input[type=submit]').click(function() {
        var req = $('.required-form-field');
        $('.form-field').removeClass('invalid-form-field');
        $.each(req, function(e){
            var curr_val = $(this).val();
                if(! curr_val)
                    {
                        $(this).addClass('invalid-form-field');
                        $('html, body').animate({            // added for scrolling purposes
                        scrollTop: $(this).offset().top -100
                    }, -200);
                        return false;
                }
        });
    });

   $('#hubspot-form').submit(function() {
      $('html,body').animate({
        scrollTop: $("#snd-msg-form").offset().top - $(window).height()/2
        }, 1000);
        setTimeout(function() {
        $('.form-field').delay(2000).val('');
        },1000)
       
    });

});