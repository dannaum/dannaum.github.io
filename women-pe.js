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
function animationsRender() {
  //if window > 991
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
    var aPlayed = false;
    a.play();
    $(window).focus(function () {
      if (!aPlayed) {
        a.restart();
        aPlayed = true;
      } else {
      }
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
    //on window scroll
    $(window).scroll(function () {
      //if window > 991
      if ($(window).width() > 991) {
        if ($(".fadeuppe").isInViewport()) {
          petitle.play();
        } else {
        }
      }
    });
  }
}
animationsRender();

$(".women-pe_video-slider-slide").each(function (index, element) {
  var index = $(this).index(".women-pe_video-slider-slide");
  $(this)
    .find(".women-pe_episode-tag-number")
    .text(index + 1);
});

var navbarHeight = $(".navbar-section").outerHeight();
var videoPlayerPos = $("#video-player").offset().top;
var video = $("#video-player").get(0);
video.setAttribute("controls", "controls");
var vidParentHeight = $(".women-in-pe_hero-img-wrapper").outerHeight();
vidParentHeight = vidParentHeight / 10;
$(".women-pe_play-video").css("padding-top", vidParentHeight);

$(".women-pe_single-video").click(function (e) {
  $(".women-pe_single-video").removeClass("active-video");
  $(this).addClass("active-video");
  $("#hero-pause").fadeOut(100);
  setTimeout(function () {
    $("#hero-play").fadeIn(100);
  }, 100);
  var index = $(this)
    .closest(".women-pe_video-slider-slide")
    .index(".women-pe_video-slider-slide");
  $(".women-pe_video-slide-nav").find(".w-slider-dot").eq(index).click();
  $(".women-pe_video-pause-icon").css("display", "none");
  $(".women-pe_video-play-icon").css("display", "flex");
  $(this).find(".women-pe_video-play-icon").css("display", "flex");
  var bg = $(this).css("background-image");
  bg = bg.replace("url(", "").replace(")", "").replace(/\"/gi, "");
  var videoLink = $(this).find(".video-link").text();
  $(video).attr("src", videoLink);
  $(video).attr("source", videoLink);
  $(video).attr("poster", bg);
  $("html, body").animate(
    {
      scrollTop: videoPlayerPos,
    },
    1000
  );
  e.stopPropagation();
});

$(".women-pe_video-play-icon").click(function (e) {
  $("#hero-pause").fadeOut(100);
  setTimeout(function () {
    $("#hero-play").fadeOut(100);
  }, 100);
  $(".women-pe_single-video").removeClass("active-video");
  $(this).closest(".women-pe_single-video").addClass("active-video");
  var index = $(this)
    .closest(".women-pe_video-slider-slide")
    .index(".women-pe_video-slider-slide");
  $(".women-pe_video-slide-nav").find(".w-slider-dot").eq(index).click();
  $(".women-pe_video-pause-icon").css("display", "none");
  $(".women-pe_video-play-icon").css("display", "flex");
  $(this).siblings(".women-pe_video-pause-icon").css("display", "flex");
  $(this).css("display", "none");
  var bg = $(this).closest(".women-pe_single-video").css("background-image");
  bg = bg.replace("url(", "").replace(")", "").replace(/\"/gi, "");
  var videoLink = $(this)
    .closest(".women-pe_single-video")
    .find(".video-link")
    .text();
  $(video).attr("src", videoLink);
  $(video).attr("source", videoLink);
  $(video).attr("poster", bg);
  video.play();
  $("html, body").animate(
    {
      scrollTop: videoPlayerPos,
    },
    1000
  );
  e.stopPropagation();
  return false;
});

$("#play-video-first").click(function () {
  if (video.paused) {
    var videoSource = $("#video-player").attr("source");
    $(".video-link").each(function (index, element) {
      if ($(this).text() == videoSource) {
        var thisText = $(this).text();
        $(this)
          .closest(".women-pe_single-video")
          .find(".women-pe_video-play-icon")
          .css("display", "none");
        $(this)
          .closest(".women-pe_single-video")
          .find(".women-pe_video-pause-icon")
          .css("display", "flex");
      }
    });
    $("#hero-pause").fadeOut(100);
    setTimeout(function () {
      $("#hero-play").fadeIn(100);
    }, 100);
    setTimeout(function () {
      $("#hero-play").fadeOut(100);
    }, 100);
    video.play();
  } else {
    var videoSource = $("#video-player").attr("source");
    $(".video-link").each(function (index, element) {
      if ($(this).text() == videoSource) {
        var thisText = $(this).text();
        $(this)
          .closest(".women-pe_single-video")
          .find(".women-pe_video-play-icon")
          .css("display", "flex");
        $(this)
          .closest(".women-pe_single-video")
          .find(".women-pe_video-pause-icon")
          .css("display", "none");
      }
    });
    video.pause();
    $("#hero-play").fadeOut(100);
    setTimeout(function () {
      $("#hero-pause").fadeIn(100);
    }, 100);
    setTimeout(function () {
      $("#hero-pause").fadeOut(100);
    }, 100);
  }
  return false;
});
/*
$("#video-player").click(function (e) {
  if (video.paused) {
    $("#play-video-first").css("display", "flex");
    $("#hero-play").fadeOut(100);
    setTimeout(function () {
      $("#hero-pause").fadeIn(100);
    }, 100);
    $("#hero-pause").css("display", "flex");
    $("#hero-play").css("display", "none");
    $("#play-video-first").fadeIn(150);
    setTimeout(function () {
      $("#play-video-first").fadeOut(150);
    }, 150);
    var videoSource = $("#video-player").attr("source");
    $(".video-link").each(function (index, element) {
      if ($(this).text() == videoSource) {
        var thisText = $(this).text();
        $(this)
          .closest(".women-pe_single-video")
          .find(".women-pe_video-play-icon")
          .css("display", "none");
        $(this)
          .closest(".women-pe_single-video")
          .find(".women-pe_video-pause-icon")
          .css("display", "flex");
      }
    });
  } else {
    $("#hero-pause").css("display", "none");
    $("#hero-play").css("display", "flex");
    $("#play-video-first").fadeIn(150);
    setTimeout(function () {
      $("#play-video-first").fadeOut(150);
    }, 150);
    var videoSource = $("#video-player").attr("source");
    $(".video-link").each(function (index, element) {
      if ($(this).text() == videoSource) {
        var thisText = $(this).text();
        $(this)
          .closest(".women-pe_single-video")
          .find(".women-pe_video-play-icon")
          .css("display", "flex");
        $(this)
          .closest(".women-pe_single-video")
          .find(".women-pe_video-pause-icon")
          .css("display", "none");
      }
    });
  }
  return false;
});
*/
var womenpeSingleSlide = Math.round(
  $(".women-pe_video-slider-slide").outerWidth()
);
var womenpeSlideN = $(".women-pe_video-slider-slide").length;
var womenPeSlideList = Math.round($(".womne-pe_cms-list").outerWidth());
var WomenpeTotalWidth = womenpeSlideN * womenpeSingleSlide - womenPeSlideList;
var dd = new Dragdealer("women-pe_drag-tool", {
  speed: 0.1,
  requestAnimationFrame: true,
  horizontal: true,
  vertical: false,
  animationCallback: function (x, y) {
    $(".womne-pe_cms-list").css("margin-left", -x * (WomenpeTotalWidth + 32));
  },
});

function dragDetector() {
  var womenpeContent = $(".women-pe_videos-content").outerWidth();
  var womenpeSingleSlide = Math.round(
    $(".women-pe_video-slider-slide").outerWidth()
  );
  var womenpeSlideN = $(".women-pe_video-slider-slide").length;
  var womenPeSlideList = Math.round($(".womne-pe_cms-list").outerWidth());
  var WomenpeTotalWidth = womenpeSlideN * womenpeSingleSlide - womenPeSlideList;
  var dd = new Dragdealer("women-pe_drag-tool", {
    speed: 0.1,
    requestAnimationFrame: true,
    horizontal: true,
    vertical: false,
    animationCallback: function (x, y) {
      $(".womne-pe_cms-list").css("margin-left", -x * (WomenpeTotalWidth + 32));
    },
  });

  //if womenpeContent < (womenpeSlideN * womenpeSingleSlide) {
  if (womenpeContent < womenpeSlideN * womenpeSingleSlide) {
    //women-pe_drag-component opacity 0
    $(".women-pe_drag-component").css("opacity", "1");
  } else {
    $(".women-pe_drag-component").css("opacity", "0");
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