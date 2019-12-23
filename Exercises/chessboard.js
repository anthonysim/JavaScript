/*
ChessBoard

A program that crates a string that respresents an 8X8 grid. 
*/

let size = 8;

for ( let i = 1; i <= size; i++ ) {
  if ( i % 2 === 0 ) {
    console.log('# # # #');
  } else {
    console.log(' # # # #');
  }
};
