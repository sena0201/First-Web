$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

var actionBox = $('.play-pause');
var actions = $$('.action');

actionBox.onclick = function(){
    actions.forEach(function(action){
        action.classList.toggle('inactive')
    })
}