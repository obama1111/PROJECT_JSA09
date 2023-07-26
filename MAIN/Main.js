// Slideshow
const slides = document.getElementsByClassName("slide");
let currentSlide = 0;

function showSlide() {
    slides[currentSlide].classList.add('active');
}

function hideSlide() {
    slides[currentSlide].classList.remove('active');
}

function nextSlide() {
    hideSlide();
    currentSlide = (currentSlide + 1) % 
    slides.length;
    showSlide();
}

function prevSlide() {
    hideSlide();
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
}

setInterval(nextSlide ,5000);

const nextbtn = document.getElementById("nextButton");
nextbtn.addEventListener("click", () => {
    nextSlide()
    // setInterval(nextSlide ,5000);
})

const themeBG = document.getElementById("theme-icon");
themeBG.addEventListener("click", () => {
    const body = document.getElementById("body")
    body.style.backgroundColor = "#321D18"
    const text_box = document.getElementById("text_box");
    text_box.style.color = "#FFFFFF"
    
})
// const nextbtn = document.getElementById("nextButton");
// nextbtn.addEventListener("click", () => {
//     nextSlide()
// })

const nextBtn = document.getElementById("nextButton");
nextBtn.addEventListener("click", nextSlide);

const prevBtn = document.getElementById("prevButton");
prevBtn.addEventListener("click", prevSlide);

showSlide();
