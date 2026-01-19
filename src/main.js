import './main.scss'
import './style.css'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const burger = document.querySelector('#burger')
const mobileContainer = document.querySelector('#mobile-container')
const body = document.querySelector('body')

burger.addEventListener('click', function () {
    burger.classList.toggle('is-active')
    mobileContainer.classList.toggle('hidden')
    body.classList.toggle('overflow-hidden')
})

const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,


        renderBullet: function (index, className) {
            return `
            <div class="${className} flex justify-center items-center cursor-pointer">
                <svg viewBox="0 0 14 14" class="bullet-svg">
                    <circle class="outer" r="5" cx="50%" cy="50%" fill="transparent" stroke="var(--color-green-400)" stroke-width="2"></circle>
                    <circle class="inner" r="5" cx="50%" cy="50%" fill="transparent" stroke="var(--color-blue-200)" stroke-width="2" stroke-dasharray="31.4" stroke-dashoffset="31.4"></circle>
                </svg>
            </div>`;
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const languageItem = document.querySelectorAll('.language-item')

function removeActiveClassesLanguagesPanel() {
    languageItem.forEach(function (item) {
        item.classList.remove('bg-green-400')
        item.classList.remove('text-blue-300')
    })
}

languageItem.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault()
        removeActiveClassesLanguagesPanel()
        element.classList.add('bg-green-400')
        element.classList.add('text-blue-300')
    })
})

const categoryLink = document.querySelectorAll('.category-link')

function removeActiveClassesCategoryNav() {
    categoryLink.forEach(function (item) {
        item.classList.add('lg:w-17.5')
        item.classList.add('w-10.25')
        item.classList.remove('lg:w-auto')
        item.classList.remove('md:w-auto')
        item.classList.remove('text-green-400')
        item.querySelector('span').classList.add('hidden')
    })
}

categoryLink.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault()
        removeActiveClassesCategoryNav()

        item.classList.remove('lg:w-17.5')
        item.classList.remove('w-10.25')
        item.classList.add('lg:w-auto')
        item.classList.add('md:w-auto')
        item.classList.add('text-green-400')
        item.querySelector('span').classList.remove('hidden')
    })
})

// const link = document.querySelector('.category-link');

// categoryLink.forEach(function (item) {
//     document.addEventListener('click', (event) => {
//         const withinBoundaries = event.composedPath().includes(item);
//         console.log(withinBoundaries);

//         if (!withinBoundaries) {
//             removeActiveClassesCategoryNav()
//         }
//     })
// })

// document.addEventListener('click', (event) => {
//     const withinBoundaries = event.composedPath().includes(link);

//     if (!withinBoundaries) {
//         removeActiveClassesCategoryNav()
//     }
// })



const circularMenu = document.querySelector('.circular-menu')
const circularMenuButton = document.querySelector('.circular-menu__button')
const circularMenuIcon = document.querySelector('.circular-menu__icon use')

circularMenuButton.addEventListener('click', function () {
    circularMenu.classList.toggle('active')

    if (circularMenu.classList.contains('active')) {
        circularMenuIcon.setAttribute('href', '#icon-close')
    } else {
        circularMenuIcon.setAttribute('href', '#icon-feedback-button')
    }
})

document.addEventListener('click', function (event) {
    const isClickInsideCircular = circularMenu.contains(event.target) ||
        circularMenuButton.contains(event.target);

    const isClickInsideCategory = Array.from(categoryLink).some(link =>
        link.contains(event.target));

    if (!isClickInsideCircular && circularMenu.classList.contains('active')) {
        circularMenu.classList.remove('active');
        circularMenuIcon.setAttribute('href', '#icon-feedback-button');
    }

    if (!isClickInsideCategory) {
        const hasActiveCategory = Array.from(categoryLink).some(link =>
            link.classList.contains('text-green-400'));

        if (hasActiveCategory) {
            removeActiveClassesCategoryNav();
        }
    }
});

const tabsBtn = document.querySelectorAll('[data-content-id]')
const tabsContent = document.querySelectorAll('.tab-content')

