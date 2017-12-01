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
