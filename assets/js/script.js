// JavaScript For Navbar

const bar_icon = document.getElementById("bar");
const cross_icon = document.getElementById("cross");
const nav_menu = document.querySelector(".nav-menu")
const body_overlay = document.getElementById("body-overlay");

bar_icon.addEventListener("click", ()=>{
    nav_menu.classList.add("active")
    body_overlay.classList.add("active")
})

cross_icon.addEventListener("click", ()=>{
    nav_menu.classList.remove("active")
    body_overlay.classList.remove("active")
})

// Hero Slider JavaScript

$(".hero-slider").slick({
    centerMode: true,
    centerPadding: "150px",
    slidesToShow: 1,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  });