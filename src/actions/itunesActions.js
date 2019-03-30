import axios from 'axios';
import config from '../config';

import {
  GET_ARTISTS,
  SET_ARTISTS,
  GET_ALBUMS,
  SET_ALBUMS,
} from '../constants/actionTypes';

export function getArtists() {
  return async (dispatch) => {
    dispatch({type: GET_ARTISTS});
    // dispatch({ type: SHOW_LOADING });
    // const { data } = await axios.get(`${serviceUrl}/search?term=guns&entity=allArtist&attribute=allArtistTerm`, { params });
    const {data} = await axios.get(`${config['SERVICE_URL']}/search?term=guns&entity=allArtist&attribute=allArtistTerm`);
    dispatch({type: SET_ARTISTS, data});
    // dispatch({ type: HIDE_LOADING });
  }
}

export function getAlbums() {
  return async (dispatch) => {
    dispatch({type: GET_ALBUMS});
    // dispatch({ type: SHOW_LOADING });
    const {data} = await axios.get(`${config['SERVICE_URL']}/search?term=guns&entity=allAlbum&attribute=allAlbumTerm`);
    dispatch({type: SET_ALBUMS, data});
    // dispatch({ type: HIDE_LOADING });
  }
}