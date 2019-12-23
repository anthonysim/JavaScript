/* Fizz Buzz

Print all numbers from 1 to 100
If a number is divisible by 3 and 5 then "FizzBuzz"
If a number is only divisible by 3 only then "Fizz"
If a number is only divisible by 5 only then "Buzz"
*/

for ( let i = 1; i <= 100; i++ ) {
  if ( i % 3 === 0 && i % 5 === 0 ) {
    console.log('FizzBuzz');
  } else if ( i % 3 === 0 ) {
    console.log('Fizz');
  } else if ( i % 5 === 0 ) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
};
