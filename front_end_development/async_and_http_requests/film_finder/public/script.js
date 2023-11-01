//import IMDB API key from hidden file
import { apiKey } from './confidential.js';

const tmdbKey = apiKey;
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
  console.log(urlToFetch);
  try {
      let response = await fetch(urlToFetch, {method: 'GET'});
      if (response.ok) {
          let jsonResponse = await response.json();
          let genres = jsonResponse.genres;
          return genres;
      }
  } catch(error) {
      console.log(error);
  };
};

const getMovies = () => {
const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
const movieInfo = document.getElementById('movieInfo');
if (movieInfo.childNodes.length > 0) {
  clearCurrentMovie();
};

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;