let perso = document.querySelector('.perso')
let object = document.querySelector('.obstacle')
let cadre = document.querySelector('.game')
let score = document.querySelector('.score')

function jump() {
    perso.classList.add('jump')
    setTimeout(() => {
        perso.classList.remove('jump')
    }, 500);
}

document.addEventListener('keydown', function () {
    jump()
})

n = 0

setInterval(() => {
    let onTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"))
    let objectLeft = parseInt(window.getComputedStyle(object).getPropertyValue("left"))
    console.log(onTop);
    score.innerText = n++
    // console.log(onTop, objectLeft);
    if (objectLeft < 100 && objectLeft > 50 && onTop >= 100) {
        n = 0
    }
}, 10);
