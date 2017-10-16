export default (state=false, {type, payload}) => {
  switch(type){
  case 'HAMBURGER': return !state
  default: return state
  }
}
