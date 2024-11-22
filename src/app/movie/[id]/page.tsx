import React from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const Movie = async (movieId: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  const movie = await res.json();
  console.log(movie);
  return <div>movie</div>;
};

export default Movie;
