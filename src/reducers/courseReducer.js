import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch (action.type) {

    case actionTypes.SAVE_COURSE:
      return [...state, Object.assign({}, action.course)];

    case actionTypes.LOAD_ALL_COURSES:
      return action.courses;

    case actionTypes.GET_COURSE_BY_ID:
      return action.courses.filter(course => course.id == action.id);

    default:
      return state;
  }
}