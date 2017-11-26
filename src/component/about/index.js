import React from 'react'
import './styles.scss'

export default class About extends React.Component{
  constructor(props){
    super(props)
    this.state={
      choice: null,
      considering: null,
    }
    this.handleHover = this.handleHover.bind(this)
    this.handleChoice = this.handleChoice.bind(this)
  }

  handleChoice(choice){
    this.setState({
      choice: choice
    })
  }

  handleHover(choice){
    this.setState({
      considering: choice
    })
  }


  render() {
    console.log('about state: ', this.state)
    return(
      <div className='about-main'>

        <div className='user-dialogue box'>
          <div className='choice-1'
            onClick={()=>this.handleChoice(1)}
            onMouseEnter={()=>this.handleHover(1)}
            onMouseLeave={()=>this.handleHover(0)}
          >
            Tell me a bit about yourself.
              {this.state.considering === 1 ?
                <span> {'<'} </span>
                :undefined
              }
          </div>

          <div className='choice-2'
            onClick={()=>this.handleChoice(2)}
            onMouseEnter={()=>this.handleHover(2)}
            onMouseLeave={()=>this.handleHover(0)}
          >
            Why do you like to code?
              {this.state.considering === 2 ?
                <span> {'<'} </span>
                : undefined
              }
            </div>

            <div className='choice-3'
              onClick={()=>this.handleChoice(3)}
              onMouseEnter={()=>this.handleHover(3)}
              onMouseLeave={()=>this.handleHover(0)}
            >
            What languages do you code in?
              {this.state.considering === 3 ?
                <span> {'<'} </span>
                : undefined
              }
          </div>

          <div className='choice-4'
            onClick={()=>this.handleChoice(4)}
            onMouseEnter={()=>this.handleHover(4)}
            onMouseLeave={()=>this.handleHover(0)}
          >
            Where do you see yourself in five years?
              {this.state.considering === 4 ?
                <span> {'<'} </span>
                : undefined
              }
          </div>
        </div>

        <div className='matt-dialogue box'>

          <div className='answer'>
            {this.state.choice === 1 ?
              <div>
              My name is Matthew Parker. I am a lion.
              </div>
              : undefined
            }
            {this.state.choice === 2 ?
              <div>
              I love to create.
              </div>
              : undefined
            }
            {this.state.choice === 3 ?
              <div>
              I specialize in JavaScript with a focus on the front-end with React, but I am a full-stack developer and I love to learn new languages!
              </div>
              : undefined
            }
            {this.state.choice === 4 ?
              <div>
              I hope in five years to be working at a senior level in programming.
              </div>
              : undefined
            }

          </div>
        </div>

        <div className='matt-portrait box'></div>

      </div>
    )
  }
}

// <div className='about-content'>
//   <div className='about-avatar'>
//     <img src={require('../../assets/matt-profile.png')} />
//
//   </div>
//   <p className='about-first-paragraph'>
//   I am a React & Full-Stack Developer, graduate of <a href='https://www.codefellows.org' target='_#'>{'Code Fellows\''}</a> advanced JavaScript program, and creative writer. When I decided to pursue a career in web development, I quit my job of 5 and a half years in Olympia and moved to Seattle to dedicate myself to learning these new skills. Now with clean code, modern design, and industry standard tools, I build responsive Full-Stack applications.
//   </p>
//
//   <p>For clients and employers I am a developer who can provide:</p>
//   <ul>
//     <li className='about-list-title'>Responsive Websites</li>
//     <li className='about-list-title'>
//       Front-End Development
//       <ul>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>
//           JavaScript
//           <ul>
//             <li>jQuery</li>
//             <li>React</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//     <li className='about-list-title'>
//       Back-End Development
//       <ul>
//         <li>Node</li>
//         <li>MongoDB</li>
//         <li>RESTful architecture</li>
//       </ul>
//     </li>
//   </ul>
//
//   <p>
//
//   </p>
//
//   <h2>Skills</h2>
//
//   <h3>Front-end Developer</h3>
//
//   <div className='about-language-logos'>
//     <div className='about-language-logo'>
//       <img src={require('../../assets/javascript-original.svg')} alt='javascript logo' />
//       <strong> JavaScript </strong>
//     </div>
//
//     <div className='about-language-logo'>
//       <img src={require('../../assets/react-original.svg')} alt='react logo' />
//       <strong> React </strong>
//     </div>
//
//     <div className='about-language-logo'>
//       <img src={require('../../assets/html5-original.svg')} alt='html 5 logo'/>
//       <strong> HTML5 </strong>
//     </div>
//
//
//
//   </div>
//
//   <div className='about-front-end-logos'>
//
//   <div className='about-language-logo'>
//     <img src={require('../../assets/css3-original.svg')} alt='css 3 logo' />
//     <strong> CSS3 </strong>
//   </div>
//
//     <div className='about-language-logo'>
//       <img src={require('../../assets/sass-original.svg')} alt='sass logo' />
//       <strong> Sass </strong>
//     </div>
//   </div>
//
//   <h3>Back-end Developer</h3>
//
//   <div className='about-language-logos'>
//     <div className='about-language-logo'>
//       <img src={require('../../assets/nodejs-original.svg')} alt='node logo' />
//       <strong> Node </strong>
//     </div>
//
//     <div className='about-language-logo'>
//       <img src={require('../../assets/mongodb-original.svg')} alt='mongo db logo'/>
//       <strong> MongoDB </strong>
//     </div>
//   </div>
// </div>
