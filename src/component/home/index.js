import React from 'react'
import ReactDom from 'react-dom'
import Header from '../header/index.js'
import {connect} from 'react-redux'

import './styles.scss'

class Home extends React.Component{
  render(){
    return(
      <div className='home-main'>
        <div className='header'>
          
        </div>
        <h2 className='home-title'> Welcome to my portfolio </h2>
        <p className='home-subtitle'> View my: {this.props.route === '/' || !this.props.route
          ? 'portfolio'
          : this.props.route === '/about'
          ? 'about'
          : this.props.route === '/contact'
          ? 'contact'
          : ''}
        </p>

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route
})

let mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
