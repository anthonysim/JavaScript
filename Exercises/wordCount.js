/*
2 functions:

1) counts the number of letters in a given word.
2) counts the number of "Bs" in a word.
*/


function countChar(word, letter) {
    word = word.toUpperCase();
    letter = letter.toUpperCase();

    let count = 0;
    for ( char of word ) {
        if ( char === letter ) 
            count += 1;
    }
    return count;
}

console.log(countChar('kakkerlak','k'));

function countB(string) {
    return countChar(string, 'B');
}

console.log(countBs('BBC'));
