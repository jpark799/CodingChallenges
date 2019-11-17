/*
Using a For Each loop, add all the items in the array and store the total.
*/



const numArray = [3, 2, 5, 10, 11, 2, 7]
let total = 0


numArray.forEach(e => {
    total += e
});

console.log(total)

