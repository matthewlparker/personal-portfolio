import './footer.scss'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {scroller} from 'react-scroll'
import * as route from '../../action/route.js'

class Footer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      route: this.props.route || '/',
    }
  }

  render(){

    let routeToAboutAndScroll = () => {
      this.props.routeToAbout()
      scroller.scrollTo('header-top', {
        duration: 700,
        delay: 200,
        smooth: true,
        offset:0,
      })
    }

    let routeToPortfolioAndScroll = () => {
      this.props.routeToPortfolio()
      scroller.scrollTo('header-top', {
        duration: 500,
        delay: 200,
        smooth: true,
        offset:0,
      })
    }

    let routeToContactAndScroll = () => {
      this.props.routeToContact()
      scroller.scrollTo('header-top', {
        duration: 600,
        delay: 200,
        smooth: true,
        offset:0,
      })
    }

    return(
      <div className='footer'>
        <div className='links'>

          <div className='bio-field'>
            <div className='avatar'>

            </div>
            <div className='bio'>
              <div className='bio-avatar'>
                <img src={require('../../assets/matt-profile.png')} />
              </div>
              <p className='bio-info'>
                React & Full-Stack Developer, and graduate of<a href="http://www.codefellows.org/" title="Code Fellows" target="_blank">{'Code Fellows\''}</a>advanced JavaScript program. Matthew combines his education in developing modern websites and writing clean code with a deep drive for excellence to produce high-quality applications and exceptional user experiences.
              </p>
              <p>
                React & Full-Stack Developer.
                <br/>
                Available for hire now.
              </p>
            </div>
          </div>

        <ul className='social-links'>

          <li>
            <a href='https://github.com/cadburylion' target='_#'>
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <p>
              View<a href='https://github.com/cadburylion' target='_#'>@Cadburylion</a>on GitHub for open-source projects he has worked on during his time at Code Fellows and afterward
            </p>
          </li>

          <li>
            <a href='https://www.facebook.com/cadburylion?ref=bookmarks' target='_#'>
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <p>
              View {'Matthew\'s'}<a href='https://www.facebook.com/cadburylion?ref=bookmarks' target='_#'>Facebook profile</a>
            </p>
          </li>

          <li>
            <a href='https://www.linkedin.com/in/matthew-parker-05a5b69b/' target='_#'>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <p>
              View {'Matthew\'s'}<a href='https://www.linkedin.com/in/matthew-parker-05a5b69b/' target='_#'>LinkedIn profile</a>
            </p>
          </li>

          <li>
            <a href='https://twitter.com/CadburyLion' target='_#'>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <p>
              Follow<a href='https://twitter.com/CadburyLion' target='_#'>@Cadburylion</a>for web design & development articles, opinions and links, and thoughts on creative writing
            </p>
          </li>

          <li>
            <a href='mailto:cadburylion@gmail.com'>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
            <p>
              Send {'Matthew'} an<a href='mailto:cadburylion@gmail.com'>Email</a>
            </p>
          </li>

        </ul>

        <nav className='site-links'>
          <ul>
            <li>
              <Link to='/about' onClick={routeToAboutAndScroll}>About</Link>
              <p> {'Learn about Matthew\'s skills and workflow'} </p>
            </li>
            <li>
              <Link to='/' onClick={routeToPortfolioAndScroll}>Portfolio</Link>
              <p> {'View Matthew\'s web development work'} </p>
            </li>
            <li>
              <Link to='/contact' onClick={routeToContactAndScroll}>Contact</Link>
              <p> Send a general message </p>
            </li>
          </ul>
        </nav>

        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  routeToAbout: () => dispatch(route.switchRoute('/about')),
  routeToPortfolio: () => dispatch(route.switchRoute('/')),
  routeToContact: () => dispatch(route.switchRoute('/contact')),
  routeToSwitch: (desiredRoute) => dispatch(route.switchRoute(desiredRoute)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
