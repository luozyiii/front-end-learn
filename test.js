/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length
    for(let i = len - 1; i > 0; i--) {
        digits[i]++
        if(digits[i] % 10 != 0) {
            return digits
        }
    }
    digits = [...Array(len + 1)].map(_=>0)
    digits[0] = 1
    return digits
};

plusOne([1,2,3])
plusOne([4,9,9])