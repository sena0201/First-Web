const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('.header');

window.onscroll = () => {
    header.classList.toggle('sticky', window.scrollY > 0);
}