'use strict';
// Tabt Component
const tabContainer = document.querySelector('.about-items');
const tabs = document.querySelectorAll('.about-item');
const contents = document.querySelectorAll('.about-content');
const navEl = document.querySelector('.section-nav');

tabContainer.addEventListener('click', function (e) {
  const clickedBtn = e.target.closest('.about-item');
  if (!clickedBtn) return;

  //hide form the page
  tabs.forEach((tab) => tab.classList.remove('see-about-item'));
  contents.forEach((content) => content.classList.add('hide'));
  //display in page
  clickedBtn.classList.add('see-about-item');
  document
    .querySelector(`.about-content--${clickedBtn.dataset.tab}`)
    .classList.remove('hide');
});

// STICKY MOBILE NAVIGATION & WHATSAPP CHAT //

const heroEl = document.querySelector('.section-hero');
const navHeight = navEl.getBoundingClientRect().height;
const AddSticky = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    document.querySelector('.header').classList.add('stick-nav');
    document.querySelector('.whatsapp-chat').classList.remove('invisible');
  } else {
    document.querySelector('.header').classList.remove('stick-nav');
    document.querySelector('.whatsapp-chat').classList.add('invisible');
  }
};
const heroObserver = new IntersectionObserver(AddSticky, {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,
});

heroObserver.observe(heroEl);

// MOBILE NAVIGATION

let hambarger = document.querySelector('.icon-hambarger');
let cross = document.querySelector('.icon-cross');

hambarger.addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('nav-open');
});
cross.addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('nav-open');
});

// click the nav item and move nav remove
let all_nav_links = document.querySelectorAll('.nav-item');
let Array_nav = Array.from(all_nav_links);
Array_nav.forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.header').classList.remove('nav-open');
  });
});

// ----- ------

// smooth navigation in jS
document.querySelector('.nav-items').addEventListener('click', function (e) {
  e.preventDefault();
  const tragedId = e.target.getAttribute('href');
  document.querySelector(tragedId).scrollIntoView({ behavior: 'smooth' });
});
