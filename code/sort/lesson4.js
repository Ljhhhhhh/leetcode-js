const sort = arr => {
  let odd = 0
  let even = 1
  const res = Array(arr.length)
  arr.sort((a, b) => a - b)
  arr.forEach((num, i) => {
    if (num % 2 === 0) {
      res[odd] = num
      odd += 2
    } else {
      res[even] = num
      even += 2
    }
  })
  return res
}

sort([4, 2, 5, 7, 11, 6, 8, 9])
