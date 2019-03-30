import axios from 'axios'
// const serviceUrl = process.env.ITUNES_URL.trim()

import {
  SET_ARTISTS,
} from '../constants/actionTypes'

export function getArtists() {
  return async (dispatch, getState) => {
    // dispatch({ type: SHOW_LOADING })
    // const { data } = await axios.get(`${serviceUrl}/search?term=guns&entity=allArtist&attribute=allArtistTerm`, { params })
    const {data} = await axios.get('/search?term=guns&entity=allArtist&attribute=allArtistTerm')
    dispatch({type: SET_ARTISTS, data})
    // dispatch({ type: HIDE_LOADING })
  }
}
