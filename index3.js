// MObile menu Section...............
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

const blurToggle = () => {
  headline.classList.toggle('blur');
  workSection.classList.toggle('blur');
  aboutMyself.classList.toggle('blur');
  contactSection.classList.toggle('blur');
};
const navToggle = () => {
  header.classList.toggle('hamburger_afterClick');
  cancelIcon.classList.toggle('dblock');
  mobileHamburgerIcon.classList.toggle('dnone');
  logo.classList.toggle('dnone');
  blurToggle();
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

// .........Detail Popup window Selection..........

// Showing the detailPopup window.
const work1Section = document.querySelector('.work1');
const detailPopup = document.querySelector('#detail_popup_window');
const detailPopupBlur = () => {
  headline.classList.toggle('detail_popup_additional_blur');
  workSection.classList.toggle('detail_popup_additional_blur');
  aboutMyself.classList.toggle('detail_popup_additional_blur');
  contactSection.classList.toggle('detail_popup_additional_blur');
  header.classList.toggle('detail_popup_additional_blur');
  document.querySelector('#header_desktop').classList.toggle('detail_popup_additional_blur');
};

const detailPopupToggle = () => {
  detailPopup.classList.toggle('dflx_popup');
};
work1Section.addEventListener('click', detailPopupToggle);
work1Section.addEventListener('click', detailPopupBlur);

// Remove the popup window when cancel button click
const cancelPopup = document.querySelector('#popup_cancel');
cancelPopup.addEventListener('click', detailPopupToggle);
cancelPopup.addEventListener('click', detailPopupBlur);