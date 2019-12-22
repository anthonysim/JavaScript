/*
A function that iterates through attributes of a 
movie, but only pulls out the title and director.
*/

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

function showProperties(obj) {
    for (let i in obj)
        if (i === 'title' || i === 'director')
            console.log(i, obj[i]);
}

showProperties(movie)
