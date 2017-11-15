export default (state=false, {type, payload}) => {
  switch(type){
    case 'THEME_TOGGLE': return state=payload
    default: return state
  }
}
