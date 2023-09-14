/*1.Write a function mapRevertSign(arr)

mapRevertSign(arr) takes in an array of numbers, and returns a new array of numbers containing opposite signs of the original array.

const arr = [1, -4, 2, 0]

mapRevertSign(arr) // [-1, 4, -2, 0]*/

const mapRevertSign = (arr) => {
  const a = [];

  arr.forEach((elem) => {
    a.push(0 - elem);
  });

  return a;
};

console.log(mapRevertSign([1, -4, 2, 0]));

const mapRevertSign2 = (arr) => {
  return arr.map((elem) => {
    return 0 - elem;
  });
};

console.log(mapRevertSign2([1, -4, 2, 0]));

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
