import React from "react";
import "./App.css";
import FindPokemon from "./FindPokemon";
import Pokemon from "./Pokemon";
import SearchHistory from "./SearchHistory";
import eevee from "../eevee.json";

import { uniq } from "lodash";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      history: ["charizard", "vaporeon", "bulbasaur"],
      activePokemon: eevee,
    };
  }

  searchPokemon(query) {
    this.setState({ query: query });
    fetch(`${API_URL}/${query}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          activePokemon: data,
          history: uniq(this.state.history.concat(query)),
        });
      });
  }

  render() {
    // console.log(this.state.activePokemon)
    return (
      <div className="App">
        <header className="App-header">
          <p>Find your own Pokemon now!</p>
          <div className="search">
            <FindPokemon
              value={this.state.query}
              onChange={(e) => this.searchPokemon(e.target.value)}
            />
            <SearchHistory
              onClick={(historical) => {
                this.searchPokemon(historical);
              }}
              history={this.state.history}
            />
          </div>
        </header>
        <Pokemon pokemon={this.state.activePokemon} />
      </div>
    );
  }
}

export default App;
