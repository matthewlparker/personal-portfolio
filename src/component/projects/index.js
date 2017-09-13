import './styles.scss'
import React from 'react'
import Scroll from 'react-scroll'
import {scroller} from 'react-scroll'

class Projects extends React.Component{

  render() {

    let navToPortfolio = () => {
      scroller.scrollTo('portfolio', {
        duration: 500,
        delay: 0,
        smooth: true,
        offset: 0,
      })
    }

    return(
      <main className='main'>

        <div className='intro'>
          <header className='group'>
            <h1>React & Full-Stack Developer</h1>
            <ul className='intro-list'>
              <li> Producing high quality responsive websites and exceptional user experiences</li>
            </ul>
            <a className='portfolio-button' href='#' onClick={navToPortfolio} title='View portfolio items'>
              View Portfolio
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </a>
          </header>
        </div>

        <section className='featured-work'>
          <h2 id='portfolio'>Portfolio</h2>

          <ul className='projects'>
            <li className='gourmet-swap'>
              <a href='https://gourmet-swap-frontend.herokuapp.com/landing' target='_blank'>
                <img src={require('../../assets/gourmet-swap.png')} alt='gourmet swap icon' className='gs-icon' />
                <h3 className='title'> Gourmet Swap </h3>
              </a>
              <h4>
                  <a className='github-icon' href='https://github.com/amandakoster/GourmetSwap-frontend' target='_#'>
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a className='github-icon' href='https://github.com/0smium/GourmetSwap-backend' target='_#'>
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                    HTML5, SCSS, MongoDB, JavaScript, React, 401 Project
              </h4>
            </li>

            <li className='seattle-reads'>
              <a href='https://seattle-reads.herokuapp.com/' target='_blank'>
                <img src={require('../../assets/seattle-reads.png')} alt='graph of library checkouts' className='sr-icon' />
                <h3 className='title'> Seattle Reads </h3>
              </a>
              <h4>
                  <a className='github-icon' href='https://github.com/Cadburylion/Seattle-Reads' target='_#'>
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                    HTML, CSS, JavaScript, jQuery, MVC, 301 Project
              </h4>
            </li>

            <li className='guardians'>
              <a href='https://cadburylion.github.io/' target='_blank'>
                <img src={require('../../assets/goat-shadow.png')} alt='goat-icon' className='gog-icon' />
                <h3 className='title'> Guardians of the Goats </h3>
              </a>
              <h4>
                  <a className='github-icon' href='https://github.com/izzybaer/guardians-of-the-goats' target='_#'>
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                    HTML, CSS, JavaScript, Responsive, 201 Project
              </h4>
            </li>

          </ul>
        </section>
      </main>
    )
  }
}

export default Projects
