import {
  SET_HOME_SEARCH_VALUE,
  SET_HOME_SEARCH_FILTER
} from '../constants/actionTypes';

export function setHomeSearchValue(value) {
  return async dispatch => {
    dispatch({type: SET_HOME_SEARCH_VALUE, value});
  }
}

export function setHomeSearchFilter(value) {
  return async dispatch => {
    dispatch({type: SET_HOME_SEARCH_FILTER, value});
  }
}