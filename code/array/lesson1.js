const telComb = str => {
  let m = {
    2:['a', 'b', 'c'],
    3:['d', 'e', 'f'],
    4:['g', 'h', 'i'],
    5:['j', 'k', 'l'],
    6:['m', 'n', 'o'],
    7:['p', 'q', 'r', 's'],
    8:['t', 'u', 'v'],
    9:['w', 'x', 'y', 'z']
  }

  let code  = []
  for (let chat of str) {
    if (m[chat]) {
      code.push(m[chat])
    }
  }

  const comb = code => {
    let result = []
    for (let i=0,il=code[0].length; i<il; i++) {
      for (let j=0,jl=code[1].length; j<jl; j++) {
        result.push(`${code[0][i]}${code[1][j]}`)
      }
    }
    code.splice(0, 2, result)
    if (code.length > 1) {
      comb(code)
    } else {
      return code[0]
    }
    return code[0]
  }
  if (code.length <= 1) {
    return code[0] || []
  }
  return comb(code)
};

export default telComb

