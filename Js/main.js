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


//<------------------------------------------------------------   Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
