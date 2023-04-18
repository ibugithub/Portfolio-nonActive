const mobileHamburgerIcon = document.getElementById('mobile_hamburger_icon');
const cancelIcon = document.querySelector('#cancel_icon');
const cancelIconContainer = document.querySelector('.cancel_icon_container');
const header = document.querySelector('#hamburger_afterClick');
const headline = document.querySelector('.headline');
const logo = document.querySelector('.logo');
const workSection = document.querySelector('.work_section');
const aboutMyself = document.querySelector('.about_myself');
const contactSection = document.querySelector('.contact_section');
const portfolioMenu = document.querySelector('#portfolio_menu');
const aboutMenu = document.querySelector('#about_menu');
const contactMenu = document.querySelector('#contact_menu');

const navToggle = () => {
  header.classList.toggle('hamburger_afterClick');
  cancelIcon.classList.toggle('dblock');
  mobileHamburgerIcon.classList.toggle('dnone');
  headline.classList.toggle('blur');
  workSection.classList.toggle('blur');
  aboutMyself.classList.toggle('blur');
  contactSection.classList.toggle('blur');
  logo.classList.toggle('dnone');
};

const scrollView = (id) => {
  const element = document.querySelector(id);
  element.scrollIntoView();
};

mobileHamburgerIcon.addEventListener('click', navToggle);
cancelIconContainer.addEventListener('click', navToggle);

portfolioMenu.addEventListener('click', navToggle);
portfolioMenu.addEventListener('click', () => {
  scrollView('#portfolio_section');
});

aboutMenu.addEventListener('click', navToggle);
aboutMenu.addEventListener('click', () => {
  scrollView('#about_section');
});

contactMenu.addEventListener('click', navToggle);
contactMenu.addEventListener('click', () => {
  scrollView('#contact_section');
});