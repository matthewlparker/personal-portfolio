export default (state='', {type, payload}) => {
  switch(type){
  case 'SWITCH_ROUTE': return payload
  default: return state
  }
}