function removeActiveNavTabs() {
    tabsBtn.forEach(function (btn) {
        btn.classList.remove('active')
    })
}

function hiddenActiveTabs() {
    tabsContent.forEach(function (content) {
        content.classList.remove('show')
    })
}

tabsBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        removeActiveNavTabs()
        btn.classList.add('active')

        const id = btn.getAttribute('data-content-id')
        const content = document.getElementById(id)

        hiddenActiveTabs()
        content.classList.add('show')
    })
})



const programArr = [
    {
        maxi_fit: {},
    },
    {
        strong: {},
    },
    {
        balance_pluse: {},
    },
    {
        balance: {},
    },
    {
        fitness: {
            descriptions: {
                title: 'fitness',
                kcal: '1300',
                content: 'Программа здорового питания Express Fit. Идеально для: похудения в кратчайшие сроки, повышения энергии и сил, снижения веса при сидячем образе жизни.',
                price_list: {
                    test_day: {
                        old_price: '510',
                        price: '357'
                    },
                    day_1: {
                        old_price: false,
                        price: "510"
                    },
                    day_7: {
                        old_price: '510',
                        price: "490"
                    },
                    day_14: {
                        old_price: '510',
                        price: "470"
                    },
                    day_30: {
                        old_price: '510',
                        price: "445"
                    },
                    breakfast_and_dinner: {
                        old_price: '-15%',
                        price: "433"
                    },
                }
            },
            week: {
                mon: {
                    eating: [
                        {
                            eating_title: 'Завтрак',
                            eating_time: '7:00 - 9:00',
                            eating_menu: [
                                {
                                    menu_item: [
                                        {
                                            item_title: '- Фриттата с сыром и кабачками',
                                            item_quantity: '170гр',
                                        },
                                    ]
                                },
                            ],
                        },
                        {
                            eating_title: '2-й завтрак',
                            eating_time: '10:00 - 12:00',
                            eating_menu: [
                                {
                                    menu_item: [
                                        {
                                            item_title: '- Фермерский йогурт',
                                            item_quantity: '200гр',
                                        },
                                        {
                                            item_title: '- Полезное печенье из сухофруктов и орехов',
                                            item_quantity: '2шт',
                                        },
                                    ]
                                },
                            ],
                        },
                        {
                            eating_title: 'Обед',
                            eating_time: '13:00 - 15:00',
                            eating_menu: [
                                {
                                    menu_item: [
                                        {
                                            item_title: '- Люля-кебаб из индейки',
                                            item_quantity: '100гр',
                                        },
                                        {
                                            item_title: '- Летний салат с маслинами и сыром',
                                            item_quantity: '100гр',
                                        },
                                    ]
                                },
                            ],
                        },
                        {
                            eating_title: 'Полдник',
                            eating_time: '16:00 - 17:30',
                            eating_menu: [
                                {
                                    menu_item: [
                                        {
                                            item_title: '- Творожное суфле с какао и вишей',
                                            item_quantity: '100гр',
                                        },

                                    ]
                                },
                            ],
                        },
                        {
                            eating_title: 'Ужин',
                            eating_time: '19:00 - 20:00',
                            eating_menu: [
                                {
                                    menu_item: [
                                        {
                                            item_title: '- Рыбный терен',
                                            item_quantity: '100гр',
                                        },
                                        {
                                            item_title: '- Овощи гриль',
                                            item_quantity: '100гр',
                                        },
                                    ]
                                },
                            ],
                        },
                    ],
                },
                tue: {

                },
                wed: {

                },
                thu: {

                },
                fri: {

                },
                sat: {

                },
                sun: {

                },

            }
        },
    },
    {
        slim: {},
    },
    {
        express_eit: {},
    },
]




const installAccordion = () => {
    const accordionQuestions = document.querySelectorAll('.accordion-question')

    accordionQuestions.forEach(question => {
        question.addEventListener('click', ()=> {
            const accordionItem = question.closest('.accordion-item')
            const accordionAnswer = accordionItem.querySelector('.accordion-answer')
            
            question.classList.toggle('accordion-question_active')
            accordionAnswer.classList.toggle('accordion-answer_show')
        })
    })
}

installAccordion()