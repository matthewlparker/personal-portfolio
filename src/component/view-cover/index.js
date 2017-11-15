import React from 'react'
import {connect} from 'react-redux'
import * as coverToggle from '../../action/viewActions.js'
import FontAwesome from 'react-fontawesome'
import WeatherContainer from '../weather/container.js'
import './style.scss'

class ViewCover extends React.Component{
  constructor(props){
    super(props)
    this.handleCover = this.handleCover.bind(this)
  }

  handleCover(){
    this.props.handleCover('COVER_TOGGLE')
  }

  render(){
    let arrowIconClass = (this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-open-light'
    : (this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-open-dark'
    : (!this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-closed-light'
    : (!this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-closed-dark'
    : ''
    return (
      <div className={`view-cover-main ${this.props.coverOpen ? 'view-cover-main-open' : ''}`} onClick={this.handleCover}>


        <div className='view-cover-content'>

          <div className={`view-cover-toggle-icon ${arrowIconClass}`}>
            <FontAwesome name='arrow-right' />
          </div>

          <p className='view-cover-p1'>I <span>believe</span></p>
          <p className='view-cover-p2'>in <span>building</span></p>
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
  coverOpen: state.coverToggle,
  lightTheme: state.lightTheme
})

let mapDispatchToProps = (dispatch) => ({
  handleCover: (toggle) => dispatch(coverToggle.cover(toggle)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewCover)
