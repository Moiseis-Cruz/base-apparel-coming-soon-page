const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formControl = document.querySelector(".form-control");

  let email = document.getElementById("email");

  let emailValue = email.value.trim();

  if (emailValue === "") {
    // formControl.classList.remove("enabled")
    formControl.classList.add("invalid");
  } else {
    formControl.classList.remove("invalid");
    // formControl.classList.add("enabled")
  }
});