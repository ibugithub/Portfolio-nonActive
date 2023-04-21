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

// Constructing project Object.....
const projects = {
  project1: {
    id: 1,
    mobileTitle: 'Tonic',
    desktopTitle: 'Tonic',
    mobileProjectDescription: ['CANOPY', 'Back End Dev', '2015'],
    desktopProjectDescription: ['CANOPY', 'Back End Dev', '2015'],
    mobileProjectDetail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopProjectDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    mobileImage: 'images/work_image1.png',
    desktopImage: 'images/nature_popup.png',
    mobileTech: ['HTML', 'CSS', 'Javascript'],
    desktopTech: ['HTML', 'CSS', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },

  project2: {
    id: 2,
    mobileTitle: 'Tonic',
    desktopTitle: 'Multi-Post Stories',
    mobileProjectDescription: ['CANOPY', 'Back End Dev', '2015'],
    desktopProjectDescription: ['FACEBOOK', 'Full Stack Dev', '2015'],
    mobileProjectDetail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopProjectDetail: "Experimental content creation feature that allows users to add to an existing story over thecourse of a day without spamming their friends. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.",
    mobileImage: 'images/work_image2.png',
    desktopImage: 'images/professional_art.png',
    mobileTech: ['HTML', 'CSS', 'Javascript'],
    desktopTech: ['HTML', 'CSS', 'Javascript', 'Ruby on rails'],
    liveVersion: '#',
    source: '#',
  },

  project3: {
    id: 3,
    mobileTitle: 'Tonic',
    desktopTitle: 'Facebook 360',
    mobileProjectDescription: ['CANOPY', 'Back End Dev', '2015'],
    desktopProjectDescription: ['FACEBOOK', 'Full Stack Dev', '2015'],
    mobileProjectDetail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopProjectDetail: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.",
    mobileImage: 'images/work_image3.png',
    desktopImage: 'images/avocode.png',
    mobileTech: ['HTML', 'CSS', 'Javascript'],
    desktopTech: ['HTML', 'CSS', 'Javascript', 'Ruby on rails'],
    liveVersion: '#',
    source: '#',
  },

  project4: {
    id: 4,
    mobileTitle: 'Multi-Post Stories',
    desktopTitle: 'Uber Navigation',
    mobileProjectDescription: ['CANOPY', 'Back End Dev', '2015'],
    desktopProjectDescription: ['Uber', 'Lead Developer', '2018'],
    mobileProjectDetail: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopProjectDetail: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.",
    mobileImage: 'images/work_image4.png',
    desktopImage: 'images/availability.png',
    mobileTech: ['HTML', 'CSS', 'Javascript'],
    desktopTech: ['HTML', 'CSS', 'Javascript', 'Ruby on rails'],
    liveVersion: '#',
    source: '#',
  },
};

// Showing the detailPopup window.
const detailPopupWindow = document.createElement('div');
detailPopupWindow.id = 'detail_popup_window';
detailPopupWindow.classList.add('detail_popup_container');

const detailPopupBlur = () => {
  headline.classList.toggle('detail_popup_additional_blur');
  workSection.classList.toggle('detail_popup_additional_blur');
  aboutMyself.classList.toggle('detail_popup_additional_blur');
  contactSection.classList.toggle('detail_popup_additional_blur');
  header.classList.toggle('detail_popup_additional_blur');
  document.querySelector('#header_desktop').classList.toggle('detail_popup_additional_blur');
};

const removingDetailPopup = () => {
  document.body.removeChild(detailPopupWindow);
};

const addingDetailPopup = (id) => {
  document.body.appendChild(detailPopupWindow);
  if (id === 'project1') {
    document.querySelector('.tech_hide').classList.add('dnone');
  }
  const cancelPopup = document.querySelector('#popup_cancel');
  cancelPopup.addEventListener('click', removingDetailPopup);
  cancelPopup.addEventListener('click', detailPopupBlur);
};

const poupConstructor = (project) => {
  detailPopupWindow.innerHTML = `<div class="popup_container">
  <div class="heading">
      <div class="title mobilePopup_show"> ${projects[project].mobileTitle} </div>
      <div class="title desktopPopup_show"> ${projects[project].desktopTitle} </div>
      <div id="popup_cancel">
      <img src="images/EnabledGray.png" alt="Cancel icon">
      </div>
  </div>
  
  <div class="description">
      <ul class="mobilePopup_show" >
          <li class="lsNone"><a class="tdnone" href="">${projects[project].mobileProjectDescription[0]}</a></li>
          <li class="lsNone"><img src="images/Circle.png" alt=""></li>
          <li class="lsNone"><a class="tdnone" href="">${projects[project].mobileProjectDescription[1]}</a></li>
          <li class="lsNone"><img src="images/Circle.png" alt=""></li>
          <li class="lsNone"><a class="tdnone" href="">${projects[project].mobileProjectDescription[2]}</a></li>
      </ul>
      <ul class="desktopPopup_show" >
          <li class="lsNone"><a class="tdnone" href="">${projects[project].desktopProjectDescription[0]}</a></li>
          <li class="lsNone"><img src="images/Circle.png" alt=""></li>
          <li class="lsNone"><a class="tdnone" href="">${projects[project].desktopProjectDescription[1]}</a></li>
          <li class="lsNone"><img src="images/Circle.png" alt=""></li>
          <li class="lsNone"><a class="tdnone" href="">${projects[project].desktopProjectDescription[2]}</a></li>
  </ul>
  </div>
  <div class="project_image">
      <img class="img_transition mobilePopup_show wd100" src="${projects[project].mobileImage}" alt="My Project 1">
      <img class="img_transition desktopPopup_show width100 height100 pr20" src="${projects[project].desktopImage}"
          alt="My Project Nature">
  </div>
  <div class="project_detail_container pdt-50">
      <div class="project_detail mobilePopup_show"> ${projects[project].mobileProjectDetail}</div>
      <div class="project_detail desktopPopup_show"> ${projects[project].desktopProjectDetail}</div>

      <div class="project_tech_container">
          <div class="project_tech">
              <ul class="mobilePopup_show">
                  <li class="lsNone"><a class="tdnone color396d" href="">${projects[project].mobileTech[0]}</a></li>
                  <li class="lsNone"><a class="tdnone color396d" href="">${projects[project].mobileTech[1]}</a></li>
                  <li class="lsNone"><a class="tdnone color396d" href="">${projects[project].mobileTech[2]}</a></li>
              </ul>
              <ul class="desktopPopup_show flxwrp">
                  <li class="lsNone"><a class="tdnone color396d" href="">${projects[project].desktopTech[0]}</a></li>
                  <li class="lsNone"><a class="tdnone color396d" href="">${projects[project].desktopTech[1]}</a></li>
                  <li class="lsNone"><a class="tdnone color396d" href="">${projects[project].desktopTech[2]}</a></li>
                  <li class="tech_hide lsNone"><a class="tdnone color396d" href="">${projects[project].desktopTech[3]}</a></li>
          </ul>
          </div>
          <div class="see_live_source_btn">
          <a class="tdnone color396d" href="">
              <button class="see_live dflx detail_popup_btn">
                  see live
                  <div class="live_icon">
                      <img src="images/IconGoLive.svg" alt="go live ">
                  </div>
              </button>
            </a>
            <a class="tdnone color396d" href="">
              <button class="see_source dflx detail_popup_btn">
                  see source
                  <div class="source_icon">
                      <img src="images/IconGitHub.png" alt="Go github for source">
                  </div>
              </button>
              </a>
          </div>
      </div>
  </div>
  </div>`;
};

const projectSection = document.querySelectorAll('.work');
projectSection.forEach((element) => {
  element.addEventListener('click', () => {
    poupConstructor(element.id);
    addingDetailPopup(element.id);
    detailPopupBlur();
  });
});

// This section is for validating client-side-form-validation
const form = document.querySelector('form');
const email = document.querySelector('#email');
const error = document.querySelector('.error');
const emailRegExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

window.addEventListener('load', () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? 'lvalid' : 'invalid';
});

