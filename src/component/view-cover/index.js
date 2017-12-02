import React from 'react'
import {connect} from 'react-redux'
import * as coverToggle from '../../action/viewActions.js'
import * as setBackground from '../../action/viewActions.js'
import FontAwesome from 'react-fontawesome'
import WeatherContainer from '../weather/container.js'
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router'
import User from '../user/index.js'
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

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.randomBackground = this.randomBackground.bind(this)
  }

  componentWillMount(){
    this.randomBackground()
    document.addEventListener('keypress', this.handleKeyPress)

  }

  handleKeyPress(e){
    this.props.entered && e.key === 'i' ? this.props.handleCover() : undefined
  }

  randomBackground(){
    let backgrounds = [
      'https://i.imgur.com/HjStYze.gif',
      'https://i.imgur.com/4KJPU8C.gif',
      'https://i.imgur.com/XTCAUql.gif',
      'https://i.imgur.com/vvTO3np.gif',
      'https://i.imgur.com/589GAGa.gif',
    ]

    let bg = backgrounds[Math.floor(Math.random() * (backgrounds.length))]

    this.setState({
      background: bg
    })
    this.props.setBackground(bg)
  }

  render(){

    let arrowIconClass = (this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-open-light'
    : (this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-open-dark'
    : (!this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-closed-light'
    : (!this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-closed-dark'
    : ''

    let mainBackground = {
      backgroundImage: 'url(' + `${this.props.background}` + ')',
    }

    return (
      <div className={`view-cover-main ${this.props.coverOpen ? 'view-cover-main-open' : ''}`} style={mainBackground} onKeyUp={console.log('key')}>

      {!this.props.entered ? <div className='user-container'> <User /> </div>

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

          <div className={`view-cover-toggle-icon ${arrowIconClass}`} onClick={this.props.handleCover}>
            <div className='hint-text'>
              {this.props.background === 'https://i.imgur.com/589GAGa.gif'
                ? `Below deck at port`
                : this.props.background === 'https://i.imgur.com/HjStYze.gif'
                ? `Tall ship under the stars`
                : this.props.background === 'https://i.imgur.com/4KJPU8C.gif'
                ? `Traveling the coast by train`
                : this.props.background === 'https://i.imgur.com/vvTO3np.gif'
                ? `Foot of the waterfalls`
                : this.props.background === 'https://i.imgur.com/XTCAUql.gif'
                ? `Heart of the forest`
                : ``
              }
            </div>

            <FontAwesome name='arrow-right' />
            <div className='i-text'>{`[ i ] to ${this.props.coverOpen ? 'close' : 'open'} dashboard`}</div>
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
  route: state.route,
  entered: state.enterSite,
  coverOpen: state.coverToggle,
  background: state.setBackground,
})

let mapDispatchToProps = (dispatch) => ({
  handleCover: (toggle) => dispatch(coverToggle.cover(toggle)),
  setBackground: (background) => dispatch(setBackground.background(background)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewCover))
