import {UPDATE_TEXT, FETCH_TEXT} from '../actions/index'

export default function (state = null, {type, payload}) {
  switch (type) {
    case UPDATE_TEXT:
      return {...state,
      ...payload}
    case FETCH_TEXT:
      return payload
    default:
      return state
  }
}