import { ADD_MORENDA } from '../actions/more'

const INITIAL_STATE = {
  morendas: []
}

const more = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
