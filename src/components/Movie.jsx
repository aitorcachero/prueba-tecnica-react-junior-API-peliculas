export default function Movie({ src, title, year }) {
  return (
    <article className="movie">
      <h4>{title}</h4>
      <p>Año: {year}</p>
      <img src={src} alt={title} />
    </article>
  );
}
