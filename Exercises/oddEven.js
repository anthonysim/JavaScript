/* 
Odd Even. 

a function that iterates through, while specifying 
what number of the iteration is odd or even.
*/

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++)
        if (i % 2 === 0)
            console.log(i, 'EVEN');
        else 
            console.log(i, 'ODD');
}

showNumbers(10);
