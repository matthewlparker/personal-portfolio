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
  //
  // browserSpecificCode(){
  //   //Check if browser is IE
  //   if (navigator.userAgent.search("MSIE") & gt; = 0) {
  //       // insert conditional IE code here
  //   }
  //   //Check if browser is Chrome
  //   else if (navigator.userAgent.search("Chrome") & gt; = 0) {
  //       // insert conditional Chrome code here
  //   }
  //   //Check if browser is Firefox
  //   else if (navigator.userAgent.search("Firefox") & gt; = 0) {
  //       // insert conditional Firefox Code here
  //   }
  //   //Check if browser is Safari
  //   else if (navigator.userAgent.search("Safari") & gt; = 0 & amp; & amp; navigator.userAgent.search("Chrome") & lt; 0) {
  //       // insert conditional Safari code here
  //   }
  //   //Check if browser is Opera
  //   else if (navigator.userAgent.search("Opera") & gt; = 0) {
  //       // insert conditional Opera code here
  //   }
  //
  // }

  render(){

    console.log(navigator.userAgent.search('Firefox') > 0)

    let arrowIconClass = (this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-open-light'
    : (this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-open-dark'
    : (!this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-closed-light'
    : (!this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-closed-dark'
    : ''
    return (
      <div className={`view-cover-main ${this.props.coverOpen ? 'view-cover-main-open' : ''}`} onClick={this.handleCover} >


        <div className='view-cover-content' >

          <div className={`view-cover-toggle-icon ${arrowIconClass}`}>
            <FontAwesome name='arrow-right' />
          </div>

          <p className='view-cover-p1'>I <span>believe</span></p>
          <p className='view-cover-p2'>in <span>building</span></p>
          <p className='view-cover-p3'>Beautiful</p>
          <p className='view-cover-p4'>things</p>

          {!this.props.lightTheme ?

              <video className='background-video' loop muted autoPlay alt='video loop of stars'>
                <source src='https://d1235ca2z646oc.cloudfront.net/videos/processed/255/MadeInLadakh-HD_2.mp4.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>

            : undefined
          }
          {this.props.lightTheme ?
            <video className='background-video' loop muted autoPlay alt='video loop of clouds'>
              <source src='https://www.videvo.net/videvo_files/converted/2014_06/preview/Blue_Sky_and_Clouds_Timelapse_0892__Videvo.mov75480.webm' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            : undefined
          }

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
