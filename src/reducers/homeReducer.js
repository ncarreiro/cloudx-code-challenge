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
      return {
        ...state,
        artists: action.data.results
      };
    }
    case SET_ALBUMS: {
      return {
        ...state,
        albums: action.data.results
      };
    }
    default:
      return state;
  }
}
