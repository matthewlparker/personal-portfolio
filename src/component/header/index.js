// import React from 'react'
// import {connect} from 'react-redux'
// import * as util from '../../lib/util.js'
// import * as route from '../../action/route.js'
// import * as hamburgerToggle from '../../action/hamburger.js'
// import {BrowserRouter, Link} from 'react-router-dom'
//
// import './styles.scss'
// import Home from '../home'
//
//
// class Header extends React.Component{
//   constructor(props){
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//     this.handleRoute = this.handleRoute.bind(this)
//   }
//
//   componentWillMount(){
//     let pathname = document.location.href.split('io')[1]
//
//     pathname === '/about' ? this.props.routeToAbout()
//     : pathname === '/contact' ? this.props.routeToContact()
//     : pathname === '/portfolio' ? this.props.routeToPortfolio()
//     : undefined
//     // if(pathname === '/about'){
//     //   this.props.routeToAbout()
//     // } else if(pathname === '/contact'){
//     //   this.props.routeToContact()
//     // } else if(pathname){
//     //   this.props.routeToPortfolio()
//     // }
//   }
//
//   handleClick(){
//     this.props.hamburgerSwitch()
//   }
//
//   handleRoute(e){
//     e === 'about' ? this.props.routeToAbout()
//     : e === 'portfolio' ? this.props.routeToPortfolio()
//     : e === 'contact' ? this.props.routeToContact()
//     : null
//     this.props.hamburger ? this.handleClick() : null
//   }
//
//   render(){
//
//     let aboutClass = this.props.route === '/about' ? 'about current' : 'about'
//     let portfolioClass = this.props.route === '/portfolio' ? 'portfolio current' : 'portfolio'
//     let contactClass = this.props.route === '/contact' ? 'contact current' : 'contact'
//
//     return(
//       <div className='header-main'>
//
//         <div className='logo-icon'></div>
//         <div className='header-title'>Matthew Parker</div>
//         <div className='header-subtitle'>React & Full Stack Developer</div>
//
//       </div>
//     )
//   }
// }
//
// let mapStateToProps = (state) => ({
//   route: state.route,
//   hamburger: state.hamburger,
// })
//
// let mapDispatchToProps = (dispatch) => ({
//   switchRoute: (dynamicRoute) => dispatch(route.switchRoute(dynamicRoute)),
//   routeToAbout: () => dispatch(route.switchRoute('/about')),
//   routeToPortfolio: () => dispatch(route.switchRoute('/portfolio')),
//   routeToContact: () => dispatch(route.switchRoute('/contact')),
//   routeToSwitch: (desiredRoute) => dispatch(route.switchRoute(desiredRoute)),
//   hamburgerSwitch: (ham) => dispatch(hamburgerToggle.hamburger(ham)),
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Header)
