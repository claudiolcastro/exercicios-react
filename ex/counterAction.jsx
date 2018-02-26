function inc() {
  return { type: 'INC' }
}

function dec() {
  return { type: 'DEC' }
}

function stepChanged(e) {
  return {
    type: 'STEP_CHANGED',
    payload: e.target.value
   }
}

export { inc, dec, stepChanged }