import {createStore, combineReducers} from 'redux'
import suggestions from './reducers/suggestions'
import login from './reducers/login'

const reducer = combineReducers({
   suggestions,
   login
})

const store = createStore(reducer)

export default store