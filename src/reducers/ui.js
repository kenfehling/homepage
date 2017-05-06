import {CHANGE_BACKGROUND} from '../constants/ActionTypes'

const initialState = {
  background: 'Sunset'
}

export default (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_BACKGROUND:
      return {...state, background: action.background}
  }
  return state
}