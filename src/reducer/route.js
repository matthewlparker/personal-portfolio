export default (state='', {type, payload}) => {
  switch(type){
  case 'HOME': return '/home'
  default: return state
  }
}
