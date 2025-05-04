const genres = [
    "Action", "Romance", "Comedy", "Horror", "Drama", "Thriller",
    "Adventure", "Fantasy", "Sci-Fi", "Mystery", "Animation",
    "Family", "History", "Documentary"
  ];
  
  // Manually defined images for each movie (replace these URLs with your own images)
  const movieImages = [
    "images/action1.jpeg",
    
    "images/How to Lose a Guy in 10 Days 2003.jpeg",
    "images/bhyl bhuliya.jpeg",
    "images/horror 1.jpeg",
    "images/life hayat.jpeg",
    "images/Andy Dufresne - The man who crawled through hell to find freedom_.jpeg",
    "images/Up.jpeg",
    "images/adventure.jpeg",
    "images/twilight poster fantasy.jpeg",
    "images/Murder Mystery.jpeg",
    "images/✨PASANGERS ♥️.jpeg",
    "images/jab we met (2007).jpeg",
    "images/Padmaavat (2018).jpeg",
    "images/documentry1.jpeg",
    "images/movie11.jpg",
    "images/Cruella.jpeg",
    "images/Lord of the Rings - The Fellowship of the Ring.jpeg",
    "images/It - Chapter Two.jpeg",
    "images/Tamasha (2015).jpeg",
    "images/swades.jpeg"
  ];
  
  // Update the movies array with the manually added images
  const movies = Array.from({ length: 20 }, (_, i) => ({
    title: `Movie ${i + 1}`,
    genre: genres[i % genres.length],
    img: movieImages[i]  // Use the manually defined image URLs
  }));
  
  const movieList = document.getElementById("movieList");
  const genreBar = document.getElementById("genreBar");
  const extraGenres = document.getElementById("extraGenres");
  const dropdownBtn = document.getElementById("dropdownBtn");
  
  let selectedGenres = new Set();
  
  // Create genre buttons
  genres.forEach((genre, index) => {
    const btn = document.createElement("div");
    btn.textContent = genre;
    btn.className = "genre";
    btn.addEventListener("click", () => {
      btn.classList.toggle("selected");
      selectedGenres.has(genre) ? selectedGenres.delete(genre) : selectedGenres.add(genre);
      highlightMovies();
    });
  
    if (index < 12) {
      genreBar.insertBefore(btn, dropdownBtn);
    } else {
      extraGenres.appendChild(btn);
    }
  });
  
  dropdownBtn.addEventListener("click", () => {
    extraGenres.style.display = extraGenres.style.display === "none" ? "flex" : "none";
  });
  
  // Spacer for animation
  const spacerStart = document.createElement("div");
  spacerStart.style.minWidth = "60px";
  movieList.appendChild(spacerStart);
  
  // Add movie cards
  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.dataset.genre = movie.genre;
  
    const img = document.createElement("img");
    img.src = movie.img;
    img.alt = movie.title;
  
    card.appendChild(img);
    movieList.appendChild(card);
  });
  
  // End spacer
  const spacerEnd = document.createElement("div");
  spacerEnd.style.minWidth = "60px";
  movieList.appendChild(spacerEnd);
  
  // Highlight based on genres
  function highlightMovies() {
    const cards = document.querySelectorAll(".movie-card");
    cards.forEach(card => {
      if (selectedGenres.size === 0 || selectedGenres.has(card.dataset.genre)) {
        card.classList.add("highlight");
      } else {
        card.classList.remove("highlight");
      }
    });
  }
  
  highlightMovies();
  