import React from "react";
import PokemonStatBlock from "./PokemonStatBlock";
import "./Pokemon.css";

export default function Pokemon(props) {
  return (
    <>
      <h1>{props.pokemon.name}</h1>
      <div className="Pokemon">
        <PokemonStatBlock pokemon={props.pokemon} />
        <img
          alt={`${props.pokemon.name} Pokemon`}
          src={props.pokemon.sprites.front_default}
        />
      </div>
    </>
  );
}
