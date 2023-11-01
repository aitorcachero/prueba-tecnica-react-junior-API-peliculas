import Loader from './components/Loader/Loader';
import MovieList from './components/MovieList';
import useMovies from './hooks/useMovies';
import { debounce } from 'debounce';

function App() {
  const { movies, loading, handleOnChange, noResults } = useMovies();

  return (
    <>
      <div className="parallax">
        <h1>Buscador de peliculas y juegos - API React</h1>
        <form onSubmit={null}>
          <input
            type="text"
            onChange={debounce(handleOnChange, 1000)}
            placeholder="Matrix, Star Wars..."
          />
        </form>
        {loading && <Loader />}
        {movies && <MovieList movies={movies} />}
        {noResults && movies !== '' && (
          <h4 className="no-results">
            No se encontraron resultados para la busqueda
          </h4>
        )}
      </div>
    </>
  );
}
export default App;
