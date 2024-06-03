const imagePaths = [
  {
    standartMob: '../img/My-projects-finacec-mob-@1x.jpg',
    retinaMob: '../img/My-projects-finacec-mob-@2x.jpg',
    standartTab: '../img/My-projects-finacec-tab-@1x.jpg',
    retinaTab: '../img/My-projects-finacec-tab@2x.jpg',
    standartDesk: '../img/My-projects-finacec-desck@1x.jpg',
    retinaDesk: '../img/My-projects-finacec-desck@2x.jpg',
    description: 'Wallet webservice',
    title: 'Wallet webservice',
  },
  {
    standartMob: '/img/My-projects-vegetables-mob-@1x.jpg',
    retinaMob: '/img/My-projects-vegetables-mob-@2x.jpg',
    standartTab: '/img/My-projects-vegetables-tab-@1x.jpg',
    retinaTab: '/img/My-projects-vegetables-tab-@2x.jpg',
    standartDesk: '/img/My-projects-vegetables-desck-@1x.jpg',
    retinaDesk: '/img/My-projects-vegetables-desck-@2x.jpg',
    description: 'Green harvest webservice',
    title: 'Green harvest webservice',
  },
  {
    standartMob: './img/My-projects-english-mob@1x.jpg',
    retinaMob: './img/My-projects-english-mob@2x.jpg',
    standartTab: './img/My-projects-english-tab@1x.jpg',
    retinaTab: './img/My-projects-english-tab@2x.jpg',
    standartDesk: './img/My-projects-english-desck@1x.jpg',
    retinaDesk: './img/My-projects-english-desck@2x.jpg',
    description: 'English Exellence webservice',
    title: 'English Exellence webservice',
  },
  {
    standartMob: './img/my-project-business@1x.jpg',
    retinaMob: './img/my-project-business@2x.jpg',
    standartTab: './img/my-project-business@1x.jpg',
    retinaTab: './img/my-project-business@2x.jpg',
    standartDesk: './img/my-project-business@1x.jpg',
    retinaDesk: './img/my-project-business@2x.jpg',
    description: 'Starlight studio landing page',
    title: 'starlight studio landing page',
  },
  {
    standartMob: './img/my-project-artisty@1x.jpg',
    retinaMob: './img/my-project-artisty@2x.jpg',
    standartTab: './img/my-project-artisty@1x.jpg',
    retinaTab: './img/my-project-artisty@2x.jpg',
    standartDesk: './img/my-project-artisty@1x.jpg',
    retinaDesk: './img/my-project-artisty@2x.jpg',
    description: 'Vyshyvanka vibes Landing Page',
    title: 'vyshyvanka vibes Landing Page',
  },
  {
    standartMob: './img/my-project-fresh@1x.jpg',
    retinaMob: './img/my-project-fresh@2x.jpg',
    standartTab: './img/my-project-fresh@1x.jpg',
    retinaTab: './img/my-project-fresh@2x.jpg',
    standartDesk: './img/my-project-fresh@1x.jpg',
    retinaDesk: './img/my-project-fresh@2x.jpg',
    description: 'Fruitbox online store',
    title: 'fruitbox online store',
  },
  {
    standartMob: './img/my-project-mimino@1x.jpg',
    retinaMob: './img/my-project-mimino@2x.jpg',
    standartTab: './img/my-project-mimino@1x.jpg',
    retinaTab: './img/my-project-mimino@2x.jpg',
    standartDesk: './img/my-project-mimino@1x.jpg',
    retinaDesk: './img/my-project-mimino@2x.jpg',
    description: 'Mimino website',
    title: 'mimino website',
  },
  {
    standartMob: './img/my-project-nature@1x.jpg',
    retinaMob: './img/my-project-nature@2x.jpg',
    standartTab: './img/my-project-nature@1x.jpg',
    retinaTab: './img/my-project-nature@2x.jpg',
    standartDesk: './img/my-project-nature@1x.jpg',
    retinaDesk: './img/my-project-nature@2x.jpg',
    description: 'CHEGO jewelry website',
    title: 'chego jewelry website',
  },
  {
    standartMob: './img/my-project-PowerPlus@1x.jpg',
    retinaMob: './img/my-project-PowerPlus@2x.jpg',
    standartTab: './img/my-project-PowerPlus@1x.jpg',
    retinaTab: './img/my-project-PowerPlus@2x.jpg',
    standartDesk: './img/my-project-PowerPlus@1x.jpg',
    retinaDesk: './img/my-project-PowerPlus@2x.jpg',
    description: 'Power pulse webservice',
    title: 'power pulse webservice ',
  },
  {
    standartMob: './img/my-project-stayHealhty@1x.jpg',
    retinaMob: './img/my-project-stayHealhty@2x.jpg',
    standartTab: './img/my-project-stayHealhty@1x.jpg',
    retinaTab: './img/my-project-stayHealhty@2x.jpg',
    standartDesk: './img/my-project-stayHealhty@1x.jpg',
    retinaDesk: './img/my-project-stayHealhty@2x.jpg',
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
        <use href="/img/sprite_icon_opt.svg#icon-Arrow_visit_up"></use>
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
  }
}
loadMoreBtn.addEventListener('click', addProjects);

addProjects();
