/*14.Write a function mid(arr)

mid(arr) returns the array containing middle element(s) of array arr.

If the array length is an even number, mid returns the 2 middle elements.

mid(['john']) // ["john"]
mid(['foo', 'bar', 'baz']) // ["bar"]
mid([1, 2, 3, 4]) // [2, 3] */

function mid(arr) {
  const length = arr.length;

  if (length === 0) {
    return []; // Empty array if input array is empty
  }

  if (length % 2 === 0) {
    // If the array length is even, return the two middle elements
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [arr[middleIndex1], arr[middleIndex2]];
  } else {
    // If the array length is odd, return the single middle element
    const middleIndex = Math.floor(length / 2);
    return [arr[middleIndex]];
  }
}

console.log(mid(["john"])); // ["john"]
console.log(mid(["foo", "bar", "baz"])); // ["bar"]
console.log(mid([1, 2, 3, 4])); // [2, 3]
