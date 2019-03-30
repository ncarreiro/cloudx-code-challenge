import axios from 'axios';
import config from '../config';

import {
  GET_ARTISTS,
  SET_ARTISTS,
  GET_ALBUMS,
  SET_ALBUMS,
  GET_ALBUM_BY_ID,
  SET_ALBUM_DATA
} from '../constants/actionTypes';

export function getArtists(artistName) {
  return async (dispatch) => {
    dispatch({type: GET_ARTISTS});
    // dispatch({ type: SHOW_LOADING });
    const {data} = await axios.get(`${config['SERVICE_URL']}/search?term=${artistName}&entity=allArtist&attribute=allArtistTerm`);
    dispatch({type: SET_ARTISTS, data});
    // dispatch({ type: HIDE_LOADING });
  }
}

export function getAlbums(albumName) {
  return async (dispatch) => {
    dispatch({type: GET_ALBUMS});
    // dispatch({ type: SHOW_LOADING });
    const {data} = await axios.get(`${config['SERVICE_URL']}/search?term=${albumName}&entity=album&attribute=albumTerm`);
    dispatch({type: SET_ALBUMS, data});
    // dispatch({ type: HIDE_LOADING });
  }
}

export function getAlbumById(albumId) {
  return async (dispatch) => {
    dispatch({type: GET_ALBUM_BY_ID});
    // dispatch({ type: SHOW_LOADING });
    const {data} = await axios.get(`${config['SERVICE_URL']}/lookup?id=${albumId}&entity=song`);
    dispatch({type: SET_ALBUM_DATA, data});
    // dispatch({ type: HIDE_LOADING });
  }
}