/**
 * THis function splits a string on the provided delimter and returns the resulting array
 * for example: 
 * str: 'the brown fox jumped over the lazy dog'
 * delim= ' '
 * result: ['the', 'brown', 'fox', 'jumped', 'over', 'the','lazy', 'dog]
 * @param {stirng}
 * @param {string}
 */

// Strings
// Complete the following functions in strings/index.js:

// Split

// Split a string on a given delimiter and return the resulting array
// Hint: split

// Pairs

// Break a string into pairs of two characters each. Return the array of pairs
// Hint: For loop, increment by 2

// Reverse

// Reverse the characters in a given string
// Hint: split, reverse, join



const split = (str, delim) => {
  // write code for strings.split
// split the stirng with ' '
  return str.split(delim)
}


const pairs = (str) => {
  // write code for strings.pairs
// using . match method ref. w3 school .match it's a baked in method
//regex - regular expressions 
let p = [];
// looping the array with pairs of 2 
for (let i = 0; i < str.length; i+=2){
  p.push(str.slice(i, i+2));
}
// return str.match(/(..?)/g);
return p;
}
str2 ="abcdef"
console.log(pairs(str2))


const a = ['a blue dog'];

const reverse = (str) => {
  // write code for strings.reverse
// split the string first 
// reverse the 
return str.split('').reverse().join('');

}

module.exports = {
  split,
  pairs,
  reverse
}