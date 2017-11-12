import React from 'react'

const Project = (props) => {
  return (
    <li className={props.title}>
      <a href={props.projectURL} target='_blank'>
        <h3 className='title'> Seattle Reads </h3>
      </a>
      <h4>
          <a className='github-icon' href={props.projectGitHubURL} target='_#'>
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
            React, JavaScript, HTML5, CSS3, Sass
      </h4>
    </li>
  )
}

export default Project
