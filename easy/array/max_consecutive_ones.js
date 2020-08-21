/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let globalCounter = 0;
  let localCounter = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 1) {
      localCounter++;
      globalCounter = Math.max(globalCounter, localCounter);
    } else {
      localCounter = 0;
    }
  }

  return Math.max(globalCounter, localCounter);
};
