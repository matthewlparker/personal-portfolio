import React from 'react'
import {connect} from 'react-redux'
import * as coverToggle from '../../action/viewActions.js'
import FontAwesome from 'react-fontawesome'
import WeatherContainer from '../weather/container.js'
import {Route} from 'react-router-dom'
import './style.scss'

import About from '../about/index.js'
import Contact from '../contact/index.js'
import Portfolio from '../portfolio/index.js'

class ViewCover extends React.Component{
  constructor(props){
    super(props)
    this.state={
      background: '',
    }
    this.handleCover = this.handleCover.bind(this)
    this.detectBrowser = this.detectBrowser.bind(this)
    this.randomBackground = this.randomBackground.bind(this)
  }

  componentWillMount(){
    this.randomBackground()
    // let video = this.detectBrowser()
    // video === 'chrome' || video === 'firefox' ? this.setState({playVideo: true}) : undefined
  }

  detectBrowser(){
    let browser
    let browserMatch = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i)
    navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i) ? browser = 'msie'
    : browser = browserMatch[1].toLowerCase()

    return browser
  }

  handleCover(){
    this.props.handleCover('COVER_TOGGLE')
  }

  randomBackground(){
    let backgrounds = [
      'https://i.imgur.com/HjStYze.gif',
      'https://i.imgur.com/4KJPU8C.gif',
      'https://i.imgur.com/L2Hc5MB.gif',
      'https://i.imgur.com/XTCAUql.gif',
      'https://i.imgur.com/HSWaPpj.gif',
      'https://i.imgur.com/LmSj8fW.gif',
      'https://i.imgur.com/vvTO3np.gif',
    ]
    this.setState({
      background: backgrounds[Math.floor(Math.random() * (backgrounds.length - 1))]
    })
  }

  render(){

    let arrowIconClass = (this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-open-light'
    : (this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-open-dark'
    : (!this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-closed-light'
    : (!this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-closed-dark'
    : ''

    let mainBackground = {
      backgroundImage: 'url(' + `${this.state.background}` + ')',
    }

    return (
      <div className={`view-cover-main ${this.props.coverOpen ? 'view-cover-main-open' : ''}`} style={mainBackground}>


        <div className='view-cover-content' >

        <div className={`name ${this.props.lightTheme ? 'text-light' : ''}`}>
          Name: Matthew Parker
        </div>

        <div className={`developer`}>
          Developer: React & Full-Stack JavaScript
        </div>

        <div className={`status`}>
          Status: Available for hire
        </div>

          <div className={`view-cover-toggle-icon ${arrowIconClass}`} onClick={this.handleCover}>
            <FontAwesome name='arrow-right' />
          </div>

          <div className='portfolio-container'>
            <Route exact path='/' component={Portfolio} />
          </div>

          <div className='about-container'>
            <Route exact path='/about' component={About} />
          </div>

          <div className='contact-container'>
            <Route exact path='/contact' component={Contact} />
          </div>


        </div>

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  coverOpen: state.coverToggle,
  lightTheme: state.lightTheme,
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  handleCover: (toggle) => dispatch(coverToggle.cover(toggle)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewCover)
