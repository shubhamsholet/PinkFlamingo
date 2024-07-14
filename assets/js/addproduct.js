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

////counter

const counterElement = document.getElementById("count");
console.log("counterElement", counterElement);
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton?.addEventListener("click", () => {
  counterElement.textContent = parseInt(counterElement.textContent) + 1;
});

decreaseButton?.addEventListener("click", () => {
  if (counterElement.textContent > 1) {
    counterElement.textContent = parseInt(counterElement.textContent) - 1;
  }
});

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
    769: {
      items: 3,
    },
    1025: {
      items: 4,
    },
  },
});

// // add to fav.

// var favlist =  document.querySelectorAll(".addProduct .card .icon")

// for(i=0; i<favlist.length ; i++){
//   if(favlist[i].classList.contains('text-danger')){
//     console.log('contain text-danger ')

//     // favlist[i].addEventListener("click" , ()=>{
//     //   favlist[i].classList.remove('text-danger')
//     // })
//   }

// }
