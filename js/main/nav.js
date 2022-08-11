'use strict';
// Nav
const toggleBtn = document.querySelector('.toggle');
const navItemsList = document.querySelectorAll('.nav-item');
// PC TABLET Nav
const navCircle = document.querySelectorAll('.circle');

// event for  nav
toggleBtn.addEventListener('click', ()=>{
    navItemsList[0].classList.toggle('home');
    navItemsList[1].classList.toggle('about');
    navItemsList[2].classList.toggle('menu');
    navItemsList[3].classList.toggle('contact');
});


// PC NAV
// POSITION
const aboutPosition = 452;
const menuPosition = 1154;
const contactPosition = 1870;

window.addEventListener('scroll',()=>{
    let scrollValue = window.scrollY;
    if(scrollValue >= 0){
        navCircleNowToggle(0, 1, 2, 3);
    }
    if(scrollValue >= aboutPosition){
        navCircleNowToggle(1, 0, 2, 3);
    }
    if(scrollValue >= menuPosition){
        navCircleNowToggle(2, 0, 1, 3);
    }
    if(scrollValue >= contactPosition){
        navCircleNowToggle(3, 0, 1, 2);
    }
});

function navCircleNowToggle(now, delete1, delete2, delete3){
    // add
    navCircle[now].classList.add('now');
    // Remove
    navCircle[delete1].classList.remove('now');
    navCircle[delete2].classList.remove('now');
    navCircle[delete3].classList.remove('now');
}