import { store } from '@things-factory/shell'
import more from './reducers/more'

export default function bootstrap() {
  store.addReducers({
    more
  })
}
