export default (state=false, {type, payload}) => {
  switch(type){
    case 'BRIGHT_TOGGLE': return !state
    default: return state
  }
}
