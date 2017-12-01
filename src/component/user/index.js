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
      start: true,
      delete: false,
      selected: {
        man1: false,
        woman1: false,
      },
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
    })
  }

  handleKeyPress(e){
    e.key === 'Enter' && this.state.start ? this.enterSite() : undefined
    e.key === 'Enter' && this.state.delete ? this.deleteUser() : undefined

    e.key === 'ArrowUp' ? this.selectStart() : undefined
    e.key === 'ArrowDown' && (localStorage.userPortrait || localStorage.userName) ? this.selectDelete() : undefined
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

        <div className='enter' onClick={this.enterSite}>START<span className={this.state.start ? 'menu-select' : ''}></span></div>

        {localStorage.userPortait || localStorage.userName ?
          <div className='delete' onClick={this.deleteUser}>DELETE<span className={this.state.delete ? 'menu-select' : ''}></span></div>
          : undefined
        }
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
