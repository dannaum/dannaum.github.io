
    $(".move-letter").each(function() {
        var letter = $(this).text().toLowerCase();
        var thisMove = $(this).closest('.glossary-letter-content_content-single');
        console.log(letter);
        $(".count-letter").each(function() {
            var text = $(this).text().toLowerCase();
            var moveTo = $(this).closest('.glossary-letter-content').find('.glossary-letter-content_content');
            if (letter == text) {
                thisMove.appendTo(moveTo);
            }
        });
    });

    function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        // to avoid breaking orgain page when copying more words
        // cant copy when adding below this code
        // dummy.style.display = 'none'
        document.body.appendChild(dummy);
        //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }
    $('.copy-clipboard-link').click(function() {
        var text = $(this).siblings('.hs5').text().toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
        var newUrl = 'https://www.moonfare.com/glossary?glossary=' + text;
        copyToClipboard(newUrl);
    });
    $('.hs5').each(function() {
        var text = $(this).text().toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
        $(this).parent().attr('id', text);
    });
     //on input of ".form-field-empty"
     $('.form-field-empty').on('input', function() {
        //get this input value to lowercase
        var inputValue = $(this).val().toLowerCase();
        //for each ".glossary-search-result"
        $('.glossary-search-result').each(function() {
            //get the text of this ".glossary-search-result"
            var text = $(this).text().toLowerCase();
            //if the text of this ".glossary-search-result" contains the input value
            if (text.indexOf(inputValue) > -1) {
                //show this ".glossary-search-result"
                $(this).css('display', 'block');
            } else {
                //hide this ".glossary-search-result"
                $(this).css('display', 'none');
            }
        });
        //if the input value is empty
        if (inputValue == '') {
            $('.glossary-search-result').hide();
        }
    });
    
    //".form-field-empty" on submit
    $('#email-form').on('submit', function() {
        //prevent default
        event.preventDefault();
        //stop submit
        return false;
    });
    
        $('.glossary-letter-content').each(function() {
            if ($(this).find('.glossary-letter-content_content-single').length == 0) {
                $(this).closest('.w-dyn-item').remove();
            }
        });

        var countLetters = [];
        $('.count-letter').each(function() {
            //this text to lowercase push to array
            countLetters.push($(this).text().toLowerCase());
        });
        $('.glossary-letter').each(function() {
            if ($.inArray($(this).text().toLowerCase(), countLetters) == -1) {
                $(this).addClass('inactive');
            }
            else {
                $(this).addClass('countable');
            }
        });

        var navbarHeight = $(".navbar_section").outerHeight();
        var glossaryNavbarHeight = $(".glossary-navigation").outerHeight();

        
        var results = {};
    
        function calculateVisibilityForDiv(div$) {
            var windowHeight = $(window).height(),
                docScroll = $(document).scrollTop(),
                divPosition = div$.offset().top,
                divHeight = div$.height(),
                hiddenBefore = docScroll - divPosition,
                hiddenAfter = (divPosition + divHeight) - (docScroll + windowHeight);
    
            if ((docScroll > divPosition + divHeight) || (divPosition > docScroll + windowHeight)) {
                return 0;
            } else {
                var result = 100;
    
                if (hiddenBefore > 0) {
                    result -= (hiddenBefore * 100) / divHeight;
                }
    
                if (hiddenAfter > 0) {
                    result -= (hiddenAfter * 100) / divHeight;
                }
    
                return result;
            }
        }
        var glossaryLettersWidth = $('.glossary-letters').outerWidth();
        var countableLetter = $('.glossary-letter').outerWidth();
        $(window).scroll(function() {
            $('div.glossary-letter-content').each(function () {
                var div$ = $(this);
                results[div$.find('.count-letter').text()] = calculateVisibilityForDiv(div$);
                var highest = 0;
                var highestIndex = 0;
                for (var i in results) {
                    if (results[i] > highest) {
                        highest = results[i];
                        highestIndex = i;
                    }
                }
                $('.count-letter').each(function () {
                    if ($(this).text() == highestIndex) {
                        var index = $(this).closest('.glossary-letter-content').index('.glossary-letter-content');
                        $(".countable").removeClass("active");
                        $(".countable").find(".glossary-letter-active").removeClass('active');
                        $(".countable").eq(index).addClass("active");
                        $(".countable").eq(index).find(".glossary-letter-active").addClass('active');
                        var moveLeft = index * countableLetter;
                        $(".glossary-letters").animate({
                            scrollLeft: moveLeft
                        }, 0);
                    }
                });
            });
        });

        $('.glossary-search-result').on('click', function() {
            //get the text of this ".glossary-search-result"
            var text = $(this).text();
            //for each ".hs5'
            $('.hs5').each(function() {
                //if the text of this ".hs5" == the text of this ".glossary-search-result"
                if ($(this).text() == text) {
                    //scroll to this ".hs5"
                    $('html, body').animate({
                        scrollTop: $(this).offset().top - navbarHeight - glossaryNavbarHeight
                    }, 1000);
                }
            });
            $('.form-field-empty').val('');
            $('.glossary-search-result').css('display', 'none');
        });
        
        $(".countable").on("click", function() {
            //this get index
            var index = $(this).index('.countable');
            //scroll to glossary-letter-content at index
            $('html, body').animate({
                scrollTop: $(".glossary-letter-content").eq(index).offset().top - navbarHeight - glossaryNavbarHeight
            }, 1000);
        });

        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = window.location.search.substring(1),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;
        
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
        
                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                }
            }
            return false;
        };

        $(".glossary-navigation").css("top", navbarHeight);

        var tech = getUrlParameter('glossary');

        $('.hs5').each(function() {
            //if this to lowercase and remove all spaces and special acharacters
            var term = $(this).text().toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, '');
            //if term == tech
            if (term == tech) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - navbarHeight - glossaryNavbarHeight
                }, 1000);
            }
        });