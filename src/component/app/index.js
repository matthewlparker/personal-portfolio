import React from 'react'
import ReactDom from 'react-dom'
import './styles.scss'

import * as util from '../../lib/util.js'

import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from '../home'
import About from '../about'
import Header from '../header'
import Footer from '../footer'
import Contact from '../contact'
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
        <BrowserRouter>
          <div>

            <div className="header">
              <Header />
            </div>


              <Route exact path='/home'
                component={Home} />
              <Route exact path='/projects'
                component={Projects} />
              <Route exact path='/about'
                component={About} />
              <Route exact path='/contact'
                component={Contact} />

            <div className='footer'>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

export default App
