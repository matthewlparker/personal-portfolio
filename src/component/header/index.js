import React from 'react'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import * as route from '../../action/route.js'
import {BrowserRouter, Link} from 'react-router-dom'

import './styles.scss'

import Home from '../home'




class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      route: this.props.route || '/' ,
    }
  }

  componentWillMount(){
    this.setState({route: document.location.href.split('com')[1]})
  }

  render() {
    let pathname = document.location.href.split('com')[1]
    return(

      <div className='header-field'>

        <Link to='/' className='logo-field' onClick={this.props.routeToPortfolio}>
          <div className='running-lion'></div>
          <div className='logo-name'>
            <h1> Matthew Parker </h1>
            <h2> React & Full-Stack Developer </h2>
          </div>
        </Link>


        <nav className='nav-field'>

          <ul>

            <li>
              {util.renderIf(pathname === '/about',
                <Link to='/about' className='about current' onClick={this.props.routeToAbout}> About </Link>
              )}
              {util.renderIf(pathname !== '/about',
                <Link to='/about' className='about' onClick={this.props.routeToAbout}> About </Link>
              )}
            </li>

            <li>
              {util.renderIf(pathname === '/',
                <Link to='/' className='portfolio current' onClick={this.props.routePortfolio}> Portfolio </Link>
              )}
              {util.renderIf(pathname !== '/',
                <Link to='/' className='portfolio' onClick={this.props.routeToPortfolio}> Portfolio </Link>
              )}
            </li>

            <li>
              {util.renderIf(pathname === '/contact',
                <Link to='/contact' className='contact current' onClick={this.props.routeToContact}> Contact </Link>
              )}
              {util.renderIf(pathname !== '/contact',
                <Link to='/contact' className='contact' onClick={this.props.routeToContact}> Contact </Link>
              )}
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
