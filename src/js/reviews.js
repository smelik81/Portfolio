import Swiper from 'swiper';
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

import { renderReviews } from './render-reviews';

import axios from "axios";

const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('.reviews-list');

export const fetchData = async () => {
    try {
        const response = await axios.get(URL);
        const data = response.data;

        if (data.length === 0) {
            list.innerHTML = "<p>Not found</p>";
            return;
        }

        const markup = renderReviews(data);
        list.insertAdjacentHTML('beforeend', markup);

        const swiper = new Swiper('.swiper', {
     
            modules: [Navigation, Pagination, A11y, Keyboard],
            direction: 'horizontal',
            loop: false,

            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
  

            //    Navigation arrows
            navigation: {
                
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                
                360: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                }
                }
            });
         function updateNavigationState() {
            const prevButton = document.querySelector('.swiper-button-prev');
            const nextButton = document.querySelector('.swiper-button-next');

            if (swiper.isBeginning) {
                prevButton.disabled = true;
            } else {
                prevButton.disabled = false;
            }

            if (swiper.isEnd) {
                nextButton.disabled = true;
            } else {
                nextButton.disabled = false;
            }
        };
        

    } catch (error) {
        console.error('error fetching data', error);
        alert `Sorry, reviews not found.`;
        list.innerHTML = "<p>Not found</p>";
    }
};
// fetchData();

        











// // init Swiper:
//  export const swiper = new Swiper('.swiper', {
//     // configure Swiper to use modules
//     modules: [Navigation, Pagination],
//   direction: 'horizontal',
//     loop: true,
  

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// });