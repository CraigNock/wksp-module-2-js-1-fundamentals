// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q9
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.
//
let board = ''
for (let i = 1; i <=81; i ++) {
    if(i % 9 === 0){
        board += '\n';
    } else if (i % 2 !== 0) {
        board += '#';
    } else {
        board += "_";
    }
}
console.log(board);






// let line1 ='#_#_#_#_'
// let line2 ='_#_#_#_#' 
// for (let number = 1; number <=8; number ++) {
//     if (number % 2 !==0) {
//         console.log(line1);
//     } else {
//         console.log(line2);
//     }
// }


// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#