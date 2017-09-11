import React from 'react'
import ReactDom from 'react-dom'

class Header extends React.Component{
  render() {
    return(
      <div className = "header-div">
        <h1> Matthew Parker </h1>
        <div className="header-nav">
          <ul>
            <li> Home </li>
            <li> Projects </li>
            <li> About </li>
            <li> Blog </li> 
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
