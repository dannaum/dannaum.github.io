//on page load
$(document).ready(function(){
    $('.knowledge-center_category-tag').eq(0).addClass('active');
$('.knowledge-center_category-tag').on('click', function(){
    var tag = $(this).text().toLowerCase();
    $(this).siblings('.knowledge-center_category-tag').removeClass('active');
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.single-blog_item').css('display', 'block');
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
            var singleTag = $(this).find('.single-media-tag').eq(0).text().toLowerCase()
            var singleTag2 = $(this).find('.single-media-tag').eq(1).text().toLowerCase();
            if(singleTag == tag || singleTag2 == tag){
                $(this).css('display', 'block');
            }
            else if(tag == 'all') {
                $(this).closest('.single-blog_item').css('display', 'block');
                $('.blog-hero_article-wrapper').css('display', 'block');
                $('.blog-articles_section').css('display', 'block');
                $('.blog-articles_section-search').css('display', 'none');
            }
            else {
                $(this).css('display', 'none');
            }
        });
    }
});

});