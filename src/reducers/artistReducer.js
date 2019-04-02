import {tail} from 'lodash';

import {
  CLEAN_ARTIST_DATA,
  SET_ARTIST_DATA
} from "../constants/actionTypes";

const initialState = {
  artistName: '',
  artistAlbums: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAN_ARTIST_DATA: {
      return initialState;
    }
    case SET_ARTIST_DATA: {
      const {results} = action.data;
      return {
        ...state,
        artistName: results[0].artistName,
        artistAlbums: tail(results)
      };
    }
    default:
      return state;
  }
}
