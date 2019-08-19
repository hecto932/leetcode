var searchInsert = function(nums, target) {
  let r = nums.findIndex(n => target <= n)

  return r === -1 ? nums.length : r
}

const result = searchInsert([1, 3, 5, 6], 5)
console.log(result)
