import React from 'react'
import User from '../user/index.js'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router'
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import * as route from '../../action/route.js'
import * as viewActions from '../../action/viewActions.js'
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
    this.props.entered && !this.props.focus && e.key === 'i' ? this.props.handleCover() : undefined
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
      <div className={`view-cover-main ${this.props.coverOpen ? 'view-cover-main-open' : ''}`} style={mainBackground}>

      {!this.props.entered ? <div className='user-container'> <User /> </div>

        : <div className='view-cover-content'>

          {this.props.pageActive ?
            <NavLink to={this.props.route === '/about' ? '/contact'
              : this.props.route === '/portfolio' ? '/about'
              : this.props.route === '/contact' ? '/portfolio'
              : '/'
            } className='left'>
              <div className='arrow'>
                {'<'}
              </div>
            </NavLink>
            : undefined
          }

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
                ? `Stargazing above deck`
                : this.props.background === 'https://i.imgur.com/4KJPU8C.gif'
                ? `Traveling the coast by train`
                : this.props.background === 'https://i.imgur.com/vvTO3np.gif'
                ? `Wading the waterfalls`
                : this.props.background === 'https://i.imgur.com/XTCAUql.gif'
                ? `Exploring the forest`
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

          {this.props.pageActive ?
            <NavLink to={this.props.route === '/about' ? '/portfolio'
              : this.props.route === '/portfolio' ? '/contact'
              : this.props.route === '/contact' ? '/about'
              : '/'
              }
              className='right'>
                <div className='arrow'>
                  {'>'}
                </div>
              </NavLink>
            : undefined
          }
        </div>
      }

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  pageActive: state.pageActive,
  route: state.route,
  focus: state.focus,
  entered: state.enterSite,
  coverOpen: state.coverToggle,
  background: state.setBackground,
})

let mapDispatchToProps = (dispatch) => ({
  shareRoute: () => dispatch(route.route()),
  handleCover: (toggle) => dispatch(viewActions.cover(toggle)),
  setBackground: (background) => dispatch(viewActions.background(background)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewCover))
