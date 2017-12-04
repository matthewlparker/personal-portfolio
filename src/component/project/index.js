import React from 'react'
import './style.scss'

const Project = (props) => {
  let projectColor = {
    backgroundColor: props.projectColor
  }
  return (
    <div className={'project-main'}>

      <a href={props.url} target='_#' className={'project-card'}>

        <div className='front box'>
          <div className={'title'}>{props.title}</div>
        </div>

        <div className='back box'>
          <div className={'description'}>
            {props.description}
          </div>
        </div>

      </a>

    </div>
  )
}

export default Project

  // <a className={'project-link'} href={props.url} target='_#' style={projectColor}>

// <div className={'project-portrait'}>
//   <a className={'project-picture'} href={props.url} target='_#' style={projectColor}>
//     <div className={'project-logo-name'}>
//       {props.logoName}
//     </div>
//   </a>
// </div>
