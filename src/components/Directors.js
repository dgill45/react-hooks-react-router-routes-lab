import React from "react";
import { directors } from "../data";

function Directors() {
  const directorItems = directors.map(({name, movies}) => 
    <div key ={name}>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  );

  return (
        <div>
          <h1>Directors Page</h1>
          {directorItems}
        </div>
  )}

export default Directors;
