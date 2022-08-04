const navMoveItem = document.querySelector('.nav-item');
const navPcItemsList = document.querySelector('.pc-nav-item');

// Move Link
navMoveItem.addEventListener('click', (event)=>{
    moveEvent(event)
});

navPcItemsList.addEventListener('click', (event)=>{
    moveEvent(event)
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
