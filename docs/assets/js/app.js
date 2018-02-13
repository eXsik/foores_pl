
// MOBLIE MENU

let menuIcon = document.querySelector('#mainMenu');
let lists = document.querySelectorAll('.navbar__nav-li');

menuIcon.addEventListener('click', function(){
    document.body.classList.toggle('open');
});

[].map.call(lists, function(elem) {
    elem.addEventListener("click", function(){
        document.body.classList.remove('open');
    }, false);
});

// IMAGE GALLERY

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.gallery__imgs img');
const opacity = 0.5;

//Set first image opacity 
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //Change current img to src of clicked image
    current.src = e.target.src;
    
    //Add fading class
    current.classList.add('fade-in');

    //Remove fade-in class after .5secods
    setTimeout(() => current.classList.remove('fade-in'), 500);
    
    //Change the opacity to variable value
    e.target.style.opacity = opacity;
}
