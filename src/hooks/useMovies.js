import { useEffect, useState } from 'react';

export default function useMovies() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [firstTime, setFirstTime] = useState(true);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const searchMovies = async () => {
      if (!firstTime & (value?.length > 0)) {
        const APIKEY = import.meta.env.VITE_API_KEY;
        const URL = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${value}`;

        try {
          setLoading(true);
          const data = await fetch(URL);
          const results = await data.json();
          results.Response === 'False'
            ? setNoResults(true)
            : setNoResults(false);
          setMovies(results.Search);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      setFirstTime(false);
    };
    searchMovies();
  }, [value]);

  const handleOnChange = (e) => {
    if (e.target.value.length < 3) {
      setValue(null);
      setMovies(null);
      setNoResults(false);
    }
    if (e.target.value.length > 2) setValue(e.target.value);
  };

  return {
    movies,
    handleOnChange,
    loading,
    noResults,
  };
}
