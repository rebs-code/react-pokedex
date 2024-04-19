import PropTypes from "prop-types";
import { useContext } from "react";
import { PokemonContext } from "../assets/PokemonContext";

export default function Input({ label }) {
  const { pokemonName, handleInputChange } = useContext(PokemonContext);
  return (
    <>
      <label>{label}</label>
      <input type="text" value={pokemonName} onChange={handleInputChange} />
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};
