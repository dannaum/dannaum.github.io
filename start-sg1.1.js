$.fn.isInViewport = function () {
  var a = $(this).offset().top,
    c = a + $(this).outerHeight(),
    b = $(window).scrollTop(),
    d = b + $(window).height();
  return c > b && a < d;
};

for (
  var b = document.getElementsByClassName("animated-word"), a = 0;
  a < b.length;
  a++
) {
  var c = b.item(a);
  c.innerHTML = c.innerHTML.replace(
    /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
    '$1<span class="letter">$2</span>'
  );
}
var aPlayed = false;
function animationsRender() {
  if ($(window).width() > 991) {
    var a = anime.timeline({ loop: !1, autoplay: !1 });
    a.add({
      targets: ".fadeup0 .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 800,
      delay: (b, a) => 30 * a,
      begin() {
        $(".fadeup0").css("opacity", "1");
      },
    });

    a.play();
    $(window).focus(function () {
      if (!aPlayed) {
        a.restart();
        aPlayed = true;
      } else {
      }
    });

    var b = anime.timeline({ loop: !1, autoplay: !1 });
    b.add({
      targets: ".fadeup1 .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 800,
      delay: (b, a) => 300 + 30 * a,
      begin() {
        $(".fadeup1").css("opacity", "1");
      },
    });

    var fd5 = anime.timeline({ loop: !1, autoplay: !1 });
    fd5.add({
      targets: ".fadeup5 .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 800,
      delay: (b, a) => 300 + 30 * a,
      begin() {
        $(".fadeup5").css("opacity", "1");
      },
    });
    var petitle = anime.timeline({ loop: !1, autoplay: !1 });
    petitle.add({
      targets: ".fadeuppe .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: 800,
      delay: (b, a) => 300 + 30 * a,
      begin() {
        $(".fadeuppe").css("opacity", "1");
      },
    });

    var viewedSPGraph = false;
    var heroVisualScrollAdd;
    var heroVisual = $(".home-page_hero-visual");
    var heroVisualWidth = heroVisual.width();
    var currentScroll = $(window).scrollTop() + $(window).height();
    $(window).scroll(function () {
      heroVisualScrollAdd = $(this).scrollTop();
      heroVisual.width(heroVisualScrollAdd + heroVisualWidth);
      if ($(".fadeup1").isInViewport()) {
        b.play();
      } else if ($(".home-benefits_image-title").isInViewport()) {
        if (!viewedSPGraph) {
          const chart = new Chart(ctx, config);
          viewedSPGraph = true;
        } else if (viewedSPGraph) {
        }
      } else if ($(".fadeup5").isInViewport()) {
        fd5.play();
        //timeout 500 ms
        setTimeout(function () {
          $(".past-future_slider-slide").each(function (i) {
            var $item = $(this).find("._8_fundcards");
            setTimeout(function () {
              $item.click();
            }, 100 * i);
          });
        }, 500);
      } else if ($(".fadeuppe").isInViewport()) {
        petitle.play();
      }
    });
  } else {
    const chart = new Chart(ctx, config);
  }
}
animationsRender();

var screenWidth = $(window).width();
var closedFundsWrapper = Math.round($(".past-future_content").outerWidth());
var closedFundSlidesN = $(".past-future_slider-mask").find(
  ".past-future_slider-slide"
).length;
var closedFundSlidesOW = Math.round(
  $(".past-future_slider-mask").find(".past-future_slider-slide").outerWidth()
);
var closedFundsTotalWidth = Math.round(
  $(".past-future_slider-mask").outerWidth()
);
var dd = new Dragdealer("content-scroller", {
  steps: closedFundSlidesN,
  speed: 0.1,
  requestAnimationFrame: true,
  horizontal: true,
  vertical: false,
  animationCallback: function (x, y) {
    $(".past-future-slider-active_line").css(
      "width",
      Math.round(x * 100) + "%"
    );
    $(".past-future_slider").css(
      "margin-left",
      -x * (closedFundsTotalWidth - closedFundsWrapper + 32)
    );
  },
});

$(".past-future_slider-wrap").on(
  "click",
  ".past-future_right-arrow",
  function (e) {
    var steps = dd.getStep() + "";
    var stepsArray = steps.split(",");
    var a = stepsArray[0];
    var b = stepsArray[1];
    dd.setStep(parseInt(a) + 1, b);
  }
);

$(".past-future_slider-wrap").on(
  "click",
  ".past-future_left-arrow",
  function (e) {
    var steps = dd.getStep() + "";
    var stepsArray = steps.split(",");
    var a = stepsArray[0];
    var b = stepsArray[1];
    dd.setStep(parseInt(a) - 1, b);
  }
);

var homeBenefitsImageWrap = $(".home-benefits-section").outerWidth();
var sp500Width = $(".home-benefits_image").outerWidth();
var sp500slider = new Dragdealer("home-benefits-drag-tool", {
  speed: 0.1,
  requestAnimationFrame: true,
  horizontal: true,
  vertical: false,
  xPrecision: sp500Width,
  reflow: true,
  animationCallback: function (x, y) {
    $(".home-benefits_drag-line-active").css(
      "width",
      Math.round(x * 100) + "%"
    );
    $(".home-benefits_image-wrap").css(
      "margin-left",
      -x * (sp500Width - homeBenefitsImageWrap + 128)
    );
  },
});

$(".book-demo").on("click", function () {
  //popup_main animate opacity from 0 to 100
  $(".popup_main").animate({ opacity: 1 }, 500).toggle();
  $("body").css("overflow", "hidden");
});
//on click of popup_close-button
$(".popup_close-button").on("click", function () {
  //popup_main animate opacity from 100 to 0
  $(".popup_main").animate({ opacity: 0 }, 500);
  //after 500ms toggle popup_main
  setTimeout(function () {
    $(".popup_main").toggle();
  }, 500);
  $("body").css("overflow", "auto");
});

//on click of ".popup_main" but not children
$(".popup_main").on("click", (e) => {
  if (e.target !== e.currentTarget) return;
  // popup_main animate opacity from 100 to 0
  $(".popup_main").animate({ opacity: 0 }, 500);
  setTimeout(() => {
    $(".popup_main").toggle();
  }, 500);
  $("body").css("overflow", "auto");
});

$(".alt-single-press_wrap").each(function () {
  var parent_index = $(this).parent().index();
  $(this).attr("data-testid", "alt-single-press-wrap-" + parent_index);
});

$(".past-future_single-card").each(function () {
  var parent_index = $(this).parent().index();
  $(this).attr("data-testid", "closed-funds-card-" + parent_index);
});

$(".testimonials_slider-slide")
  .eq(0)
  .find(".hs5")
  .addClass("current-testimonial-quote"),
  $(".testimonials_click").click(function () {
    $(".hs5").removeClass("current-testimonial-quote");
    var a = $(".testimonials_slider-nav")
      .find(".w-slider-dot.w-active")
      .index();
    $(".testimonials_slider-slide")
      .eq(a)
      .find(".hs5")
      .addClass("current-testimonial-quote");
  });

