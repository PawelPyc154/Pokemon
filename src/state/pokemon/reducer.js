import { LOAD_POKEMON } from './action';

const pokemonsState = {};

const pokemonReducer = (state = pokemonsState, action) => {
  switch (action.type) {
    case LOAD_POKEMON:
      return action.payload;
    default:
      return state;
  }
};
export default pokemonReducer;
