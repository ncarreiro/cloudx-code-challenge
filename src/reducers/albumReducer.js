import {tail} from 'lodash';

import {SET_ALBUM_DATA} from "../constants/actionTypes";

const initialState = {
  albumName: '',
  albumTracks: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ALBUM_DATA: {
      const {results} = action.data;
      return {
        ...state,
        albumName: results[0].albumName,
        albumTracks: tail(results)
      };
    }
    default:
      return state;
  }
}
