const infoBtns = document.querySelectorAll(".info-dot")
const infoHints = document.querySelectorAll(".info-hint")


//клік на btn з підсказкою
for (let btn of infoBtns) {
    btn.addEventListener('click', showHint);
}

function showHint () {
    this.parentNode.querySelector('.info-hint').classList.toggle('none')
}

//закриваємо підсказку при кліку при всій сторінці

document.addEventListener('click', closeHints)

function closeHints () {
    for (let hint of infoHints ) {
        hint.classList.add('none')
    }
}