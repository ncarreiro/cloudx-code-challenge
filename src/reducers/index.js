import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import artistReducer from './artistReducer';
import homeReducer from './homeReducer';
import dialogReducer from './dialogReducer';
import { paginatorReducer } from 'react-redux-paginator';

export default combineReducers({
  albumReducer,
  artistReducer,
  homeReducer,
  dialogReducer,
  paginatorReducer
});