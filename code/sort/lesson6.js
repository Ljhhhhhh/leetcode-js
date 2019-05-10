const a = arr => {
  const min = Math.min(...arr)
  if (min > 1) return 1
  let result
  const newArr = arr
    .filter(num => num > 0)
    .map(num => num - 1)
    .sort((a, b) => a - b)
  console.log('newArr', newArr)
  for (let i = 0, il = newArr.length; i < il; i++) {
    if (arr.indexOf(newArr[i]) < 0) {
      result = newArr[i]
    }
  }
  if (!result) {
    result = newArr[newArr.length - 1] + 1
  }
  return result
}
console.log(a([3, 4, -1, 1]))
