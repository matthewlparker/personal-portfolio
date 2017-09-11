import React from 'react'

class Projects extends React.Component{
  render() {
    return(
      <div className = 'projects'>
        <h3> My projects go here. </h3>

        <div className="project">
          <h4> Guardians of the Goats </h4>
          <img src='../../assets/goat-shadow.png' alt='goat-icon' className='gog-icon' />
        </div>
      </div>
    )
  }
}

export default Projects
