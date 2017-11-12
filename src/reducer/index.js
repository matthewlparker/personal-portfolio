import route from './route.js'
import {combineReducers} from 'redux'
import hamburger from './hamburger.js'
import viewActions from './viewActions.js'

export default combineReducers({route, hamburger, viewActions})
