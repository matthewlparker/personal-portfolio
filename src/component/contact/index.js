import React from 'react'

// import contactAction from '../../action/contact'
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
      // focus: false,
    }

    this.focus = this.focus.bind(this)
    this.focusOut = this.focusOut.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let{name, value} = e.target
    this.setState({[name]: value})
  }

  focus(){
    // this.setState({
    //   focus: true
    // })
    this.props.focus(true)
  }

  focusOut(){
    // this.setState({
    //   focus: false
    // })
    this.props.focus(false)
  }


  render(){
    console.log('contact state: ', this.state)
    return(
      <div className='contact-main'>

        <div className='contact-content'>

          <form method='post' action='https://formspree.io/cadburylion@gmail.com'>

            <p className='contact-about-you'>
              About You
            </p>
            <label className='contact-info-label' htmlFor='name'>
              Your name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='eg. matthew parker'
              onFocus={this.focus}
              onBlur={this.focusOut}

            />

            <label className='contact-info-label' htmlFor='email'>
              Email address
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='eg. email@example.com'
              onFocus={this.focus}
              onBlur={this.focusOut}
            />

            <label className='contact-message-header' htmlFor='msg'>
              Message
            </label>
            <textarea
              id='msg'
              name='User Message'
              onFocus={this.focus}
              onBlur={this.focusOut}
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

export const mapStateToProps = (state) => ({})

export const mapDispatchToProps = (dispatch) => ({
  focus: (bool) => dispatch(viewActions.focus(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
