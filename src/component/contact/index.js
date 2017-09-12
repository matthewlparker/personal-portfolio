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

  // handleSubmit(e){
  //   e.preventDefault()
  //   console.log(this.setState())
  //   this.setState({
  //     name: this.state.name,
  //     email: this.state.email,
  //     password: this.state.password,
  //   })
  // }

  // <form method='post' action='http://myformmailer.localhost:3000/submit'>
  //   <label for='msg'>Message:</label>
  //   <textarea id='msg' name='User Message'></textarea>
  //   <button type='submit'
  //   className='contact-form-submit-button'> send </button>
  // </form>



  render(){
    return(
      <div>


      <a id="foxyform_embed_link_896108" href="http://www.foxyform.com/"></a>
      {(function(d, t){
        var g = d.createElement(t),
          s = d.getElementsByTagName(t)[0]
        g.src = 'http://www.foxyform.com/js.php?id=896108&sec_hash=257884cac84&width=350px'
        s.parentNode.insertBefore(g, s)
      }(document, 'script'))}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({})

export const mapDispatchToProps = (dispatch) => ({
  contact: (message) => dispatch(contactAction(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
