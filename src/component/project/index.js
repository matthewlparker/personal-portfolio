import React from 'react'
import './style.scss'

const Project = (props) => {
  return (
    <div className={'project-main'}>

      <div className={'project-description'}>
        Seattle Reads is a web app that makes it easy to see what items are being checked out of the Seattle public library system and find popular new reads.
      </div>

      <div className={'project-portrait'}>
        <div className={'project-picture'}>
        <a href='https://seattle-library-checkouts.herokuapp.com/' target='_#'>
          <div className={'project-logo-name'}>
            SR
          </div>
          </a>
        </div>

        <div className={'project-banner'}>
          <div className={'project-name'}>
            Seattle Reads
          </div>
        </div>
      </div>

    </div>
  )
}

export default Project
