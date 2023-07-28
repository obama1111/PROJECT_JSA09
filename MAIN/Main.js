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

setInterval(nextSlide ,10000);

const nextbtn = document.getElementById("nextButton");
nextbtn.addEventListener("click", () => {
    nextSlide()
    // setInterval(nextSlide ,5000);
})

const themeBG = document.getElementById("theme-icon");
themeBG.addEventListener("click", () => {
    const body = document.getElementById("body")
    body.style.backgroundColor = "#321D18"
    const text_box = document.getElementsByClassName("nav-tabs");
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


const Bannermovie1 = document.getElementById("movie1")
Bannermovie1.addEventListener("click", () => {
    // window.location.href="https://phimmoichilld.net/xem/quy-quyet-4-tap-full-pm497"
    console.log("movie1");
})

const Bannermovie2 = document.getElementById("movie2")
Bannermovie2.addEventListener("click", () => {
    console.log("movie2");
    // window.location.href="https://phimmoichilld.net/info/doctor-strange-in-the-multiverse-of-madness-2022-pm10159"
})
const Bannermovie3 = document.getElementById("movie3")
Bannermovie3.addEventListener("click", () => {
    console.log("movie3");
    // window.location.href="https://phimmoiyyy.net/phim-le/transformers-quai-thu-troi-day"
})