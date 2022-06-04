//on page load
$(document).ready(function(){
    //on click of knowledge-center_category-tag html to lowercase in var
    $('.knowledge-center_category-tag').on('click', function(){
        var tag = $(this).text().toLowerCase();
        $(this).siblings('.knowledge-center_category-tag').removeClass('active');
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.blog-hero_article-wrapper').css('display', 'block');
            $('.blog-articles_section').css('display', 'block');
            $('.blog-articles_section-search').css('display', 'none');
        }
        else {
            $(this).addClass('active');
            $('.blog-hero_article-wrapper').css('display', 'none');
            $('.blog-articles_section').css('display', 'none');
            $('.blog-articles_section-search').css('display', 'block');
            $('.single-blog_item').each(function(){
                var tag2 = $(this).find('.single-media-tag').text().toLowerCase();
                if(tag2 == tag){
                    $(this).css('display', 'block');
                }
                else{
                    $(this).css('display', 'none');
                }
                if(tag == 'all'){
                    $(this).css('display', 'block');
                    $('.blog-hero_article-wrapper').css('display', 'block');
                    $('.blog-articles_section').css('display', 'block');
                    $('.blog-articles_section-search').css('display', 'none');
                }
            });
        }
    });

});