window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger'),
          menu = document.querySelector('.nav'),
          close = document.querySelector('.nav__close'),
          sidebar = document.querySelector('.sidebar');

          burger.addEventListener('click', () => {
            menu.style.left = '0';
            sidebar.style.display = 'none';
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.overlay').style.zIndex = '5';
          });
          close.addEventListener('click', () => {
            menu.style.left = '-345px';
            sidebar.style.display = 'block';
            document.querySelector('.overlay').style.display = 'none';
            document.querySelector('.overlay').style.zIndex = '';
          });
});
