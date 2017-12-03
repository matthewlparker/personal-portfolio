import route from './route.js'
import focus from './focus.js'
import userName from './user-name.js'
import {combineReducers} from 'redux'
import enterSite from './enter-site.js'
import pageActive from './page-active.js'
import coverToggle from './cover-toggle.js'
import userPortrait from './user-portrait.js'
import setBackground from './set-background.js'

export default combineReducers({route, coverToggle, enterSite, focus, setBackground, userName, userPortrait, pageActive})
