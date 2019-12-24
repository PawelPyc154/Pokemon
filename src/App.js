import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import { setLoadPokemon } from './state/pokemon/action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadPokemon());
  }, [dispatch]);

  const pokemonsStore = useSelector((state) => state.pokemonReducer.pokemon);
  console.log(pokemonsStore);

  return (
    <div className="Container">
      {pokemonsStore &&
        pokemonsStore.map((pokemon) => (
          <div className="pokemonCard" key={pokemon.id}>
            <img src={pokemon.img} alt="" />
            <b>{`#${pokemon.num} ${pokemon.name}`}</b>
            <div className="weaknessesContainer">
              {pokemon.weaknesses.map((weaknesse) => (
                <div key={weaknesse} className={`${weaknesse} weaknesseItem`}>
                  {weaknesse}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
