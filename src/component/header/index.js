import React from 'react'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import * as route from '../../action/route.js'
import * as hamburgerToggle from '../../action/hamburger.js'
import {BrowserRouter, Link} from 'react-router-dom'

import './styles.scss'
import Home from '../home'


class Header extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleRoute = this.handleRoute.bind(this)
  }

  componentWillMount(){
    let pathname = document.location.href.split('io')[1]

    if(pathname === '/about'){
      this.props.routeToAbout()
    } else if(pathname === '/contact'){
      this.props.routeToContact()
    } else if(pathname){
      this.props.routeToPortfolio()
    }
  }

  handleClick(){
    this.props.hamburgerSwitch()
  }

  handleRoute(e){
    e === 'about' ? this.props.routeToAbout()
    : e === 'portfolio' ? this.props.routeToPortfolio()
    : e === 'contact' ? this.props.routeToContact()
    : null
    this.props.hamburger ? this.handleClick() : null
  }

  render(){

    let aboutClass = this.props.route === '/about' ? 'about current' : 'about'
    let portfolioClass = this.props.route === '/' ? 'portfolio current' : 'portfolio'
    let contactClass = this.props.route === '/contact' ? 'contact current' : 'contact'

    return(

      <div className={`header-field ${this.props.hamburger ? 'open' : ''}`}>
        <h2 id='header-top'></h2>

        <Link to='/' className='logo-field' onClick={() => this.handleRoute('portfolio')}>
          <div className='running-lion'></div>
          <div className='logo-name'>
            <h1> Matthew Parker </h1>
            <h2> React & Full-Stack Developer </h2>
          </div>
        </Link>

        <div className={`hamNav ${this.props.hamburger ? 'open' : ''}`} onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-field ${this.props.hamburger ? 'open' : ''}`}>

          <ul className={`nav-ul ${this.props.hamburger ? 'open' : ''}`}>
            <li>
              <Link to='/about' className={aboutClass} onClick={() => this.handleRoute('about')}> ABOUT </Link>
            </li>
            <li>
              <Link to='/' className={portfolioClass} onClick={() => this.handleRoute('portfolio')}> PORTFOLIO </Link>
            </li>
            <li>
              <Link to='/contact' className={contactClass} onClick={() => this.handleRoute('contact')}> CONTACT </Link>
            </li>
          </ul>

        </nav>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
  hamburger: state.hamburger,
})

let mapDispatchToProps = (dispatch) => ({
  switchRoute: (dynamicRoute) => dispatch(route.switchRoute(dynamicRoute)),
  routeToAbout: () => dispatch(route.switchRoute('/about')),
  routeToPortfolio: () => dispatch(route.switchRoute('/')),
  routeToContact: () => dispatch(route.switchRoute('/contact')),
  routeToSwitch: (desiredRoute) => dispatch(route.switchRoute(desiredRoute)),
  hamburgerSwitch: (ham) => dispatch(hamburgerToggle.hamburger(ham)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
