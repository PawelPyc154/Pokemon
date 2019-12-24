import Axios from 'axios';

export const LOAD_POKEMON = 'LOAD_POKEMON';

export const setLoadPokemon = (page) => async (dispatch) => {
  dispatch({ type: LOAD_POKEMON, payload: [] });

  try {
    const res = await Axios.get(
      `http://localhost:3000/pokemon/?_page=${page}&_limit=12`,
    );

    dispatch({ type: LOAD_POKEMON, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
