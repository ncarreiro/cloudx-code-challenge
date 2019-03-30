import {SET_ARTISTS, SET_ALBUMS} from "../constants/actionTypes";

const initialState = {
  artists: [],
  albums: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ARTISTS: {
      const {artists} = action.payload;
      return {
        ...state,
        artists
      };
    }
    case SET_ALBUMS: {
      const {albums} = action.payload;
      return {
        ...state,
        albums
      };
    }
    default:
      return state;
  }
}
