// IMG SET
const menuImg = [
  '../../imgs/menu/menu-1.jpg',
  '../../imgs/menu/menu-2.jpg',
  '../../imgs/menu/menu-3.jpg',
  '../../imgs/menu/menu-4.jpg',
  '../../imgs/menu/menu-2.jpg',
  '../../imgs/menu/menu-1.jpg',
];
const menuAlt = ['bread', 'bread', 'bread', 'bread'];
const menuName = document.getElementsByClassName('menu-name');
const menuNameValue = [
  'Bread Name',
  'Bread Name',
  'Bread Name',
  'Bread Name',
  'Bread Name',
  'Bread Name',
];

const sliderItems = document.getElementsByClassName('slider-item');

for (let i = 0; i < sliderItems.length; i++) {
  let imgElement = document.createElement('IMG');
  imgElement.setAttribute('src', menuImg[i]);
  imgElement.setAttribute('alt', menuAlt[i]);
  menuName[i].innerHTML = menuNameValue[i];
  sliderItems[i].appendChild(imgElement);
}

// Slider Move
const sliderBtn = document.querySelector('.menu-slider-btn');
const sliders = document.querySelector('.menu-slider-wrapper');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let nextMove = 0;
let prevMove = 0;



sliderBtn.addEventListener('click', (event) => {
  const target = event.target;
  const move = target.dataset.move;
  let transform = 390;
let mobileTransform = 330;
  if(window.screen.width > 767){
    movingFunction(move, transform)
  }
  if(window.screen.width <= 767){
    movingFunction(move, mobileTransform)
  }
});

function movingFunction(movingArrow, transform){
    if (movingArrow === 'next') {
        nextSlide(transform);
      }
      if (movingArrow === 'prev') {
        prevSlide(transform);
      }
}

// Slide default index
let slideIndex = 1;
// Nextslide function
function nextSlide(move) {
  showSlides((slideIndex += 1), move);
  console.log(slideIndex);
}
// PrevSlide Function
function prevSlide(move) {
  showSlides((slideIndex -= 1), move);
  console.log(slideIndex);
}


function showSlides(n, move) {
  // Default
  let pcDefaultSize = 390;
  let mobileDefaultSize = 330;
  // Size Setting
  let normalSizeArray = [];
  // Slider
  if (window.screen.width > 767){
    for (let i = 0; i < sliderItems.length; i++) {
        normalSizeArray[0] = 0;
        normalSizeArray[1] = 390;
        // sum
        pcDefaultSize += move;
        normalSizeArray[i + 2] = pcDefaultSize;
        console.log(normalSizeArray);
    }
   }
   if (window.screen.width <= 767 ){
    for (let i = 0; i < sliderItems.length; i++) {
        normalSizeArray[0] = 0;
        normalSizeArray[1] = 330;
        // sum
        mobileDefaultSize += move;
        normalSizeArray[i + 2] = mobileDefaultSize;
        console.log(normalSizeArray);
    }
   }
  // Default Size Variable for switch
  let normal = normalSizeArray[0];
  // MIN
  if (n < 1) {
    slideIndex = sliderItems.length;
  }
  // PC MAX
  if (window.screen.width <= 767) {
    if (n >= (sliderItems.length + 1)) {
        slideIndex = 1;
    }
  }
  if (window.screen.width > 767){
    if (n >= (sliderItems.length - 1 )) {
        slideIndex = 1;
    }
  }
  
  // SWitch for translate
  switch (sliderItems[slideIndex - 1]) {
    case sliderItems[0]:
        sliders.style.transform = `translateX(0px)`;
      break;
    case sliderItems[1]:
        normal = normalSizeArray[1]
      sliders.style.transform = `translateX(${normal}px)`;
      break;
    case sliderItems[2]:
      normal = normalSizeArray[2];
      sliders.style.transform = `translateX(${normal}px)`;
      break;
    case sliderItems[3]:
      normal = normalSizeArray[3];
      sliders.style.transform = `translateX(${normal}px)`;
      break;
    case sliderItems[4]:
      normal = normalSizeArray[4];
      sliders.style.transform = `translateX(${normal}px)`;
      break;
    case sliderItems[5]:
      normal = normalSizeArray[5];
      sliders.style.transform = `translateX(${normal}px)`;
      break;
  }
}
