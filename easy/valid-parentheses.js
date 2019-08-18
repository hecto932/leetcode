/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []

  for (let i = 0; i < s.length; ++i) {
    if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') {
      stack.push(s.charAt(i))
    } else {
      let top = stack.pop()
      if (
        (s.charAt(i) === ')' && top !== '(') ||
        (s.charAt(i) === '}' && top !== '{') ||
        (s.charAt(i) === ']' && top !== '[')
      ) {
        return false
      }
    }
  }

  return stack.length === 0
}

let result = isValid('{[]}')
console.log(result)

result = isValid('([)]')
console.log(result)
