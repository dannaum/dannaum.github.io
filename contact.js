
$(document).ready(function() {
        
    $('input[type=submit]').click(function() {
        var req = $('.required-form-field');
        $('.text-field').removeClass('invalid-form-field');
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

    var phoneAlert = ('Phone must contain at least 7 numbers');

    $("#phone").each(function() {
        var phonenumber = $(this).val();
        if (phonenumber.length >= 7) {
            (this).setCustomValidity('');
        } else {
            
            (this).setCustomValidity(phoneAlert);
            //$('html,body').animate({
                //scrollTop: $(this).offset().top - $(window).height()/2
                //}, 1000);
        }

    });
        
    });

    $('#phone').on('input', function() {
        $(this).val($(this).val().replace(/[^0-9+()]/gi, ''));
        (this).setCustomValidity('');
    });

   $('#hubspot-form').submit(function() {
      $('html,body').animate({
        scrollTop: $("#snd-msg-form").offset().top - $(window).height()/2
        }, 1000);
        setTimeout(function() {
        $('#firstname, #lastname, #phone, #email-4, #please_select_what_best_describes_your_situation, #country, #message').delay(2000).val('');
        },1000)
       
    });
});
