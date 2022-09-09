$("#email-form").submit(function (e) {
  var emailInput = document.getElementById("start-email-input");
  var emailInputValue = emailInput.value;
  e.preventDefault();
  console.log(emailInputValue);
});
