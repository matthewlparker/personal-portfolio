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

  handleCover(toggle){
    this.props.handleCover('COVER_TOGGLE')
  }

  render(){

      // <div className={`home-intro-text ${this.props.lightTheme ? 'text-light' : ''}`}>{`Hi, I'm Matthew`}</div>

    // <div className={`home-welcome-text ${this.props.lightTheme ? 'text-light' : ''}`}>{`Welcome to my work`}</div>
    return(
      <div className={`home-main ${this.props.lightTheme ? 'home-main-light' : ''}`}>

        <Link to='/' onClick={this.props.routeToPortfolio} className={`to-about ${this.props.lightTheme ? 'icon-light' : ''}`}>
          About
        </Link>

        <Link to='/about' onClick={this.props.routeToAbout} className={`to-portfolio ${this.props.lightTheme ? 'icon-light' : ''}`}>
          Portfolio
        </Link>

        <Link to='/contact' onClick={this.props.routeToContact} className={`to-contact ${this.props.lightTheme ? 'icon-light' : ''}`}>
          Contact
        </Link>


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
  routeToPortfolio: () => dispatch(route.switchRoute('/')),
  routeToContact: () => dispatch(route.switchRoute('/contact')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
