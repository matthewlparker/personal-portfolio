import React from 'react'
import * as setRoute from '../../action/route.js'
import * as viewActions from '../../action/viewActions.js'
import {connect} from 'react-redux'

import './styles.scss'

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.userName,
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
    let portrait = {backgroundImage: 'url(' + `${this.props.userPortrait}` + ')'}
    return(
      <div className='contact-main'>



          <form className='contact-form' method='post' action='https://formspree.io/cadburylion@gmail.com'>

            <div className='contact-about-you'>
              About You
            </div>

      
            <div className='name-input'>

              <input
                type='text'
                id='name'
                name='name'
                value={this.state.name}
                placeholder='eg. matthew parker'
                onChange={(e)=>this.handleChange(e)}
                onFocus={()=>this.props.focus(true)}
                onBlur={()=>this.props.focus(false)}
              />
            </div>


            <div className='email-input'>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='eg. email@example.com'
                onFocus={()=>this.props.focus(true)}
                onBlur={()=>this.props.focus(false)}
              />
            </div>

            <div className='user-portrait' style={portrait}></div>



            <div className='message-input'>

              <textarea
                id='msg'
                name='User Message'
                placeholder='Message'
                onFocus={()=>this.props.focus(true)}
                onBlur={()=>this.props.focus(false)}
              >
              </textarea>
            </div>

            <input
              type="hidden"
              name="_next"
              value="www.matthewparker.io"
            />

            <button type='submit' className='submit-button'>
              Send
            </button>

          </form>


      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  userName: state.userName,
  userPortrait: state.userPortrait,
})

export const mapDispatchToProps = (dispatch) => ({
  focus: (bool) => dispatch(viewActions.focus(bool)),
  shareRoute: (route) => dispatch(setRoute.route(route)),
  pageActive: (bool) => dispatch(viewActions.pageActive(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
