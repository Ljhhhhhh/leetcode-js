const sort = arr => {
  for (let i = 0, il = arr.length, min; i < il; i++) {
    min = arr[i]
    for (let j = i; j < il; j++) {
      if (arr[j] < arr[i]) {
        min = arr[j]
        arr[j] = arr[i]
        arr[i] = min
      }
    }
  }
  return arr
}

console.log(sort([3, 2, 9, 8, 6]))
