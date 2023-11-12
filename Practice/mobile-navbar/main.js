const headerMenu = document.querySelector('.header__menu');

headerMenu.onclick = (e) => {
    document.querySelector('.list').classList.toggle('show');
}

const app = document.querySelector('.app')

window.onscroll = (e) => {
    const isShow = document.querySelector('.show')
    if(isShow) {
        isShow.classList.remove('show')
    }
}