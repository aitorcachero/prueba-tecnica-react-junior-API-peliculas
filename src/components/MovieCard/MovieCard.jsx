import './MovieCard.css';

export default function MovieCard({ src, title, year, type }) {
  return (
    <main className="main-card">
      <div className="card">
        <img src={src} alt="imagen de la pelicula/juego" />
        <div className="card-content">
          <h2>{title}</h2>

          <p style={{ fontSize: '20px' }}>
            {type === 'movie' ? 'Pelicula' : 'Juego'}
          </p>
          <a href="#" className="button">
            <span className="material-symbols-outlined">Año: {year}</span>
          </a>
        </div>
      </div>
    </main>
  );
}
