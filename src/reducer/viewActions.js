export default (state=false, {type, payload}) => {
  switch(type){
  case 'COVER_OPEN': return true
  default: return state
  case 'COVER_CLOSE': return false
  }
}
