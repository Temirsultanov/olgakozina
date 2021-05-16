// БУРГЕР
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".nav-mobile");
  const menuCloseItem = document.querySelector(".mobile__nav-close");
  const menuLinks = document.querySelectorAll(".mobile__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("nav-mobile_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("nav-mobile_active");
  });

  if (window.innerWidth < 1023) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("nav-mobile_active");
      });
    }
  }
})();

// СТОИМОСТЬ УСЛУГ
(function () {
  let costRow = document.querySelectorAll(".cost__row");
  const costArr = [...costRow];
  let costMobile = document.querySelectorAll(".cost__mobile");
  const costMobileArr = [...costMobile];
  let costBurger = document.querySelectorAll(".cost__burger");
  const costBurgerArr = [...costBurger];

  for (let row of costArr) {
    row.addEventListener("click", () => {
      let index = costArr.indexOf(row);
      costBurgerArr[index].classList.toggle("cost__burger_active");
      costMobileArr[index].classList.toggle("cost__mobile_active");
    });
  }
})();

// СЛАЙДЕРЫ
$(function () {
  $(".reviews__slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<img src="img/arrow_normal-l.svg">',
      '<img src="img/arrow_normal-r.svg">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      850: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});

$(function () {
  $(".reviews__slider-mob").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<img src="img/arrow_normal-l.svg">',
      '<img src="img/arrow_normal-r.svg">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});

$(function () {
  $(".customers__slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<img src="img/arrow_normal-l.svg">',
      '<img src="img/arrow_normal-r.svg">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
