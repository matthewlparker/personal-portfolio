import React from 'react'
import {connect} from 'react-redux'
import * as user from '../../action/user.js'
import * as enterSite from '../../action/viewActions.js'
import * as coverToggle from '../../action/viewActions.js'
import './style.scss'

class User extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      start: true,
      delete: false,
      selected: {
        man1: false,
        woman1: false,
      },
      portraitURL: '',
      reminder: false,
    }
    this.saveName = this.saveName.bind(this)
    this.enterSite = this.enterSite.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.selectStart = this.selectStart.bind(this)
    this.selectDelete = this.selectDelete.bind(this)
    this.selectAvatar = this.selectAvatar.bind(this)
    this.savePortrait = this.savePortrait.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentWillMount(){
    document.addEventListener('keypress', this.handleKeyPress)
    if(localStorage.iconName) {this.selectAvatar(localStorage.iconName)}
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  savePortrait(){
    if(this.state.portraitURL){
      localStorage.setItem('userPortrait', JSON.stringify(this.state.portraitURL))
      this.props.setUserPortrait(this.state.portraitURL)
    } else {
      this.props.setUserPortrait()
    }
  }

  saveName(){
    if(this.state.name){
      localStorage.setItem('userName', this.state.name)
      this.props.setUserName(this.state.name)
    } else {
      this.props.setUserName(localStorage.userName)
    }
  }

  selectAvatar(avatar){
    if(avatar === 'man1') {
      this.setState({
        selected: {
          man1: true
        },
        portraitURL: 'https://i.lensdump.com/i/9faKz.png'
      })}

    if(avatar === 'woman1'){
      this.setState({
        selected: {
          woman1: true
        },
        portraitURL: 'https://i.lensdump.com/i/9fGt5.png'
      })}
    localStorage.setItem('iconName', avatar)
  }

  enterSite(){

    if(!this.state.portraitURL){this.setState({reminder: true}); return}

    this.saveName()
    this.savePortrait()
    this.props.enterSite(true)
    this.props.handleCover('COVER_TOGGLE')
  }

  selectStart(){
    this.setState({
      start: true,
      delete: false,
    })
  }

  selectDelete(){
    this.setState({
      start: false,
      delete: true,
    })
  }

  deleteUser(){
    localStorage.clear()
    this.setState({
      start: true,
      delete: false,
      selected: {
        man1: false,
        woman1: false,
      },
      portraitURL: '',
    })
  }

  handleKeyPress(e){
    e.key === 'Enter' && this.state.start ? this.enterSite() : undefined
    e.key === 'Enter' && this.state.delete ? this.deleteUser() : undefined

    e.key === 'ArrowUp' ? this.selectStart() : undefined
    e.key === 'ArrowDown' && (localStorage.userPortrait || localStorage.userName) ? this.selectDelete() : undefined

    e.key === 'ArrowRight' && this.state.portraitURL ? this.selectAvatar('man1') : undefined
    e.key === 'ArrowLeft' && this.state.portraitURL ? this.selectAvatar('woman1') : undefined
  }

  render(){
    console.log('user state: ', this.state)
    let userName = localStorage.getItem('userName')
    return(
      <div className='user-main'>

      <div className='user-welcome'>
        {localStorage.userPortrait && localStorage.userName ?
            `Welcome back, ${userName}`
          : !this.state.reminder ? `Pick an avatar and name`
          : `Sorry, you need a face`
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

        <div className={`portrait man1 ${this.state.selected.man1  ? 'selected' : ''}`} onClick={()=>this.selectAvatar('man1')}></div>
        <div className={`portrait woman1 ${this.state.selected.woman1  ? 'selected' : ''}`} onClick={()=>this.selectAvatar('woman1')}></div>

        <div className='enter' onClick={this.enterSite} onMouseEnter={this.selectStart}>START<span className={this.state.start ? 'menu-select' : ''}></span></div>

        {localStorage.userPortrait || localStorage.userName ?
          <div className='delete' onClick={this.deleteUser} onMouseEnter={this.selectDelete}>DELETE<span className={this.state.delete ? 'menu-select' : ''}></span></div>
          : undefined
        }
      </div>
    )
  }
}

let mapStateToProps = (state) => ({

})

let mapDispatchToProps = (dispatch) => ({
  enterSite: (bool) => dispatch(enterSite.entered(bool)),
  handleCover: (toggle) => dispatch(coverToggle.cover(toggle)),
  setUserName: (name) => dispatch(user.name(name)),
  setUserPortrait: (portrait) => dispatch(user.portrait(portrait)),
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
