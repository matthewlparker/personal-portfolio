import React from 'react'
import {connect} from 'react-redux'
import * as coverToggle from '../../action/viewActions.js'
import FontAwesome from 'react-fontawesome'
import WeatherContainer from '../weather/container.js'
import './style.scss'

class ViewCover extends React.Component{
  constructor(props){
    super(props)
    this.state={
      playVideo: false,
    }
    this.handleCover = this.handleCover.bind(this)
    this.detectBrowser = this.detectBrowser.bind(this)
  }

  handleCover(){
    this.props.handleCover('COVER_TOGGLE')
  }

  componentWillMount(){
    let video = this.detectBrowser()
    video === 'chrome' || video === 'firefox' ? this.setState({playVideo: true}) : undefined
  }

  detectBrowser(){
    let browser
    let browserMatch = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i)
    navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i) ? browser = 'msie'
    : browser = browserMatch[1].toLowerCase()

    return browser
  }



  render(){

    let arrowIconClass = (this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-open-light'
    : (this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-open-dark'
    : (!this.props.coverOpen && this.props.lightTheme) ? 'view-cover-toggle-icon-closed-light'
    : (!this.props.coverOpen && !this.props.lightTheme) ? 'view-cover-toggle-icon-closed-dark'
    : ''

    return (
      <div className={`view-cover-main bg-image ${this.props.coverOpen ? 'view-cover-main-open' : ''} ${!this.state.playVideo ? 'bg-image' : ''}`} onClick={this.handleCover}>


        <div className='view-cover-content' >

          <div className={`view-cover-toggle-icon ${arrowIconClass}`}>
            <FontAwesome name='arrow-right' />
          </div>

          <p className='view-cover-p1'>I <span>believe</span></p>
          <p className='view-cover-p2'>in <span>building</span></p>
          <p className='view-cover-p3'>Beautiful</p>
          <p className='view-cover-p4'>things</p>

          {!this.props.lightTheme && false ?
            <video className='background-video' loop muted autoPlay alt='video loop of stars'>
              <source src='https://static.videezy.com/system/resources/previews/000/000/116/original/Stars.mp4'
              type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          : undefined
          }

          {this.props.lightTheme && false ?
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
