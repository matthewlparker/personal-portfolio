import React from 'react'
import ReactDom from 'react-dom'
import Header from '../header/index.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import ThemeIcon from '../theme-icon/index.js'
import * as route from '../../action/route.js'

import './styles.scss'

class Home extends React.Component{
  render(){
    return(
      <div className={`home-main ${this.props.lightTheme ? 'home-main-light' : ''}`}>

        <div className='home-cover'></div>

        <div className='home-intro-text'>{`Hi, I'm Matthew`}</div>

        <Link to='/' onClick={this.props.routeToPortfolio} className='home-portfolio-icon'>
          <FontAwesome name='file-code-o' />
        </Link>

        <Link to='/about' onClick={this.props.routeToAbout} className='home-about-icon'>
          <FontAwesome name='user-circle-o' />
        </Link>

        <Link to='/contact' onClick={this.props.routeToContact} className='home-contact-icon'>
          <FontAwesome name='envelope-o' />
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
  routeToAbout: () => dispatch(route.switchRoute('/about')),
  routeToPortfolio: () => dispatch(route.switchRoute('/')),
  routeToContact: () => dispatch(route.switchRoute('/contact')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
