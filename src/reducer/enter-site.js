export default (state=false, {type, payload}) => {
  switch(type){
    case 'ENTER_SITE': return true
    default: return state
  }
}
