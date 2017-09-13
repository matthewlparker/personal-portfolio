import './styles.scss'
import React from 'react'

class Projects extends React.Component{
  render() {
    return(
      <section className='featured-work'>

        <ul className='projects'>
          <li className='gourmet-swap'>
            <a href='https://gourmet-swap-frontend.herokuapp.com/landing' target='_blank'>
              <img src={require('../../assets/gourmet-swap.png')} alt='gourmet swap icon' className='gs-icon' />
              <h3 className='title'> Gourmet Swap </h3>
            </a>
            <h4> Description </h4>
          </li>

          <li className='seattle-reads'>
            <a href='https://seattle-reads.herokuapp.com/' target='_blank'>
              <img src={require('../../assets/seattle-reads.png')} alt='graph of library checkouts' className='sr-icon' />
              <h3 className='title'> Seattle Reads </h3>
            </a>
            <h4> Description </h4>
          </li>

          <li className='guardians'>
            <a href='https://cadburylion.github.io/' target='_blank'>
              <img src={require('../../assets/goat-shadow.png')} alt='goat-icon' className='gog-icon' />
              <h3 className='title'> Guardians of the Goats </h3>
            </a>
            <h4> Description </h4>
          </li>
        </ul>
      </section>
    )
  }
}

export default Projects
