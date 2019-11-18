import { combineReducers } from 'redux';
import testReducer from './testReducer';
import organizationReducer from './organizationReducer';
import irrigationReducer from './irrigationReducer';
import infoReducer from './infoReducer';

const rootReducer = combineReducers({
  test: testReducer,
  info:infoReducer,
  organizations:organizationReducer,
  irrigationgroups:irrigationReducer

});
export default rootReducer;
