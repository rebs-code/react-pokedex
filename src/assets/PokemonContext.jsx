import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonName, setPokemonName] = useState("mankey");
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (pokemonName !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error("Error:", error));
    }
  }, [pokemonName]);

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  return (
    <PokemonContext.Provider
      value={{ pokemonName, pokemonData, handleInputChange }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
