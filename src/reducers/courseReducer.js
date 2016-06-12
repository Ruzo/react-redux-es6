import actionType from '../constants/courseConstants';

export default function courseReducer(state = [], action){
  switch (action.type) {
    case actionType.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}