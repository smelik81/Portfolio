import finacecMobStandart from '../img/My-projects-finacec-mob-@1x.jpg';
import finacecMobRetina from '../img/My-projects-finacec-mob-@2x.jpg';
import finacecTabStandart from '../img/My-projects-finacec-tab-@1x.jpg';
import finacecTabRetina from '../img/My-projects-finacec-tab@2x.jpg';
import finacecDeskStandart from '../img/My-projects-finacec-desck@1x.jpg';
import finacecDeskRetina from '../img/My-projects-finacec-desck@2x.jpg';

import vegetablesMobStandart from '../img/My-projects-vegetables-mob-@1x.jpg';
import vegetablesMobRetina from '../img/My-projects-vegetables-mob-@2x.jpg';
import vegetablesTabStandart from '../img/My-projects-vegetables-tab-@1x.jpg';
import vegetablesTabRetina from '../img/My-projects-vegetables-tab-@2x.jpg';
import vegetablesDeskStandart from '../img/My-projects-vegetables-desck-@1x.jpg';
import vegetablesDeskRetina from '../img/My-projects-vegetables-desck-@2x.jpg';

import englishMobStandart from '../img/My-projects-english-mob@1x.jpg';
import englishMobRetina from '../img/My-projects-english-mob@2x.jpg';
import englishTabStandart from '../img/My-projects-english-tab@1x.jpg';
import englishTabRetina from '../img/My-projects-english-tab@2x.jpg';
import englishDeskStandart from '../img/My-projects-english-desck@1x.jpg';
import englishDeskRetina from '../img/My-projects-english-desck@2x.jpg';

import businessStandart from '../img/my-project-business@1x.jpg';
import businessRetina from '../img/my-project-business@2x.jpg';

import artistyStandart from '../img/my-project-artisty@1x.jpg';
import artistyRetina from '../img/my-project-artisty@2x.jpg';

import freshStandart from '../img/my-project-fresh@1x.jpg';
import freshRetina from '../img/my-project-fresh@2x.jpg';

import miminoStandart from '../img/my-project-mimino@1x.jpg';
import miminoRetina from '../img/my-project-mimino@2x.jpg';

import natureStandart from '../img/my-project-nature@1x.jpg';
import natureRetina from '../img/my-project-nature@2x.jpg';

import powerPlusStandart from '../img/my-project-PowerPlus@1x.jpg';
import powerPlusRetina from '../img/my-project-PowerPlus@2x.jpg';

import stayHealhtyStandart from '../img/my-project-stayHealhty@1x.jpg';
import stayHealhtyRetina from '../img/my-project-stayHealhty@2x.jpg';

import iconArrow from '../img/sprite_icon_opt.svg';

const imagePaths = [
  {
    standartMob: finacecMobStandart,
    retinaMob: finacecMobRetina,
    standartTab: finacecTabStandart,
    retinaTab: finacecTabRetina,
    standartDesk: finacecDeskStandart,
    retinaDesk: finacecDeskRetina,
    description: 'Wallet webservice',
    title: 'Wallet webservice',
  },
  {
    standartMob: vegetablesMobStandart,
    retinaMob: vegetablesMobRetina,
    standartTab: vegetablesTabStandart,
    retinaTab: vegetablesTabRetina,
    standartDesk: vegetablesDeskStandart,
    retinaDesk: vegetablesDeskRetina,
    description: 'Green harvest webservice',
    title: 'Green harvest webservice',
  },
  {
    standartMob: englishMobStandart,
    retinaMob: englishMobRetina,
    standartTab: englishTabStandart,
    retinaTab: englishTabRetina,
    standartDesk: englishDeskStandart,
    retinaDesk: englishDeskRetina,
    description: 'English Exellence webservice',
    title: 'English Exellence webservice',
  },
  {
    standartMob: businessStandart,
    retinaMob: businessRetina,
    standartTab: businessStandart,
    retinaTab: businessRetina,
    standartDesk: businessStandart,
    retinaDesk: businessRetina,
    description: 'Starlight studio landing page',
    title: 'starlight studio landing page',
  },
  {
    standartMob: artistyStandart,
    retinaMob: artistyRetina,
    standartTab: artistyStandart,
    retinaTab: artistyRetina,
    standartDesk: artistyStandart,
    retinaDesk: artistyRetina,
    description: 'Vyshyvanka vibes Landing Page',
    title: 'vyshyvanka vibes Landing Page',
  },
  {
    standartMob: freshStandart,
    retinaMob: freshRetina,
    standartTab: freshStandart,
    retinaTab: freshRetina,
    standartDesk: freshStandart,
    retinaDesk: freshRetina,
    description: 'Fruitbox online store',
    title: 'fruitbox online store',
  },
  {
    standartMob: miminoStandart,
    retinaMob: miminoRetina,
    standartTab: miminoStandart,
    retinaTab: miminoRetina,
    standartDesk: miminoStandart,
    retinaDesk: miminoRetina,
    description: 'Mimino website',
    title: 'mimino website',
  },
  {
    standartMob: natureStandart,
    retinaMob: natureRetina,
    standartTab: natureStandart,
    retinaTab: natureRetina,
    standartDesk: natureStandart,
    retinaDesk: natureRetina,
    description: 'CHEGO jewelry website',
    title: 'chego jewelry website',
  },
  {
    standartMob: powerPlusStandart,
    retinaMob: powerPlusRetina,
    standartTab: powerPlusStandart,
    retinaTab: powerPlusRetina,
    standartDesk: powerPlusStandart,
    retinaDesk: powerPlusRetina,
    description: 'Power pulse webservice',
    title: 'power pulse webservice ',
  },
  {
    standartMob: stayHealhtyStandart,
    retinaMob: stayHealhtyRetina,
    standartTab: stayHealhtyStandart,
    retinaTab: stayHealhtyRetina,
    standartDesk: stayHealhtyStandart,
    retinaDesk: stayHealhtyRetina,
    description: 'Energy flow webservice ',
    title: 'energy flow webservice ',
  },
];