if ($(window).width() > 991) {
  $(".home-pe-101_wrappers").eq(1).css("display", "none");
  $(".home-pe-101_wrappers").eq(2).css("display", "none");
  $(".home-pe-101_selector").hover(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".home-pe-101_selector")
      .find(".paragraph-small-copy")
      .css("opacity", "0");
    $(this).find(".paragraph-small-copy").css("opacity", "1");
    var index = $(this).index();
    $(".home-pe-101_wrappers").css("display", "none");
    $(".home-pe-101_wrappers").eq(index).css("display", "block");
  });
} else {
  var htmlCards = $(".home-pe-101_wrappers").eq(0).html();
  var htmlCards1 = $(".home-pe-101_wrappers").eq(1).html();
  var htmlCards2 = $(".home-pe-101_wrappers").eq(2).html();
  $(".home-pe-101_wrappers").remove();
  $(".home-pe-101_selector")
    .eq(0)
    .after('<div class="home-pe-101_wrappers">' + htmlCards + "</div>");
  $(".home-pe-101_selector")
    .eq(1)
    .after(
      '<div class="home-pe-101_wrappers hidden-div">' + htmlCards1 + "</div>"
    );
  $(".home-pe-101_selector")
    .eq(2)
    .after(
      '<div class="home-pe-101_wrappers hidden-div">' + htmlCards2 + "</div>"
    );

  $(".home-pe-101_selector").click(function () {
    if ($(this).hasClass("active")) {
      $(".home-pe-101_selector").removeClass("active");
      $(".home-pe-101_wrappers").css("display", "none");
      $(".home-pe-101_selector")
        .find(".paragraph-small-copy")
        .css("opacity", "0");
    } else {
      $(".home-pe-101_selector")
        .find(".paragraph-small-copy")
        .css("opacity", "0");
      $(".home-pe-101_selector").removeClass("active");
      $(this).addClass("active");
      $(this).find(".paragraph-small-copy").css("opacity", "1");
      var index = $(this).index(".home-pe-101_selector");
      $(".home-pe-101_wrappers").css("display", "none");
      $(".home-pe-101_wrappers").each(function () {
        var index1 = $(this).index(".home-pe-101_wrappers");
        if (index1 == index) {
          $(this).css("display", "block");
        } else {
          $(this).css("display", "none");
        }
      });
    }
  });
  $(".home-pe-101_wrappers").eq(0).css("display", "block");
}

function dragDetector() {
  var closedFundsWrapper = Math.round($(".past-future_content").outerWidth());
  var closedFundsTotalWidth = Math.round(
    $(".past-future_slider-mask").outerWidth()
  );
  dd = new Dragdealer("content-scroller", {
    steps: closedFundSlidesN,
    speed: 0.1,
    requestAnimationFrame: true,
    horizontal: true,
    vertical: false,
    animationCallback: function (x, y) {
      $(".past-future-slider-active_line").css(
        "width",
        Math.round(x * 100) + "%"
      );
      $(".past-future_slider").css(
        "margin-left",
        -x * (closedFundsTotalWidth - closedFundsWrapper + 32)
      );
    },
  });

  if (closedFundsWrapper < closedFundsTotalWidth) {
    $(".past-future-drag-component").css("opacity", "1");
  } else {
    $(".past-future-drag-component").css("opacity", "0");
  }

  var homeBenefitsImageWrap = $(".home-benefits-section").outerWidth();
  var sp500Width = $(".home-benefits_image").outerWidth();
  sp500slider = new Dragdealer("home-benefits-drag-tool", {
    speed: 0.1,
    requestAnimationFrame: true,
    horizontal: true,
    vertical: false,
    xPrecision: sp500Width,
    reflow: true,
    animationCallback: function (x, y) {
      $(".home-benefits_drag-line-active").css(
        "width",
        Math.round(x * 100) + "%"
      );
      $(".home-benefits_image-wrap").css(
        "margin-left",
        -x * (sp500Width - homeBenefitsImageWrap + 128)
      );
    },
  });

  if (homeBenefitsImageWrap < sp500Width + 32) {
    $(".home-benefits_drag-element").css("opacity", "1");
  } else {
    $(".home-benefits_drag-element").css("opacity", "0");
  }
}
dragDetector();
var resizeDone;
var cachedWidth = $(window).width();
$(window).resize(function () {
  var newWidth = $(window).width();
  if (newWidth !== cachedWidth) {
    clearTimeout(resizeDone);
    resizeDone = setTimeout(doneResizing, 500);
    cachedWidth = newWidth;
  }
});

function doneResizing() {
  screenWidth = $(window).width();
  if (screenWidth > 991) {
    $(
      ".animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button"
    ).css("opacity", "1");
  }
  dragDetector();
}
function pageLoaded() {
  screenWidth = $(window).width();
  if (screenWidth <= 991) {
    $(
      ".animated-word, .animated-content, .animated-image, .animated-hero-visual, ._5_text_blocks, ._8_fundcards_parent, ._9_tagblock, ._9_tag_animation_parent, .animated-button, .animated-pill-button"
    ).css("opacity", "1");
  }
}
pageLoaded();

var readingBlock = $(".pe-101_reading-time-block");
readingBlock.each(function () {
  var readingTime = $(this).find(".paragraph-small");
  if (readingTime.text().indexOf("mins") > -1) {
    readingTime.text(readingTime.text().replace("mins", "分钟"));
  }
});

//each p
$("h2, h3, p").each(function () {
  //get this html
  var html = $(this).html();
  //if this contains "&lt;NEWLINE&gt;" replace with "<br>"
  if (html.indexOf("&lt;NEWLINE&gt;") > -1) {
    $(this).html(html.replace(/&lt;NEWLINE&gt;/g, "<br>"));
  }
});

$("#start-email-form").submit(function (e) {
  window.location.href = "https://app.moonfare.com/registration";
  return false;
  preventDefault(e);
});
$("#start-email-input").focus(function () {
  $("#start-disclaimer").animate({ opacity: 1 }, 200);
  $(this).addClass("start-input");
});

$("#start-email-input").blur(function () {
  $("#start-disclaimer").animate({ opacity: 0 }, 200);
  $(this).removeClass("start-input");
});


