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
    title: 'Tonic',
    description: '',
    mobileImage: 'images/work_image1.png',
    desktopImage: 'images/nature.png',
    tech: ['HTML', 'CSS', 'Javascript', 'Ruby on rails'],
    liveVersion: '#',
    source: '#',
  },

  project2: {
    id: 2,
    title: 'Multi-Post Stories',
    description: '. Illo error impedit odit blanditiis ducimus ipsum, tenetur repudiandae aperiam repellat. Vero deserunt porro necessitatibus dolor adipisci, suscipit quo laborum beatae quam.',
    mobileImage: 'images/work_image2.png',
    desktopImage: 'images/professional_art.png',
    tech: ['HTML', 'CSS', 'Javascript', 'Ruby on rails'],
    liveVersion: '#',
    source: '#',
  },

  project3: {
    id: 3,
    title: 'Tonic',
    description: 'This is project 3',
    mobileImage: 'images/work_image3.png',
    desktopImage: 'images/avocode.png',
    tech: ['HTML', 'CSS', 'Javascript', 'Ruby on rails'],
    liveVersion: '#',
    source: '#',
  },

  project4: {
    id: 4,
    title: 'Multi-Post Stories',
    description: 'This is project 4',
    mobileImage: 'images/work_image4.png',
    desktopImage: 'images/availability.png',
    tech: ['HTML', 'CSS', 'Javascript', 'Ruby on rails'],
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

const addingDetailPopup = () => {
  // work1Section.classList.toggle('detail_popup_container');
  document.body.appendChild(detailPopupWindow);
  const cancelPopup = document.querySelector('#popup_cancel');
  cancelPopup.addEventListener('click', removingDetailPopup);
  cancelPopup.addEventListener('click', detailPopupBlur);
};

const poupConstructor = (project) => {
  detailPopupWindow.innerHTML = `<div class="popup_container">
  <div class="heading">
      <div class="title">
          ${projects[project].title}
      </div>
  
      <div id="popup_cancel">
      <img src="images/EnabledGray.png" alt="Cancel icon">
      </div>
  </div>
  
  <div class="description">
      <ul>
          <li class="lsNone"><a class="tdnone" href="">CANOPY</a></li>
          <li class="lsNone"><img src="images/Circle.png" alt=""></li>
          <li class="lsNone"><a class="tdnone" href="">Back End Dev</a></li>
          <li class="lsNone"><img src="images/Circle.png" alt=""></li>
          <li class="lsNone"><a class="tdnone" href="">2015</a></li>
      </ul>
  </div>
  <div class="project_image">
      <img class="img_transition mobile_show wd100" src="${projects[project].mobileImage}" alt="My Project 1">
      <img class="img_transition desktop_show width100 height100 pr20" src="${projects[project].desktopImage}"
          alt="My Project Nature">
  </div>
  <div class="project_detail_container">
      <div class="project_detail"> ${projects[project].description}</div>

      <div class="project_tech_container">
          <div class="project_tech">
              <ul>
                  <li class="lsNone"><a class="tdnone color396d" href="">${projects[project].tech[0]}</a></li>
                  <li class="lsNone"><a class="tdnone color396d" href="">${projects[project].tech[1]}</a></li>
                  <li class="lsNone"><a class="tdnone color396d" href="">${projects[project].tech[2]}</a></li>
              </ul>
          </div>
          <div class="see_live_source_btn">
              <button class="see_live dflx detail_popup_btn">
                  see live
                  <div class="live_icon">
                      <img src="images/IconGoLive.svg" alt="go live ">
                  </div>
              </button>
              <button class="see_source dflx detail_popup_btn">
                  see source
                  <div class="source_icon">
                      <img src="images/IconGitHub.png" alt="Go github for source">
                  </div>
              </button>
          </div>
      </div>
  </div>
  </div>`;
};

const projectSection = document.querySelectorAll('.work');
projectSection.forEach((element) => {
  element.addEventListener('click', () => {
    poupConstructor(element.id);
    addingDetailPopup();
    detailPopupBlur();
  });
});
