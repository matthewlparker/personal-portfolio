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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let{name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.setState())
    this.setState({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          name='email'
          type='email'
          placeholder='email'
          value={this.state.email}
          onChange={this.handleChange}
        />

        <input
          name='message'
          type='textarea'
          placeholder='message'
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button type='submit'
        className='contact-form-submit-button'> send </button>
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({})

export const mapDispatchToProps = (dispatch) => ({
  contact: (message) => dispatch(contactAction(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
