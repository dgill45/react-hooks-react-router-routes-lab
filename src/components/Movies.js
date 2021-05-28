import React from "react";
import { movies } from "../data";

function Movies() {
  
  const movieItems = movies.map(({title, time, genres}) => (
    <div key={title}>
      <h2>{title}</h2>
      <p>Screen Time: {time} minutes</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));
  return (
          <div>
            <h1>Movies Page</h1>
            {movieItems}
          </div>
);
}

export default Movies;
