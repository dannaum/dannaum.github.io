
    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });

    var screenWidth = $(window).width();
        
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
        scrollTop: $(".contact-form-block").offset().top - $(window).height()/2
        }, 1000);
        setTimeout(function() {
        $('#firstname, #lastname, #phone, #email-4, #please_select_what_best_describes_your_situation, #country, #message').delay(2000).val('');
        },1000)
       
    });

    var aPlayed = false;

    function animationsRender() {
        if ($(window).width() > 991) {

            for (var b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
                var c = b.item(a);
                c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="letter">$2</span>');
            }

            var a = anime.timeline({ loop: !1, autoplay: !1 });
            a.add({
                targets: ".fadeup0 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 30 * a,
                begin() {
                    $(".fadeup0").css("opacity", "1");
                },
            });

            $(document).ready(function () {
                a.play();
                $(window).focus(function() {
                    if (!aPlayed) {
                        a.restart();
                        aPlayed = true;
                    }
                    else {
                        
                    }
                });
            });
        }
    }

        animationsRender();

        