import { ADD_MORENDA } from '../actions/more'

const INITIAL_STATE = {
  show: false,
  morendas: []
}

const more = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_MORE_PANEL':
      return {
        ...state,
        show: true
      }

    case 'CLOSE_MORE_PANEL':
      return {
        ...state,
        show: false
      }

    case ADD_MORENDA:
      let morenda = action.morenda
      return {
        ...state,
        morendas: [...state.morendas, morenda]
      }

    default:
      return state
  }
}

export default more
