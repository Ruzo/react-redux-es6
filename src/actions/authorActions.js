import actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import * as dbStatusActions from './dbStatusActions';
import toastr from 'toastr';

export function loadAllAuthors(){
  return function(dispatch){
    dispatch({type: actionTypes.INCREASE_DBSTATUS});
    authorApi.getAllAuthors()
      .then(authors => {
        dispatch({type: actionTypes.LOAD_ALL_AUTHORS, authors});
        dispatch({type: actionTypes.DECREASE_DBSTATUS});
      })
      .catch(error => {
        toastr.error(error);
        dispatch({type: actionTypes.DECREASE_DBSTATUS});
      });
  };
}