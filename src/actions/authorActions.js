import actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAllAuthors(){
  return function(dispatch){
    authorApi.getAllAuthors()
      .then(authors => dispatch({type: actionTypes.LOAD_ALL_AUTHORS, authors}))
      .catch(error => {throw (error);});
  };
}