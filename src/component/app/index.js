import React from 'react'
import {connect} from 'react-redux'
import './styles.scss'

import * as util from '../../lib/util.js'

import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from '../home'
import About from '../about'
import Header from '../header'
import Footer from '../footer'
import Contact from '../contact'
import Portfolio from '../portfolio'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      route: this.props.route || '/',
    }
  }

  render(){

    return(
      <main>
        <BrowserRouter>
          <div>

            <div className="app-header">
              <Header />
            </div>


              <Route exact path='/about' component={About} />
              <Route exact path='/' component={Portfolio} />
              <Route exact path='/contact'component={Contact} />

            <div className='app-footer'>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
