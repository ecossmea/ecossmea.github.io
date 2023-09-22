const footerHTML = `
<section class="footer">
  <div class="part">
    <h4>PART OF</h4>
    <div>
      <a href="https://instagram.com/smkn3jepara?igshid=MzRlODBiNWFlZA==">SMK N 3 JEPARA</a>
    </div>
  </div>
  <div class="social-media">
    <h4>STAY IN TOUCH</h4>
    <div class="platforms">
      <a href="https://instagram.com/ecossmea?igshid=MzRlODBiNWFlZA==" class="insta">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#fff"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#fff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#fff"></path> </g></svg>
      </a>
      <a href="https://youtube.com/@ecosskagara" class="youtube">
        <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#fff" transform="translate(42.666738, 106.667236)"> <path d="M214.304705,0.000543068834 C226.424729,0.0216871426 348.414862,0.444568619 380.010595,8.90219814 C398.378595,13.7775234 412.821262,28.1915286 417.749262,46.6329765 C426.309902,78.5811951 426.652328,143.739282 426.666025,148.900811 L426.666025,149.553735 C426.652328,154.730893 426.309902,220.084332 417.749262,252.032551 C412.821262,270.473998 398.378595,284.888004 380.010595,289.763329 C347.417102,298.488042 218.629945,298.662536 213.491496,298.666026 L213.175003,298.666026 C208.035726,298.662536 79.2276622,298.488042 46.6132622,289.763329 C28.2665955,284.888004 13.8025955,270.473998 8.89592883,252.032551 C0.355768832,220.084332 0.014162432,154.730893 0.000498176,149.553735 L0.000498176,148.900811 C0.014162432,143.739282 0.355768832,78.5811951 8.89592883,46.6329765 C13.8025955,28.1915286 28.2665955,13.7775234 46.6132622,8.90219814 C78.2292622,0.444568619 200.239662,0.0216871426 212.361662,0.000543068834 Z M169.685262,86.2714908 L169.685262,212.394036 L281.215929,149.226778 L169.685262,86.2714908 Z" id="Shape"> </path> </g> </g> </g></svg>
      </a>
    </div>
  </div>
  <div class="feedback">
    <h4>SEND FEEDBACK</h4>
    <p>
      Howdy hey, your opinion do matter
    </p>
    <form method="POST">
      <input name="" value ="" placeholder="Your Feedback"/>
      <button>
        <svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-paper-plane" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>924</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M17,1.042 L11.436,14.954 L7.958,11.477 L8.653,13.563 L7.03,14.958 L7.03,11.563 L14.984,3.375 L6.047,9.969 L1,8.694 L17,1.042 Z" fill="#000" class="si-glyph-fill"> </path> </g> </g></svg>
      </button>
    </form>
  </div>
</section>
<section class="bottom">
  <h4>Qui aimes-tu le mieux, homme énigmatique, dis?</h4>
  <h6>Developed by FebryanS</h6>
</section>
`;

document.querySelector('article').innerHTML += footerHTML;
