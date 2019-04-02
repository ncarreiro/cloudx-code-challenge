import axios from 'axios';
import config from '../config';

import {
  CLEAN_HOME_DATA,
  GET_ARTISTS,
  SET_ARTISTS,
  GET_ALBUMS,
  SET_ALBUMS,
  GET_ALBUM_BY_ID,
  SET_ALBUM_DATA,
  GET_ARTIST_BY_ID,
  SET_ARTIST_DATA,
  SHOW_ERROR
} from '../constants/actionTypes';

export function getArtists(artistName) {
  return async dispatch => {
    dispatch({type: CLEAN_HOME_DATA});
    dispatch({type: GET_ARTISTS});
    const {data} = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}${config['SERVICE_URL']}/search?term=${artistName}&entity=allArtist`);
    if (data.results.length) {
      dispatch({type: SET_ARTISTS, data});
    } else {
      dispatch({type: SHOW_ERROR});
    }
    return data;
  }
}

export function getAlbums(artistName) {
  return async dispatch => {
    dispatch({type: CLEAN_HOME_DATA});
    dispatch({type: GET_ALBUMS});
    const {data} = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}${config['SERVICE_URL']}/search?term=${artistName}&entity=album`);
    if (data.results.length) {
      dispatch({type: SET_ALBUMS, data});
    } else {
      dispatch({type: SHOW_ERROR});
    }
    return data;
  }
}

export function getArtistAlbumsByName(artistName) {
  return async dispatch => {
    dispatch({type: GET_ARTIST_BY_ID});
      const parsedArtistName = artistName
        .toLowerCase()
        .replace(/[^\w\s]/gi, '');

      const {data} = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}${config['SERVICE_URL']}/search?term=${parsedArtistName}&entity=album`);
      if (data.results.length) {
        dispatch({type: SET_ARTIST_DATA, data});
      } else {
        dispatch({type: SHOW_ERROR});
      }
      return data;
    }
}

export function getArtistAlbumsById(artistId) {
  return async dispatch => {
    dispatch({type: GET_ARTIST_BY_ID});
    const {data} = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}${config['SERVICE_URL']}/lookup?id=${artistId}&entity=album`);
    if (data.results.length) {
      dispatch({type: SET_ARTIST_DATA, data});
    } else {
      dispatch({type: SHOW_ERROR});
    }
    return data;
  }
}

export function getAlbumById(albumId) {
  return async dispatch => {
    dispatch({type: GET_ALBUM_BY_ID});
    const {data} = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}${config['SERVICE_URL']}/lookup?id=${albumId}&entity=song`);
    dispatch({type: SET_ALBUM_DATA, data});
    return data;
  }
}