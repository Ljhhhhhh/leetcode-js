const hasGroupsSizeX = deck => {
  if (deck.length < 2) return false
  let arr = {}

  let minLen = 0

  let map = []
  for (let key of deck) {
    if (!arr[key]) {
      arr[key] = 0
    }
    arr[key]++
  }
  Object.values(arr).forEach(v => {
    map.push(v)
    if (!minLen) minLen = v
    if (v < minLen) {
      minLen = v
    }
  })
  function getMaxDivisor (a, b) {
    if (a === 0) {
      return b
    }
    return getMaxDivisor(b % a, a)
  }
  while (map.length > 1) {
    let a = map.shift()
    let b = map.shift()
    let maxDivisor = getMaxDivisor(a, b)
    if (maxDivisor < 2) {
      return false
    } else {
      map.unshift(maxDivisor)
    }
  }

  return true
}

export default hasGroupsSizeX
// console.log('result', hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]))
