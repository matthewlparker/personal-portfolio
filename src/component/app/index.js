import React from 'react'
import ReactDom from 'react-dom'

import * as util from '../../lib/util.js'

import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from '../home'
import About from '../about'
import Header from '../header'
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

            <div className="header-nav">
              <Header />
            </div>


              <Route exact path='/home'
                component={Home} />
              <Route exact path='/projects'
                component={Projects} />
              <Route exact path='/about'
                component={About} />

          </div>
        </BrowserRouter>
      </div>
      </main>
    )
  }
}

export default App
