import React from 'react'

import contactAction from '../../action/contact'
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

  handleChange(e){
    let{name, value} = e.target
    this.setState({[name]: value})
  }


  render(){
    return(
      <main className='contact-main'>

        <div className='contact-intro'>
          <div className='contact-intro-group'>
            <h1>Contact Matthew</h1>
            <h2>Send a general message</h2>
          </div>
        </div>

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
            />

            <label className='contact-info-label' htmlFor='email'>
              Email address
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='eg. email@example.com'
            />

            <label className='contact-message-header' htmlFor='msg'>
              Message
            </label>
            <textarea
              id='msg'
              name='User Message'>
            </textarea>

            <input
              type="hidden"
              name="_next"
              value="https://matthew-parker-portfolio.herokuapp.com/"
            />

            <button type='submit'>
              Send
            </button>
          </form>

        </div>
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({})

export const mapDispatchToProps = (dispatch) => ({
  contact: (message) => dispatch(contactAction(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
