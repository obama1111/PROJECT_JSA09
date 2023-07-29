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
const movies = [
    {
        id : 1,
        image : "https://i0.wp.com/thecinemafiles.com/wp-content/uploads/2018/01/Insidious-The-Last-Key-Banner.jpg?ssl=1",
        category : "LIFESTYLE",
        title : "Creating a Future Worth Living",
        description : "Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.",
        author : "Son",
        created_at : Date.now(),
        read_time: "10 mins"
    },

    {
        id : 2,
        image : "https://weliveentertainment.com/wp-content/uploads/2023/05/fast-x-banner.jpg",
        category : "LIFESTYLE",
        title : "Creating a Future Worth Living 1",
        description : "Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.",
        author : "Minh",
        created_at : Date.now(),
        read_time: "10 mins"
    },

    {
        id : 3,
        image : "https://i.ytimg.com/vi/PChsthTBZx8/maxresdefault.jpg",
        category : "LIFESTYLE",
        title : "Creating a Future Worth Living 2",
        description : "Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.",
        author : "Kien",
        created_at : Date.now(),
        read_time: "10 mins"
    }
];

movies.forEach((movie) => {
    document.getElementById("app").insertAdjacentHTML("beforeend", `
    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                    <a href="#_" class="block">
                        <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/fruit.jpg">
                    </a>
                    <div class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <span>Lifestyle</span>
                    </div>
                    <h2 class="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">${movie.title}</a></h2>
                    <p class="text-sm text-gray-500">Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.</p>
                    <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Mary Jane</a> · <span class="mx-1">April 17, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                </div>
                `)  
});

