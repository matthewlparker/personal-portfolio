import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from '../home'
import * as route from '../../action/route.js'

class Header extends React.Component{
  render() {
    return(
      <div className = "header-div">
        <BrowserRouter>
          <div>
            <h1> Matthew Parker </h1>

            <div className="header-nav">
              <ul>
                <li><Link to='/home'> Home </Link></li>
                <li> Projects </li>
                <li> About </li>
                <li> Blog </li>
              </ul>

              <Route exact path='/home'
                component={Home} />

            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = () => ({})

let mapDispatchToProps = (dispatch) => ({
  toHome: () => dispatch(route),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
