import React from "react";
import { actors } from "../data";

function Actors() {
  const actorItems = actors.map(({name, movies}) => 
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
      <h1>Actors Page</h1>
      {actorItems}
    </div>
  ) ;
}

export default Actors;
