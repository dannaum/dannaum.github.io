//on page load
$(document).ready(function(){

    $('.knowledge-center_category-tag').on('click', function(){
        $(this).siblings('.knowledge-center_category-tag').removeClass('active');
        var tagName = $(this).text().toLowerCase();
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.press-search-grid').css('display', 'none');
            $('.press-static-grid').css('display', 'block');
        }
        else {
            $(this).addClass('active');
            $('.press-static-grid').css('display', 'none');
            $('.press-search-grid').css('display', 'block');
            $('.press-search-grid').find('.single-press_item').each(function(){
                var languageTag = $(this).find('.language-media-tag');
                if($(languageTag).text().toLowerCase() == tagName){
                    $(this).css('display', 'block');
                }
                else if(tagName == 'all'){
                    $(this).css('display', 'block');
                    $('.press-search-grid').css('display', 'none');
                    $('.press-static-grid').css('display', 'block');
                }
                else {
                    $(this).css('display', 'none');
                }
            });
        }
    });
});
