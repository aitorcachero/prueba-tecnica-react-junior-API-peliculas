import debounce from 'just-debounce-it'
import { useState } from 'react'
import MovieList from './components/MovieList'
import Loader from './components/Loader'

const API_KEY = 'https://www.omdbapi.com/?apikey=789f9465&s='

function App () {
  const [movies, setMovies] = useState()
  const debounceSearchMovies = debounce(searchMoviesDebounce, 500)

  function searchMoviesDebounce (event) {
    const query = event.target.value

    event.preventDefault()
    fetch(`${API_KEY}${query}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search)
        setMovies(data.Search)
      })
  }

  function searchMovies (event) {
    const query = event.target[0].value

    event.preventDefault()
    fetch(`${API_KEY}${query}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
      })

    event.target.reset()
  }

  return (
    <>
    <h1>Buscador de peliculas - API React</h1>
      <form onSubmit={searchMovies}>
        <input type='text' onChange={debounceSearchMovies} />
        <button>Buscar</button>
      </form>
      {movies && <MovieList movies={movies} />}
    </>
  )
}
export default App
