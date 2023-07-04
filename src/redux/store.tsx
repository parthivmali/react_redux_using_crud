import { createStore } from 'redux'
import LoginReducer from '../redux/reducers/index'

const store = createStore(
    LoginReducer
)

export default store
