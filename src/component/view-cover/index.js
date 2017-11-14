import React from 'react'
import {connect} from 'react-redux'
import * as viewActions from '../../action/viewActions.js'
import FontAwesome from 'react-fontawesome'
import WeatherContainer from '../weather/container.js'
import './style.scss'

class ViewCover extends React.Component{
  constructor(props){
    super(props)
    this.state = {
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

        <div className={`toggle-icon ${this.props.coverOpen ? 'toggle-icon-open' : ''}`}>
          <FontAwesome name='arrow-right' />
        </div>

        <div className='view-cover-content'>
          <p className='view-cover-p1'>I believe</p>
          <p className='view-cover-p2'>in building</p>
          <p className='view-cover-p3'>Beautiful</p>
          <p className='view-cover-p4'>things</p>

        <video className='background-video' loop muted autoPlay alt='video loop of stars'>
          <source src='https://d1235ca2z646oc.cloudfront.net/videos/processed/255/MadeInLadakh-HD_2.mp4.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

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
