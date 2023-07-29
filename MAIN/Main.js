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

nextSlide();
setInterval(nextSlide, 5000);

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
const slideEls = document.getElementsByClassName("slide");
Array.from(slideEls).forEach(slideEl => {
    slideEl.addEventListener("click", () => {
        const movieUrl = slideEl.dataset.movie;
        window.location.href = movieUrl;
    })
});




// MOVIE
// Danh sách thông tin về 3 bộ phim


