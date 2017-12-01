export default (state='', {type, payload}) => {
  switch(type){
  case 'SET_BACKGROUND': return payload
  default: return state
  }
}
