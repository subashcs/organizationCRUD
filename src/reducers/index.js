import { combineReducers } from 'redux';
import testReducer from './testReducer';
import organizationReducer from './organizationReducer';
import irrigationReducer from './irrigationReducer';

const rootReducer = combineReducers({
  test: testReducer,
  organizations:organizationReducer,
  irrigationgroups:irrigationReducer

});
export default rootReducer;
