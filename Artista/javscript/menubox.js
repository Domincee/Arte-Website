const menuBtn = document.querySelector(".menu-btn");
const icon = menuBtn.querySelector('i');
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener('click', function() {
    // Add the 'active' class to the div when clicked
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('active');
    
   

});



const mediaQuery = window.matchMedia("(max-width: 880px)");
const menuBrger =menuBtn.querySelector('ri-menu-3-line');
const menuX =menuBtn.querySelector('ri-close-large-line');


function mediaQueryChange(event){
    if(event.matches) {
    }
    navbar.classList.remove('active');
    menuBtn.classList.remove('active');

}

mediaQuery.addEventListener("change", mediaQueryChange);
mediaQueryChange(mediaQuery);