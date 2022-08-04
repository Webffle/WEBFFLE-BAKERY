const navMoveItem = document.querySelector('.mobile-nav-items');
const navPcItemsList = document.querySelector('.nav-total-items');
const scrollDownBtn = document.querySelector('.scroll');

// Move Link
navMoveItem.addEventListener('click', (event)=>{
    moveEvent(event)
});

navPcItemsList.addEventListener('click', (event)=>{
    moveEvent(event)
});

scrollDownBtn.addEventListener('click', (event)=>{
    scrollIntoView('#about');
});


function moveEvent(event){
    const target = event.target; 
    const link = target.dataset.link; 
    if(link == null){
        return;
    }
   scrollIntoView(link);
}

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
