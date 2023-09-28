//*8.Write a fizzBuzz(n) function

//fizzBuzz(n) iterates over inclusive range [1, n], and for each element in the range, fizzBuzz(n) prints Fizz if the element is divisible by 3, Buzz if the element is divisible by 5, and FizzBuzz if the element is divisible by 3 and 5.

//If no conditions are met, fizzBuzz(n) prints the element.

//fizzBuzz(20)

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
type fizzBuzzFunc = (n: number) => number | string;

type FizzBuzzText = "Fizz" | "Buzz" | "FizzBuzz";

type fizzBuzzConcreteFunc = (n: number) => number | FizzBuzzText;

const fizzBuzzGenerator: fizzBuzzFunc = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n;
  }
};

const fizzBuzz = (n: number) => {
  if (n < 0) return;

  for (let i = 0; i < n; i++) {
    console.log(fizzBuzzGenerator(i));
  }
};

fizzBuzz(20);
