const tmdbKey = "f3261e31fc71ead699940b6db6187a8c";
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
  try {
      let response = await fetch(urlToFetch, {method: 'GET'});
      if (response.ok) {
          let jsonResponse = await response.json();
          console.log
          let genres = jsonResponse.genres;
          return genres;
      }
  } catch(error) {
      console.log(error);
  };
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;
  try {
    let response = await fetch(urlToFetch, {method: 'GET'});
    if (response.ok) {
      let jsonResponse = await response.json();
      let movies = jsonResponse.results;
      return movies;
    }
  } catch(error) {
    console.log(error);
  };
};

const getMovieInfo = async movie => {
  const movieId = movie.id;
  console.log(movieId);
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;
  try {
    let response = await fetch(urlToFetch, {method: 'GET'});
    if (response.ok) {
      let movieInfo = await response.json();
      return movieInfo;
    }
  } catch(error) {
    console.log(error);
  };
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = await getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;