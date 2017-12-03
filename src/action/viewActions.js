export const cover = (toggle) => ({
  type: 'COVER_TOGGLE',
  payload: toggle,
})

export const theme = (toggle) => ({
  type: 'THEME_TOGGLE',
  payload: toggle,
})

export const entered = (entered) => ({
  type: 'ENTER_SITE',
  payload: entered,
})

export const focus = (bool) => ({
  type: 'FOCUS',
  payload: bool,
})

export const background = (bg) => ({
  type: 'SET_BACKGROUND',
  payload: bg,
})

export const pageActive = (bool) => ({
  type: 'PAGE_ACTIVE',
  payload: bool,
})
