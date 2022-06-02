//on page load
$(document).ready(function(){
    //on click of knowledge-center_category-tag
    $('.knowledge-center_category-tag').on('click', function(){
        $('.knowledge-center_category-tag').removeClass('active');
        $(this).addClass('active');
        var tagName = $(this).text().toLowerCase();
        $('.press-search-grid').css('display', 'block');
        $('.press-static-grid').css('display', 'none');
        $('.press-search-grid').find('.single-press_item').each(function(){
            var languageTag = $(this).find('.language-media-tag');
            if($(languageTag).text().toLowerCase() == tagName){
                $(this).css('display', 'block');
            }
            //else if tagName == 'all'
            else if(tagName == 'all'){
                $(this).css('display', 'block');
                $('.press-search-grid').css('display', 'none');
                $('.press-static-grid').css('display', 'block');
            }
            else {
                $(this).css('display', 'none');
            }
        });
    });
});
