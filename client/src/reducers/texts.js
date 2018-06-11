import {ADD_TEXT, FETCH_TEXTS, REMOVE_TEXT} from '../actions/index'

export default function (state = [], {type, payload}) {
  switch (type) {
    case FETCH_TEXTS:
      return payload
    case ADD_TEXT:
      return state.concat(payload)
    case REMOVE_TEXT:
      return state.filter(text => text.id !== payload)
    default:
      return state
  }
}