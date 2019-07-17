import { store } from '@things-factory/shell'

export const ADD_MORENDA = 'ADD_MORENDA'

export const openMorePanel = () => {
  var state = store.getState()
  if (state.more.show) {
    return
  }

  /*
   * 현재 history state에 more 값이 없으면, history에 추가한다.
   * - history back 시에 more를 클로즈하는 동작으로 연결하기 위해서이다.
   */
  if (!history.state || !history.state.more) {
    history.pushState({ more: true }, '', document.location)
  }

  store.dispatch({
    type: 'OPEN_MORE_PANEL'
  })
}

export const closeMorePanel = () => {
  /*
   * 현재 history state에 more 값이 있으면, history를 back 시킨다.
   * 일관성있게 history.back()에 의해서만 more-panel 닫히도록 하기 위해서이다.
   */
  if (history.state && history.state.more) {
    history.back()
  } else {
    store.dispatch({
      type: 'CLOSE_MORE_PANEL'
    })
  }
}

export const toggleMorePanel = () => {
  var state = store.getState()

  if (state.more.show) {
    closeMorePanel()
  } else {
    openMorePanel()
  }
}
