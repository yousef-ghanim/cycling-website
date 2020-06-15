const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".banner-container");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("change");
});
