/*2.Write a function reverse(arr)

reverse(arr) returns a new array which is arr reversed.

You are not allowed to use Array.reverse method.

const arr = [1, 2, 3, 4, 5]
reverse(arr) // [5, 4, 3, 2, 1]*/

const arr = [1, 2, 3, 4, 5];
const reversed = (arr) => {
  const reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const valueAtIndex = arr[i];

    reversedArray.push(valueAtIndex);
  }

  return reversedArray;
};

console.log(reversed(arr));
