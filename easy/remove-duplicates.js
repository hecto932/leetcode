/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  for (let j = 1; j < nums.length; ++j) {
    if (nums[j] != nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }

  return i + 1
}

let result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
console.log(result)

result = removeDuplicates([1, 1, 2])
console.log(result)
