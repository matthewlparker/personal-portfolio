import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Link} from 'react-router-dom'
import * as route from '../../action/route.js'

import './styles.scss'

import Home from '../home'


class Header extends React.Component{
  constructor(props){
    super(props)
  }


  render() {
    console.log('Header props: ', this.props.route)
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

            <li>
              <Link to='/about' className='about' onClick={this.props.routeToAbout}> About </Link>
            </li>

            <li>
              <Link to='/' className='portfolio' onClick={this.props.routeToPortfolio}> Portfolio </Link>
            </li>

            <li>
              <Link to='/contact' className='contact' onClick={this.props.routeToContact}> Contact Me </Link>
            </li>

          </ul>
        </nav>

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  routeToAbout: () => dispatch(route.switchRoute('/about')),
  routeToPortfolio: () => dispatch(route.switchRoute('/')),
  routeToContact: () => dispatch(route.switchRoute('/contact')),
  routeToSwitch: (desiredRoute) => dispatch(route.switchRoute(desiredRoute)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
