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
    this.handleCover = this.handleCover.bind(this)
    this.detectBrowser = this.detectBrowser.bind(this)
  }

  handleCover(){
    this.props.handleCover('COVER_TOGGLE')
  }

  componentWillMount(){
    let video = this.detectBrowser()
    video === 'chrome' || video === 'firefox' ? this.setState({playVideo: true}) : undefined
  }

  detectBrowser(){
    let browser
    let browserMatch = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i)
    navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i) ? browser = 'msie'
    : browser = browserMatch[1].toLowerCase()

    return browser
  }



  render(){

    let arrowIconClass = (this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-open-light'
    : (this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-open-dark'
    : (!this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-closed-light'
    : (!this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-closed-dark'
    : ''

    let mainBackground = {
      backgroundImage: 'url(' + 'https://i.imgur.com/HjStYze.gif' + ')',
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

          <p className='view-cover-p1'>I <span>believe</span></p>
          <p className='view-cover-p2'>in <span>building</span></p>
          <p className='view-cover-p3'>Beautiful</p>
          <p className='view-cover-p4'>things</p>

          {!this.props.lightTheme && false ?
            <video className='background-video' loop muted autoPlay alt='video loop of stars'>
              <source src='https://static.videezy.com/system/resources/previews/000/000/116/original/Stars.mp4'
              type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          : undefined
          }

          <div className='dashboard'></div>

          
          <Route exact path='/' component={Portfolio} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />


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
