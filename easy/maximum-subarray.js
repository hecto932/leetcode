const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = nums => {
  let n = nums.length;
  let SUM = nums[0];
  let OPT = nums[0];
  for (let i = 1; i < n; ++i) {
    SUM = Math.max(SUM + nums[i], nums[i]);
    OPT = Math.max(OPT, SUM);
  }
  return OPT;
};

console.log(maxSubArray(nums));
