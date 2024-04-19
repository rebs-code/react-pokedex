import "./App.css";
import Pokemon from "./components/Pokemon";
import { PokemonProvider } from "./assets/PokemonContext";

function App() {
  return (
    <>
      <PokemonProvider>
        <Pokemon />
      </PokemonProvider>
    </>
  );
}

export default App;
