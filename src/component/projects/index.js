import React from 'react'

class Projects extends React.Component{
  render() {
    return(
      <div className = 'projects'>
        <h3> My projects go here. </h3>

        <a href='https://gourmet-swap-frontend.herokuapp.com/landing' target='_blank'>
          <div className='project' >
            <img src={require('../../assets/gourmet-swap.png')} alt='gourmet swap icon' className='gs-icon' />
            <h5 className='title'> Gourmet Swap </h5>

          </div>
        </a>

        <a href='https://seattle-reads.herokuapp.com/' target='_blank'>
          <div className='project' >
            <img src={require('../../assets/seattle-reads.png')} alt='graph of library checkouts' className='sr-icon' />
            <h5 className='title'> Seattle Reads </h5>

          </div>
        </a>

        <a href='https://cadburylion.github.io/' target='_blank'>
          <div className='project' >
            <img src={require('../../assets/goat-shadow.png')} alt='goat-icon' className='gog-icon' />
            <h5 className='title'> Guardians of the Goats </h5>

          </div>
        </a>

      </div>
    )
  }
}

export default Projects
