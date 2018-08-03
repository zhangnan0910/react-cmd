import {createStore} from 'redux'
import reducer from './reducer/index'
let store = new createStore(reducer)
export default store