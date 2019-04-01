import {
  SET_HOME_SEARCH_VALUE,
  SET_HOME_SEARCH_FILTER,
  SET_ARTISTS,
  SET_ALBUMS
} from "../constants/actionTypes";

const initialState = {
  artists: [],
  albums: [],
  searchValue: '',
  searchFilter: 'albums',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_HOME_SEARCH_VALUE: {
      const searchValue = action.value;
      return {
        ...state,
        searchValue
      }
    }
    case SET_HOME_SEARCH_FILTER: {
      const searchFilter = action.value;
      return {
        ...state,
        searchFilter
      }
    }
    case SET_ARTISTS: {
      const artists = action.data.results;
      return {
        ...state,
        artists,
        albums: []
      };
    }
    case SET_ALBUMS: {
      const albums = action.data.results;
      return {
        ...state,
        albums,
        artists: []
      };
    }
    default:
      return state;
  }
}
