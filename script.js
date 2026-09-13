const form = document.getElementById("loginForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    result.classList.remove("hidden");

});