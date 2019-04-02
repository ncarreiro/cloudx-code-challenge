import {tail} from 'lodash';

import {
  CLEAN_ALBUM_DATA,
  SET_ALBUM_DATA} from "../constants/actionTypes";

const initialState = {
  albumName: '',
  albumTracks: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAN_ALBUM_DATA: {
      return initialState;
    }
    case SET_ALBUM_DATA: {
      const {results} = action.data;
      return {
        ...state,
        artistName: results[0].artistName,
        albumName: results[0].collectionName,
        albumArtwork: results[0].artworkUrl100,
        albumTracks: tail(results)
      };
    }
    default:
      return state;
  }
}
