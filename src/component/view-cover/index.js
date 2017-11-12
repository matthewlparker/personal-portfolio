import React from 'react'
import {connect} from 'react-redux'
import * as viewActions from '../../action/viewActions.js'
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
    this.props.handleCover('COVER_OPEN')
  }

  render(){
    return (
      <div className={`view-cover-container ${this.props.coverOpen ? 'open' : ''}`} onClick={this.handleCover}>
        <div className='view-cover-content'>
          <p>View Cover</p>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  coverOpen: state.viewActions,
})

let mapDispatchToProps = (dispatch) => ({
  handleCover: (coverState) => dispatch(viewActions.cover(coverState)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewCover)
