
    //on click of knowledge-center_category-tag html to lowercase in var
    $('.knowledge-center_category-tag').eq(0).addClass('active');
    $('.knowledge-center_category-tag').on('click', function(){
        var tag = $(this).text().toLowerCase();
        $(this).siblings('.knowledge-center_category-tag').removeClass('active');
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.faq-category_wrap').css('display', 'block');
        }
        else {
            $(this).addClass('active');
            $('.faq-category_wrap').each(function(){
                var tag2 = $(this).find('.h6').text().toLowerCase();
                if(tag2 == tag){
                    $(this).css('display', 'block');
                }
                //
                else if(tag == 'all'){
                    $(this).css('display', 'block');
                }
                else{
                    $(this).css('display', 'none');
                }
            });
        }
    });