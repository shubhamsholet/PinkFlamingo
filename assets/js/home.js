if(window.innerWidth > 992){
  var innerDropdown = document.querySelector(".innerDropdown");
  var innerDropdownBtn = document.querySelector(".innerDropdownBtn");

  innerDropdownBtn.addEventListener("mouseenter", () => {
    innerDropdown.classList.add("showInnerDropdownBtn");
  });

  innerDropdown.addEventListener("mouseleave", () => {
    innerDropdown.classList.remove("showInnerDropdownBtn");
  });

  innerDropdownBtn.addEventListener("mouseleave", () => {
    innerDropdown.classList.remove("showInnerDropdownBtn");
  });

  innerDropdown.addEventListener("mouseenter", () => {
    innerDropdown.classList.add("showInnerDropdownBtn");
  });

}

document.addEventListener("DOMContentLoaded", function () {
 
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarTogglerIcon = navbarToggler.querySelector("i");

  navbarToggler.addEventListener("click", function () {
    if (navbarTogglerIcon.classList.contains("fa-bars")) {
      navbarTogglerIcon.classList.remove("fa-bars");
      navbarTogglerIcon.classList.add("fa-times");
    } else {
      navbarTogglerIcon.classList.remove("fa-times");
      navbarTogglerIcon.classList.add("fa-bars");
    }
  });
});


if (window.innerWidth < 992){

  var innerDropdownBtn = document.querySelector('.innerDropdownBtn');
  var innerDropdown = document.querySelector('.innerDropdown');
  var productdropdown = document.querySelector('.productdropdown');
  innerDropdownBtn.addEventListener("click" , ()=>{
    console.log('innerDropdownBtn', innerDropdownBtn )
    productdropdown.classList.toggle('showinnerDropdown') 
    innerDropdown.classList.toggle('showinnerDropdown') 
  })

}

// ////

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: true,
  dotsEach: true,
  nav: true,
  autoplay: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsiveClass: true,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
