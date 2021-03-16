// Map
(function () {
  const mapLink = document.querySelector('.city-map');
  const mapPopup = document.querySelector('.modal-map');
  const mapClose = mapPopup.querySelector('.modal-close');

  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal--show');
  });

  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal--show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('modal--show')) {
        evt.preventDefault();
        mapPopup.classList.remove('modal--show');
      }
    }
  });
}());

// Modal cart
(function () {
  const modalCart = document.querySelector('.modal-cart');
  const openPopupButtons = document.querySelectorAll('.btn-buy');
  const closePopupButton = modalCart.querySelector('.modal-close');

  openPopupButtons.forEach(btn =>
    btn.addEventListener('click', function () {
      modalCart.classList.add('modal--show');
    })
  );

  closePopupButton.addEventListener('click', function () {
    modalCart.classList.remove('modal--show');
  });

  const newLocal = document.addEventListener;
  newLocal('keydown', function (evt) {
    if (evt.keyCode === 27) {
      modalCart.classList.remove('modal--show');
    }
  });
}());

// Modal form
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

// Slider service
(function () {
  const links = document.querySelectorAll(".service-item");
  const pages = document.querySelectorAll(".service-page");

  let currentIndex = Array.from(links).findIndex((link) =>
    link.classList.contains("service-item--active")
  );

  links.forEach((link, index) => {
    link.addEventListener("click", () => {

      links[currentIndex].classList.remove("service-item--active");
      pages[currentIndex].classList.remove("service-page--active");


      link.classList.add("service-item--active");
      pages[index].classList.add("service-page--active");

      currentIndex = index;
    });
  });
})();

// Slider
(function () {
  const root = document.querySelector(".slider");
  const slides = root.querySelectorAll(".slide");
  const dots = root.querySelectorAll(".dot");
  const prewBtn = root.querySelector(".btn-forward");
  const nextBtn = root.querySelector(".btn-back");

  let index = Array.from(slides).findIndex((elem) =>
    elem.classList.contains("slide--show")
  );

  function next(nextIndex) {
    slides.item(index).classList.remove("slide--show");
    slides.item(nextIndex).classList.add("slide--show");
    dots.item(index).classList.remove("dot--active");
    dots.item(nextIndex).classList.add("dot--active");
    index = nextIndex;
  }

  nextBtn.addEventListener("click", () => {
    let nextIndex = index + 1;

    if (nextIndex === slides.length) {
      nextIndex = 0;
    }

    next(nextIndex);
  });

  prewBtn.addEventListener("click", () => {
    let nextIndex = index - 1;

    if (nextIndex === -1) {
      nextIndex = slides.length - 1;
    }

    next(nextIndex);
  });
})();
