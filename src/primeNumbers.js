/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function (limits) {
    let nums = [];
    for (let i = limits[0]; i <= limits[1]; i++) {
      let isprime = true;
      for (let k = 1; k <= Math.sqrt(i); k++) {
        if (i%k == 0) {
          isprime = false;
        }
      }
      if (isprime) {
        nums.push(i);
      }
    }
    return nums;
  }
};