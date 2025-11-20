import './style.css'

const burger = document.querySelector('#burger')
const mobileContainer = document.querySelector('#mobile-container')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('is-active')
    mobileContainer.classList.toggle('hidden')
})