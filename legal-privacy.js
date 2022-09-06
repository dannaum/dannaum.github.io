//on page load
$(document).ready(function () {
  if ($(window).width() <= 991) {
    $(".legal-dt").on("click", function () {
      $(".legal-tabs_menu").toggle();
    });
    $(".legal-tab-link").on("click", function () {
      $(".legal-tabs_menu").toggle();
    });
  }

  $(".legal-tab-link").on("click", function () {
    var tab_link_text = $(this).text();
    $(this)
      .closest(".legal-tabs")
      .siblings(".legal-dd")
      .find(".hs6")
      .text(tab_link_text);
  });

  $("#btnDataCollection").on("click", function () {
    setTimeout(function () {
      $(".dDsLok").each(function () {
        if ($(this).find(".sc-crXcEl").length > 0) {
          $(this).addClass("opened-modal");
          $("body").css("overflow", "hidden");
        }
      });
    }, 10);
  });

  $("#preferencesBtn").click(function () {
    setTimeout(function () {
      $(".dDsLok").each(function () {
        if ($(this).find(".sc-crXcEl").length > 0) {
          $(this).addClass("opened-modal");
          $("body").css("overflow", "hidden");
        }
      });
    }, 10);
  });
});
$(document).on("click", ".sc-iqcoie", function () {
  $("body").css("overflow", "visible");
});

//on click of ".sc-kDDrLX FyzBU"
$(document).on("click", ".sc-kDDrLX.FyzBU", function () {
  //if ".opened-modal" doesnt exist
  if (!$(".opened-modal").length) {
    //body overflow visible
    $("body").css("overflow", "visible");
  }
});

//on click of ".sc-hAZoDl"
$(document).on("click", ".sc-hAZoDl", function () {
  //if ".opened-modal" doesnt exist
  if (!$(".opened-modal").length) {
    //body overflow visible
    $("body").css("overflow", "visible");
  }
});
