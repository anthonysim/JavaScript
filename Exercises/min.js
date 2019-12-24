/*
A function comparing 2 numbers, returns the minimum amongst the 2.
*/

function min(a, b) {
    if ( a < b )
        return a;
    else 
        return b;
};

console.log(min(0, 10));
console.log(min(0, -10));
