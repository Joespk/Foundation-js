/*14.Write a function mid(arr)

mid(arr) returns the array containing middle element(s) of array arr.

If the array length is an even number, mid returns the 2 middle elements.

mid(['john']) // ["john"]
mid(['foo', 'bar', 'baz']) // ["bar"]
mid([1, 2, 3, 4]) // [2, 3] */

//Answer
//not even
const mid = (arr) => {
  if (arr.length === 1) return arr;

  const middlePosition = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    const elem1 = arr[middlePosition - 1];
    const elem2 = arr[middlePosition];

    return [elem1, elem2];
  }

  return [arr[middlePosition]];
};

//Test case
console.log(mid(["john"])); // ["john"]
console.log(mid(["foo", "bar", "baz"])); // ["bar"]
console.log(mid([1, 2, 3, 4])); // [2, 3]
