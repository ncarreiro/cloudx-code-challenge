import axios from 'axios';
import config from '../config';

import {
  GET_ARTISTS,
  SET_ARTISTS,
  GET_ALBUMS,
  SET_ALBUMS,
} from '../constants/actionTypes';

export function getArtists(name) {
  return async (dispatch) => {
    dispatch({type: GET_ARTISTS});
    // dispatch({ type: SHOW_LOADING });
    const {data} = await axios.get(`${config['SERVICE_URL']}/search?term=${name}&entity=allArtist&attribute=allArtistTerm`);
    dispatch({type: SET_ARTISTS, data});
    // dispatch({ type: HIDE_LOADING });
  }
}

export function getAlbums(name) {
  return async (dispatch) => {
    dispatch({type: GET_ALBUMS});
    // dispatch({ type: SHOW_LOADING });
    const {data} = await axios.get(`${config['SERVICE_URL']}/search?term=${name}&entity=album&attribute=albumTerm`);
    dispatch({type: SET_ALBUMS, data});
    // dispatch({ type: HIDE_LOADING });
  }
}