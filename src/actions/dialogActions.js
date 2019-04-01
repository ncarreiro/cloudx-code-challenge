import {
  SHOW_ERROR,
  HIDE_ERROR
} from '../constants/actionTypes';

export function showError() {
  return async dispatch => {
    dispatch({type: SHOW_ERROR});
  }
}

export function hideError() {
  return async dispatch => {
    dispatch({type: HIDE_ERROR});
  }
}