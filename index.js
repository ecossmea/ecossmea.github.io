fetch('https://databaseapi.febryanshino.repl.co/')
  .then(response => response.json())
  .then(data => {
    console.log("Yatta");
    const events = data.events;
    const eventContainer = document.querySelector('.slider');
    
    for(let i = 0; i < events.length; i++) {
      let event = events[i];
      let eventURL = event[1].trim(). toLowerCase();
      let eventDesc = event[2].trim();
      let eventDate = event[0].trim();
      
      const item = document.createElement('div');
      const icon = document.createElement('div');
      const desc = document.createElement('div');
      const text = document.createElement('p');

      const footer = document.createElement('div');
      const link = document.createElement('a');
      const date = document.createElement('h6');
      
    
      item.classList.add('item');
      icon.classList.add('icon');
      desc.classList.add('desc');
    
      text.textContent = eventDesc;
      icon.style.backgroundImage = `url(/events/${eventURL}/thumbnail.jpg)`;
      link.href = `/events/${eventURL}`;
      link.textContent = 'Learn more';
      date.textContent = eventDate;

      footer.appendChild(link);
      footer.appendChild(date);
      desc.appendChild(text);
      desc.appendChild(footer);
      item.appendChild(icon);
      item.appendChild(desc);
      eventContainer.appendChild(item);
  
    }
  });

const phoneIcon = document.querySelector('#call');


phoneIcon.addEventListener('click', (event) => {
  event.preventDefault();

  let status = phoneIcon.getAttribute('data-status');
  const contactContainer = document.querySelector('.contact');
  const icon = phoneIcon.firstElementChild;

  if(status === 'disabled') {
    icon.style.transform = 'rotate(0deg)';
    phoneIcon.style.filter = 'invert(100%)';
    
    contactContainer.style.maxHeight = '25rem';
    phoneIcon.setAttribute('data-status','enabled');
    

  } else {
    icon.style.transform = 'rotate(135deg)';
    phoneIcon.style.filter = 'invert(0%)';
    
    contactContainer.style.maxHeight = 0;
    phoneIcon.setAttribute('data-status','disabled');
  }
});




const feedBackForm = document.querySelector('.feedback > form');


feedBackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let input = feedBackForm.children[0].value;

  alert(input);
  feedBackForm.reset();
});


