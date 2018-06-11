import {ADD_TEXT, FETCH_TEXTS, FETCH_TEXT, REMOVE_TEXT, UPDATE_TEXT} from './index' 
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

export const fetchText = (textId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/texts/${textId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_TEXT,
      payload: response.body
    }))
    .catch(err => console.log(err))
  }

export const deleteText = (textId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
  .delete(`${baseUrl}/texts/${textId}`)
  .set('Authorization', `Bearer ${jwt}`)
  .send(textId)
  .then(response => dispatch({
    type: REMOVE_TEXT,
    payload: textId
  }))
  .catch(err => console.log(err))
  }

export const updateText = (textId, updates) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .put(`${baseUrl}/texts/${textId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(updates)
    .then(response => dispatch({
      type: UPDATE_TEXT,
      payload: response.body
    }))
    .catch(err => console.log(err))
}
