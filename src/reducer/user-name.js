export default (state='Visitor', {type, payload}) => {
  switch(type){
  case 'USER_NAME': return payload ? payload : state
  default: return state
  }
}
