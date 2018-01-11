import React from 'react'
import {connect} from 'react-redux'
import './styles.scss'

import * as util from '../../lib/util.js'

import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from '../home'
import About from '../about'
import Contact from '../contact'
import Portfolio from '../portfolio'
import ViewCover from '../view-cover'
import Content from '../content'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <BrowserRouter>
        <main className='app-container'>
          <div className='content-container'>
            <ViewCover />
          </div>
          <div className='home-container'>
            <Home />
          </div>
        </main>
      </BrowserRouter>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
