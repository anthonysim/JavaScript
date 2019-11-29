/*
A function that adds up the total for
multiples of 5 and 3.

Number limit is set within the function.
*/

function sum(limit) {
    let total = 0;
    
    for (let i = 1; i <=10; i++)
        if (i % 5 === 0 || i % 3 === 0)
            total += i;
    
    return total;
}

console.log(sum(10));
