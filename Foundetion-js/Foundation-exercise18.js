//18.Write a function flatMap(arr)

//flatMap(arr) takes in an array of arrays, and returns the flattened array.

//const arr = [
//  [1, 2, 3],
//  [100, 200],
//  [10, 20],
//]

//flatMap(arr) // [1, 2, 3, 100, 200, 10, 20]

const flatMap = (arr) => {
  const flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    const innerArray = arr[i];

    flattenedArray.push(...innerArray);
  }

  return flattenedArray;
};

const arr = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];

const flattenedArray = flatMap(arr);
console.log(flattenedArray); // [1, 2, 3, 100, 200, 10, 20]
