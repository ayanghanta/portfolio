let about_item = Array.from(document.querySelectorAll(".about-item"));
const yearEl = document.querySelector(".YEAR");
// UPDATE YEAR
yearEl.textContent = new Date().getFullYear();

about_item.forEach((element) => {
  element.addEventListener("click", () => {
    about_item.forEach((element) => {
      element.classList.remove("see-about-item");
    });
    if (element.classList.contains("SkillBar")) {
      element.classList.add("see-about-item");
      document.querySelector(".skills-details").classList.remove("hide");
      document.querySelector(".contacts-details").classList.add("hide");
      document.querySelector(".education-details").classList.add("hide");
    } else if (element.classList.contains("EducationBar")) {
      element.classList.add("see-about-item");
      document.querySelector(".skills-details").classList.add("hide");
      document.querySelector(".contacts-details").classList.add("hide");
      document.querySelector(".education-details").classList.remove("hide");
    } else if (element.classList.contains("ContactBar")) {
      element.classList.add("see-about-item");
      document.querySelector(".skills-details").classList.add("hide");
      document.querySelector(".contacts-details").classList.remove("hide");
      document.querySelector(".education-details").classList.add("hide");
    }
  });
});

// STICKY WHATSAPP CHAT //

const heroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector(".whatsapp-chat").classList.remove("invisible");
      //for sticky navigation
      document.querySelector(".header").classList.add("stick-nav");
    }

    if (ent.isIntersecting === true) {
      document.querySelector(".whatsapp-chat").classList.add("invisible");
      //for sticky navigation
      document.querySelector(".header").classList.remove("stick-nav");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
obs.observe(heroEl);

// MOBILE NAVIGATION

let hambarger = document.querySelector(".icon-hambarger");
let cross = document.querySelector(".icon-cross");

hambarger.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("nav-open");
});
cross.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("nav-open");
});

// click the nav item and move nav remove
let all_nav_links = document.querySelectorAll(".nav-item");
let Array_nav = Array.from(all_nav_links);
Array_nav.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".header").classList.remove("nav-open");
  });
});

// ----- ------
