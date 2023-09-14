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
