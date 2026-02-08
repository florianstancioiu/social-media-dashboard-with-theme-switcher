const $toggle = document.querySelector(".dark-mode .toggle");
const $body = document.querySelector("body");

$toggle.addEventListener("click", function (event) {
  event.preventDefault();

  const $target = event.target;

  $target.classList.toggle("active");
  $body.classList.toggle("dark");
});
