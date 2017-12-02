export default (state=false, {type, payload}) => {
  switch(type){
    case 'FOCUS': return payload
    default: return state
  }
}
