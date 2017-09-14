export default (state='/', {type, payload}) => {
  console.log('payload:', payload)
  switch(type){
  case 'SWITCH_ROUTE': return payload
  case 'ABOUT': return '/about'
  case 'PORTFOLIO': return '/portfolio'
  case 'CONTACT': return '/contact'
  default: return state
  }
}
