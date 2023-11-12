const $ = document.querySelector.bind(document);

const changeMode = $('.change-mode');
const mode = $('.mode');

changeMode.addEventListener('click',()=>{

    const isLight = changeMode.querySelector('.light');
    const modeText = $('.mode-text');
    const lightText = modeText.querySelector('.light-text');
    const darkText = modeText.querySelector('.dark-text');

    if(isLight){
        mode.classList.remove('light');
        mode.classList.add('dark');
        lightText.classList.toggle('inactive');
        darkText.classList.toggle('inactive');
        $('.card').classList.add('dark-mode');
    }
    else {
        mode.classList.remove('dark')
        mode.classList.add('light');
        lightText.classList.toggle('inactive');
        darkText.classList.toggle('inactive');
        $('.card').classList.remove('dark-mode');
    }
})