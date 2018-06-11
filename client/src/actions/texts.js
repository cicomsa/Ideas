
import {ADD_TEXT, FETCH_TEXTS} from './index' 
import * as request from 'superagent'
import {baseUrl} from '../constants'

export const fetchTexts = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  
  request
    .get(`${baseUrl}/texts/`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_TEXTS,
      payload: response.body
    }))
    .catch(err => console.log(err))

}

export const addText = (text) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/texts`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(text)
    .then(response => dispatch({
      type: ADD_TEXT,
      payload: response.body
    }))
}
