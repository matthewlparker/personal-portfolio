export const coverToggle = (state=false, {type, payload}) => {
  switch(type){
  case 'COVER_TOGGLE': return !state
  default: return state
  }
}

export const enterSite = (state=false, {type, payload}) => {
  switch(type){
    case 'ENTER_SITE': return payload
    default: return state
  }
}

export const focus = (state=false, {type, payload}) => {
  switch(type){
    case 'FOCUS': return payload
    default: return state
  }
}

export const pageActive = (state='', {type, payload}) => {
  switch(type){
    case 'PAGE_ACTIVE': return payload
    default: return state
  }
}

export const route = (state='', {type, payload}) => {
  switch(type){
  case 'SWITCH_ROUTE': return payload
  default: return state
  }
}

const initialState = () => {
  let backgrounds = ['https://i.imgur.com/HjStYze.gif',
  'https://i.imgur.com/4KJPU8C.gif',
  'https://i.imgur.com/XTCAUql.gif',
  'https://i.imgur.com/vvTO3np.gif',
  'https://i.imgur.com/589GAGa.gif',]
  let shuffledBackgrounds = shuffle(backgrounds)
  let background = shuffledBackgrounds.pop()

  return { backgrounds: shuffledBackgrounds, background: background }
}

const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const setBackground = (state=initialState(), {type, payload}) => {
  switch(type){
  case 'SET_BACKGROUND': return payload
  default: return state
  }
}

export const userName = (state='Visitor', {type, payload}) => {
  switch(type){
  case 'USER_NAME': return payload ? payload : state
  default: return state
  }
}

export const userPortrait = (state='', {type, payload}) => {
  switch(type){
  case 'USER_PORTRAIT': return payload
  default: return state
  }
}
