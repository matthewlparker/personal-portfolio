import React from 'react'
import ReactDom from 'react-dom'
import Header from '../header/index.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import * as coverToggle from '../../action/viewActions.js'
import ThemeIcon from '../theme-icon/index.js'
import * as route from '../../action/route.js'

import './styles.scss'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.handleCover = this.handleCover.bind(this)
  }

  componentWillMount() {
    // let pathname = document.location.href.split('8080')[1]
    //
    // pathname === '/about' ? this.props.routeToAbout()
    // : pathname === '/contact' ? this.props.routeToContact()
    // : pathname === '/portfolio' ? this.props.routeToPortfolio()
    // : undefined
  }

  handleCover(toggle){
    this.props.handleCover('COVER_TOGGLE')
  }

  render(){

    return(
      <div className={`home-main ${this.props.lightTheme ? 'home-main-light' : ''}`}>

        <Link to='/portfolio' onClick={this.props.routeToPortfolio} className={`to-portfolio ${this.props.lightTheme ? 'icon-light' : ''}`}>
          Portfolio
        </Link>

        <Link to='/about' onClick={this.props.routeToAbout} className={`to-about ${this.props.lightTheme ? 'icon-light' : ''}`}>
          About
        </Link>

        <Link to='/contact' onClick={this.props.routeToContact} className={`to-contact ${this.props.lightTheme ? 'icon-light' : ''}`}>
          Contact
        </Link>

        <div className='skill-icon javascript'>
          <img src={require('../../assets/javascript-original.svg')} alt='javascript logo' />
        </div>

        <div className='skill-icon react'>
          <img src={require('../../assets/react-original.svg')} alt='react logo' />
        </div>

        <div className='skill-icon html'>
          <img src={require('../../assets/html5-original.svg')} alt='html 5 logo'/>
        </div>

        <div className='skill-icon css'>
          <img src={require('../../assets/css3-original.svg')} alt='css 3 logo' />
        </div>

        <div className='skill-icon node'>
          <img src={require('../../assets/nodejs-original.svg')} alt='node logo' />
        </div>

        <div className='skill-icon mongodb'>
          <img src={require('../../assets/mongodb-original.svg')} alt='mongo db logo'/>
        </div>

        <ThemeIcon
          className={`theme-toggle-icon ${this.props.lightTheme ? 'theme-toggle-icon-light' : ''}`}
          name={this.props.lightTheme ? 'sun-o' : 'moon-o'}
        />

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  lightTheme: state.lightTheme,
})

let mapDispatchToProps = (dispatch) => ({
  handleCover: (toggle) => dispatch(coverToggle.cover(toggle)),
  routeToAbout: () => dispatch(route.switchRoute('/about')),
  routeToPortfolio: () => dispatch(route.switchRoute('/portfolio')),
  routeToContact: () => dispatch(route.switchRoute('/contact')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
