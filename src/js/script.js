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
});
