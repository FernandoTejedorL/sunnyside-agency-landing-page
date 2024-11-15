const rootStyles = document.documentElement.style;
const hamburgerElement = document.getElementById('hamburger');
const modalElement = document.getElementById('menu');

const toModal = () => {
  if (modalElement.classList.contains('menu')) {
    modalElement.classList.replace('menu', 'hide-menu');
  } else {
    modalElement.classList.replace('hide-menu', 'menu');
  }
};
hamburgerElement.addEventListener('click', toModal);
