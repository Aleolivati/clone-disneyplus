document.addEventListener('DOMContentLoaded', function () {
    const tabsButtons = document.querySelectorAll('[data-tab-button]') ;
    const questions = document.querySelectorAll('[data-faq-question]') ;
    
    const heroSelection = document.querySelector('.hero') ;
    const heroHight = heroSelection.clientHeight ;

    // Função para aparecer header (logo + botão) após passar section hero
    window.addEventListener('scroll', function () {
        
        const currentYPosition = window.scrollY ;

        if (currentYPosition < heroHight) {
            hiddenHeaderElements();
        } else {
            showHeaderElements();
        }
    })

    // Função para mudança de seção no section shows
    for (let i = 0; i < tabsButtons.length; i++) {
        tabsButtons[i].addEventListener('click', function (button) {
            const targetTab = button.target.dataset.tabButton ;
            const tabIsActive = document.querySelector(`[data-tab-id = ${targetTab}]`) ;
            hiddenAllTabs () ;
            removeButtonActive () ;
            tabIsActive.classList.add('shows__list--is-active') ;
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }

    // Função para o accordeon na section FAQ
    for (let i = 0; i < questions.length; i ++) {
        questions[i].addEventListener('click', openOrCloseAnswer) ;
    }
})

function hiddenHeaderElements () {
    const header = document.querySelector('header') ;

    header.classList.add('header--is-hidden') ;
}

function showHeaderElements () {
    const header = document.querySelector('header') ;

    header.classList.remove('header--is-hidden') ;
}

function openOrCloseAnswer (element) {
    const openClass = 'faq__questions__item--is-open';
    const fatherElement = element.target.parentNode ;

    fatherElement.classList.toggle(openClass) ;
}

function removeButtonActive () {
    const tabsButtons = document.querySelectorAll('[data-tab-button]') ;

    for (let i = 0; i < tabsButtons.length; i++) {
        tabsButtons[i].classList.remove('shows__tabs__button--is-active') ;
    }
}

function hiddenAllTabs () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]') ;

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}