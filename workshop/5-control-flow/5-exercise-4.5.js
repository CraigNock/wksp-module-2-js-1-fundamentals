// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.5
// Write a loop that will iterate from 0 to 15.
// For each iteration, it should check whether a number is even or odd
// and display that state along with the number.
// e.g.
// 0 is even
// 1 is odd
// 2 is even
// ...
for (let number = 1; number <=15; number ++) {
    if (number % 2 === 0) {
        console.log('Even:' + number);
    } else {
        console.log('Odd:' + number)
    }
}


// many other possibilities here.