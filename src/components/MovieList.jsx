import MovieCard from './MovieCard/MovieCard';

export default function MovieList({ movies }) {
  console.log(movies);
  return (
    <div className="grid-container">
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <MovieCard
              src={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
