function checkCurrencies() {
  var buttonLinks = document.getElementsByTagName("a");
  var paragraphCurrency = document.getElementsByTagName("p");

  var euMin = "€50,000";
  var euAum = "€2 billion";

  var usMin = "$125,000";
  var usAum = "$2 billion";

  var chMin = "CHF 50,000";
  var chAum = "CHF 2 billion";

  var ukMin = "£50,000";
  var ukAum = "£1.7 billion";

  var hkMin = "$60,000";
  var hkAum = "$2 billion";

  var sgMin = "SGD 80,000";
  var sgAum = "SGD 2.9 billion";

  var country = getCookie("country-based");

  if (country === "US") {
    for (var i = 0; i < paragraphCurrency.length; i++) {
      if (paragraphCurrency[i].innerHTML.indexOf(euMin) > -1) {
        paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
          euMin,
          usMin
        );
      }
      if (paragraphCurrency[i].innerHTML.indexOf(usAum) > -1) {
        paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
          euAum,
          usAum
        );
      }
    }
    for (var i = 0; i < buttonLinks.length; i++) {
      if (buttonLinks[i].href == "https://app.moonfare.com/") {
        buttonLinks[i].href = "https://us.moonfare.com/";
      }
      if (buttonLinks[i].href == "https://app.moonfare.com/registration") {
        buttonLinks[i].href = "https://us.moonfare.com/registration";
      }
    }
    document
      .getElementById("email-form")
      .setAttribute("action", "https://us.moonfare.com/registration");
  }
  if (country === "CH") {
    for (var i = 0; i < paragraphCurrency.length; i++) {
      if (paragraphCurrency[i].innerHTML.indexOf(chMin) > -1) {
        paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
          euMin,
          chMin
        );
      }
      if (paragraphCurrency[i].innerHTML.indexOf(euAum) > -1) {
        paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
          euAum,
          chAum
        );
      }
    }
  }
  if (country === "GB") {
    for (var i = 0; i < paragraphCurrency.length; i++) {
      if (paragraphCurrency[i].innerHTML.indexOf(ukMin) > -1) {
        paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
          euMin,
          ukMin
        );
      }
      if (paragraphCurrency[i].innerHTML.indexOf(ukAum) > -1) {
        paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
          euAum,
          ukAum
        );
      }
    }
  }
  if (country === "HK") {
    for (var i = 0; i < paragraphCurrency.length; i++) {
      if (paragraphCurrency[i].innerHTML.indexOf(euMin) > -1) {
        paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
          euMin,
          hkMin
        );
      }
      if (paragraphCurrency[i].innerHTML.indexOf(euAum) > -1) {
        paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
          euAum,
          hkAum
        );
      }
    }
  }
  if (country === "SG") {
    for (var i = 0; i < paragraphCurrency.length; i++) {
      if (paragraphCurrency[i].innerHTML.indexOf(euMin) > -1) {
        paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
          euMin,
          sgMin
        );
      }
      if (paragraphCurrency[i].innerHTML.indexOf(euAum) > -1) {
        paragraphCurrency[i].innerHTML = paragraphCurrency[i].innerHTML.replace(
          euAum,
          sgAum
        );
      }
    }
  }
}
checkCurrencies();
