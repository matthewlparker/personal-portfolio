import React from 'react'
import ReactDom from 'react-dom'

import * as util from '../../lib/util.js'

import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from '../home'
import About from '../about'
import Projects from '../projects'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      route: '',
    }
  }
  render(){
    return(
      <main>
      <div className = "header-div">
        <BrowserRouter>
          <div>
            <h1> Matthew Parker </h1>

            <div className="header-nav">
              <ul>
                <li><Link to='/home'> Home </Link></li>
                <li><Link to='/projects'> Projects </Link></li>
                <li><Link to='/about'> About </Link></li>
              </ul>

              <Route exact path='/home'
                component={Home} />
              <Route exact path='/projects'
                component={Projects} />
              <Route exact path='/about'
                component={About} />

            </div>
          </div>
        </BrowserRouter>
      </div>

      </main>
    )
  }
}

export default App
