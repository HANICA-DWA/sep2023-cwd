import React from "react";
import "./PokemonStatBlock.css";

export default function PokemonStatBlock(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th key="ability">ability</th>
            <th key="stats">rank</th>
          </tr>
        </thead>
        <tbody>
          {props.pokemon.stats.map((stat) => (
            <tr key={JSON.stringify(stat)}>
              <td>{stat.stat.name}</td>
              <td>{stat.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
