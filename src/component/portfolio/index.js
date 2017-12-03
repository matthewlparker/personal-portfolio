import './styles.scss'
import React from 'react'
import {scroller} from 'react-scroll'
import {connect} from 'react-redux'
import Project from '../project/index.js'
import ViewCover from '../view-cover/index.js'
import * as setRoute from '../../action/route.js'
import * as viewActions from '../../action/viewActions.js'

class Portfolio extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.shareRoute('/portfolio')
  }

  componentDidMount(){

    this.props.pageActive(true)
  }

  componentWillUnmount(){
    this.props.pageActive(false)
  }

  render() {

    return(
      <div className='portfolio-container'>
        <div className='project sr'>
          <Project
            logoName={'SR'}
            title={'Seattle Reads'}
            projectColor={'rgba(55, 121, 182, .4)'}
            url={'https://seattle-library-checkouts.herokuapp.com/'}
            description={'A web app that makes it easy to see what items are being checked out of the Seattle public library system, and find popular new reads.'}
            skills={'javascript, react, redux, html5, sass, git'}
          />
        </div>

        <div className='project gs'>
          <Project
            logoName={'GS'}
            title={'Gourmet Swap'}
            projectColor={'rgba(206, 64, 43, .4)'}
            url={'https://gourmet-swap-frontend.herokuapp.com/'}
            description={'A full-stack application built during my 401 class at Code Fellows as a prototype for a gourmet meal sharing startup.'}
            skills={'javascript, react, redux, mongodb, git'}
          />
        </div>

        <div className='project gog'>
          <Project
            logoName={'GoG'}
            title={'Guardians of the Goats'}
            url={'https://cadburylion.github.io/'}
            projectColor={'rgba(54, 54, 54, .4)'}
            description={'My first project at Code Fellows, Guardians of the Goats is a front-end mockup of a goat-care resource site. Goats in need deserve a Guardian indeed.'}
            skills={'javascript, html5, css3, git'}
          />
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({})

let mapDispatchToProps = (dispatch) => ({
  shareRoute: (route) => dispatch(setRoute.route(route)),
  pageActive: (bool) => dispatch(viewActions.pageActive(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
