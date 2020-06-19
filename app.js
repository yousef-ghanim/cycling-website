const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector("body");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("change");
});
