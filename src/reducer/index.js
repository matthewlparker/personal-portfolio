import route from './route.js'
import {combineReducers} from 'redux'
import hamburger from './hamburger.js'
import coverToggle from './cover-toggle.js'
import lightTheme from './light-theme.js'

export default combineReducers({route, hamburger, lightTheme, coverToggle})
