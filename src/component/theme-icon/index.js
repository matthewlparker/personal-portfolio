import React from 'react'
import {connect} from 'react-redux'
import * as themeToggle from '../../action/viewActions.js'
import FontAwesome from 'react-fontawesome'
// import './style.scss'

class ThemeIcon extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={this.props.className} onClick={this.props.toggleTheme}>
        <FontAwesome name={this.props.name} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({})

let mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(themeToggle.theme())
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeIcon)
