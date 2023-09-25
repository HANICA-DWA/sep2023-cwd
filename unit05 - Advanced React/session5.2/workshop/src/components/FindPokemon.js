import React from "react";
import "./FindPokemon.css";

export default function FindPokemon(props) {
  return (
    <>
      <input value={props.value} onChange={props.onChange} />
    </>
  );
}
