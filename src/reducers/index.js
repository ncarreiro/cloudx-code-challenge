import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import albumReducer from './albumReducer';

export default combineReducers({
  homeReducer,
  albumReducer
});