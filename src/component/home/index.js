import React from 'react'
import ReactDom from 'react-dom'
import Header from '../header/index.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import * as viewActions from '../../action/viewActions.js'
import ThemeIcon from '../theme-icon/index.js'
import * as route from '../../action/route.js'

import './styles.scss'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hover: '',
      route: '',

    }
    this.exit = this.exit.bind(this)
    this.reload = this.reload.bind(this)
    this.onEnter = this.onEnter.bind(this)
    this.onLeave = this.onLeave.bind(this)
    this.handleCover = this.handleCover.bind(this)
    this.handleRoute = this.handleRoute.bind(this)
    this.selectRoute = this.selectRoute.bind(this)
    this.changeBackground = this.changeBackground.bind(this)
  }



  handleCover(toggle){
    this.props.handleCover('COVER_TOGGLE')
  }

  onEnter(skill) {
    this.setState({
      hover: skill
    })
  }

  onLeave(){
    this.setState({
      hover: ''
    })
  }

  handleRoute(route){

  }

  selectRoute(route){
    if(route === '/about'){this.setState({route: '/about'})}
    if(route === '/portfolio'){this.setState({route: '/portfolio'})}
    if(route === '/contact'){this.setState({route: '/contact'})}
  }

  exit(){
    setTimeout(this.reload, 100)
  }

  reload(){
    location.reload()
  }

  changeBackground(){
    let backgrounds = [
      'https://i.imgur.com/HjStYze.gif',
      'https://i.imgur.com/4KJPU8C.gif',
      'https://i.imgur.com/XTCAUql.gif',
      'https://i.imgur.com/vvTO3np.gif',
      'https://i.imgur.com/589GAGa.gif',
    ]

    let bg = backgrounds[Math.floor(Math.random() * (backgrounds.length))]

    this.props.changeBackground(bg)
  }

  render(){
    // let pathname = document.location.href.split('8080')[1]

    return(
      <div className={`home-main ${this.props.lightTheme ? 'home-main-light' : ''}`}>

        <div className={'dashboard-nav'}>

          <NavLink exact to='/about' activeClassName='active' className={`to-about nav`}>
            About
          </NavLink>

          <NavLink exact to={'/portfolio'} activeClassName='active' className='to-portfolio nav' >
            Portfolio
          </NavLink>

          <NavLink exact to={'/contact'} activeClassName='active' className={'to-contact nav'}>
            Contact
          </NavLink>

          <NavLink exact to={'/'} activeClassName='' className={'to-landing nav'}>
            Clear
          </NavLink>

          <NavLink exact to={'/'} activeClassName='' className={'explore nav'} onClick={this.changeBackground}>
            Explore
          </NavLink>

          <NavLink exact to={'/'} activeClassName='' className={'to-start nav'} onClick={this.exit}>
            Exit
          </NavLink>


        </div>

        <div className='hovered-skill'>{this.state.hover}</div>

        <div className='skill-icon-container'>

          <div className='skill-icon javascript' onMouseEnter={()=>this.onEnter('JavaScript')} onMouseLeave={this.onLeave}>
            <img src={require('../../assets/javascript-original.svg')} alt='javascript logo' />
          </div>

          <div className='skill-icon react' onMouseEnter={()=>this.onEnter('React')} onMouseLeave={this.onLeave}>
            <img src={require('../../assets/react-original.svg')} alt='react logo' />
          </div>

          <div className='skill-icon html' onMouseEnter={()=>this.onEnter('HTML5')} onMouseLeave={this.onLeave}>
            <img src={require('../../assets/html5-original.svg')} alt='html 5 logo'/>
          </div>

          <div className='skill-icon css' onMouseEnter={()=>this.onEnter('CSS3')} onMouseLeave={this.onLeave}>
            <img src={require('../../assets/css3-original.svg')} alt='css 3 logo' />
          </div>

          <div className='skill-icon sass' onMouseEnter={()=>this.onEnter('Sass')} onMouseLeave={this.onLeave}>
            <img src={require('../../assets/sass-original.svg')} alt='sass logo' />
          </div>

          <div className='skill-icon node' onMouseEnter={()=>this.onEnter('Node')} onMouseLeave={this.onLeave}>
            <img src={require('../../assets/nodejs-original.svg')} alt='node logo' />
          </div>

          <div className='skill-icon mongodb' onMouseEnter={()=>this.onEnter('MongoDB')} onMouseLeave={this.onLeave}>
            <img src={require('../../assets/mongodb-original.svg')} alt='mongo db logo'/>
          </div>

        </div>

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  lightTheme: state.lightTheme,
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  handleCover: (toggle) => dispatch(viewActions.cover(toggle)),
  changeBackground: (image) => dispatch(viewActions.background(image)),
  enterSite: (bool) => dispatch(viewActions.entered(bool)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
