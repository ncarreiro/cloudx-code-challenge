import {CLEAN_HOME_DATA, SET_ARTISTS, SET_ALBUMS} from "../constants/actionTypes";

const initialState = {
  artists: [],
  albums: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAN_HOME_DATA: {
      return initialState;
    }
    case SET_ARTISTS: {
      const artists = action.data.results;
      return {
        ...state,
        artists
      };
    }
    case SET_ALBUMS: {
      const albums = action.data.results;
      return {
        ...state,
        albums
      };
    }
    default:
      return state;
  }
}
