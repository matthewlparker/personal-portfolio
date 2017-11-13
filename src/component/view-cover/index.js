import React from 'react'
import {connect} from 'react-redux'
import * as viewActions from '../../action/viewActions.js'
import FontAwesome from 'react-fontawesome'
import './style.scss'

class ViewCover extends React.Component{
  constructor(props){
    super(props)
    this.state={
      coverOpen: false,
    }
    this.handleCover = this.handleCover.bind(this)
  }

  handleCover(){
    this.props.handleCover('COVER_TOGGLE')
  }

  render(){
    return (
      <div className={`view-cover-main ${this.props.coverOpen ? 'view-cover-open' : ''}`} onClick={this.handleCover}>
        <div className='view-cover-content'>
          <div className={`toggle-icon ${this.props.coverOpen ? 'toggle-icon-open' : ''}`}>
            <FontAwesome name='arrow-right' />
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  coverOpen: state.viewActions,
})

let mapDispatchToProps = (dispatch) => ({
  handleCover: (toggle) => dispatch(viewActions.cover(toggle)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewCover)
