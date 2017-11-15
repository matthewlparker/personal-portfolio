import React from 'react'
import ReactDom from 'react-dom'
import Header from '../header/index.js'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import ThemeIcon from '../theme-icon/index.js'

import './styles.scss'

class Home extends React.Component{
  render(){
    console.log('lightTheme: ', this.props.lightTheme)
    return(
      <div className={`home-main ${this.props.lightTheme ? 'home-main-light' : ''}`}>

        <div className='home-cover'></div>

        <ThemeIcon className='dark' name='moon-o' theme='dark' />

        <ThemeIcon className='light' name='sun-o' theme='light' />

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  lightTheme: state.lightTheme
})

let mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
