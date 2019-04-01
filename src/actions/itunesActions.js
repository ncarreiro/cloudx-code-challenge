import axios from 'axios';
import config from '../config';

import {
  GET_ARTISTS,
  SET_ARTISTS,
  GET_ALBUMS,
  SET_ALBUMS,
  GET_ALBUM_BY_ID,
  SET_ALBUM_DATA,
  SHOW_ERROR
} from '../constants/actionTypes';

export function getArtists(artistName) {
  return async dispatch => {
    dispatch({type: GET_ARTISTS});
    const {data} = await axios.get(`${config['SERVICE_URL']}/search?term=${artistName}&entity=allArtist`);
    if (data.results.length) {
      dispatch({type: SET_ARTISTS, data});
    } else {
      dispatch({type: SHOW_ERROR});
    }
    return data;
  }
}

export function getAlbums(albumName) {
  return async dispatch => {
    dispatch({type: GET_ALBUMS});
    const {data} = await axios.get(`${config['SERVICE_URL']}/search?term=${albumName}&entity=album`);
    if (data.results.length) {
      dispatch({type: SET_ALBUMS, data});
    } else {
      dispatch({type: SHOW_ERROR});
    }
    return data;
  }
}

export function getAlbumById(albumId) {
  return async dispatch => {
    dispatch({type: GET_ALBUM_BY_ID});
    const {data} = await axios.get(`${config['SERVICE_URL']}/lookup?id=${albumId}&entity=song`);
    dispatch({type: SET_ALBUM_DATA, data});
    return data;
  }
}