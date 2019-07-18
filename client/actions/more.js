import { store } from '@things-factory/shell'

export const ADD_MORENDA = 'ADD_MORENDA'

export const openMorePanel = () => {
  var state = store.getState()
  if (state.more.show) {
    return
  }

  store.dispatch({
    type: 'OPEN_MORE_PANEL'
  })
}

export const closeMorePanel = () => {
  store.dispatch({
    type: 'CLOSE_MORE_PANEL'
  })
}
