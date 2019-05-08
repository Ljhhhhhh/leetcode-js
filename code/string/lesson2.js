export default str => {

  const matchStr = str => {
    let start = str.match(/(0+|1+)/)[0]
    let o = start[0] === '0' ? '1' : '0'
    let needStr = start + o.repeat(start.length)
    return str.startsWith(needStr)
  }

  const len = str.length - 1
  let count = 0
  
  for (let i = 0; i < len; i++) {
    if (matchStr(str.slice(i))) {
      ++count
    }
  }
  return count
}
