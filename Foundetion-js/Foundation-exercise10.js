/*Write a function filterLt(n, arr)

filterLt(n, arr) takes in an a number n and an array of numbers arr, and returns a new array containing all elements of arr that is lesser than (lt) n.

Do not use Array helper methods - use a simple for loop

const arr = [120, 112, 111, 130, 169, 101],

filterLt(0, arr) // []
filterLt(112, arr) // [111, 101]*/
const arr = [120, 112, 111, 130, 169, 101];

function filterLt(n, arr) {
  const lessNum = [];
  const num = n;
  for (let i = 0; i <= arr.length; i++) {
    if (num > arr[i]) {
      lessNum.push(arr[i]);
    }
  }
  return lessNum;
}

console.log(filterLt(0, arr)); // []
console.log(filterLt(112, arr)); // [111, 101]
