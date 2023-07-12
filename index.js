fetch('https://databaseapi.febryanshino.repl.co/')
  .then(response => response.json())
  .then(data => {
    console.log("Yatta");
    const events = data.events;
    const eventContainer = document.querySelector('.slider');
    
    for(let i = 0; i < events.length; i++) {
      let event = events[i];
      let eventID = event[0];
      let eventTitle = event[1];
      let eventDesc = event[2];
      let eventURL = event[3];
      let eventDate = event[4];
      console.log(eventID);
      
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
      link.href = eventURL;
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
    










