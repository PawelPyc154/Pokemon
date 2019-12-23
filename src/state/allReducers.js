import { combineReducers } from 'redux';
import pokemonReducer from './pokemon/reducer';

const allReducers = combineReducers({ pokemonReducer });

export default allReducers;
