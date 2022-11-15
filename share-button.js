function ShareButton() {
  $(".share-button").click(function () {
    $("#share-popup").fadeIn();
  });
  $("#share-popup-close").click(function () {
    $("#share-popup").fadeOut();
  });

  const whatsAppShare =
    "https://api.whatsapp.com/send?text=" + window.location.href;
  const linkShare = window.location.href;
  const copyShare =
    "Hello there! I found this article on " +
    window.location.href +
    " and thought you might like it. Check it out!";

  $(".share-option").click(function () {
    $(".share-option").removeClass("success");
    $(".share-success-msg").css("display", "none");
    $(this).addClass("success");
    $(this).find(".share-success-msg").css("display", "flex");

    if ($(this).data("share") == "whatsapp") {
      window.open(whatsAppShare, "_blank");
    }
    if ($(this).data("share") == "link") {
      navigator.clipboard.writeText(linkShare);
    }
    if ($(this).data("share") == "clipboard") {
      navigator.clipboard.writeText(copyShare);
    }
  });
}
