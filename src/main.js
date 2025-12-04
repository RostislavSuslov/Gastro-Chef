import './main.scss'
import './style.css'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const burger = document.querySelector('#burger')
const mobileContainer = document.querySelector('#mobile-container')
const body = document.querySelector('body')

burger.addEventListener('click', function() {
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


// Demo by http://creative-punch.net

const items = document.querySelectorAll('.circle a');

for(var i = 0, l = items.length; i < l; i++) {
  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI + 1*(0.5/l)*i*Math.PI)).toFixed(4) + "%";
  items[i].style.bottom = (50 + 35*Math.sin(-0.5 * Math.PI + 1*(0.5/l)*i*Math.PI)).toFixed(4) + "%";
}

// document.querySelector('.menu-button').onclick = function(e) {
//    e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
// }


const feedbackButton = document.querySelector('#feedback-button')

feedbackButton.addEventListener('click', function() {
    feedbackButton.classList.toggle('active')
})
