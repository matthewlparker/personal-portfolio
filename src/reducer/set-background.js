const initialState = () => {

  let backgrounds = [
      'https://i.imgur.com/HjStYze.gif',
      'https://i.imgur.com/4KJPU8C.gif',
      'https://i.imgur.com/XTCAUql.gif',
      'https://i.imgur.com/vvTO3np.gif',
      'https://i.imgur.com/589GAGa.gif',
  ]

  let background = backgrounds.splice(Math.floor(Math.random() * (backgrounds.length)), 1).toString()

  return {
    backgrounds: backgrounds,
    background: background
  }
}

export default (state=initialState(), {type, payload}) => {
  switch(type){
  case 'SET_BACKGROUND': return payload
  default: return state
  }
}
