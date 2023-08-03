// Get the necessary elements from the DOM
const movieContainer = document.querySelector('.movie-container');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

// Sample movie data
const movies = [
  { title: 'Movie 1', poster: 'poster1.jpg' },
  { title: 'Movie 2', poster: 'poster2.jpg' },
  { title: 'Movie 3', poster: 'poster3.jpg' },
  // Add more movie objects as needed
];

let currentIndex = 0;

// Function to display the current movie
function displayMovie() {
  const currentMovie = movies[currentIndex];
  const previousIndex = (currentIndex - 1 + movies.length) % movies.length;
  const previousMovie = movies[previousIndex];
  const nextIndex = (currentIndex + 1) % movies.length;
  const nextMovie = movies[nextIndex];

  movieContainer.innerHTML = `
    <div class="previous-movie">
      <img src="${previousMovie.poster}" alt="${previousMovie.title}">
      <h3>${previousMovie.title}</h3>
    </div>
    <div class="current-movie">
      <img src="${currentMovie.poster}" alt="${currentMovie.title}">
      <h3>${currentMovie.title}</h3>
    </div>
    <div class="next-movie">
      <img src="${nextMovie.poster}" alt="${nextMovie.title}">
      <h3>${nextMovie.title}</h3>
    </div>
  `;
}

// Function to handle the next button click
function handleNextClick() {
    currentIndex = (currentIndex + 1) % movies.length;
    displayMovie();
  }
  
  // Function to handle the previous button click
  function handlePreviousClick() {
    currentIndex = (currentIndex - 1 + movies.length) % movies.length;
    displayMovie();
  }
  
  // Add event listeners to the buttons
  nextBtn.addEventListener('click', handleNextClick);
  previousBtn.addEventListener('click', handlePreviousClick);
  
  // Display the initial movie
  displayMovie();