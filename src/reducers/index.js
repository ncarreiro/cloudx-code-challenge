import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import homeReducer from './homeReducer';
import dialogReducer from './dialogReducer';

export default combineReducers({
  albumReducer,
  homeReducer,
  dialogReducer
});