import React from 'react'
import Typist from 'react-typist'
import {connect} from 'react-redux'
import * as setRoute from '../../action/route.js'
import * as viewActions from '../../action/viewActions.js'

import './styles.scss'

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.userName,
      email: '',
      message: '',
      infoView: false,
    }
    this.toInfoView = this.toInfoView.bind(this)
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

  toInfoView(bool){
    this.setState({
      infoView: bool,
    })
  }

  handleChange(e){
    let{name, value} = e.target
    this.setState({[name]: value})
  }

  render(){
    let portrait = {backgroundImage: 'url(' + `${this.props.userPortrait}` + ')'}
    return(
      <div className='contact-main'>

        <div className='matt-dialogue box'>
          <div className='parting-message'>
            <Typist startDelay={1000} avgTypingDelay={25} stdTypingDelay={0} cursor={{show: false}}>
              {`Thanks for stopping by, ${this.props.userName}. It was great meeting you! I hope you've enjoyed your visit. If you'd like to get in touch again, please feel welcome to leave me a message. Have a great day!`}
            </Typist>
          </div>
          <div className='portrait-block'></div>
        </div>

        <div className='matt-portrait'></div>
        <div className='matt-name'>Matthew</div>

        <div className='form-container'>

          <form className={`form-card ${this.state.infoView ? 'flipped' : ''}`} method='post' action='https://formspree.io/cadburylion@gmail.com'>


            <div className='front box'>

              <textarea
                id='msg'
                name='User Message'
                placeholder='message'
                onFocus={()=>this.props.focus(true)}
                onBlur={()=>this.props.focus(false)}
              >
              </textarea>

              <div className='portrait-block'></div>

              <div className='see-back-hint' onClick={()=>this.toInfoView(true)}>See back to send</div>

            </div>


            <div className='back box'>

              <div className='email-input'>
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='email'
                  onFocus={()=>this.props.focus(true)}
                  onBlur={()=>this.props.focus(false)}
                />
              </div>

              <div className='input-name'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={this.state.name}
                  placeholder='name'
                  onChange={(e) => this.handleChange(e)}
                  onFocus={()=>this.props.focus(true)}
                  onBlur={()=>this.props.focus(false)}
                />
              </div>

              <button type='submit' className='submit-button'>
                Send
              </button>

              <div className='see-front-hint' onClick={()=>this.toInfoView(false)}>
                See front
              </div>

            </div>

            <input
              type="hidden"
              name="_next"
              value="www.matthewparker.io"
            />

          </form>

        </div>
        <div className='user-portrait' style={portrait}></div>
        <div className='user-name'>{this.props.userName}</div>
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
