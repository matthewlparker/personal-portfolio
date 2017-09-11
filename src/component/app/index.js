import React from 'react'
import ReactDom from 'react-dom'

import * as util from '../../lib/util.js'

import Home from '../home'
import Header from '../header'

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
        <Header />
        {util.renderIf(this.state === 'home',
        <Home />)}
      </main>
    )
  }
}

export default App
