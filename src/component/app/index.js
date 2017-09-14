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
import Portfolio from '../portfolio'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      route: '/about',
      hello: '',
    }
  }

  componentWillMount(){
    console.log(this.state)
  }

  render(){
    return(
      <main>
        <BrowserRouter>
          <div>

            <div className="app-header">
              <Header />
            </div>
              {util.renderIf(this.state.route === '/about',
                <About
              />)}

              <Route exact path='/portfolio' component={Portfolio} />
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

export default App
