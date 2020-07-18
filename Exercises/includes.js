/*
A function that checks to see if a a number is inside an array.
*/


function includes(arr, searchElement) {
   return arr.some(num => (searchElement === num) ? true : false)
}

const numbers = [1, 2, 3, 4]
console.log(includes(numbers, 1));
