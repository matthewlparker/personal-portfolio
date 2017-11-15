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

        <div className='home-intro-text'>{`Hi, I'm Matthew`}</div>

        <ThemeIcon
          className={`theme-toggle-icon ${this.props.lightTheme ? 'theme-toggle-icon-light' : ''}`}
          name={this.props.lightTheme ? 'sun-o' : 'moon-o'}
        />

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
