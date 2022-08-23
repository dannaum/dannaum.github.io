var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  if (links[i].href == "https://app.moonfare.com/") {
    links[i].href = "https://us.moonfare.com/";
  }
  if (links[i].href == "https://app.moonfare.com/registration") {
    links[i].href = "https://us.moonfare.com/registration";
  }
}