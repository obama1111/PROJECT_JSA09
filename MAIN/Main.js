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
// setInterval(nextSlide ,5000);

const nextbtn = document.getElementById("nextButton");
nextbtn.addEventListener("click", () => {
    nextSlide()
    // setInterval(nextSlide ,5000);
})
