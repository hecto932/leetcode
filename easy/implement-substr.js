var strStr = function(haystack, needle) {
  if (needle === '') {
    return 0
  }

  return haystack.indexOf(needle)
}

const result = strStr('hello', 'll')
console.log(result)
