const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {

  const aboutMenu = document.querySelector('#about-page');
  const serviceMenu = document.querySelector('#service-page');
  const blogMenu = document.querySelector('#blog-page');
  const contactMenu = document.querySelector('#contact-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);


};



//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


let titleLine = document.getElementById("titleLine");


titleLine.innerText = "Increase your yield \n with Farmicon app";
if (window.outerWidth >= 1440) {
}

