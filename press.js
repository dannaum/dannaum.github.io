//on page load
$(document).ready(function(){
    //press-search-coverage-grid children ".single-pr-item" each
    $('.press-search-coverage-grid .single-pr-item').each(function(){
        if(index > 5){
            $(this).hide();
        }
    });
    $('#press-load-more').click(function(){
        var lastIndex = $('.knowledge-center_item:visible').last().index();
        console.log(lastIndex)
        $('.knowledge-center_item').each(function(index){
            if(index > lastIndex && index < lastIndex + 7){
                $(this).show();
            }
        });
    });
    $('.knowledge-center_category-tag').eq(0).addClass('active');
    $('.knowledge-center_category-tag').on('click', function(){
        $(this).siblings('.knowledge-center_category-tag').removeClass('active');
        var tagName = $(this).text().toLowerCase();
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.press-search-coverage-grid').css('display', 'none');
            $('.press-static-coverage-grid').css('display', 'block');
        }
        else {
            $(this).addClass('active');
            $('.press-static-coverage-grid').css('display', 'none');
            $('.press-search-coverage-grid').css('display', 'block');
            $('.press-search-coverage-grid').find('.single-pr-item').each(function(){
                var languageTag = $(this).find('.single-media-tag');
                if($(languageTag).text().toLowerCase() == tagName){
                    $(this).css('display', 'block');
                }
                else if(tagName == 'all'){
                    $(this).css('display', 'block');
                    $('.press-search-coverage-grid').css('display', 'none');
                    $('.press-static-coverage-grid').css('display', 'block');
                }
                else {
                    $(this).css('display', 'none');
                }
            });
        }
    });
});