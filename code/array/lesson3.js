const canPlaceFlowers = (flowerbed, n) => {
  // 用1打散数组 [0, 0, 1, 0, 0] 打散成 [0, 0] [0, 0]
  const arrs = flowerbed
    .join('')
    .split(1)
    .filter(v => v !== '')
  return arrs
  const canUse = Math.ceil(flowerbed.length / 2)
  const has = flowerbed.filter(v => {
    return v === 1
  }).length
  return has + n <= canUse
}

const res = canPlaceFlowers([1, 0, 0, 0, 1], 1)
console.log('res', res)
