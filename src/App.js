import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import { setLoadPokemon } from './state/pokemon/action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadPokemon());
  }, []);

  const pokemonsStore = useSelector((state) => state.pokemonReducer.pokemon);
  console.log(pokemonsStore);

  return (
    <div className="App">
      {pokemonsStore && pokemonsStore.map((pokemon) => <div key={pokemon.id}>{pokemon.id}</div>)}
    </div>
  );
}

export default App;
