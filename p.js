const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);

function show(){
mainMenu.style.display= 'flex';
mainMenu.style.top= "0";
}
 function hide(){
    mainMenu.style.top= "-120%";

 }
 const about =document.querySelector('.about_inner');
  about.addEventListener('click', flip)  
  
function flip (){

    about.classList.toggle('is-flipped') };
    
    const about1 =document.querySelector('.about_inner1');
    about.addEventListener('click', flipo)  
    
  function flipo (){
  
      about1.classList.toggle('is-flipped1') };
      /* ---- particles.js config ---- */