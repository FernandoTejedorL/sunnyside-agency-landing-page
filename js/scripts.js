const rootStyles = document.documentElement.style;
const hamburgerElement = document.getElementById('hamburger');
const modalElement = document.getElementById('modal');

const toModal = () => {
  if (modalElement.classList.contains('modal')) {
    modalElement.classList.replace('modal', 'hide-modal');
  } else {
    modalElement.classList.replace('hide-modal', 'modal');
  }
};
hamburgerElement.addEventListener('click', toModal);
