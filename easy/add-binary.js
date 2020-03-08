const a = "11";
const b = "1";

var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let result = "";
  let carry = 0;

  for (; i >= 0 || j >= 0 || carry > 0; --i, --j) {
    let sum = (a[i] - "0" || 0) + (b[j] - "0" || 0) + carry;
    result = `${sum % 2}${result}`;
    carry = Math.floor(sum / 2);
  }
  return result;
};

console.log(`${a} + ${b} = ${addBinary(a, b)}`);
