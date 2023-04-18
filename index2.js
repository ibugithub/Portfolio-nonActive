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
// const detailPopup = document.querySelector('#detail_popup_window');
const detailPopupBlur = () => {
  headline.classList.toggle('detail_popup_additional_blur');
  workSection.classList.toggle('detail_popup_additional_blur');
  aboutMyself.classList.toggle('detail_popup_additional_blur');
  contactSection.classList.toggle('detail_popup_additional_blur');
  header.classList.toggle('detail_popup_additional_blur');
  document.querySelector('#header_desktop').classList.toggle('detail_popup_additional_blur');
};

// Creating the popupWindow ....
const detailPopupWindow = document.createElement('div');
detailPopupWindow.id = 'detail_popup_window';
detailPopupWindow.classList.toggle('detail_popup_container');

// creating the div having popupContainer class.
const popupContainer = document.createElement('div');
popupContainer.classList.add('popup_container');
detailPopupWindow.appendChild(popupContainer);

// creating the child element of the div having popupContainer class
const heading = document.createElement('div');
heading.classList.add('heading');
const description = document.createElement('div');
description.classList.add('description');
const projectImage = document.createElement('div');
projectImage.classList.add('project_image');
const projectDetailContainer = document.createElement('div');
projectDetailContainer.classList.add('project_detail_container');

// Appending the child elements to the div having popupContainer class
popupContainer.appendChild(heading);
popupContainer.appendChild(description);
popupContainer.appendChild(projectImage);
popupContainer.appendChild(projectDetailContainer);

// creating the child element of the div having heading class
const title = document.createElement('div');
title.classList.add('title');
title.textContent = 'Tonic';

const popupCancel = document.createElement('div');
popupCancel.classList.add('popup_cancel');
popupCancel.innerHTML = '<img src="images/EnabledGray.png" alt="Cancel icon">';

// Appending the child elements to the div having heading class
heading.appendChild(title);
heading.appendChild(popupCancel);

// creating the child element of the div having description class
const descriptionUl = document.createElement('ul');
let descriptionLi = document.createElement('li');
descriptionLi.classList.add('lsNone');
descriptionLi.innerHTML = '<a class="tdnone" href="">CANOPY</a>';
descriptionUl.appendChild(descriptionLi);

descriptionLi = document.createElement('li');
descriptionLi.classList.add('lsNone');
descriptionLi.innerHTML = '<img src="images/Circle.png" alt="">';
descriptionUl.appendChild(descriptionLi);

descriptionLi = document.createElement('li');
descriptionLi.classList.add('lsNone');
descriptionLi.innerHTML = '<a class="tdnone" href="">Back End Dev</a>';
descriptionUl.appendChild(descriptionLi);

descriptionLi = document.createElement('li');
descriptionLi.classList.add('lsNone');
descriptionLi.innerHTML = '<img src="images/Circle.png" alt="">';
descriptionUl.appendChild(descriptionLi);

descriptionLi = document.createElement('li');
descriptionLi.classList.add('lsNone');
descriptionLi.innerHTML = '<a class="tdnone" href="">2015</a>';
descriptionUl.appendChild(descriptionLi);

// Appending the ul child elements to the div having description class
description.appendChild(descriptionUl);

// creating the child element of the div having projectImage class and appending using innerhtml
projectImage.innerHTML = '<img class="img_transition mobile_show wd100" src="images/work_image1.png" alt="My Project 1"> <img class="img_transition desktop_show width100 height100 pr20" src="images/nature.png" alt="My Project Nature">';

// creating the child element of the div having project_detail_container class
const projectDetail = document.createElement('div');
projectDetail.classList.add('project_detail');
projectDetail.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";

const projectTechContainer = document.createElement('div');
projectTechContainer.classList.add('project_tech_container');

// Appending the ul child elements to the div having project_detail_container class
projectDetailContainer.appendChild(projectDetail);
projectDetailContainer.appendChild(projectTechContainer);

// creating the child element of the div having project_tech_container class
const projectTech = document.createElement('div');
projectTech.classList.add('project_tech');
const techUl = document.createElement('ul');
let techLi = document.createElement('li');
techLi.classList.add('lsNone');
techLi.innerHTML = '<a class="tdnone color396d" href="">HTML</a>';
techUl.appendChild(techLi);

techLi = document.createElement('li');
techLi.classList.add('lsNone');
techLi.innerHTML = '<a class="tdnone color396d" href="">CSS</a>';
techUl.appendChild(techLi);

techLi = document.createElement('li');
techLi.classList.add('lsNone');
techLi.innerHTML = '<a class="tdnone color396d" href="">JAVASCRIPT</a>';
techUl.appendChild(techLi);
projectTech.appendChild(techUl);

// Append the projectTEch to the div having project_tech_container class
projectTechContainer.appendChild(projectTech);

// creating the child element of the div having class see_live_source_btn
const SeeLiveSource = document.createElement('dive');
SeeLiveSource.classList.add('see_live_source_btn');

const liveButton = document.createElement('button');
liveButton.classList.add('see_live', 'dflx', 'detail_popup_btn');
const liveIcon = document.createElement('div');
liveIcon.classList.add('live_icon');
liveIcon.innerHTML = '<img src="images/IconGoLive.svg" alt="go live ">';
liveButton.textContent = 'see live';
liveButton.appendChild(liveIcon);

const sourceButton = document.createElement('button');
sourceButton.classList.add('see_source', 'dflx', 'detail_popup_btn');
const sourceIcon = document.createElement('div');
sourceIcon.classList.add('source_icon');
sourceIcon.innerHTML = '<img src="images/IconGitHub.png" alt="Go github for source">';
sourceButton.textContent = 'see source';
sourceButton.appendChild(sourceIcon);

SeeLiveSource.appendChild(liveButton);
SeeLiveSource.appendChild(sourceButton);
projectTechContainer.appendChild(SeeLiveSource);

const detailPopupToggle = () => {
  // detailPopup.classList.toggle('dflx_popup');
  document.body.appendChild(detailPopupWindow);
};
work1Section.addEventListener('click', detailPopupToggle);
work1Section.addEventListener('click', detailPopupBlur);

// Remove the popup window when cancel button click
// const cancelPopup = document.querySelector('.popup_cancel');
// cancelPopup.addEventListener('click', detailPopupToggle);
// cancelPopup.addEventListener('click', detailPopupBlur);

const detailPopupRemove = () => {
  document.body.removeChild(detailPopupWindow);
};
popupCancel.addEventListener('click', detailPopupRemove);
popupCancel.addEventListener('click', detailPopupBlur);

const html = ` <!-- <div id="detail_popup_window" class="detail_popup_container">
<div class="popup_container">
    <div class="heading">
        <div class="title">
            Tonic
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
        <img class="img_transition mobile_show wd100" src="images/work_image1.png" alt="My Project 1">
        <img class="img_transition desktop_show width100 height100 pr20" src="images/nature.png"
            alt="My Project Nature">
    </div>
    <div class="project_detail_container">
        <div class="project_detail">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap
            into electronic typesetting, remaining essent
        </div>
        <div class="project_tech_container">
            <div class="project_tech">
                <ul>
                    <li class="lsNone"><a class="tdnone color396d" href="">HTML</a></li>
                    <li class="lsNone"><a class="tdnone color396d" href="">CSS</a></li>
                    <li class="lsNone"><a class="tdnone color396d" href="">JavaScript</a></li>
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
</div>
</div> -->
`