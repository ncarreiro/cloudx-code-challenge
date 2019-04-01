import axios from 'axios';
import config from '../config';

import {
  CLEAN_HOME_DATA,
  GET_ARTISTS,
  SET_ARTISTS,
  GET_ALBUMS,
  SET_ALBUMS,
  GET_ALBUM_BY_ID,
  SET_ALBUM_DATA
} from '../constants/actionTypes';

export function getArtists(artistName) {
  return async dispatch => {
    dispatch({type: CLEAN_HOME_DATA});
    dispatch({type: GET_ARTISTS});
    const {data} = await axios.get(`${config['SERVICE_URL']}/search?term=${artistName}&entity=allArtist`);
    dispatch({type: SET_ARTISTS, data});
    return data.results;
  }
}

export function getAlbums(albumName) {
  return async dispatch => {
    dispatch({type: CLEAN_HOME_DATA});
    dispatch({type: GET_ALBUMS});
    const {data} = await axios.get(`${config['SERVICE_URL']}/search?term=${albumName}&entity=album`);
    dispatch({type: SET_ALBUMS, data});
    return data.results;
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