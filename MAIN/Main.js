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

const btnNext = document.getElementById("nextButton");
btnNext.addEventListener("click", nextSlide);

const prevBtn = document.getElementById("prevButton");
prevBtn.addEventListener("click", prevSlide);

showSlide();

const themeBG = document.getElementById("theme-icon");
const NewIcon = "/IMGS/3.png"
const LastIcon = "/IMGS/2.png"
let themeOn = false;

function Darktheme() {
    const btn_color = document.getElementById("search_btn")
    btn_color.style.backgroundColor = "black"
    btn_color.style.color = "white"
    // btn_color.addEventListener("focusin", () => {
    //     btn_color.color = "white"
    // })
    const search_color = document.getElementById("search_bar")
    search_color.style.backgroundColor = "#212F3D"


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
    const btn_color = document.getElementById("search_btn")
    btn_color.style.backgroundColor = "#F0F0F0"
    btn_color.style.color = "black"
    // btn_color.addEventListener("focus-in", () => {
    //     btn_color.color = "black"
    // })



    const search_color = document.getElementById("search_bar")
    search_color.style.backgroundColor = "white"
    
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
})


// Click để mở phim trong slide show
const slideEls = document.getElementsByClassName("slide");
Array.from(slideEls).forEach(slideEl => {
    slideEl.addEventListener("click", () => {
        const movieUrl = slideEl.dataset.movie;
        window.location.href = movieUrl;
    })
});
// boxes
const Place1 = document.getElementById("tittle_box1");
const Place2 = document.getElementById("tittle_box2");
const Place3 = document.getElementById("tittle_box3");

const clicked1 = document.getElementById("box1");
clicked1.addEventListener("click", () => {
    Place1.scrollIntoView({ behavior: 'smooth' })
})
const clicked2 = document.getElementById("box2");
clicked2.addEventListener("click", () => {
    Place2.scrollIntoView({ behavior: 'smooth' })
})
const clicked3 = document.getElementById("box3");
clicked3.addEventListener("click", () => {
    Place3.scrollIntoView({ behavior: 'smooth' })
})

// MOVIE
// Get the necessary elements from the DOM
const movieContainer = document.querySelector('.movie-container');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

// Array of movie objects
const movies = [
  {
    title: "Movie 3",
    poster: "https://phimmoiyyy.net/wp-content/uploads/2023/03/John-Wick-4.jpg",
    description: "spiderman",
  },
  {
    title: "Movie 4",
    poster: "https://phimmoiyyy.net/wp-content/uploads/2023/06/Elemental.jpg",
    description: "Description of Movie 4",
  },
  
  {
    title: "Movie 5",
    poster: "https://phimmoiyyy.net/wp-content/uploads/2022/07/hon-ma-khong-dau.jpg",
    description: "Description of Movie 5",
  },
  
  {
    title: "Movie 6",
    poster: "https://phimmoiyyy.net/wp-content/uploads/2023/06/Nguoi-Nhen-Du-Hanh-Vu-Tru-Nhen-2023.jpg",
    description: "Description of Movie 6",
  },
  
  {
    title: "Movie 7",
    poster: "https://phimmoiyyy.net/wp-content/uploads/2023/07/quy-quyet-cua-do-vo-dinh.jpg",
    description: "Description of Movie 7",
  },
  
  {
    title: "Movie 8",
    poster: "https://phimmoiyyy.net/wp-content/uploads/2023/05/Qua-Nhanh-Qua-Nguy-Hiem-10-2023.jpg",
    description: "Description of Movie 8",
  },
  {
    title: "Movie 9",
    poster: "https://phimmoiyyy.net/wp-content/uploads/2023/06/Phim-Transformers-7.jpg",
    description: "Description of Movie 9",
  },
  {
    title: "Movie 10",
    poster: "https://phimmoiyyy.net/wp-content/uploads/2023/07/Oppenheimer.jpg",
    description: "Description of Movie 10",
  },
];

movies.forEach(movie => {
  movie.description = "obama123"
});


let currentIndex = 0;

// Function to display the current movie
function displayMovie() {
  movieContainer.innerHTML = ""
 movies.forEach (function (movie) {
  movieContainer.innerHTML += `
    <div class="movie_item">
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.description}</h3>
    </div>
  `;
 }) 
}




// Function to display the current movie
function displayMovie() {
  movieContainer.innerHTML = ""
 movies.forEach (function (movie) {
  movieContainer.innerHTML += `
    <div class="movie_item">
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.description}</h3>
    </div>
  `;
 }) 
}











// Function to handle the next button click
function handleNextClick() {
    movieContainer.scrollLeft += 160
  }
  
  // Function to handle the previous button click
  function handlePreviousClick() {
    movieContainer.scrollLeft -= 160
  }
  
  // Add event listeners to the buttons
  nextBtn.addEventListener('click', handleNextClick);
  previousBtn.addEventListener('click', handlePreviousClick);

  displayMovie();

// Danh sách thông tin về 3 bộ phim


// footer
const contactUS = [
    {
        id: "1",
        name: "Nguyễn Hoàng Sơn",
        phoneNum: "SĐT: 0123456789",
        facebook: "https://www.facebook.com/tatsunori.makoto.3"
    },
    {
        id: "2",
        name: "Hoàng Phúc Sáng",
        phoneNum: "SĐT: 0123123123",
        facebook: "https://www.facebook.com/SacChocoBer"
    },
]
contactUS.forEach(text => {
    document.getElementById("texts").insertAdjacentHTML("afterbegin",
    `
        <p>${text.name}</p>
        <p>${text.phoneNum}</p>
        <p>${text.facebook}</p>
    `
)
});