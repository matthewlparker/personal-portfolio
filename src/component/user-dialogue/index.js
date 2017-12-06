import React from 'react'

const UserDialogue = (props) => {
  return(
    <div className={props.componentClass}
      onClick={props.choice}
    >
      {props.text}<span>{' <'}</span>

    </div>
  )
}

export default UserDialogue

// {props.considering === props.optionNumber ? <span> {'<'} </span>
//   : undefined
// }
