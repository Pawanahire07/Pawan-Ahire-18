
function toggleMenu(event) {
  console.log("toggleMenu");
  let nav = document.querySelector(".header_nav");
  nav.classList.toggle("header_nav--active");
}

 
window.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  
  let filled = document.querySelectorAll(".skill-filled");

  filled.forEach(function (bar) {
    let width = bar.getAttribute("data-percent");
    bar.style.width = `${width}%`;
  });
  
  jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.2,
  });
   
 let menuButton = document.querySelector(".header_button");
  menuButton.addEventListener("click", toggleMenu);
});

function toggleNav(event) {
  let bar = document.querySelector(".header_bar");
  if (window.pageYOffset >40) {
    bar.classList.add("scroll-down");
  } else {
    bar.classList.remove("scroll-down");
  }
}

window.addEventListener("scroll", toggleNav);
 