const sort = arr => {
  const len = arr.length
  if (len < 2) return 0
  let max = 0
  for (let i = 0, min; i < len; i++) {
    min = arr[i]
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[i]) {
        min = arr[j]
        arr[j] = arr[i]
        arr[i] = min
      }
    }
    if (i) {
      const space = arr[i] - arr[i - 1]
      if (space > max) max = space
    }
  }
  return max
}

console.log(sort([5, 7, 9, 1]))
