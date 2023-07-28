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

setInterval(nextSlide, 10000);

const nextbtn = document.getElementById("nextButton");
nextbtn.addEventListener("click", () => {
    nextSlide()
    // setInterval(nextSlide ,5000);
})

const themeBG = document.getElementById("theme-icon");
const NewIcon = "/IMGS/3.png"
const LastIcon = "/IMGS/2.png"
let themeOn = false;

function Darktheme() {
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#212F3D";
    const text_boxes = document.getElementsByClassName("nav-tabs");
    for (const textBox of text_boxes) {
        textBox.style.color = "#FFFFFF";
    }
    themeBG.style.backgroundColor = "yellow"
    themeBG.style.borderRadius = "2em"
    themeBG.src = NewIcon;
    themeBG.alt = "newicon"

}

function Lighttheme() {
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "white";
    const text_boxes = document.getElementsByClassName("nav-tabs");
    for (const textBox of text_boxes) {
        textBox.style.color = "black";
    }
    themeBG.style.backgroundColor = "#212F3D"
    themeBG.style.borderRadius = "2em"
    themeBG.src = LastIcon;
    themeBG.alt = "lasticon"
}

themeBG.addEventListener("click", () => {
    if (themeOn === false) {
        Darktheme();
        themeOn = true;
    } else {
        Lighttheme();
        themeOn = false;
    }

    const nextBtn = document.getElementById("nextButton");
    nextBtn.addEventListener("click", nextSlide);

    const prevBtn = document.getElementById("prevButton");
    prevBtn.addEventListener("click", prevSlide);

    showSlide();
})
// Click để mở phim trong slide show
// const Bannermovie1 = document.getElementById("movie1")
// Bannermovie1.addEventListener("click", () => {
//     // window.location.href="https://phimmoichilld.net/xem/quy-quyet-4-tap-full-pm497"
//     console.log("movie1");
// })

// const Bannermovie2 = document.getElementById("movie2")
// Bannermovie2.addEventListener("click", () => {
//     console.log("movie2");
//     // window.location.href="https://phimmoichilld.net/info/doctor-strange-in-the-multiverse-of-madness-2022-pm10159"
// })
// const Bannermovie3 = document.getElementById("movie3")
// Bannermovie3.addEventListener("click", () => {
//     console.log("movie3");
//     // window.location.href="https://phimmoiyyy.net/phim-le/transformers-quai-thu-troi-day"
// }