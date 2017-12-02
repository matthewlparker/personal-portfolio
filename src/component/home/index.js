import React from 'react'
import ReactDom from 'react-dom'
import Header from '../header/index.js'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import * as coverToggle from '../../action/viewActions.js'
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
    this.reload = this.reload.bind(this)
    this.onEnter = this.onEnter.bind(this)
    this.onLeave = this.onLeave.bind(this)
    this.handleCover = this.handleCover.bind(this)
    this.handleRoute = this.handleRoute.bind(this)
    this.selectRoute = this.selectRoute.bind(this)
    this.changeBackground = this.changeBackground.bind(this)
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

    this.props.setBackground(bg)
  }

  render(){


    return(
      <div className={`home-main ${this.props.lightTheme ? 'home-main-light' : ''}`}>

        <div className={'dashboard-nav'}>

          <NavLink exact to={'/about'} className={'to-about nav'}>
            About
          </NavLink>

          <NavLink exact to={'/portfolio'} activeClassName='selected' className='to-portfolio nav' >
            Portfolio
          </NavLink>

          <NavLink exact to={'/contact'}  className={'to-contact nav'}>
            Contact
          </NavLink>

          <NavLink exact to={'/'} className={'to-landing nav'}>
            Clear
          </NavLink>

          <NavLink exact to={'/'} className={'explore nav'} onClick={this.changeBackground}>
            Explore
          </NavLink>

          <NavLink exact to={'/'} className={'to-start nav'} onClick={this.reload}>
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
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  handleCover: (toggle) => dispatch(coverToggle.cover(toggle)),
  changeBackground: (image) => dispatch(viewActions.background(image)),
  setBackground: (background) => dispatch(viewActions.background(background)),
  // routeToAbout: () => dispatch(route.switchRoute('/about')),
  // routeToPortfolio: () => dispatch(route.switchRoute('/portfolio')),
  // routeToContact: () => dispatch(route.switchRoute('/contact')),
  // routeToLanding: () => dispatch(route.switchRoute('/')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
