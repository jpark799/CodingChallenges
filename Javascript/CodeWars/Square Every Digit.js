/*

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

SOURCE: https://www.codewars.com/kata/square-every-digit/train/javascript

*/


function squareDigits(num){
    let str = num.toString()
    let total = []
    for (let i = 0; i < str.length; i ++) {
      total.push(str[i]*str[i])
    }
  return parseInt(total.join(""))
  }