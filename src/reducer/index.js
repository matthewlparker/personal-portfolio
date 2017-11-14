import route from './route.js'
import {combineReducers} from 'redux'
import hamburger from './hamburger.js'
import coverToggle from './cover-toggle.js'
import brightTheme from './bright-theme.js'

export default combineReducers({route, hamburger, brightTheme, coverToggle})
