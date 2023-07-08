/*
const postContainer = document.querySelector('.post-grid');

fetch('https://databaseapi.febryanshino.repl.co/yatta')
  .then(response => response.json())
  .then(data => {
    const posts = data.yeet;
    
    for (let i = 0; i < 9; i++) {
      
      const post = document.createElement('div');
      const text = document.createElement('p');
      
      post.classList.add('post');
      post.style.backgroundImage = `url(https://cdn.donmai.us/sample/c6/1d/sample-c61dc131f7cc5c80fae6982cf3854e95.jpg)`;
      text.textContent = 'Yeah boi';
      
      postContainer.appendChild(post);
    }
  });

*/


const eventContainer = document.querySelector('.slider');

for(let i = 0; i < 3; i++) {
  const item = document.createElement('div');
  const icon = document.createElement('div');
  const desc = document.createElement('div');
  const text = document.createElement('p');
  const link = document.createElement('a');

  item.classList.add('item');
  icon.classList.add('icon');
  desc.classList.add('desc');

  text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  link.href = '#';
  link.textContent = 'Learn more';

  desc.appendChild(text);
  desc.appendChild(link);
  item.appendChild(icon);
  item.appendChild(desc);
  eventContainer.appendChild(item);
  
}



const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  if(!scrollY == 0) {
    navBar.style.background = 'var(--primary)';
    navBar.style.borderBottom = '.05rem solid hsl(0,0%,75%)';
  } else {
    navBar.style.background = 'transparent';
    navBar.style.borderBottom = 'none';
  }
});



const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  let status = burger.getAttribute('data-status');
  const burgerContent = document.querySelector('.burger-content');
  const midLine = burger.children[1];
  

  console.log(status);
  if(status === 'disabled') {
    burger.style.setProperty('--gap-to-mid', '0%');
    burger.style.setProperty('--rotation', '45deg');
    midLine.style.opacity = 0;
    burgerContent.style.transform = 'translateX(0)';
    
    burger.setAttribute('data-status', 'enabled');
  } else {
    burger.style.setProperty('--gap-to-mid', '250%');
    burger.style.setProperty('--rotation', '0deg');
    midLine.style.opacity = 1;
    burgerContent.style.transform = 'translateX(100%)';
    
    burger.setAttribute('data-status', 'disabled');
  }
});
