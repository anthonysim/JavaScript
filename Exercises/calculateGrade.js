/*
A function that calcuates the average overall grade.

90-100: A
80-89:  B
70-79:  C
60-69:  D
1-59:   F
*/

const marks = [80, 80, 50];

function calculateGrade(marks) {
    let sum = 0;
    
    for (let i in marks)
        sum += marks[i];
        let average = sum / marks.length;
        
        if (average >= 90 && average <= 100)
            console.log('A');
        else if (average >= 80 && average <= 89)
            console.log('B');
        else if (average >= 70 && average <= 79)
            console.log('C');
        else if (average >= 60 && average <= 69)
            console.log('D');
        else
            console.log('F');
}           

calculateGrade(marks)
