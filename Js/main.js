const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

//клік на btn з підсказкою
for (let btn of infoBtns) {
  btn.addEventListener("click", showHint);
}

function showHint(e) {
  e.stopPropagation();
  this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

//закриваємо підсказку при кліку при всій сторінці

document.addEventListener("click", closeHints);

function closeHints() {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
}

// клік на підсказкі

for (let hint of infoHints) {
  hint.addEventListener("click", (e) => e.stopPropagation());
}

//<-------------Swiper--------------->

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 42,
  freeMode: true,

  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev",
  },
});

//<-------------Tabs---------------->

const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    //убрати актів у всі
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }
    //добавити активний клас до данного кнопки
    this.classList.add("tab-controls__btn--active");

    // відобразити потрібні товари і hide непотрібні
    for (let product of tabsProducts) {
      //провірка на all
      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        }
      }
    }

    swiper.update();
  });
}


//<------------------Now time Copyrighting----------->

window.onload = function() {
  window.setInterval(function(){
      var date = new Date();


      var years = date.getFullYear();
      

      var clock = years;

      document.getElementById("year-clock").innerHTML = clock; 
  }
  );
}
