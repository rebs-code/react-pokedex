import Input from "./Input";
import { useContext } from "react";
import { PokemonContext } from "../assets/PokemonContext";

export default function Pokemon() {
  const { pokemonData } = useContext(PokemonContext);

  return (
    <div>
      <h2>Pokemon</h2>
      <hr />
      <Input label="Search a Pokemon" />
      <hr />
      <div>
        <ul>
          <li>Name: {pokemonData ? pokemonData.name : "Loading..."}</li>
          <li>
            Type: {pokemonData ? pokemonData.types[0].type.name : "Loading"}
          </li>
        </ul>
      </div>
      <div>
        <img
          src={
            pokemonData
              ? pokemonData.sprites.other["official-artwork"].front_default
              : "Loading image..."
          }
          alt="pokemon image"
        />
      </div>
    </div>
  );
}
