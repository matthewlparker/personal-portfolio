export default (state='', {type, payload}) => {
  switch(type){
    case 'PAGE_ACTIVE': return payload
    default: return state
  }
}
