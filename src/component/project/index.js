import React from 'react'
import './style.scss'

const Project = (props) => {
  let projectColor = {
    backgroundColor: props.projectColor
  }
  return (
    <a href={props.url} target='_#' className={'project-main'}>

      <div className={'project-card'}>

        <div className='front box'>
          <div className={'title'}>{props.title}</div>
        </div>

        <div className='back box'>
          <div className={'description'}>{props.description}</div>
        </div>

      </div>

    </a>
  )
}

export default Project
