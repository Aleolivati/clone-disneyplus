document.addEventListener('DOMContentLoaded', function () {
    const tabsButtons = document.querySelectorAll('[data-tab-button]') ;

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
})

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