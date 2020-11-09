const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector("body");
const nav = document.querySelector(".nav-links")

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("change");
});

window.addEventListener("scroll", ()=>{
   const navHeight = nav.getBoundingClientRect().height;
const scrollHeight = window.pageYOffset;
  if(scrollHeight > navHeight){
    nav.classList.add("nav-fixed");
  }else{
        nav.classList.remove("nav-fixed");

  }
})