const selectorInput =
  '<select id="international-country-code-select-input" class="form-field required-form-field bottom-margin-16" name="" aria-invalid="false" aria-labelledby="international-country-code-select-label" aria-describedby="international-country-code-select-description" aria-required="false"><option label="Country Code" disabled="" value="">Country Code</option><option label="Country Code" value="">Country Code</option><option label="Afghanistan (‫افغانستان‬‎)" value="AF">Afghanistan (‫افغانستان‬‎)</option><option label="Albania (Shqipëri)" value="AL">Albania (Shqipëri)</option><option label="Algeria (‫الجزائر‬‎)" value="DZ">Algeria (‫الجزائر‬‎)</option><option label="American Samoa" value="AS">American Samoa</option><option label="Andorra" value="AD">Andorra</option><option label="Angola" value="AO">Angola</option><option label="Anguilla" value="AI">Anguilla</option><option label="Antigua and Barbuda" value="AG">Antigua and Barbuda</option><option label="Argentina" value="AR">Argentina</option><option label="Armenia (Հայաստան)" value="AM">Armenia (Հայաստան)</option><option label="Aruba" value="AW">Aruba</option><option label="Australia" value="AU">Australia</option><option label="Austria (Österreich)" value="AT">Austria (Österreich)</option><option label="Azerbaijan (Azərbaycan)" value="AZ">Azerbaijan (Azərbaycan)</option><option label="Bahamas" value="BS">Bahamas</option><option label="Bahrain (‫البحرين‬‎)" value="BH">Bahrain (‫البحرين‬‎)</option><option label="Bangladesh (বাংলাদেশ)" value="BD">Bangladesh (বাংলাদেশ)</option><option label="Barbados" value="BB">Barbados</option><option label="Belarus (Беларусь)" value="BY">Belarus (Беларусь)</option><option label="Belgium (België)" value="BE">Belgium (België)</option><option label="Belize" value="BZ">Belize</option><option label="Benin (Bénin)" value="BJ">Benin (Bénin)</option><option label="Bermuda" value="BM">Bermuda</option><option label="Bhutan (འབྲུག)" value="BT">Bhutan (འབྲུག)</option><option label="Bolivia" value="BO">Bolivia</option><option label="Bosnia and Herzegovina (Босна и Херцеговина)" value="BA">Bosnia and Herzegovina (Босна и Херцеговина)</option><option label="Botswana" value="BW">Botswana</option><option label="Brazil (Brasil)" value="BR">Brazil (Brasil)</option><option label="British Indian Ocean Territory" value="IO">British Indian Ocean Territory</option><option label="British Virgin Islands" value="VG">British Virgin Islands</option><option label="Brunei" value="BN">Brunei</option><option label="Bulgaria (България)" value="BG">Bulgaria (България)</option><option label="Burkina Faso" value="BF">Burkina Faso</option><option label="Burundi (Uburundi)" value="BI">Burundi (Uburundi)</option><option label="Cambodia (កម្ពុជា)" value="KH">Cambodia (កម្ពុជា)</option><option label="Cameroon (Cameroun)" value="CM">Cameroon (Cameroun)</option><option label="Canada" value="CA">Canada</option><option label="Cape Verde (Kabu Verdi)" value="CV">Cape Verde (Kabu Verdi)</option><option label="Caribbean Netherlands" value="BQ">Caribbean Netherlands</option><option label="Cayman Islands" value="KY">Cayman Islands</option><option label="Central African Republic (République centrafricaine)" value="CF">Central African Republic (République centrafricaine)</option><option label="Chad (Tchad)" value="TD">Chad (Tchad)</option><option label="Chile" value="CL">Chile</option><option label="China (中国)" value="CN">China (中国)</option><option label="Colombia" value="CO">Colombia</option><option label="Comoros (‫جزر القمر‬‎)" value="KM">Comoros (‫جزر القمر‬‎)</option><option label="Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)" value="CD">Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)</option><option label="Congo (Republic) (Congo-Brazzaville)" value="CG">Congo (Republic) (Congo-Brazzaville)</option><option label="Cook Islands" value="CK">Cook Islands</option><option label="Costa Rica" value="CR">Costa Rica</option><option label="Côte d’Ivoire" value="CI">Côte d’Ivoire</option><option label="Croatia (Hrvatska)" value="HR">Croatia (Hrvatska)</option><option label="Cuba" value="CU">Cuba</option><option label="Curaçao" value="CW">Curaçao</option><option label="Cyprus (Κύπρος)" value="CY">Cyprus (Κύπρος)</option><option label="Czech Republic (Česká republika)" value="CZ">Czech Republic (Česká republika)</option><option label="Denmark (Danmark)" value="DK">Denmark (Danmark)</option><option label="Djibouti" value="DJ">Djibouti</option><option label="Dominica" value="DM">Dominica</option><option label="Dominican Republic (República Dominicana)" value="DO">Dominican Republic (República Dominicana)</option><option label="Ecuador" value="EC">Ecuador</option><option label="Egypt (‫مصر‬‎)" value="EG">Egypt (‫مصر‬‎)</option><option label="El Salvador" value="SV">El Salvador</option><option label="Equatorial Guinea (Guinea Ecuatorial)" value="GQ">Equatorial Guinea (Guinea Ecuatorial)</option><option label="Eritrea" value="ER">Eritrea</option><option label="Estonia (Eesti)" value="EE">Estonia (Eesti)</option><option label="Ethiopia" value="ET">Ethiopia</option><option label="Falkland Islands (Islas Malvinas)" value="FK">Falkland Islands (Islas Malvinas)</option><option label="Faroe Islands (Føroyar)" value="FO">Faroe Islands (Føroyar)</option><option label="Fiji" value="FJ">Fiji</option><option label="Finland (Suomi)" value="FI">Finland (Suomi)</option><option label="France" value="FR">France</option><option label="French Guiana (Guyane française)" value="GF">French Guiana (Guyane française)</option><option label="French Polynesia (Polynésie française)" value="PF">French Polynesia (Polynésie française)</option><option label="Gabon" value="GA">Gabon</option><option label="Gambia" value="GM">Gambia</option><option label="Georgia (საქართველო)" value="GE">Georgia (საქართველო)</option><option label="Germany (Deutschland)" value="DE">Germany (Deutschland)</option><option label="Ghana (Gaana)" value="GH">Ghana (Gaana)</option><option label="Gibraltar" value="GI">Gibraltar</option><option label="Greece (Ελλάδα)" value="GR">Greece (Ελλάδα)</option><option label="Greenland (Kalaallit Nunaat)" value="GL">Greenland (Kalaallit Nunaat)</option><option label="Grenada" value="GD">Grenada</option><option label="Guadeloupe" value="GP">Guadeloupe</option><option label="Guam" value="GU">Guam</option><option label="Guatemala" value="GT">Guatemala</option><option label="Guinea (Guinée)" value="GN">Guinea (Guinée)</option><option label="Guinea-Bissau (Guiné Bissau)" value="GW">Guinea-Bissau (Guiné Bissau)</option><option label="Guyana" value="GY">Guyana</option><option label="Haiti" value="HT">Haiti</option><option label="Honduras" value="HN">Honduras</option><option label="Hong Kong (香港)" value="HK">Hong Kong (香港)</option><option label="Hungary (Magyarország)" value="HU">Hungary (Magyarország)</option><option label="Iceland (Ísland)" value="IS">Iceland (Ísland)</option><option label="India (भारत)" value="IN">India (भारत)</option><option label="Indonesia" value="ID">Indonesia</option><option label="Iran (‫ایران‬‎)" value="IR">Iran (‫ایران‬‎)</option><option label="Iraq (‫العراق‬‎)" value="IQ">Iraq (‫العراق‬‎)</option><option label="Ireland" value="IE">Ireland</option><option label="Israel (‫ישראל‬‎)" value="IL">Israel (‫ישראל‬‎)</option><option label="Italy (Italia)" value="IT">Italy (Italia)</option><option label="Jamaica" value="JM">Jamaica</option><option label="Japan (日本)" value="JP">Japan (日本)</option><option label="Jordan (‫الأردن‬‎)" value="JO">Jordan (‫الأردن‬‎)</option><option label="Kazakhstan (Казахстан)" value="KZ">Kazakhstan (Казахстан)</option><option label="Kenya" value="KE">Kenya</option><option label="Kiribati" value="KI">Kiribati</option><option label="Kosovo" value="XK">Kosovo</option><option label="Kuwait (‫الكويت‬‎)" value="KW">Kuwait (‫الكويت‬‎)</option><option label="Kyrgyzstan (Кыргызстан)" value="KG">Kyrgyzstan (Кыргызстан)</option><option label="Laos (ລາວ)" value="LA">Laos (ລາວ)</option><option label="Latvia (Latvija)" value="LV">Latvia (Latvija)</option><option label="Lebanon (‫لبنان‬‎)" value="LB">Lebanon (‫لبنان‬‎)</option><option label="Lesotho" value="LS">Lesotho</option><option label="Liberia" value="LR">Liberia</option><option label="Libya (‫ليبيا‬‎)" value="LY">Libya (‫ليبيا‬‎)</option><option label="Liechtenstein" value="LI">Liechtenstein</option><option label="Lithuania (Lietuva)" value="LT">Lithuania (Lietuva)</option><option label="Luxembourg" value="LU">Luxembourg</option><option label="Macau (澳門)" value="MO">Macau (澳門)</option><option label="Macedonia (FYROM) (Македонија)" value="MK">Macedonia (FYROM) (Македонија)</option><option label="Madagascar (Madagasikara)" value="MG">Madagascar (Madagasikara)</option><option label="Malawi" value="MW">Malawi</option><option label="Malaysia" value="MY">Malaysia</option><option label="Maldives" value="MV">Maldives</option><option label="Mali" value="ML">Mali</option><option label="Malta" value="MT">Malta</option><option label="Marshall Islands" value="MH">Marshall Islands</option><option label="Martinique" value="MQ">Martinique</option><option label="Mauritania (‫موريتانيا‬‎)" value="MR">Mauritania (‫موريتانيا‬‎)</option><option label="Mauritius (Moris)" value="MU">Mauritius (Moris)</option><option label="Mexico (México)" value="MX">Mexico (México)</option><option label="Micronesia" value="FM">Micronesia</option><option label="Moldova (Republica Moldova)" value="MD">Moldova (Republica Moldova)</option><option label="Monaco" value="MC">Monaco</option><option label="Mongolia (Монгол)" value="MN">Mongolia (Монгол)</option><option label="Montenegro (Crna Gora)" value="ME">Montenegro (Crna Gora)</option><option label="Montserrat" value="MS">Montserrat</option><option label="Morocco (‫المغرب‬‎)" value="MA">Morocco (‫المغرب‬‎)</option><option label="Mozambique (Moçambique)" value="MZ">Mozambique (Moçambique)</option><option label="Myanmar (Burma) (မြန်မာ)" value="MM">Myanmar (Burma) (မြန်မာ)</option><option label="Namibia (Namibië)" value="NA">Namibia (Namibië)</option><option label="Nauru" value="NR">Nauru</option><option label="Nepal (नेपाल)" value="NP">Nepal (नेपाल)</option><option label="Netherlands (Nederland)" value="NL">Netherlands (Nederland)</option><option label="New Caledonia (Nouvelle-Calédonie)" value="NC">New Caledonia (Nouvelle-Calédonie)</option><option label="New Zealand" value="NZ">New Zealand</option><option label="Nicaragua" value="NI">Nicaragua</option><option label="Niger (Nijar)" value="NE">Niger (Nijar)</option><option label="Nigeria" value="NG">Nigeria</option><option label="Niue" value="NU">Niue</option><option label="Norfolk Island" value="NF">Norfolk Island</option><option label="North Korea (조선 민주주의 인민 공화국)" value="KP">North Korea (조선 민주주의 인민 공화국)</option><option label="Northern Mariana Islands" value="MP">Northern Mariana Islands</option><option label="Norway (Norge)" value="NO">Norway (Norge)</option><option label="Oman (‫عُمان‬‎)" value="OM">Oman (‫عُمان‬‎)</option><option label="Pakistan (‫پاکستان‬‎)" value="PK">Pakistan (‫پاکستان‬‎)</option><option label="Palau" value="PW">Palau</option><option label="Palestine (‫فلسطين‬‎)" value="PS">Palestine (‫فلسطين‬‎)</option><option label="Panama (Panamá)" value="PA">Panama (Panamá)</option><option label="Papua New Guinea" value="PG">Papua New Guinea</option><option label="Paraguay" value="PY">Paraguay</option><option label="Peru (Perú)" value="PE">Peru (Perú)</option><option label="Philippines" value="PH">Philippines</option><option label="Poland (Polska)" value="PL">Poland (Polska)</option><option label="Portugal" value="PT">Portugal</option><option label="Puerto Rico" value="PR">Puerto Rico</option><option label="Qatar (‫قطر‬‎)" value="QA">Qatar (‫قطر‬‎)</option><option label="Réunion (La Réunion)" value="RE">Réunion (La Réunion)</option><option label="Romania (România)" value="RO">Romania (România)</option><option label="Russia (Россия)" value="RU">Russia (Россия)</option><option label="Rwanda" value="RW">Rwanda</option><option label="Saint Barthélemy (Saint-Barthélemy)" value="BL">Saint Barthélemy (Saint-Barthélemy)</option><option label="Saint Helena" value="SH">Saint Helena</option><option label="Saint Kitts and Nevis" value="KN">Saint Kitts and Nevis</option><option label="Saint Lucia" value="LC">Saint Lucia</option><option label="Saint Martin (Saint-Martin (partie française))" value="MF">Saint Martin (Saint-Martin (partie française))</option><option label="Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)" value="PM">Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)</option><option label="Saint Vincent and the Grenadines" value="VC">Saint Vincent and the Grenadines</option><option label="Samoa" value="WS">Samoa</option><option label="San Marino" value="SM">San Marino</option><option label="São Tomé and Príncipe (São Tomé e Príncipe)" value="ST">São Tomé and Príncipe (São Tomé e Príncipe)</option><option label="Saudi Arabia (‫المملكة العربية السعودية‬‎)" value="SA">Saudi Arabia (‫المملكة العربية السعودية‬‎)</option><option label="Senegal (Sénégal)" value="SN">Senegal (Sénégal)</option><option label="Serbia (Србија)" value="RS">Serbia (Србија)</option><option label="Seychelles" value="SC">Seychelles</option><option label="Sierra Leone" value="SL">Sierra Leone</option><option label="Singapore" value="SG">Singapore</option><option label="Sint Maarten" value="SX">Sint Maarten</option><option label="Slovakia (Slovensko)" value="SK">Slovakia (Slovensko)</option><option label="Slovenia (Slovenija)" value="SI">Slovenia (Slovenija)</option><option label="Solomon Islands" value="SB">Solomon Islands</option><option label="Somalia (Soomaaliya)" value="SO">Somalia (Soomaaliya)</option><option label="South Africa" value="ZA">South Africa</option><option label="South Korea (대한민국)" value="KR">South Korea (대한민국)</option><option label="South Sudan (‫جنوب السودان‬‎)" value="SS">South Sudan (‫جنوب السودان‬‎)</option><option label="Spain (España)" value="ES">Spain (España)</option><option label="Sri Lanka (ශ්‍රී ලංකාව)" value="LK">Sri Lanka (ශ්‍රී ලංකාව)</option><option label="Sudan (‫السودان‬‎)" value="SD">Sudan (‫السودان‬‎)</option><option label="Suriname" value="SR">Suriname</option><option label="Swaziland" value="SZ">Swaziland</option><option label="Sweden (Sverige)" value="SE">Sweden (Sverige)</option><option label="Switzerland (Schweiz)" value="CH">Switzerland (Schweiz)</option><option label="Syria (‫سوريا‬‎)" value="SY">Syria (‫سوريا‬‎)</option><option label="Taiwan (台灣)" value="TW">Taiwan (台灣)</option><option label="Tajikistan" value="TJ">Tajikistan</option><option label="Tanzania" value="TZ">Tanzania</option><option label="Thailand (ไทย)" value="TH">Thailand (ไทย)</option><option label="Timor-Leste" value="TL">Timor-Leste</option><option label="Togo" value="TG">Togo</option><option label="Tokelau" value="TK">Tokelau</option><option label="Tonga" value="TO">Tonga</option><option label="Trinidad and Tobago" value="TT">Trinidad and Tobago</option><option label="Tunisia (‫تونس‬‎)" value="TN">Tunisia (‫تونس‬‎)</option><option label="Turkey (Türkiye)" value="TR">Turkey (Türkiye)</option><option label="Turkmenistan" value="TM">Turkmenistan</option><option label="Turks and Caicos Islands" value="TC">Turks and Caicos Islands</option><option label="Tuvalu" value="TV">Tuvalu</option><option label="U.S. Virgin Islands" value="VI">U.S. Virgin Islands</option><option label="Uganda" value="UG">Uganda</option><option label="Ukraine (Україна)" value="UA">Ukraine (Україна)</option><option label="United Arab Emirates (‫الإمارات العربية المتحدة‬‎)" value="AE">United Arab Emirates (‫الإمارات العربية المتحدة‬‎)</option><option label="United Kingdom" value="GB">United Kingdom</option><option label="United States" value="US">United States</option><option label="Uruguay" value="UY">Uruguay</option><option label="Uzbekistan (Oʻzbekiston)" value="UZ">Uzbekistan (Oʻzbekiston)</option><option label="Vanuatu" value="VU">Vanuatu</option><option label="Vatican City (Città del Vaticano)" value="VA">Vatican City (Città del Vaticano)</option><option label="Venezuela" value="VE">Venezuela</option><option label="Vietnam (Việt Nam)" value="VN">Vietnam (Việt Nam)</option><option label="Wallis and Futuna" value="WF">Wallis and Futuna</option><option label="Yemen (‫اليمن‬‎)" value="YE">Yemen (‫اليمن‬‎)</option><option label="Zambia" value="ZM">Zambia</option><option label="Zimbabwe" value="ZW">Zimbabwe</option></select>';

