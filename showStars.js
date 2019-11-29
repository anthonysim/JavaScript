/*
A function that forms a "tree" based on
the amount of rows specified.
*/

function showStars(row) {
    let stars = ''

    for (let i = 0; i < row; i++) {     
        stars += '*';
        console.log(stars);
    }
}

showStars(10);
