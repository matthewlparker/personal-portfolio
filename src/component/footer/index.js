import './footer.scss'
import React from 'react'

export default class Footer extends React.Component{
  render(){
    return(
      <div>
        <a href='https://github.com/cadburylion' target='_#'>
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href='https://www.facebook.com/cadburylion?ref=bookmarks' target='_#'>
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        <a href='https://www.linkedin.com/in/matthew-parker-05a5b69b/' target='_#'>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href='mailto:matthewleonparker@outlook.com'>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
        <a href='https://twitter.com/CadburyLion' target='_#'>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
    )
  }
}
