
const body = document.body;
const root = document.querySelector(':root');

const article = document.querySelector('article');
const navBar = document.querySelector('nav');
const scrollTop = document.querySelector('.scroll-top > div');


window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  if(!scrollY == 0) {
    navBar.style.background = 'var(--primary)';
    scrollTop.style.transform = 'rotate(0deg) scale(1)';
  } else {
    navBar.style.background = 'transparent';
    scrollTop.style.transform = 'rotate(180deg) scale(0)';
  }
});


scrollTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
});



const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  let status = burger.getAttribute('data-status') === 'false';
  const burgerContainer = document.querySelector('.burger-container');
  const burgerContent = document.querySelector('.burger-content');
  const midLine = burger.children[1];
  
  if(status) {
    body.classList.add('no-scroll');
    burger.style.setProperty('--gap-to-mid', '0%');
    burger.style.setProperty('--rotation', '45deg');
    midLine.style.opacity = 0;
    burgerContent.style.transform = 'translateX(0)';
    burgerContainer.style.opacity = 1;
    burgerContainer.style.pointerEvents = 'auto';
    
    burger.setAttribute('data-status', status);
  } else {
    body.classList.remove('no-scroll');
    burger.style.setProperty('--gap-to-mid', 'clamp(200%, 2.5vw, 400%)');
    burger.style.setProperty('--rotation', '0deg');
    midLine.style.opacity = 1;
    burgerContent.style.transform = 'translateX(100%)';
    burgerContainer.style.opacity = 0;
    burgerContainer.style.pointerEvents = 'none';
    
    burger.setAttribute('data-status', status);
  }
});



const darkModeToggle = document.querySelector('.dark-mode');

const toggleTheme = (status) => {
  let properties = [];
  
  
  if(status) {
    console.log(status);
    properties = [
      ['--primary', 'hsl(0, 0%, 8%'],
      ['--secondary', 'hsl(0, 0%, 90%'],
      ['--tertiary', 'hsl(0, 0%, 12%'],
      ['--theme-font-head', 'hsl(0,0%,80%)'],
      ['--theme-font-body', 'hsl(0,0%,60%)']
    ]
  } else {
    properties = [
      ['--primary', 'hsl(0, 0%, 100%'],
      ['--secondary', 'hsl(0, 0%, 0%'],
      ['--tertiary', 'hsl(0, 0%, 90%'],
      ['--theme-font-head', 'hsl(0,0%,0%)'],
      ['--theme-font-body', 'hsl(0,0%,20%)']
    ]
  }
  for(let i = 0; i < properties.length; i++) {
    let property = properties[i];
    root.style.setProperty(property[0], property[1]);
  }
}





darkModeToggle.addEventListener('click', (event) => {
  event.preventDefault();
  let indicator = darkModeToggle.children[1];

  const status = darkModeToggle.getAttribute('data-status') === 'false';


  if(status) {
    darkModeToggle.style.background = 'rgba(0,255,0,.2)';
    darkModeToggle.style.color = 'green';
    indicator.textContent = 'ON';
    console.log(status);

    toggleTheme(status);

    darkModeToggle.setAttribute('data-status', status);

    
  } else {
    darkModeToggle.style.background = 'rgba(255,0,0,.2)';
    darkModeToggle.style.color = 'red';
    indicator.textContent = 'OFF';

    toggleTheme(status);
    darkModeToggle.setAttribute('data-status', status);
  }
});