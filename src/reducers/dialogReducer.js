import {
  SHOW_ERROR,
  HIDE_ERROR
} from "../constants/actionTypes";

const initialState = {
  showError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR: {
      return {
        ...state,
        showError: true
      };
    }
    case HIDE_ERROR: {
      return {
        ...state,
        showError: false
      };
    }
    default:
      return state;
  }
}
