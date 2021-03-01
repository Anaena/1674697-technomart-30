const modalCart = document.querySelector('.modal-cart');
const openPopupButton = document.querySelector('.btn-buy');
const closePopupButton = modalCart.querySelector('.modal-close');

openPopupButton.addEventListener('click', function () {
  modalCart.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
  modalCart.classList.remove('modal--show');
});

const newLocal = document.addEventListener;
newLocal('keydown', function (evt) {
  if (evt.keyCode === 27) {
  modalCart.classList.remove('modal--show');
  }
});

