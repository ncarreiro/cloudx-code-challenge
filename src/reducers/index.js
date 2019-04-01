import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import homeReducer from './homeReducer';
import dialogReducer from './dialogReducer';
import { paginatorReducer } from 'react-redux-paginator';

export default combineReducers({
  albumReducer,
  homeReducer,
  dialogReducer,
  paginatorReducer
});