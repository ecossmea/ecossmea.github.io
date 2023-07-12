const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  if(!scrollY == 0) {
    navBar.style.background = 'var(--primary)';
  } else {
    navBar.style.background = 'transparent';
  }
});



const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  let status = burger.getAttribute('data-status');
  const burgerContainer = document.querySelector('.burger-container');
  const burgerContent = document.querySelector('.burger-content');
  const midLine = burger.children[1];
  

  if(status === 'disabled') {
    burger.style.setProperty('--gap-to-mid', '0%');
    burger.style.setProperty('--rotation', '45deg');
    midLine.style.opacity = 0;
    burgerContent.style.transform = 'translateX(0)';
    burgerContainer.style.opacity = 1;
    burgerContainer.style.pointerEvents = 'auto';
    
    burger.setAttribute('data-status', 'enabled');
  } else {
    burger.style.setProperty('--gap-to-mid', 'clamp(200%, 2.5vw, 400%)');
    burger.style.setProperty('--rotation', '0deg');
    midLine.style.opacity = 1;
    burgerContent.style.transform = 'translateX(100%)';
    burgerContainer.style.opacity = 0;
    burgerContainer.style.pointerEvents = 'none';
    
    burger.setAttribute('data-status', 'disabled');
  }
});