import React from 'react'
import ReactDom from 'react-dom'
import Content from '../content/index.js'

import './styles.scss'

export default class Home extends React.Component{
  render(){
    return(
      <div className='header-title'>
        <h1> SDG </h1>
        <Content />
      </div>
    )
  }
}
