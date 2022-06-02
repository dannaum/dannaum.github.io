//on page load
$(document).ready(function(){
    //on click of knowledge-center_category-tag
    $('.knowledge-center_category-tag').on('click', function(){
        $('.knowledge-center_category-tag').removeClass('active');
        $(this).addClass('active');
        var tagName = $(this).text().toLowerCase();
        //for each single-press_item in coverage-grid
        $('.coverage-grid').find('.single-press_item').each(function(){
            //this find language-media-tag
            var languageTag = $(this).find('.language-media-tag');
            //if languageTag text is tagName
            if($(languageTag).text().toLowerCase() == tagName){
                //this css display block
                $(this).css('display', 'block');
            }
            //else
            else {
                //this css display none
                $(this).css('display', 'none');
            }
        });
    });
});
