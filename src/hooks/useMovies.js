import { useEffect, useState } from 'react';
import searchMovies from '../services/fetch';

export default function useMovies() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [firstTime, setFirstTime] = useState(true);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      if (!firstTime & (value?.length > 0)) {
        try {
          const data = await searchMovies(value);
          setLoading(true);

          data.Response === 'False' ? setNoResults(true) : setNoResults(false);
          setMovies(data.Search);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      setFirstTime(false);
    };
    getMovies();
  }, [value]);

  const handleOnChange = (e) => {
    if (e.target.value.length < 3) {
      setValue(null);
      setMovies(null);
      setNoResults(false);
    } else {
      setValue(e.target.value);
    }
  };

  return {
    movies,
    handleOnChange,
    loading,
    noResults,
  };
}
