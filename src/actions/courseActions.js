import actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';
import * as dbStatusActions from './dbStatusActions';
import toastr from 'toastr';

export function saveCourse(course){
  return function(dispatch, getState){
    dispatch({type: actionTypes.INCREASE_DBSTATUS});
    // const action = course.id ? {type: actionTypes.UPDATE_COURSE, course} : {type: actionTypes.SAVE_COURSE, course};
    return courseApi.saveCourse(course)
      .then(course => {
        dispatch(course.id ? {type: actionTypes.UPDATE_COURSE, course} : {type: actionTypes.SAVE_COURSE, course});
        dispatch({type: actionTypes.DECREASE_DBSTATUS});
      })
      .catch(error => {
        toastr.error(error);
        dispatch({type: actionTypes.DECREASE_DBSTATUS});
        throw (error);
      });
  };
}

export function loadAllCourses(courses){
  return function(dispatch){
    dispatch({type: actionTypes.INCREASE_DBSTATUS});
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch({type: actionTypes.LOAD_ALL_COURSES, courses});
        dispatch({type: actionTypes.DECREASE_DBSTATUS});
      })
      .catch(error => {
        toastr.error(error);
        dispatch({type: actionTypes.DECREASE_DBSTATUS});
        throw (error);
      });
  };
}

export function getCourseById(id){
  return function(dispatch){
    dispatch({type: actionTypes.INCREASE_DBSTATUS});
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch ({type: actionTypes.GET_COURSE_BY_ID, id});
        dispatch({type: actionTypes.DECREASE_DBSTATUS});
      })
      .catch(error => {
        toastr.error(error);
        dispatch({type: actionTypes.DECREASE_DBSTATUS});
        throw (error);
      });
  };
}

export function deleteCourse(id){
  return function(dispatch){
    // dispatch({type: actionTypes.INCREASE_DBSTATUS});
    return courseApi.deleteCourse(id)
      .then(courseId => {
        dispatch({type: actionTypes.DELETE_COURSE, courseId});
        // dispatch({type: actionTypes.DECREASE_DBSTATUS});
      })
      .catch(error => {
        toastr.error(error);
        // dispatch({type: actionTypes.DECREASE_DBSTATUS});
        throw (error);
      });
  };
}