const sliderCont = document.getElementById("sliderContainer");
const slider = document.getElementById("slider");
const cards = document.getElementsByClassName("sldr");
let nextbtn = document.getElementById("slidemainnext");
let prevbtn = document.getElementById("slidemainprev")

let sliderContWidth = sliderCont.clientWidth;
let elementsToShow = 3;

if (document.body.clientWidth < 1000) {
    elementsToShow = 1
}

// console.log(elementsToShow)

let cardWidth = sliderContWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + 'px';
slider.style.transition = 'margin'
slider.style.transitionDuration = '1.2s'

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth + 'px'

}

prevbtn.hidden = true

function next() {
    prevbtn.hidden = false
    if (+slider.style.marginRight.slice(0, -2) != -cardWidth * (cards.length - elementsToShow))
        slider.style.marginRight = ((+slider.style.marginRight.slice(0, -2) - cardWidth) + "px")
    if (+slider.style.marginRight.slice(0, -2) == -cardWidth * (cards.length - elementsToShow)) { nextbtn.hidden = true }
}
function prev() {
    nextbtn.hidden = false
    if (+slider.style.marginRight.slice(0, -2) > 1 || +slider.style.marginRight.slice(0, -2) < -1)
        slider.style.marginRight = ((+slider.style.marginRight.slice(0, -2) + cardWidth) + "px")
    if (+slider.style.marginRight.slice(0, -2) == 0) { prevbtn.hidden = true }
}



nextbtn.addEventListener("click", next)
prevbtn.addEventListener("click", prev)

