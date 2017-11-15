import React from 'react'
import {connect} from 'react-redux'
import * as themeToggle from '../../action/viewActions.js'
import FontAwesome from 'react-fontawesome'
// import './style.scss'

class ThemeIcon extends React.Component {
  constructor(props){
    super(props)
    this.themeToggle = this.themeToggle.bind(this)
  }

   themeToggle(theme){
     theme === 'light'
      ? this.props.brightTheme()
      : this.props.darkTheme()
   }

  render(){
    return(
      <div className={this.props.className}
        onClick={() => this.themeToggle(this.props.theme)}>
        <FontAwesome name={this.props.name} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({})

let mapDispatchToProps = (dispatch) => ({
  brightTheme: () => dispatch(themeToggle.theme(true)),
  darkTheme: () => dispatch(themeToggle.theme(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeIcon)
