// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { renderReviews } from './js/render-reviews';

// const URL = 'https://portfolio-js.b.goit.study/api/reviews';
// const list = document.querySelector('.reviews-list');

// const fetchData = async () => {
//   try {
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error('Network response was not ok.');
//     }
//     const data = await response.json();
//     const markup = renderReviews(data);
//     if (!markup) {
//       console.log('Not found');
//       return;
//     }
//     list.insertAdjacentHTML('beforeend', markup);

//     const swiper = new Swiper('.swiper', {
//       modules: [Navigation, Pagination],
//       direction: 'horizontal',
//       loop: true,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// function initReviewsSection() {
//   fetchData();
// }

// // Запуск инициализации
// initReviewsSection();

// import { swiper } from "./js/reviews";

import { fetchData } from "./js/reviews";
fetchData();