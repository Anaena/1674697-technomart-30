(function () {
const contactBtn = document.querySelector('.contact-btn');
const modalContactUs = document.querySelector('.modal-contact-us');
const closePopupButton = modalContactUs.querySelector('.modal-close');
const contactUsForm = modalContactUs.querySelector('.contact-us-form');
const userName = modalContactUs.querySelector('.user-name-form');
const userEmail = modalContactUs.querySelector('.user-email-form');
const textMessage = modalContactUs.querySelector('.message-text');

contactBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalContactUs.classList.add('modal--show');

    userName.focus();
});

closePopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalContactUs.classList.remove('modal--show');
  modalContactUs.classList.add('modal-error');
});

contactUsForm.addEventListener('submit', function (evt) {
  if (!userName.value || !userEmail.value || !textMessage.value) {
    evt.preventDefault();
    modalContactUs.classList.add('modal-error');
    modalContactUs.offsetWidth = modalContactUs.offsetWidth;
    modalContactUs.classList.add('modal-error');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalContactUs.classList.contains('modal--show')) {
      evt.preventDefault();
      modalContactUs.classList.remove('modal--show');
      modalContactUs.classList.add('modal-error');
    }
  }
});
}());
