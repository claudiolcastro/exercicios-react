export function changeValue(e) {
  console.log("ola action")
  return {
    type: 'VALUE_CHANGE',
    payload: e.target.value
  }
}