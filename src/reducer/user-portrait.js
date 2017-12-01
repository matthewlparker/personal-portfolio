export default (state='', {type, payload}) => {
  switch(type){
  case 'USER_PORTRAIT': return payload
  default: return state
  }
}
