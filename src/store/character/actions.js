import { GET_DATA, GET_ERROR, GET_PENDING, GET_DETAIL } from './actionTypes'
import axios from 'axios'

export const getData = () => {
  return dispatch => {
    // dispatch(clearData())
    dispatch(pending())
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
        dispatch(success(response.data.results))
      })
      .catch((err) => {
        dispatch(error(err))
      })
  }
}

export const getDataEpisode = () => {
  return dispatch => {
    // dispatch(clearData())
    dispatch(pending())
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then((response) => {
        dispatch(success(response.data.results))
      })
      .catch((err) => {
        dispatch(error(err))
      })
  }
}

function success(payload) {
  return { type: GET_DATA, payload }
}

function successDetail(payload) {
  return { type: GET_DETAIL, payload }
}

function error(payload) {
  return { type: GET_ERROR, payload }
}

function pending() {
  return { type: GET_PENDING }
}

