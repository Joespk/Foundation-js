"use strict";
//*8.Write a fizzBuzz(n) function
const fizzBuzzGenerator = (n) => {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }
    else if (n % 3 === 0) {
        return "Fizz";
    }
    else if (n % 5 === 0) {
        return "Buzz";
    }
    else {
        return n;
    }
};
const fizzBuzz = (n) => {
    if (n < 0)
        return;
    for (let i = 0; i < n; i++) {
        console.log(fizzBuzzGenerator(i));
    }
};
fizzBuzz(20);
