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

let DefaultSizesArray = [390, 330];

sliderBtn.addEventListener('click', (event) => {
  const target = event.target;
  const move = target.dataset.move;
  let transform = DefaultSizesArray[0];
  let mobileTransform = DefaultSizesArray[1];
  if (window.screen.width > 767) {
    movingFunction(move, transform);
  }
  if (window.screen.width <= 767) {
    movingFunction(move, mobileTransform);
  }
});

function movingFunction(movingArrow, transform) {
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
  let pcDefaultSize = DefaultSizesArray[0];
  let mobileDefaultSize = DefaultSizesArray[1];
  // Size Setting
  let normalSizeArray = [];
  // Slider
  if (window.screen.width > 767) {
    for (let i = 0; i < sliderItems.length; i++) {
      normalSizeArray[0] = 0;
      normalSizeArray[1] = DefaultSizesArray[0];
      // sum
      pcDefaultSize += move;
      normalSizeArray[i + 2] = pcDefaultSize;
      console.log(normalSizeArray);
    }
  }
  if (window.screen.width <= 767) {
    for (let i = 0; i < sliderItems.length; i++) {
      normalSizeArray[0] = 0;
      normalSizeArray[1] = DefaultSizesArray[1];
      // sum
      mobileDefaultSize += move;
      normalSizeArray[i + 2] = mobileDefaultSize;
      console.log(normalSizeArray);
    }
  }
  // Default Size Variable for switch
  let normal = normalSizeArray[0];


  // MIN
  if (window.screen.width > 767) {
    if (n < 1) {
      slideIndex = sliderItems.length - 1;
    }
  }
  if (window.screen.width <= 767) {
    if (n < 1) {
      slideIndex = sliderItems.length;
    }
  }

  // MAX
  if (window.screen.width <= 767) {
    if (n >= sliderItems.length + 1) {
      slideIndex = 1;
    }
  }
  if (window.screen.width > 767) {
    if (n >= sliderItems.length ) {
      slideIndex = 1;
    }
  }
  if (window.screen.width > 1200) {
    if (n >= sliderItems.length - 1 ) {
      slideIndex = 1;
    }
  }

  for(let i = 0; i < sliderItems.length; i++){
    let sliderItem = sliderItems[slideIndex - 1];
    if(sliderItem == sliderItems[i]){
      normal = normalSizeArray[i];
      sliders.style.transform = `translateX(${normal}px)`;
    }
  }
}
