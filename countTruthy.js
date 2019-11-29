/*
A function that counts the number of 'Truthy' items in an 
array.

'Falsy' items are undefined, null, '', false, 0 and NaN.
*/

const array = [1, 2, 3, undefined, null, '', false, 0, NaN];

function countTruth(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    console.log(count);
}

countTruth(array)