/*
Coding Challenge 2
1. Calculate the average score for each team.
2. Decide which team wins in average (highest average score).
*/

let  john, mike, mary, average;

john = [89, 120, 103];
mike = [116, 94, 123];
mary = [97, 134, 105];

avg_func = (team) => {
    return team.reduce((total, item)  => total + item) / 3;
}

let johnAvg = avg_func(john);
let mikeAvg = avg_func(mike);
let maryAvg = avg_func(mary);

// This is just here to check the scores to make sure its running correct
// console.log(johnAvg, mikeAvg, maryAvg);

if (johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log('The winner is JOHN with an average score of: ' + johnAvg);

} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log('The winner is MIKE with an average score of: ' + mikeAvg);

} else if (maryAvg > mikeAvg && maryAvg > johnAvg) {
    console.log('The winner is MARY with an average score of: ' + maryAvg);

} else {
    console.log('The average scores were a draw!');
};
