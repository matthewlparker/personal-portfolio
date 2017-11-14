import React from 'react'
import {connect} from 'react-redux'
import './style.scss'

class Weather extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  render(){
    console.log('Weather props: ', this.props)
    return(
      <div className='weather-main'>
        Location:
      </div>
    )
  }
}

let mapStateToProps = (state) => ({

})

let mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