$("#phone").before(selectorInput);

const locationInput =
  "<select id='location-input' class='form-field required-form-field bottom-margin-16' name='location' required='' aria-invalid='true' aria-labelledby='location-label' aria-describedby='location__error' aria-required='true'><option label='(Where you are currently based)' disabled='' value=''>(Where you are currently based)</option><option label='Country' value=''>Country</option><option label='Afghanistan' value='Afghanistan'>Afghanistan</option><option label='Albania' value='Albania'>Albania</option><option label='Algeria' value='Algeria'>Algeria</option><option label='American Samoa' value='American Samoa'>American Samoa</option><option label='Andorra' value='Andorra'>Andorra</option><option label='Angola' value='Angola'>Angola</option><option label='Anguilla' value='Anguilla'>Anguilla</option><option label='Antarctica' value='Antarctica'>Antarctica</option><option label='Antigua Barbuda' value='Antigua Barbuda'>Antigua Barbuda</option><option label='Argentina' value='Argentina'>Argentina</option><option label='Armenia' value='Armenia'>Armenia</option><option label='Aruba' value='Aruba'>Aruba</option><option label='Australia' value='Australia'>Australia</option><option label='Austria' value='Austria'>Austria</option><option label='Azerbaijan' value='Azerbaijan'>Azerbaijan</option><option label='Bahamas' value='Bahamas'>Bahamas</option><option label='Bahrain' value='Bahrain'>Bahrain</option><option label='Bangladesh' value='Bangladesh'>Bangladesh</option><option label='Barbados' value='Barbados'>Barbados</option><option label='Belarus' value='Belarus'>Belarus</option><option label='Belgium' value='Belgium'>Belgium</option><option label='Belize' value='Belize'>Belize</option><option label='Benin' value='Benin'>Benin</option><option label='Bermuda' value='Bermuda'>Bermuda</option><option label='Bhutan' value='Bhutan'>Bhutan</option><option label='Bolivia' value='Bolivia'>Bolivia</option><option label='Bonaire, Sint Eustatius and Saba' value='Bonaire, Sint Eustatius and Saba'>Bonaire, Sint Eustatius and Saba</option><option label='Bosnia and Herzegovina' value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option><option label='Botswana' value='Botswana'>Botswana</option><option label='Bouvet Island' value='Bouvet Island'>Bouvet Island</option><option label='Brazil' value='Brazil'>Brazil</option><option label='British Indian Ocean Territory' value='British Indian Ocean Territory'>British Indian Ocean Territory</option><option label='British Virgin Islands' value='British Virgin Islands'>British Virgin Islands</option><option label='Brunei' value='Brunei'>Brunei</option><option label='Brunei Darussalam' value='Brunei Darussalam'>Brunei Darussalam</option><option label='Bulgaria' value='Bulgaria'>Bulgaria</option><option label='Burkina Faso' value='Burkina Faso'>Burkina Faso</option><option label='Burundi' value='Burundi'>Burundi</option><option label='Cambodia' value='Cambodia'>Cambodia</option><option label='Cameroon' value='Cameroon'>Cameroon</option><option label='Canada' value='Canada'>Canada</option><option label='Cape Verde' value='Cape Verde'>Cape Verde</option><option label='Cayman Islands' value='Cayman Islands'>Cayman Islands</option><option label='Central African Republic' value='Central African Republic'>Central African Republic</option><option label='Chad' value='Chad'>Chad</option><option label='Chile' value='Chile'>Chile</option><option label='China' value='China'>China</option><option label='Christmas Island' value='Christmas Island'>Christmas Island</option><option label='Cocos (Keeling) Islands' value='Cocos (Keeling) Islands'>Cocos (Keeling) Islands</option><option label='Colombia' value='Colombia'>Colombia</option><option label='Comoros' value='Comoros'>Comoros</option><option label='Cook Islands' value='Cook Islands'>Cook Islands</option><option label='Costa Rica' value='Costa Rica'>Costa Rica</option><option label='Croatia' value='Croatia'>Croatia</option><option label='Cuba' value='Cuba'>Cuba</option><option label='Curaçao' value='Curaçao'>Curaçao</option><option label='Cyprus' value='Cyprus'>Cyprus</option><option label='Czech Republic' value='Czech Republic'>Czech Republic</option><option label='Côte d'Ivoire' value='Côte d'Ivoire'>Côte d'Ivoire</option><option label='Democratic People's Republic of Korea' value='Democratic People's Republic of Korea'>Democratic People's Republic of Korea</option><option label='Denmark' value='Denmark'>Denmark</option><option label='Djibouti' value='Djibouti'>Djibouti</option><option label='Dominica' value='Dominica'>Dominica</option><option label='Dominican Republic' value='Dominican Republic'>Dominican Republic</option><option label='Ecuador' value='Ecuador'>Ecuador</option><option label='Egypt' value='Egypt'>Egypt</option><option label='El Salvador' value='El Salvador'>El Salvador</option><option label='Equatorial Guinea' value='Equatorial Guinea'>Equatorial Guinea</option><option label='Eritrea' value='Eritrea'>Eritrea</option><option label='Estonia' value='Estonia'>Estonia</option><option label='Eswatini' value='Eswatini'>Eswatini</option><option label='Ethiopia' value='Ethiopia'>Ethiopia</option><option label='Falkland Islands' value='Falkland Islands'>Falkland Islands</option><option label='Faroe Islands' value='Faroe Islands'>Faroe Islands</option><option label='Federated States of Micronesia' value='Federated States of Micronesia'>Federated States of Micronesia</option><option label='Fiji' value='Fiji'>Fiji</option><option label='Finland' value='Finland'>Finland</option><option label='France' value='France'>France</option><option label='French Guiana' value='French Guiana'>French Guiana</option><option label='French Polynesia' value='French Polynesia'>French Polynesia</option><option label='French Southern Territories' value='French Southern Territories'>French Southern Territories</option><option label='Gabon' value='Gabon'>Gabon</option><option label='Gambia' value='Gambia'>Gambia</option><option label='Georgia' value='Georgia'>Georgia</option><option label='Germany' value='Germany'>Germany</option><option label='Ghana' value='Ghana'>Ghana</option><option label='Gibraltar' value='Gibraltar'>Gibraltar</option><option label='Greece' value='Greece'>Greece</option><option label='Greenland' value='Greenland'>Greenland</option><option label='Grenada' value='Grenada'>Grenada</option><option label='Guadeloupe' value='Guadeloupe'>Guadeloupe</option><option label='Guam' value='Guam'>Guam</option><option label='Guatemala' value='Guatemala'>Guatemala</option><option label='Guernsey' value='Guernsey'>Guernsey</option><option label='Guinea' value='Guinea'>Guinea</option><option label='Guinea-Bissau' value='Guinea-Bissau'>Guinea-Bissau</option><option label='Guyana' value='Guyana'>Guyana</option><option label='Haiti' value='Haiti'>Haiti</option><option label='Heard Island and McDonald Islands' value='Heard Island and McDonald Islands'>Heard Island and McDonald Islands</option><option label='Honduras' value='Honduras'>Honduras</option><option label='Hong Kong' value='Hong Kong'>Hong Kong</option><option label='Hungary' value='Hungary'>Hungary</option><option label='Iceland' value='Iceland'>Iceland</option><option label='India' value='India'>India</option><option label='Indonesia' value='Indonesia'>Indonesia</option><option label='Iraq' value='Iraq'>Iraq</option><option label='Ireland' value='Ireland'>Ireland</option><option label='Islamic Republic of Iran' value='Islamic Republic of Iran'>Islamic Republic of Iran</option><option label='Isle of Man' value='Isle of Man'>Isle of Man</option><option label='Israel' value='Israel'>Israel</option><option label='Italy' value='Italy'>Italy</option><option label='Jamaica' value='Jamaica'>Jamaica</option><option label='Japan' value='Japan'>Japan</option><option label='Jersey' value='Jersey'>Jersey</option><option label='Jordan' value='Jordan'>Jordan</option><option label='Kazakhstan' value='Kazakhstan'>Kazakhstan</option><option label='Kenya' value='Kenya'>Kenya</option><option label='Kiribati' value='Kiribati'>Kiribati</option><option label='Kosovo' value='Kosovo'>Kosovo</option><option label='Kuwait' value='Kuwait'>Kuwait</option><option label='Kyrgyzstan' value='Kyrgyzstan'>Kyrgyzstan</option><option label='Lao People's Democratic Republic' value='Lao People's Democratic Republic'>Lao People's Democratic Republic</option><option label='Latvia' value='Latvia'>Latvia</option><option label='Lebanon' value='Lebanon'>Lebanon</option><option label='Lesotho' value='Lesotho'>Lesotho</option><option label='Liberia' value='Liberia'>Liberia</option><option label='Libya' value='Libya'>Libya</option><option label='Liechtenstein' value='Liechtenstein'>Liechtenstein</option><option label='Lithuania' value='Lithuania'>Lithuania</option><option label='Luxembourg' value='Luxembourg'>Luxembourg</option><option label='Macao' value='Macao'>Macao</option><option label='Madagascar' value='Madagascar'>Madagascar</option><option label='Malawi' value='Malawi'>Malawi</option><option label='Malaysia' value='Malaysia'>Malaysia</option><option label='Maldives' value='Maldives'>Maldives</option><option label='Mali' value='Mali'>Mali</option><option label='Malta' value='Malta'>Malta</option><option label='Marshall Islands' value='Marshall Islands'>Marshall Islands</option><option label='Martinique' value='Martinique'>Martinique</option><option label='Mauritania' value='Mauritania'>Mauritania</option><option label='Mauritius' value='Mauritius'>Mauritius</option><option label='Mayotte' value='Mayotte'>Mayotte</option><option label='Mexico' value='Mexico'>Mexico</option><option label='Monaco' value='Monaco'>Monaco</option><option label='Mongolia' value='Mongolia'>Mongolia</option><option label='Montenegro' value='Montenegro'>Montenegro</option><option label='Montserrat' value='Montserrat'>Montserrat</option><option label='Morocco' value='Morocco'>Morocco</option><option label='Mozambique' value='Mozambique'>Mozambique</option><option label='Myanmar' value='Myanmar'>Myanmar</option><option label='Namibia' value='Namibia'>Namibia</option><option label='Nauru' value='Nauru'>Nauru</option><option label='Nepal' value='Nepal'>Nepal</option><option label='Netherlands' value='Netherlands'>Netherlands</option><option label='New Caledonia' value='New Caledonia'>New Caledonia</option><option label='New Zealand' value='New Zealand'>New Zealand</option><option label='Nicaragua' value='Nicaragua'>Nicaragua</option><option label='Niger' value='Niger'>Niger</option><option label='Nigeria' value='Nigeria'>Nigeria</option><option label='Niue' value='Niue'>Niue</option><option label='North Macedonia' value='North Macedonia'>North Macedonia</option><option label='Northern Mariana Islands' value='Northern Mariana Islands'>Northern Mariana Islands</option><option label='Norway' value='Norway'>Norway</option><option label='Occupied Palestinian Territory' value='Occupied Palestinian Territory'>Occupied Palestinian Territory</option><option label='Oman' value='Oman'>Oman</option><option label='Pakistan' value='Pakistan'>Pakistan</option><option label='Palau' value='Palau'>Palau</option><option label='Panama' value='Panama'>Panama</option><option label='Papua New Guinea' value='Papua New Guinea'>Papua New Guinea</option><option label='Paraguay' value='Paraguay'>Paraguay</option><option label='Peru' value='Peru'>Peru</option><option label='Philippines' value='Philippines'>Philippines</option><option label='Pitcairn' value='Pitcairn'>Pitcairn</option><option label='Poland' value='Poland'>Poland</option><option label='Portugal' value='Portugal'>Portugal</option><option label='Puerto Rico' value='Puerto Rico'>Puerto Rico</option><option label='Qatar' value='Qatar'>Qatar</option><option label='Republic of Korea' value='Republic of Korea'>Republic of Korea</option><option label='Republic of Moldova' value='Republic of Moldova'>Republic of Moldova</option><option label='Republic of the Congo' value='Republic of the Congo'>Republic of the Congo</option><option label='Reunion' value='Reunion'>Reunion</option><option label='Romania' value='Romania'>Romania</option><option label='Russian Federation' value='Russian Federation'>Russian Federation</option><option label='Rwanda' value='Rwanda'>Rwanda</option><option label='Saint Barthélemy' value='Saint Barthélemy'>Saint Barthélemy</option><option label='Saint Helena' value='Saint Helena'>Saint Helena</option><option label='Saint Kitts and Nevis' value='Saint Kitts and Nevis'>Saint Kitts and Nevis</option><option label='Saint Lucia' value='Saint Lucia'>Saint Lucia</option><option label='Saint Martin (French part)' value='Saint Martin (French part)'>Saint Martin (French part)</option><option label='Saint Vincent and the Grenadines' value='Saint Vincent and the Grenadines'>Saint Vincent and the Grenadines</option><option label='Saint-Pierre and Miquelon' value='Saint-Pierre and Miquelon'>Saint-Pierre and Miquelon</option><option label='Samoa' value='Samoa'>Samoa</option><option label='San Marino' value='San Marino'>San Marino</option><option label='Sao Tome and Principe' value='Sao Tome and Principe'>Sao Tome and Principe</option><option label='Saudi Arabia' value='Saudi Arabia'>Saudi Arabia</option><option label='Senegal' value='Senegal'>Senegal</option><option label='Serbia' value='Serbia'>Serbia</option><option label='Seychelles' value='Seychelles'>Seychelles</option><option label='Sierra Leone' value='Sierra Leone'>Sierra Leone</option><option label='Singapore' value='Singapore'>Singapore</option><option label='Sint Maarten (Dutch part)' value='Sint Maarten (Dutch part)'>Sint Maarten (Dutch part)</option><option label='Slovakia' value='Slovakia'>Slovakia</option><option label='Slovenia' value='Slovenia'>Slovenia</option><option label='Solomon Islands' value='Solomon Islands'>Solomon Islands</option><option label='Somalia' value='Somalia'>Somalia</option><option label='South Africa' value='South Africa'>South Africa</option><option label='South Georgia and the South Sandwich Islands' value='South Georgia and the South Sandwich Islands'>South Georgia and the South Sandwich Islands</option><option label='South Sudan' value='South Sudan'>South Sudan</option><option label='Spain' value='Spain'>Spain</option><option label='Sri Lanka' value='Sri Lanka'>Sri Lanka</option><option label='Sudan' value='Sudan'>Sudan</option><option label='Suriname' value='Suriname'>Suriname</option><option label='Svalbard and Jan Mayen' value='Svalbard and Jan Mayen'>Svalbard and Jan Mayen</option><option label='Sweden' value='Sweden'>Sweden</option><option label='Switzerland' value='Switzerland'>Switzerland</option><option label='Syrian Arabic Republic' value='Syrian Arabic Republic'>Syrian Arabic Republic</option><option label='Taiwan' value='Taiwan'>Taiwan</option><option label='Tajikistan' value='Tajikistan'>Tajikistan</option><option label='Tanzania' value='Tanzania'>Tanzania</option><option label='Thailand' value='Thailand'>Thailand</option><option label='The Democratic Republic Of The Congo' value='The Democratic Republic Of The Congo'>The Democratic Republic Of The Congo</option><option label='Timor-Leste' value='Timor-Leste'>Timor-Leste</option><option label='Togo' value='Togo'>Togo</option><option label='Tokelau' value='Tokelau'>Tokelau</option><option label='Tonga' value='Tonga'>Tonga</option><option label='Trinidad and Tobago' value='Trinidad and Tobago'>Trinidad and Tobago</option><option label='Tunisia' value='Tunisia'>Tunisia</option><option label='Turkey' value='Turkey'>Turkey</option><option label='Turkmenistan' value='Turkmenistan'>Turkmenistan</option><option label='Turks and Caicos Islands' value='Turks and Caicos Islands'>Turks and Caicos Islands</option><option label='Tuvalu' value='Tuvalu'>Tuvalu</option><option label='U.S. Virgin Islands' value='U.S. Virgin Islands'>U.S. Virgin Islands</option><option label='Uganda' value='Uganda'>Uganda</option><option label='Ukraine' value='Ukraine'>Ukraine</option><option label='United Arab Emirates (except DIFC and ADGM)' value='United Arab Emirates (except DIFC and ADGM)'>United Arab Emirates (except DIFC and ADGM)</option><option label='United Kingdom' value='United Kingdom'>United Kingdom</option><option label='United States' value='United States'>United States</option><option label='United States Minor Outlying Islands' value='United States Minor Outlying Islands'>United States Minor Outlying Islands</option><option label='Unknown' value='Unknown'>Unknown</option><option label='Uruguay' value='Uruguay'>Uruguay</option><option label='Uzbekistan' value='Uzbekistan'>Uzbekistan</option><option label='Vanuatu' value='Vanuatu'>Vanuatu</option><option label='Vatican City' value='Vatican City'>Vatican City</option><option label='Vatican City State' value='Vatican City State'>Vatican City State</option><option label='Venezuela' value='Venezuela'>Venezuela</option><option label='Vietnam' value='Vietnam'>Vietnam</option><option label='Wallis and Futuna' value='Wallis and Futuna'>Wallis and Futuna</option><option label='Western Sahara' value='Western Sahara'>Western Sahara</option><option label='Yemen' value='Yemen'>Yemen</option><option label='Zambia' value='Zambia'>Zambia</option><option label='Zimbabwe' value='Zimbabwe'>Zimbabwe</option><option label='Åland Islands' value='Åland Islands'>Åland Islands</option></select>";

