import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import './styles.scss'

import Home from '../home'
import * as route from '../../action/route.js'

export default class Header extends React.Component{
  render() {
    return(
      <div className = "header-div">

        <h1> Matthew Parker </h1>

        <div className="header-nav">
          <ul>
            <li><Link to='/home'> Home </Link></li>
            <li><Link to='/projects'> Projects </Link></li>
            <li><Link to='/about'> About </Link></li>
            <li><Link to='/contact'> Contact Me </Link></li>
          </ul>
        </div>

      </div>
    )
  }
}
