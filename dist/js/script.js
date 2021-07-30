window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger'),
          menu = document.querySelector('.nav'),
          close = document.querySelector('.nav__close'),
          sidebar = document.querySelector('.sidebar');

          burger.addEventListener('click', () => {
            menu.style.left = '0';
            sidebar.style.display = 'none';
            document.querySelector('.overlay').style.display = 'block';
          });
          close.addEventListener('click', () => {
            menu.style.left = '-30%';
            sidebar.style.display = 'flex';
            document.querySelector('.overlay').style.display = 'none';
          });

    const stripe = document.querySelectorAll('.chart__stripe'),
          num = document.querySelectorAll('.chart__num');
          let numContent = [];

          num.forEach(item => {
                numContent.push(item.textContent);
          });
          console.log(stripe);

          stripe.forEach((item, i) => {
            item.style.background = `linear-gradient(to right, #FFA501 ${numContent[i]}, #E8E4DE ${100 - numContent[i].replace(/%/g, "")}%)`;
          });



  });
