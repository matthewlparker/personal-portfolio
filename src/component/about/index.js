import React from 'react'
import './styles.scss'

export default class About extends React.Component{
  render() {
    return(
      <main className='about-main'>

        <div className='about-intro'>
          <h1> About Matthew </h1>
          <h2> Building high-quality applications and exceptional user experiences </h2>
        </div>

        <div className='about-content'>
          <div className='about-avatar'>
            <img src={require('../../assets/matt-profile.png')} />
          </div>
        </div>
      </main>
    )
  }
}
