 const reverseStr = (str) => {
  return str.split(/\s/g).map(word => {
    return word.split('').reverse().join('')
  }).join(' ')
}

export default reverseStr;
