import actionTypes from './actionTypes';

export function increaseDBStatus(){
  return function(dispatch){
    dispatch({type: actionTypes.INCREASE_DBSTATUS});
  };
}

export function decreaseDBStatus(){
  return function(dispatch){
    dispatch({type: actionTypes.DECREASE_DBSTATUS});
  };
}