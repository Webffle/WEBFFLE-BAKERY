// IMG SET
const menuImg = ['../../imgs/menu/menu-1.jpg','../../imgs/menu/menu-2.jpg','../../imgs/menu/menu-3.jpg','../../imgs/menu/menu-4.jpg'];
const menuAlt = ['bread', 'bread', 'bread', 'bread'];
const menuName = document.getElementsByClassName('menu-name')
const menuNameValue = ['Bread Name', 'Bread Name', 'Bread Name', 'Bread Name'];
const sliderItems = document.getElementsByClassName('slider-item');



for(let i = 0; i < sliderItems.length; i++){
    let imgElement = document.createElement('IMG');
    imgElement.setAttribute('src', menuImg[i]);
    imgElement.setAttribute('alt', menuAlt[i]);
    menuName[i].innerHTML = menuNameValue[i]
    sliderItems[i].appendChild(imgElement)
}


// Slider Move
const sliderBtn = document.querySelector('.menu-slider-btn');
const sliders = document.querySelector('.menu-slider-wrapper');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let nextMove = 0;
let prevMove = 0;

sliderBtn.addEventListener('click', (event)=>{
    const target = event.target; 
    const move = target.dataset.move;

})

