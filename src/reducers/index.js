import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import artistReducer from './artistReducer';
import dialogReducer from './dialogReducer';
import homeReducer from './homeReducer';
import loaderReducer from './loaderReducer';

export default combineReducers({
  albumReducer,
  artistReducer,
  dialogReducer,
  homeReducer,
  loaderReducer
});