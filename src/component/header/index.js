import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as route from '../../action/route.js'

import './styles.scss'

import Home from '../home'


class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      route: '/',
    }
    this.handleRoute = this.handleRoute.bind(this)
  }

  handleRoute(e){
    // e.preventDefault()
    let {name} = e.target
    this.props.routeToSwitch(name)
  }

    // <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

  render() {

    return(
      <div className='header-field'>


          <Link to='/portfolio' className='logo-field'>
            <div className='running-lion'></div>
            <div className='logo-name'>
              <h1> Matthew Parker </h1>
              <h2> React & Full-Stack Developer </h2>
            </div>
          </Link>


        <nav className='nav-field'>
          <ul>
            <li><Link to='/about' name='/about' onClick={this.handleRoute}> About </Link></li>
            <li><Link to='/portfolio'> Portfolio </Link></li>
            <li><Link to='/contact'> Contact Me </Link></li>
          </ul>
        </nav>

      </div>
    )
  }
}

export const mapStateToProps = (state) => ({})

let mapDispatchToProps = (dispatch) => ({
  routeToSwitch: (desiredRoute) => dispatch(route.switchRoute(desiredRoute)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
