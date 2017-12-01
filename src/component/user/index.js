import React from 'react'
import {connect} from 'react-redux'
import * as enterSite from '../../action/viewActions.js'
import * as coverToggle from '../../action/viewActions.js'
import './style.scss'

class User extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      selected: {
        man1: false,
        woman1: false,
      }
    }
    this.saveName = this.saveName.bind(this)
    this.enterSite = this.enterSite.bind(this)
    this.selectAvatar = this.selectAvatar.bind(this)
    this.savePortrait = this.savePortrait.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentWillMount(){
    document.addEventListener('keypress', this.handleKeyPress)
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  savePortrait(avatar, file){
    if(avatar === 'man1'){this.setState({ selected: {man1:true }})}
    if(avatar === 'woman1'){this.setState({ selected: {woman1: true}})}
    localStorage.setItem('userPortrait', JSON.stringify(file))
  }

  saveName(){
    let name = this.state.name ? this.state.name
      : localStorage.userName ? localStorage.getItem('userName')
      : 'visitor'

    localStorage.setItem('userName', name)
  }

  selectAvatar(avatar){
    if(avatar === 'man1') {this.savePortrait('man1', 'https://i.lensdump.com/i/9faKz.png')}
    if(avatar === 'woman1') {this.savePortrait('woman1', 'https://i.lensdump.com/i/9fGt5.png')}
  }

  enterSite(){
    this.saveName()
    this.props.enterSite()
    this.props.handleCover('COVER_TOGGLE')
  }

  handleKeyPress(e){
    e.key === 'Enter' ? this.enterSite() : undefined
  }

  render(){
    let userName = localStorage.getItem('userName')
    return(
      <div className='user-main'>

      <div className='user-welcome'>
        {localStorage.userPortait || localStorage.userName ?
            `Welcome back, ${userName}`
          : `Pick an avatar and name`
        }
        </div>

        <div className='name-select'>
          <input
            type='text'
            maxLength='15'
            className='box'
            placeholder={`name: ${localStorage.userName ? localStorage.getItem('userName') : 'visitor'}`}
            onChange={(e)=>this.handleChange(e)}
          >
          </input>
        </div>

        <div className={`portrait man1 ${this.state.selected.man1 || JSON.parse(localStorage.getItem('userPortrait')) === 'https://i.lensdump.com/i/9faKz.png' ? 'selected' : ''}`} onClick={()=>this.selectAvatar('man1')}></div>
        <div className={`portrait woman1 ${this.state.selected.woman1 || JSON.parse(localStorage.getItem('userPortrait')) === 'https://i.lensdump.com/i/9fGt5.png' ? 'selected' : ''}`} onClick={()=>this.selectAvatar('woman1')}></div>

        <div className='enter' onClick={this.enterSite} >START<span></span></div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({

})

let mapDispatchToProps = (dispatch) => ({
  enterSite: () => dispatch(enterSite.entered()),
  handleCover: (toggle) => dispatch(coverToggle.cover(toggle)),
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
