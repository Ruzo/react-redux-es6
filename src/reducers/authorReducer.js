import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action){
  switch (action.type) {
    case actionTypes.LOAD_ALL_AUTHORS:
      return action.authors;

    default:
      return state;
  }
}