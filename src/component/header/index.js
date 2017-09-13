import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import './styles.scss'

import Home from '../home'
import * as route from '../../action/route.js'

export default class Header extends React.Component{
  render() {
    // <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    return(
      <div className='header-field'>

        <a className='logo-field' href='#'>
          <div className='running-lion'></div>
          <div className='logo-name'>
            <h1> Matthew Parker </h1>
            <h2> React & Full-Stack Developer </h2>
          </div>
        </a>

        <nav className='nav-field'>
          <ul>
            <li><Link to='/home'> Home </Link></li>
            <li><Link to='/projects'> Projects </Link></li>
            <li><Link to='/about'> About </Link></li>
            <li><Link to='/contact'> Contact Me </Link></li>
          </ul>
        </nav>

      </div>
    )
  }
}