email.addEventListener('input', () => {
  if (email.value.length === 0) {
    email.className = 'invalid';
    error.textContent = 'Email field can not be blank';
    error.className = 'error active';
  } else if (!emailRegExp.test(email.value)) {
    email.className = 'invalid';
    error.textContent = 'Invalid email (email must be in lower case)';
    error.className = 'error active';
  } else {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error dnonenim';
  }
});

form.addEventListener('submit', (event) => {
  if (email.value.length === 0) {
    event.preventDefault();
    email.className = 'invalid';
    error.textContent = 'Email field can not be blank';
    error.className = 'error active';
  } else if (!emailRegExp.test(email.value)) {
    event.preventDefault();
    email.className = 'invalid';
    error.textContent = 'Invalid email (email must be in lower case)';
    error.className = 'error active';
  } else {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error dnonenim';
  }
});

document.querySelectorAll('.formli').forEach((value) => {
  value.addEventListener('input', () => {
    let user = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      msg: document.getElementById('msg').value,
    };
    user = JSON.stringify(user);
    localStorage.setItem('user', user);
  });
});

// This section is for preserving data in the web browser...
window.addEventListener('load', () => {
  const userValue = localStorage.getItem('user');
  const userObject = JSON.parse(userValue);
  document.getElementById('name').value = userObject.name;
  document.getElementById('email').value = userObject.email;
  document.getElementById('msg').value = userObject.msg;
});
