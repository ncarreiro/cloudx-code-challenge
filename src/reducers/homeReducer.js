import {SET_ARTISTS, SET_ALBUMS} from "../constants/actionTypes";

const initialState = {
  artists: [],
  albums: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ARTISTS: {
      const {results} = action.data;
      return {
        ...state,
        artists: results
      };
    }
    case SET_ALBUMS: {
      const {albums} = action.data;
      return {
        ...state,
        albums
      };
    }
    default:
      return state;
  }
}
