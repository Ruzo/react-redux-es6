import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function dbStatusReducer(state = initialState.dbStatus, action){
  if(action.type == actionTypes.INCREASE_DBSTATUS){
    state++;
    return state;
  }
  else if(action.type == actionTypes.DECREASE_DBSTATUS){
    state--;
    return state < 0 ? 0 : state;
  }

  return state;
}