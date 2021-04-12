
// Numbers
// Complete the following functions in numbers/index.js:

// isEven

// Return a boolean that represents whether a given number is even
// Hint: Modulus
// Sum

// Return a value that represents the sum of an array of numbers
// Hint: Reduce
// 
//ComboSum

// Determine if any combination of numbers in an array equals a given sum. Return a boolean
// Hint: Loop in loop OR indexOf for diff

/**
 * Returns true if the number is even
 * @param {number} num 
 */

const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }

}

const a = [1, 2, 3, 4, 5, 6]
const sum = (arr) => {
  // write code for numbers.sum
  // // returns the sum of all values in a give array
  // const sun = a.reduce(function (a, b) {return a + b}, 0);
  const myFunction = (total, num) => {
    return total + num;
  }
  return arr.reduce(myFunction)
}
console.log(sum(a));

//   arr.reduce(myFunction (a, b) {
//     return a + b
//   }, 0);
// }

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  // if we hit a return the function will exit the problem but we want to make sure everyhting checks the criteria
  // run a loop to got through the 1 array 
  for (i = 0; i < arr.length; i++) {
    // this will run the second set of array 
    for (j = i = +1; j < arr.length; j++) {
      // check array set 1 is and array set 2 is equal to sum 
      // return true if the 2 sets of array equal to sum
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  // return false sets of array is not 
  return false;
}



module.exports = {
  isEven,
  sum,
  comboSum
}