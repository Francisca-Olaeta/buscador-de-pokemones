import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './Context';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Pokemones from './Views/Pokemones';
import NotFound from './Views/NotFound';
import Detalles from './Views/Detalles';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [id, setId] = useState("");
  const [pokemonSelected, setPokemonSelected] = useState([]);
  const globalState = {pokemon, setPokemon, id, setId, pokemonSelected, setPokemonSelected};

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemones' element={<Pokemones />} />
          <Route path='/pokemones/:id' element={<Detalles />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
