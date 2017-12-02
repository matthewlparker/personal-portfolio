export default (state=false, {type, payload}) => {
  switch(type){
    case 'ENTER_SITE': return payload
    default: return state
  }
}
