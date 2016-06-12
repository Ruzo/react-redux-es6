import actionType from '../constants/courseConstants';

export function createCourse(course){
  return {type: actionType.CREATE_COURSE, course};
}