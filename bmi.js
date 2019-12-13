/*
Calculated the bmi for mark and john, compares the both person's bmis against each other
to determine is mark has a higher bmi than john.
*/

let BMI, mass, height, mark, john;

BMI = (mass, height) => (mass / (height ** 2 ));

mark = BMI(78, 1.69);
john = BMI(92, 1.95);
console.log(mark, john);

let versus = Boolean(mark > john)

console.log("Is Mark's BMI higher than Johns?", versus);
