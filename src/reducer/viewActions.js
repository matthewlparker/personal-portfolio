export default (state=false, {type, payload}) => {
  switch(type){
  case 'COVER_TOGGLE': return !state
  default: return state
  }
}
