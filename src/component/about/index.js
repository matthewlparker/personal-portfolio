import React from 'react'
import Typist from 'react-typist'
import {connect} from 'react-redux'
import * as setRoute from '../../action/route.js'
import * as viewActions from '../../action/viewActions.js'
import UserDialogue from '../user-dialogue/index.js'
import './styles.scss'

class About extends React.Component{
  constructor(props){
    super(props)
    this.state={
      choice: 0,
      answerText: '',
      userPortrait: '',
    }
    this.handleChoice = this.handleChoice.bind(this)
  }

  componentWillMount(){
    if(!this.state.userPortrait && localStorage.userPortrait){
      this.setState({
        userPortrait: JSON.parse(localStorage.getItem('userPortrait')),
      })
    }

    this.props.shareRoute('/about')
  }

  componentDidMount(){
    this.props.pageActive(true)
  }

  componentWillUnmount(){
    this.props.pageActive(false)
  }

  handleChoice(option){
    this.setState({
      choice: option,
    })
  }


  render() {
    let name = this.props.name
    let portrait = {backgroundImage: 'url(' + `${this.props.portrait}` + ')'}

    return(
      <div className='about-main'>

        <div className='user-dialogue box'>

          <div className='portrait-block'></div>

          <UserDialogue
            componentClass={`choice-1 ${this.state.choice === 1 ? 'selected' : ''}`}
            choice={()=>this.handleChoice(1)}
            text={'Tell me a bit about yourself.'}
          />

          <UserDialogue
            componentClass={`choice-2 ${this.state.choice === 2 ? 'selected' : ''}`}
            choice={()=>this.handleChoice(2)}
            text={'What do you like about programming?'}
          />

          <UserDialogue
            componentClass={`choice-3 ${this.state.choice === 3 ? 'selected' : ''}`}
            choice={()=>this.handleChoice(3)}
            text={'What languages do you program in?'}
          />

          <UserDialogue
            componentClass={`choice-4 ${this.state.choice === 4 ? 'selected' : ''}`}
            choice={()=>this.handleChoice(4)}
            text={'Where do you see yourself in five years?'}
          />

        </div>

        <div className='user-name'>{name}</div>

        <div className='user-portrait' style={portrait}></div>

        <div className='matt-dialogue box'>

          <div className='answer'>

            {this.state.choice === 0 ?
              <Typist startDelay={900} avgTypingDelay={15} stdTypingDelay={0} cursor={{show: false}}>
                {this.props.background.background === 'https://i.imgur.com/589GAGa.gif'
                  ? `Ahoy there, ${name}! A pleasure to meet you. Welcome aboard my ship! You don't get C sick, do you? Well don't worry, I coded this site in JavaScript! Feel free to look around, and ask me any questions you might have.`
                  : this.props.background.background === 'https://i.imgur.com/XTCAUql.gif'
                    ? `Hi ${name}, it's a pleasure to meet you! So you like exploring the forest too? Well why not explore my site! Feel free to look around, and ask me any questions you might have.`
                    : this.props.background.background === 'https://i.imgur.com/4KJPU8C.gif'
                      ? `Hi ${name}, it's a pleasure to meet you! A golden sunset, an oceanic horizon, and a gentle train trip along the coast. No better time to check out my site! Feel free to look around, and ask me any questions you might have.`
                      : this.props.background.background === 'https://i.imgur.com/vvTO3np.gif'
                        ? `Hi ${name}, it's a pleasure to meet you! I hope you can hear me over these waterfalls! What an amazing sight. Speaking of sites, have you seen mine? Feel free to look around, and ask me any questions you might have.`
                        : this.props.background.background === 'https://i.imgur.com/HjStYze.gif'
                          ? `Hi ${name}, it's a pleasure to meet you! All I ask is a tall ship and a star to steer her by. And that you have a good time visiting my site. Feel free to look around, and ask me any questions you might have!`
                          : `Hi ${name}, it's a pleasure to meet you! Welcome to my site. Feel free to look around, and ask me any questions you might have.`
                }
              </Typist>
              : undefined
            }

            {this.state.choice === 1 ?
              <Typist startDelay={300} avgTypingDelay={15} stdTypingDelay={0} cursor={{show:false}}>
                {`My name's Matthew Parker. I'm a graduate of Code Fellows in Seattle, a full-stack JavaScript developer, and a Christian. Reading, adventures, and animals are a few of my favorite things. I aspire to be both a master programmer and best-selling author.`}
              </Typist>
              : undefined
            }
            {this.state.choice === 2 ?
              <Typist startDelay={300} avgTypingDelay={15} stdTypingDelay={0} cursor={{show: false}}>
                {`I love to create. As a writer, stories and worlds. As a programmer, services, products, and even experiences; I get to serve people by making and improving things they use every day. That inspires me to keep on learning, and to always do my best.`}
              </Typist>
              : undefined
            }
            {this.state.choice === 3 ?
              <Typist startDelay={300} avgTypingDelay={15} stdTypingDelay={0} cursor={{show: false}}>
                {`I specialize in JavaScript with a focus on the front-end with React, and have an array of skills such as HTML5, CSS3, Sass, Redux, Node, MongoDB, and others. I love learning these technologies more deeply, and new ones entirely!`}
              </Typist>
              : undefined
            }
            {this.state.choice === 4 ?
              <Typist startDelay={300} avgTypingDelay={15} stdTypingDelay={0} cursor={{show: false}}>
                {`I hope by then to be wiser, more charitable, a senior-level programmer with a great company, and a published author.`}
              </Typist>
              : undefined
            }
          </div>
          <div className='portrait-block'></div>
        </div>
        <div className='matt-portrait'></div>
        <div className='matt-name'>Matthew</div>


      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  name: state.userName,
  portrait: state.userPortrait,
  background: state.setBackground,
})

let mapDispatchToProps = (dispatch) => ({
  shareRoute: (route) => dispatch(setRoute.route(route)),
  pageActive: (bool) => dispatch(viewActions.pageActive(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
