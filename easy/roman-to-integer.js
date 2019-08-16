var romanToInt = function(s) {
  const chars = [
    'I',
    'IV',
    'V',
    'IX',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M'
  ]
  const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  let acum = 0
  let i = 0

  while (i < s.length) {
    if (i + 1 < chars.length && chars.indexOf(s.substr(i, 2)) !== -1) {
      acum += values[chars.indexOf(s.substr(i, 2))]
      i += 2
    } else {
      acum += values[chars.indexOf(s.substr(i, 1))]
      i += 1
    }
  }

  return acum
}

const s = 'MCMXCIV'

console.log(romanToInt(s))
