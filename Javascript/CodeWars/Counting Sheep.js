/*
Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

SOURCE: https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript

*/

//ES5

function countSheeps(arrayOfSheep) {
    let total = 0
    for (i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
      total ++ }
    }
    return total
  }

//ES6

let countSheeps = arrayOfSheep => {
    let total = 0
    for (i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
      total ++ }
    }
    return total
  }