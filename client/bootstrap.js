import { store } from '@things-factory/shell'
import more from './reducers/more'
import { closeMorePanel, openMorePanel } from './actions/more'

export default function bootstrap() {
  store.addReducers({
    more
  })

  window.onpopstate = event => {
    if (event.state && event.state.more) {
      /*
       * history.forward() 에 의해서 들어오는 경우에는, event.state.more가 true일 수 있다.
       * 이 경우에는 more-panel을 open한다.
       */
      openMorePanel()
    } else {
      closeMorePanel()
    }
  }
}
