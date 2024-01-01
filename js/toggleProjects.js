'use strict';

const projectSection = document.querySelector('.section-projects');
const hideProjectBtn = document.querySelector('.hide-allProject-btn');
const displayProjectBtn = document.querySelector('.see-allProject-btn');
const projectCardContainer = document.querySelector('.all-project-cards');

const project1 = {
  name: 'Smart Glow',
  title: 'A stratup website',
  imgeUrl: 'img/projects/start-up.jpg',
  projectLink: 'https://smartglow-ayan.netlify.app/',
  description:
    'Discover Smart Glow: A stunningly designed website unveiling the future of smart lighting technology for a brighter tomorrow.',
};

const project2 = {
  name: 'Modern watch center',
  title: 'Watch shop website',
  imgeUrl: 'img/projects/modernwatch.jpg',
  projectLink: 'https://modernwatch.netlify.app/',
  description:
    'Modern Watch Center: Fusion of vintage charm and contemporary elegance, showcasing exceptional watch care and curated collections',
};

const projet3 = {
  name: 'Expence tracker application',
  title: 'Expense tracker',
  imgeUrl: 'img/projects/cashcare.jpg',
  projectLink: 'https://cashhcare.netlify.app/',
  description:
    'CashCare: this is a simple JavaScript application to track and manage daily expenses.',
};
const project4 = {
  name: 'Rock-Paper-Scissor game',
  title: 'Roc-Paper-Scissor',
  imgeUrl: 'img/projects/rps.jpg',
  projectLink: 'https://roc-paper-sci.netlify.app/',
  description:
    'Interactive Rock-Paper-Scissors game, test your luck and strategy in this classic JavaScript challenge!',
};

const allProjects = [project1, project2, projet3, project4];

const createCrads = function (data) {
  return data
    .map((project) => {
      return `
      <div class="project-cart">
      <img
        src="${project.imgeUrl}"
        alt="reference picture of ${project.name}"
        class="project-cart-img"
      />
      <div class="project-content">
        <h3 class="heading-tartiary">${project.title}</h3>
        <div class="project-description">
          ${project.description}
        </div>
        <a
          href="${project.projectLink}"
          class="btn-project btn-fill"
          target="_blank"
          >Take a Look</a
        >
      </div>
    </div>
    `;
    })
    .join('');
};
const clearCards = function () {
  projectCardContainer.innerHTML = '';
};
//  diplay projects
displayProjectBtn.addEventListener('click', function () {
  projectSection.classList.add('show-all-projects');
  const markup = createCrads(allProjects);
  projectCardContainer.insertAdjacentHTML('afterbegin', markup);
});

// hide projects
hideProjectBtn.addEventListener('click', function () {
  projectSection.classList.remove('show-all-projects');
  const tragedId = '#myproject';
  document.querySelector(tragedId).scrollIntoView({ behavior: 'smooth' });
  clearCards();
});
