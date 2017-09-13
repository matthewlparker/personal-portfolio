import React from 'react'

import contactAction from '../../action/contact'
import {connect} from 'react-redux'

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let{name, value} = e.target
    this.setState({[name]: value})
  }


  render(){
    return(
      <div>

      <form method='post' action='https://formspree.io/matthewleonparker@outlook.com'>

        <label htmlFor='name'>
          Your name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='eg. matthew parker'
        />

        <label htmlFor='email'>
          Email address
        </label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='eg. hello@matthewparker.com'
        />

        <label htmlFor='msg'>
          Message:
        </label>
        <textarea
          id='msg'
          name='User Message'>
        </textarea>

        <input
          type="hidden"
          name="_next"
          value="http://localhost:8080/projects"
        />

        <button type='submit'>
          Send
        </button>
      </form>


      </div>
    )
  }
}

export const mapStateToProps = (state) => ({})

export const mapDispatchToProps = (dispatch) => ({
  contact: (message) => dispatch(contactAction(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
