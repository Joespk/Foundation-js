// * Exercise:
// * Write a code that will loop from 0 to 15. For each loop, it will check if the current index number is odd or even, and display a message to the console.

// * Example Output:
// * > 0 is even
// * > 1 is odd
// * > 2 is even

// * > 15 is odd

function oddEven() {
  let num = 0;
  while (num <= 15) {
    if (num % 2 === 0) {
      console.log(num, "is even");
    } else {
      console.log(num, "is odd");
    }

    num++;
  }
}

oddEven();
// * Using While Loop
// let i = 0
// while (i <= 15) {
//   if (i % 2 === 0) {
//     console.log(i, 'is even')
//   } else {
//     console.log(i, 'is odd')
//   }

//   i++
// }
