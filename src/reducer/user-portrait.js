export default (state='https://i.lensdump.com/i/dnvte.jpg', {type, payload}) => {
  switch(type){
  case 'USER_PORTRAIT': return payload
  default: return state
  }
}
