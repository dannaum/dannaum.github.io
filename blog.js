//on page load
$(document).ready(function(){
    //on click of blog-category-tag html to lowercase in var
    $('.blog-category-tag').on('click', function(){
        var tag = $(this).text().toLowerCase();
        //this add class active
        //this siblings blog-category-tag remove class active
        $(this).siblings('.blog-category-tag').removeClass('active');
        $(this).addClass('active');
        //if this has class active
        if($(this).hasClass('active')){
            //blog-hero_article-wrapper css display none
            $('.blog-hero_article-wrapper').css('display', 'none');
            //blog-articles_section css display none
            $('.blog-articles_section').css('display', 'none');
            //blog-articles_section-search css display block
            $('.blog-articles_section-search').css('display', 'block');
            //for each single-blog_item
            $('.single-blog_item').each(function(){
                //this find hs6 html to lowercase in var
                var tag2 = $(this).find('.single-media-tag').text().toLowerCase();
                //if tag2 == tag
                if(tag2 == tag){
                    //this css display block
                    $(this).css('display', 'block');
                }
                //else
                else{
                    //this css display none
                    $(this).css('display', 'none');
                }
                //if tag2 == all
                if(tag == 'all'){
                    //this css display block
                    $(this).css('display', 'block');
                    $('.blog-hero_article-wrapper').css('display', 'block');
                    //blog-articles_section css display none
                    $('.blog-articles_section').css('display', 'block');
                    //blog-articles_section-search css display block
                    $('.blog-articles_section-search').css('display', 'none');
                }
            });
        }
    });

});