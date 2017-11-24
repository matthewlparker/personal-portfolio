import './styles.scss'
import React from 'react'
import {scroller} from 'react-scroll'
import Project from '../project/index.js'
import ViewCover from '../view-cover/index.js'

class Portfolio extends React.Component{

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
      <div className='portfolio-container'>
        <div className='project-sr'>
          <Project
            logoName={'SR'}
            title={'Seattle Reads'}
            description={'A web app that makes it easy to see what items are being checked out of the Seattle public library system, and find popular new reads.'}
          />
        </div>

        <div className='project-gs'>
          <Project
            logoName={'GS'}
            title={'Gourmet Swap'}
            description={'A full-stack application built during my 401 class at Code Fellows as a prototype for a gourmet meal sharing startup.'}
          />
        </div>

        <div className='project-gog'>
          <Project
            logoName={'GoG'}
            title={'Guardians'}
            description={'My first project at Code Fellows, Guardians of the Goats is a front-end mockup that allows users to gain access to information about caring for goats, to advertise a goat that is need of help, and to make yourself available to offer that help.'}
          />
        </div>
      </div>
    )
  }
}

// <section className='featured-work'>
//   <h2 id='portfolio'></h2>
//
//   <ul className='projects'>
//
//
//     <li className='seattle-reads'>
//       <a href='https://seattle-library-checkouts.herokuapp.com/' target='_blank'>
//         <h3 className='title'> Seattle Reads </h3>
//       </a>
//       <h4>
//           <a className='github-icon' href='https://github.com/Cadburylion/seattle-library-checkouts' target='_#'>
//             <i className="fa fa-github" aria-hidden="true"></i>
//           </a>
//             React, JavaScript, HTML5, CSS3, Sass
//       </h4>
//     </li>
//
//
//     <li className='gourmet-swap'>
//       <a href='https://gourmet-swap-frontend.herokuapp.com/landing' target='_blank'>
//         <h3 className='title'> Gourmet Swap </h3>
//       </a>
//       <h4>
//           <a className='github-icon' href='https://github.com/amandakoster/GourmetSwap-frontend' target='_#'>
//             <i className="fa fa-github" aria-hidden="true"></i>
//           </a>
//           <a className='github-icon' href='https://github.com/0smium/GourmetSwap-backend' target='_#'>
//             <i className="fa fa-github" aria-hidden="true"></i>
//           </a>
//             HTML5, Sass, MongoDB, JavaScript, React, 401 Project
//       </h4>
//     </li>
//
//
//
//     <li className='guardians'>
//       <a href='https://cadburylion.github.io/' target='_blank'>
//         <h3 className='title'> Guardians of the Goats </h3>
//       </a>
//       <h4>
//           <a className='github-icon' href='https://github.com/izzybaer/guardians-of-the-goats' target='_#'>
//             <i className="fa fa-github" aria-hidden="true"></i>
//           </a>
//             HTML5, CSS3, JavaScript, 201 Project
//       </h4>
//     </li>
//
//   </ul>
// </section>

export default Portfolio
