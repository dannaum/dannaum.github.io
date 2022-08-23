$(document).ready(function() {
    //SIDEBAR GENERATOR
    $('p:contains("start-sidebar")').each(function() {
        $(this).nextUntil('p:contains("end-sidebar")').wrapAll('<div class="glossary-article-siderbar"/>');
    }); 

    $('p:contains("start-sidebar")').remove();
    $('p:contains("end-sidebar")').remove();

    //CTA GENERATOR
    $('p:contains("start-cta")').each(function() {
        var ctaWrapper = $('<div class="glossary-article-cta">');
        var ctaTextWrapper = $('<div class="glossary-article-cta-text">');
        var ctaButton = $('<a href="https://app.moonfare.com/" class="button-primary">Learn More</a>');
        ctaWrapper.append(ctaTextWrapper);
        ctaWrapper.append(ctaButton);
        $(this).nextUntil('p:contains("end-cta")').appendTo(ctaTextWrapper);
        $(this).nextUntil('p:contains("end-cta")').remove();
        $(this).after(ctaWrapper);
    });
    
    $(".blog-rich-text").find("h2").each(function() {
        var text = $(this).text();
        var textId = text.replace(/[^a-zA-Z0-9]/g, '');
        textId = textId.toLowerCase();
        $(this).attr("id", textId);
        $('.glossary-article_navigation').append('<a href="#' + textId +'" class="glossary-article_navigation-link"><h3 class="hs7 bottom-margin-0">' + text + '</h3></a>');
    });

    $(".glossary-article_navigation-link").first().addClass("active");

    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });
    //window on scroll
    $(window).on('scroll', function() {
        $(".blog-rich-text").find("h2").each(function() {
            if ($(this).isInViewport()) {
                var whichSection = $(this).index("h2");
                $('.glossary-article_navigation-link').removeClass('active');
                $('.glossary-article_navigation-link').eq(whichSection).addClass('active');
            }
        });
    });

    if ($(window).width() > 991) {
        if ($(".glossary-article_navigation").children(".glossary-article_navigation-link").length > 0) {
            $(".glossary-article_navigation").css("display", "block");
        }
    }

    $(window).on('resize orientationchange', function() {
        if ($(window).width() < 991) {
            $(".glossary-article_navigation").css("display", "none");
        }
        else if ($(window).width() > 991 && $(".glossary-article_navigation").children(".glossary-article_navigation-link").length > 0) {
            $(".glossary-article_navigation").css("display", "block");
        }
    });

    var schemastring = ['CITATIONS'];
    schemastring = schemastring.toString();
    var schemas = schemastring.split(",");
    schemas = schemas.map(function(schema) {
        return '"' + schema + '"';
    });
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = '{"@context":"http://schema.org","@type":["Article"],"headline":"TITLE","datePublished":"PUBLISHED","dateModified":"MODIFIED","image":"IMAGE ICON","description":"META DESCR","author":[{"@type":"Corporation","name":"Moonfare","@id":"https://corporation.moonfare.com","legalName":"Moonfare GmbH","description":"Moonfare is a technology platform that enables individuals and their advisors to invest in top-tier private equity funds, with minimum investments starting at €50,000.","url":"https://www.moonfare.com","logo":"https://assets-global.website-files.com/5fd0f5501ea5ad3d2b7f9c33/62348259e296cf998613d7c1_darkLogo1643704627890.png","foundingDate":"2016"}],"publisher":{"@type":"Corporation","name":"Moonfare","@id":"https://corporation.moonfare.com","legalName":"Moonfare GmbH","description":"Moonfare is a technology platform that enables individuals and their advisors to invest in top-tier private equity funds, with minimum investments starting at €50,000.","url":"https://www.moonfare.com","logo":"https://assets-global.website-files.com/5fd0f5501ea5ad3d2b7f9c33/62348259e296cf998613d7c1_darkLogo1643704627890.png","foundingDate":"2016"},"citation":["CITATIONS"],"mainEntityOfPage":{"@type":["WebPage"],"@id":"https://www.moonfare.com/pe-101/slug","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://www.moonfare.com/pe-101","name":"PE101"}},{"@type":"ListItem","position":2,"item":{"@id":"https://www.moonfare.com/pe-101/slug","name":"TITLE"}}]}}}';
    document.body.appendChild(script);

});