const canPlaceFlowers = (flowerbed, n) => {
  for (let i=0,il=flowerbed.length; i<il; i++) {
    if (!flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1]) {
      flowerbed[i] = 1;
      // i++
      n--
    }
  }
  return n <= 0
}

// const res = canPlaceFlowers([0, 1, 0, 0], 1)
// console.log(res)

export default canPlaceFlowers;
