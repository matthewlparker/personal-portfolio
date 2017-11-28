import React from 'react'

const userDialogue = (props) => {
  return(
    <div className={props.componentClass}
      onClick={()=>props.choice(props.optionNumber)}
      onMouseEnter={()=>props.hover(props.optionNumber)}
      onMouseLeave={()=>props.hover(0)}
    >
      {props.text}
        {props.considering === props.optionNumber ? <span> {'<'} </span>
          : undefined
        }
    </div>
  )
}

export default userDialogue