$("#please_select_your_organisation_type-5").after(locationInput);

var a = {
  AF: "+93",
  AL: "+355",
  DZ: "+213",
  AS: "+1684",
  AD: "+376",
  AO: "+244",
  AI: "+1264",
  AG: "+1268",
  AR: "+54",
  AM: "+374",
  AW: "+297",
  AU: "+61",
  AT: "+43",
  AZ: "+994",
  BS: "+1242",
  BH: "+973",
  BD: "+880",
  BB: "+1246",
  BY: "+375",
  BE: "+32",
  BZ: "+501",
  BJ: "+229",
  BM: "+1441",
  BT: "+975",
  BO: "+591",
  BA: "+387",
  BW: "+267",
  BR: "+55",
  IO: "+246",
  VG: "+1284",
  BN: "+673",
  BG: "+359",
  BF: "+226",
  BI: "+257",
  KH: "+855",
  CM: "+237",
  CA: "+1",
  CV: "+238",
  BQ: "+599",
  KY: "+1345",
  CF: "+236",
  TD: "+235",
  CL: "+56",
  CN: "+86",
  CO: "+57",
  KM: "+269",
  CD: "+243",
  CG: "+242",
  CK: "+682",
  CR: "+506",
  CI: "+225",
  HR: "+385",
  CU: "+53",
  CW: "+599",
  CY: "+357",
  CZ: "+420",
  DK: "+45",
  DJ: "+253",
  DM: "+1767",
  DO: "+1",
  EC: "+593",
  EG: "+20",
  SV: "+503",
  GQ: "+240",
  ER: "+291",
  EE: "+372",
  ET: "+251",
  FK: "+500",
  FO: "+298",
  FJ: "+679",
  FI: "+358",
  FR: "+33",
  GF: "+594",
  PF: "+689",
  GA: "+241",
  GM: "+220",
  GE: "+995",
  DE: "+49",
  GH: "+233",
  GI: "+350",
  GR: "+30",
  GL: "+299",
  GD: "+1473",
  GP: "+590",
  GU: "+1671",
  GT: "+502",
  GN: "+224",
  GW: "+245",
  GY: "+592",
  HT: "+509",
  HN: "+504",
  HK: "+852",
  HU: "+36",
  IS: "+354",
  IN: "+91",
  ID: "+62",
  IR: "+98",
  IQ: "+964",
  IE: "+353",
  IL: "+972",
  IT: "+39",
  JM: "+1876",
  JP: "+81",
  JO: "+962",
  KZ: "+7",
  KE: "+254",
  KI: "+686",
  XK: "+383",
  KW: "+965",
  KG: "+996",
  LA: "+856",
  LV: "+371",
  LB: "+961",
  LS: "+266",
  LR: "+231",
  LY: "+218",
  LI: "+423",
  LT: "+370",
  LU: "+352",
  MO: "+853",
  MK: "+389",
  MG: "+261",
  MW: "+265",
  MY: "+60",
  MV: "+960",
  ML: "+223",
  MT: "+356",
  MH: "+692",
  MQ: "+596",
  MR: "+222",
  MU: "+230",
  MX: "+52",
  FM: "+691",
  MD: "+373",
  MC: "+377",
  MN: "+976",
  ME: "+382",
  MS: "+1664",
  MA: "+212",
  MZ: "+258",
  MM: "+95",
  NA: "+264",
  NR: "+674",
  NP: "+977",
  NL: "+31",
  NC: "+687",
  NZ: "+64",
  NI: "+505",
  NE: "+227",
  NG: "+234",
  NU: "+683",
  NF: "+672",
  KP: "+850",
  MP: "+1670",
  NO: "+47",
  OM: "+968",
  PK: "+92",
  PW: "+680",
  PS: "+970",
  PA: "+507",
  PG: "+675",
  PY: "+595",
  PE: "+51",
  PH: "+63",
  PL: "+48",
  PT: "+351",
  PR: "+1",
  QA: "+974",
  RE: "+262",
  RO: "+40",
  RU: "+7",
  RW: "+250",
  BL: "+590",
  SH: "+290",
  KN: "+1869",
  LC: "+1758",
  MF: "+590",
  PM: "+508",
  VC: "+1784",
  WS: "+685",
  SM: "+378",
  ST: "+239",
  SA: "+966",
  SN: "+221",
  RS: "+381",
  SC: "+248",
  SL: "+232",
  SG: "+65",
  SX: "+1721",
  SK: "+421",
  SI: "+386",
  SB: "+677",
  SO: "+252",
  ZA: "+27",
  KR: "+82",
  SS: "+211",
  ES: "+34",
  LK: "+94",
  SD: "+249",
  SR: "+597",
  SZ: "+268",
  SE: "+46",
  CH: "+41",
  SY: "+963",
  TW: "+886",
  TJ: "+992",
  TZ: "+255",
  TH: "+66",
  TL: "+670",
  TG: "+228",
  TK: "+690",
  TO: "+676",
  TT: "+1868",
  TN: "+216",
  TR: "+90",
  TM: "+993",
  TC: "+1649",
  TV: "+688",
  VI: "+1340",
  UG: "+256",
  UA: "+380",
  AE: "+971",
  GB: "+44",
  US: "+1",
  UY: "+598",
  UZ: "+998",
  VU: "+678",
  VA: "+39",
  VE: "+58",
  VN: "+84",
  WF: "+681",
  YE: "+967",
  ZM: "+260",
  ZW: "+263",
};

b;

$("#international-country-code-select-input").on("change", function () {
  var optionValue = $(this).val();
  if (optionValue in a) {
    b = a[optionValue];
    $("#phone").val(b + " ");
  }
});

$("#phone").on("keyup", function (e) {
  if (e.keyCode == 8) {
    var phoneValue = $(this).val();
    if (phoneValue != b) {
      $(this).val(b + " ");
    }
  }
});

$("#phone").on("keydown", function (e) {
  var phoneValueLength = $(this).val().length;
  if (this.selectionStart != phoneValueLength) {
    e.preventDefault();
    this.selectionStart = phoneValueLength;
    this.selectionEnd = phoneValueLength;
  }
});
