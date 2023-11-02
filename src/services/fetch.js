export default async function searchMovies(value) {
  const APIKEY = import.meta.env.VITE_API_KEY;
  const URL = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${value}`;

  const data = await fetch(URL);
  const results = await data.json();
  return results;
}
