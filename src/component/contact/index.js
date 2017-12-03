import React from 'react'
import * as setRoute from '../../action/route.js'
import * as viewActions from '../../action/viewActions.js'
import {connect} from 'react-redux'

import './styles.scss'

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount(){
    this.props.shareRoute('/contact')
  }

  componentDidMount(){
    this.props.pageActive(true)
  }

  componentWillUnmount(){
    this.props.pageActive(false)
  }

  handleChange(e){
    let{name, value} = e.target
    this.setState({[name]: value})
  }

  render(){
    return(
      <div className='contact-main'>

        <div className='contact-content'>

          <form method='post' action='https://formspree.io/cadburylion@gmail.com'>

            <div className='contact-about-you'>
              About You
            </div>
            <label className='contact-info-label' htmlFor='name'>
              Your name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='eg. matthew parker'
              onFocus={()=>this.props.focus(true)}
              onBlur={()=>this.props.focus(false)}

            />

            <label className='contact-info-label' htmlFor='email'>
              Email address
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='eg. email@example.com'
              onFocus={()=>this.props.focus(true)}
              onBlur={()=>this.props.focus(false)}
            />

            <label className='contact-message-header' htmlFor='msg'>
              Message
            </label>
            <textarea
              id='msg'
              name='User Message'
              onFocus={()=>this.props.focus(true)}
              onBlur={()=>this.props.focus(false)}
            >
            </textarea>

            <input
              type="hidden"
              name="_next"
              value="www.matthewparker.io"
            />

            <button type='submit'>
              Send
            </button>
          </form>

        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({
  focus: (bool) => dispatch(viewActions.focus(bool)),
  shareRoute: (route) => dispatch(setRoute.route(route)),
  pageActive: (bool) => dispatch(viewActions.pageActive(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
