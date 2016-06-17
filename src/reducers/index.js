import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import dbStatus from './dbStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  dbStatus
});

export default rootReducer;