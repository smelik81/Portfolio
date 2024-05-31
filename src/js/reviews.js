import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
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
        const markup = renderReviews(data);
        list.insertAdjacentHTML('beforeend', markup);

        const swiper = new Swiper('.swiper', {
     
            modules: [Navigation, Pagination],
            direction: 'horizontal',
            loop: true,
  

            //    Navigation arrows
            navigation: {
                nextEl: '.swiper-button-prev',
                prevEl: '.swiper-button-next',
            },

        });

    } catch (error) {
        console.error('error fetching data');
        
    }
};

        











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