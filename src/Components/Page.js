import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setLoadPokemon } from '../state/pokemon/action';

import './Page.scss';

const Page = () => {
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(setLoadPokemon(page));
  }, [dispatch, page]);

  const pokemonsStore = useSelector((state) => state.pokemonReducer);

  return (
    <div className="Container">
      {pokemonsStore.length ? (
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
        ))
      ) : (
        <div style={{ fontSize: '50px' }}>Loader...</div>
      )}
    </div>
  );
};

export default Page;
