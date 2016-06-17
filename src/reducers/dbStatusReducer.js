import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function dbStatusReducer(state = initialState.dbStatus, action){
  if(action.type == actionTypes.INCREASE_DBSTATUS){
    return state + 1;
  }
  else if(action.type == actionTypes.DECREASE_DBSTATUS){
    return state == 0 ? 0 : state - 1;
  }

  return state;
}