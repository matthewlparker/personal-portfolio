import route from './route.js'
import {combineReducers} from 'redux'
import hamburger from './hamburger.js'
import coverToggle from './cover-toggle.js'
import lightTheme from './light-theme.js'
import enterSite from './enter-site.js'
import setBackground from './set-background.js'
import userName from './user-name.js'
import userPortrait from './user-portrait'

export default combineReducers({route, hamburger, lightTheme, coverToggle, enterSite, setBackground, userName, userPortrait})
