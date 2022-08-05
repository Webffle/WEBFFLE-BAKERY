'use strict';
// Nav
const toggleBtn = document.querySelector('.toggle');
const navItemsList = document.querySelectorAll('.nav-item');
// PC TABLET Nav
const navCircle = document.querySelectorAll('.circle');
// POSITION
const aboutPosition = 452;

// event for  nav
toggleBtn.addEventListener('click', ()=>{
    navItemsList[0].classList.toggle('home');
    navItemsList[1].classList.toggle('about');
    navItemsList[2].classList.toggle('menu');
    navItemsList[3].classList.toggle('contact');
});


// PC NAV


window.addEventListener('scroll',()=>{
    let scrollValue = window.scrollY;
    if(scrollValue >= 0){
        // add
        navCircle[0].classList.add('now');
        // Remove
        for(let i = 1; i < navCircle.length; i++ ){
            navCircle[i].classList.remove('now');
        }
    }
    if(scrollValue >= aboutPosition){
        // add
        navCircle[1].classList.add('now');
        // Remove
        navCircle[0].classList.remove('now');
        navCircle[2].classList.remove('now');
        navCircle[3].classList.remove('now');
    }
    console.log(scrollValue)
});