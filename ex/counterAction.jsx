function inc(params) {
  return { type: 'INC' }
}

function dec(params) {
  return { type: 'DEC' }
}

function stepChanged(params) {
  return { 
    type: 'STEP_CHANGED',
    payload: e.target.value
   }
}

export { inc, dec, stepChanged }