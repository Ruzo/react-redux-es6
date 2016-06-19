import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch (action.type) {

    case actionTypes.SAVE_COURSE:
      return [...state, Object.assign({}, action.course)];

    case actionTypes.UPDATE_COURSE:
      return [...state.filter(course => course.id != action.course.id), Object.assign({}, action.course)];

    case actionTypes.DELETE_COURSE:
      return [...state.filter(course => course.id != action.courseId)];

    case actionTypes.LOAD_ALL_COURSES:
      return action.courses;

    case actionTypes.GET_COURSE_BY_ID:
      return state.filter(course => course.id == action.id)[0];

    default:
      return state;
  }
}