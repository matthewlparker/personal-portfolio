import React from 'react'
import ReactDom from 'react-dom'
import Header from '../header/index.js'
import {connect} from 'react-redux'

import './styles.scss'

class Home extends React.Component{
  render(){
    return(
      <div className='home-container'>
        <Header />
        <h1> Home </h1>
        <p> View my: {this.props.route === '/' ? 'portfolio' : ''}</p>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route
})

let mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
