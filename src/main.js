import './main.scss'
import './style.css'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const burger = document.querySelector('#burger')
const mobileContainer = document.querySelector('#mobile-container')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    mobileContainer.classList.toggle('hidden')
    body.classList.toggle('overflow-hidden')
})

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
        dynamicMainBullets: 4,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});