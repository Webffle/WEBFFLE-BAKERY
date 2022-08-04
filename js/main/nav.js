'use strict';
// Nav
const toggleBtn = document.querySelector('.toggle');
const navItemsList = document.querySelectorAll('.nav-item');
// PC TABLET Nav
const navCircle = document.querySelectorAll('.circle');
// POSITION
const aboutPosition = 456;

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
        navCircle[0].classList.add('now');
        for(let i = 1; i < navCircle.length; i++ ){
            navCircle[i].classList.remove('now');
        }
    }
    if(scrollValue >= aboutPosition){
        navCircle[1].classList.add('now');
        navCircle[0].classList.remove('now');
    }
    console.log(scrollValue)
});