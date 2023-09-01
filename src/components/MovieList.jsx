import Movie from './Movie'

export default function MovieList ({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <Movie
            src={movie.Poster}
            title={movie.Title}
            year={movie.Year}
          />
        </li>
      ))}
    </ul>
  )
}
