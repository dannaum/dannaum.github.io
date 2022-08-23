function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");

  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");

    /* Removing whitespace at the beginning of the cookie name
    and compare it with the given string */
    if (name == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
}

function checkCookie() {
  // Get cookie using our custom function
  var country = getCookie("country-based");
  if (country === 'US') {
    $('.is_us').css('display', 'block');
    $('.not_us').remove();
    //else if country === UK
  } else if (country === 'UK') {
    $('.is_uk').css('display', 'block');
    $('.is_us').remove();
  } else {
    $('.is_us').remove();
    $('.is_uk').remove();
    $('.not_us').css('display', 'block');
  }
}
window.onload = checkCookie;