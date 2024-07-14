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

// pagination

const cardsPerPage = 16; // Number of cards to show per page 
const dataContainer = document.getElementById('data-container'); 
const pagination = document.getElementById('pagination'); 
const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next'); 
const pageNumbers = document.getElementById('page-numbers'); 
const pageLinks = document.querySelectorAll('.page-link'); 
  
const cards =  
    Array.from(dataContainer.getElementsByClassName('card')); 
  
// Calculate the total number of pages 
const totalPages = Math.ceil(cards.length / cardsPerPage); 
let currentPage = 1; 
  
// Function to display cards for a specific page 
function displayPage(page) { 
    const startIndex = (page - 1) * cardsPerPage; 
    const endIndex = startIndex + cardsPerPage; 
    cards.forEach((card, index) => { 
        if (index >= startIndex && index < endIndex) { 
            card.style.display = 'block'; 
        } else { 
            card.style.display = 'none'; 
        } 
    }); 
    // setTimeout(() => {
    //     updatePagination()
    // }, 2000);
} 
  
// Function to update pagination buttons and page numbers 
function updatePagination() { 
    const pageNumbers = document.getElementById('page-numbers');
    console.log("pageNumbers",pageNumbers)
    // pageNumbers.textContent =  
    //     `Page ${currentPage} of ${totalPages}`; 
    prevButton.disabled = currentPage === 1; 
    nextButton.disabled = currentPage === totalPages; 
    if (currentPage === 1) {
      prevButton.classList.add('d-none');
    } else {
      prevButton.classList.remove('d-none');
    }
    pageLinks.forEach((link) => { 
        const page = parseInt(link.getAttribute('data-page')); 
        link.classList.toggle('active', page === currentPage); 

         window.scrollTo({
             top: 0,
             behavior: 'smooth'
         });
    }); 
} 



// Event listener for "Previous" button 
prevButton.addEventListener('click', () => { 
    if (currentPage > 1) { 
        currentPage--; 
        displayPage(currentPage); 
        updatePagination(); 
    } 
}); 
  
// Event listener for "Next" button 
nextButton.addEventListener('click', () => { 
    if (currentPage < totalPages) { 
        currentPage++; 
        displayPage(currentPage); 
        updatePagination(); 
    } 
}); 
  
// Event listener for page number buttons 
pageLinks.forEach((link) => { 
    link.addEventListener('click', (e) => { 
        e.preventDefault(); 
        const page = parseInt(link.getAttribute('data-page')); 
        if (page !== currentPage) { 
            currentPage = page; 
            displayPage(currentPage); 
            updatePagination(); 
        } 
    }); 
}); 
  
// Initial page load 
displayPage(currentPage); 
updatePagination();

//// navigation to another page 

var cardtoclick = document.querySelectorAll(".jarProduct .card-container .card")

// console.log(cardtoclick)

for(i=0; i< cardtoclick.length ; i++){

    cardtoclick[i].addEventListener("click" , ()=>{
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace("jars", "addproduct");
        window.location.href = newUrl;

        // var url = 'http://127.0.0.1:5500/products/addproduct.html'
        // window.location.href = url
    })
}

