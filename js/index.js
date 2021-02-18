// Ссылки
const cityMap = document.querySelector('.city-map');
const contactBtn = document.querySelector('.contact-btn');
const btnBuy = document.querySelector('.btn-buy');

// Окна
const modalMap = document.querySelector('.modal-map');
const modalContactUs = document.querySelector('.modal-contact-us');
const modalCart = document.querySelector('.modal-cart');

const links = [cityMap, contactBtn, btnBuy];
const modals = [modalMap, modalContactUs, modalCart];

links.forEach((link, index) => {
  link.addEventListener('click', event => {
    event.preventDefault();
    modals[index].classList.add('modal--show');
  });
})


modals.forEach(elem => {
  elem.querySelector('.modal-close').addEventListener('click', () => {
    elem.classList.remove('modal--show');
  });
});
