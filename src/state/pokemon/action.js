import Axios from 'axios';

export const LOAD_POKEMON = 'LOAD_POKEMON';

export const setLoadPokemon = () => async (dispatch) => {
  try {
    const res = await Axios.get(
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
    );
    dispatch({ type: LOAD_POKEMON, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
