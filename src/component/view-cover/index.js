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
      entered: false,
      background: '',
    }
    this.enterSite = this.enterSite.bind(this)
    this.handleCover = this.handleCover.bind(this)
    // this.detectBrowser = this.detectBrowser.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.randomBackground = this.randomBackground.bind(this)
  }

  componentWillMount(){
    this.randomBackground()
    document.addEventListener('keypress', this.handleKeyPress)

    // let video = this.detectBrowser()
    // video === 'chrome' || video === 'firefox' ? this.setState({playVideo: true}) : undefined
  }

  // detectBrowser(){
  //   let browser
  //   let browserMatch = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i)
  //   navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i) ? browser = 'msie'
  //   : browser = browserMatch[1].toLowerCase()
  //
  //   return browser
  // }

  handleCover(){
    this.props.handleCover('COVER_TOGGLE')
  }

  handleKeyPress(e){
    console.log('handleKeyPress event: ', e)
    // !this.state.entered && e.charCode === 13 || !this.state.entered && e.keyCode === 13 ? this.enterSite() : undefined
    !this.state.entered && e.key === 'Enter' ? this.enterSite() : undefined

    this.state.entered && e.key === 'i' ? this.handleCover() : undefined
  }

  enterSite(){
    this.setState({
      entered: true
    })
    this.handleCover()
  }

  randomBackground(){
    let backgrounds = [
      'https://i.imgur.com/HjStYze.gif',
      'https://i.imgur.com/4KJPU8C.gif',
      // 'https://i.imgur.com/L2Hc5MB.gif',
      'https://i.imgur.com/XTCAUql.gif',
      // 'https://i.imgur.com/LmSj8fW.gif',
      'https://i.imgur.com/vvTO3np.gif',
      'https://i.imgur.com/589GAGa.gif',
      // '../../assets/backgrounds/pixel-ship.gif',
    ]

    this.setState({
      background: backgrounds[Math.floor(Math.random() * (backgrounds.length))]
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
      <div className={`view-cover-main ${this.props.coverOpen ? 'view-cover-main-open' : ''}`} style={mainBackground} onKeyUp={console.log('key')}>

      {!this.state.entered ? <div className='enter' onClick={this.enterSite} >C:\> Enter<span>_</span></div>

        : <div className='view-cover-content'>

          <div className='basic-info'>
            <a className={'name'} href='https://docs.google.com/document/d/1bLo8ln0GXKTPMceAKzwvaifaj8mm2Y2_cXog9_Ssu60/export?format=pdf'>
              Name: <span>Matthew Parker</span>
            </a>

            <div className={`developer`}>
              Developer: React & Full-Stack JavaScript
            </div>

            <div className={`status`}>
              Status: Available for hire
            </div>
          </div>

          <div className={`view-cover-toggle-icon ${arrowIconClass}`} onClick={this.handleCover}>
            <FontAwesome name='arrow-right' />
          </div>

          <div className='pixelart-to-css'></div>

          <div className='page-container'>
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
          </div>


        </div>
      }

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
