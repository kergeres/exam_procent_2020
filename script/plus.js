//slider
const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

prev.addEventListener("click", function () {
    prevSlide()
    resetTimer();
});


next.addEventListener("click", function () {
    nextSlide();
    resetTimer();
});


function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    changeSlide();
}

function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide_active");
    }

    slides[index].classList.add("slide_active");
}


function resetTimer() {
    // when click to indicator or controls button
    // stop timer
    clearInterval(timer);
    // then started again timer
    timer = setInterval(autoPlay, 5000);
}


function autoPlay() {
    nextSlide();

}

let timer = setInterval(autoPlay, 5000);
