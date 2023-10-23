import { useState } from "react";
import withoutResults from "../noresult.json";

export function useMovies({ search }) {
  const [responseMovies, setResponseMovie] = useState([]);

  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const getMovies = () => {
    if (search) {
      // setResponseMovie(withResults);
      fetch(`https://www.omdbapi.com/?&apikey=9f5d91af&s=${search}`)
        .then((res) => res.json())
        .then((json) => {
          setResponseMovie(json);
        });
    } else {
      setResponseMovie(withoutResults);
    }
  };
  return { movies: mappedMovies, getMovies };
}