const visitBtn = document.querySelector('.my-project-item-btn-visit');
const projectsContainer = document.querySelector('.js-my-project-list');
const loadMoreBtn = document.querySelector('.js-my-project-btn-load-more');
const screenWidth = screen.availWidth;
let currentIndex = 0;

const adaptivePicture = imagePaths.map(
  ({
    standartMob,
    retinaMob,
    standartTab,
    retinaTab,
    standartDesk,
    retinaDesk,
    title,
    description,
    technologyStack = 'React, JavaScript, Node JS, Git',
  }) => {
    const src =
      window.devicePixelRatio < 2
        ? screenWidth < 768
          ? standartMob
          : screenWidth >= 768 && screenWidth < 1280
          ? standartTab
          : standartDesk
        : screenWidth < 768
        ? retinaMob
        : screenWidth >= 768 && screenWidth < 1280
        ? retinaTab
        : retinaDesk;

    return `
      <li class="my-project-item">
        <a class="my-project-link" href="${src}">
          <img class="my-project-image" src="${src}" alt="${description}"  width="320" height="194">
          </a>
          <p class="my-project-tech">${technologyStack}</p>
         <div class="my-project-div" > <h3 class="my-project-item-title">${title}</h3>
          </svg>
      <button onclick="window.open('https://github.com/smelik81/teamproject-js-08', '_blank')" class="my-project-item-btn-visit">VISIT
    <svg width="18" height="18" class="my-project-item-btn-visit-svg">
        <use href="${iconArrow}#icon-Arrow_visit_up"></use>
</button></div>
         </li>`;
  }
);
function addProjects() {
  const projectsToAdd = adaptivePicture.slice(currentIndex, currentIndex + 3);
  currentIndex += 3;

  projectsToAdd.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.textContent = project.name;

    projectsContainer.appendChild(projectElement);
  });

  const nodesToRemove = ['TEXT', 'DIV'];

  for (let i = projectsContainer.childNodes.length - 1; i >= 0; i--) {
    const childNode = projectsContainer.childNodes[i];
    if (nodesToRemove.includes(childNode.nodeName)) {
      projectsContainer.removeChild(childNode);
    }
  }
  projectsToAdd.forEach(project => {
    projectsContainer.insertAdjacentHTML('beforeend', project);
  });
  if (currentIndex >= adaptivePicture.length) {
    loadMoreBtn.style.display = 'none';

    loadMoreBtn.removeEventListener('click', smoothScroll);
  }
}

function smoothScroll() {
  loadMoreBtn.scrollIntoView({ behavior: 'smooth' });
}

loadMoreBtn.addEventListener('click', smoothScroll);
loadMoreBtn.addEventListener('click', addProjects);
addProjects();
