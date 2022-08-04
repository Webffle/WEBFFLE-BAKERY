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
window.addEventListener('scroll',()=>{
    let scrollValue = window.screenY;
    if(scrollValue >= 0){
        navCircle[0].classList.add('now');
        for(let i = 1; i < navCircle.length; i++ ){
            navCircle[i].classList.remove('now');
        }
    }
})