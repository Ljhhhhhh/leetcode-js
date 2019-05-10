const sort = (arr, k) => {
  for (let i = 0, il = arr.length; i < il; i++) {
    for (let j = i, tmp; j < il; j++) {
      if (arr[j] > arr[i]) {
        tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
      }
      if (i === k) break
    }
  }
  console.log('arr[k-1]', arr[k - 1])
  return arr[k - 1]
  // console.log('arr', arr, arr[k - 1])
  // const arrSet = Array.from(arr).sort((a, b) => b - a)
  // console.log('arrSet[k]', arrSet[k - 1])
  // return arrSet[k - 1]
}

sort([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
