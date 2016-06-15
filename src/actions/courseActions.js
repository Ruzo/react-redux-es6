import actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function saveCourse(course){
  return function(dispatch, getState){
    return courseApi.saveCourse(course)
      .then(course => dispatch({type: actionTypes.SAVE_COURSE, course}))
      .catch(error => {throw (error);});
  };
}

export function loadAllCourses(courses){
  return function(dispatch){
    return courseApi.getAllCourses()
            .then(courses => dispatch({type: actionTypes.LOAD_ALL_COURSES, courses}))
            .catch(error => {throw (error);});
  };
}

export function getCourseById(id){
  return function(dispatch){
    return courseApi.getAllCourses()
      .then(courses => dispatch ({type: actionTypes.GET_COURSE_BY_ID, id, courses}))
      .catch(error => {throw (error);});
  };
}