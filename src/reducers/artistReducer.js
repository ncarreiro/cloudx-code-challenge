import {tail} from 'lodash';

import {SET_ARTIST_DATA} from "../constants/actionTypes";

const initialState = {
  artistName: '',
  artistAlbums: []
};

export default function (state = initialState, action) {
  switch (action.type) {
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
