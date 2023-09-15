//* 11.Write a function filterGt(n, arr)

//filterGt(n, arr) performs similar business logic to filterLt(n, arr) above, but instead of doing a lesser-than test, it does a greater-than test

//Do not use Array helper methods - use a simple for loop

//const arr = [120, 112, 111, 130, 169, 101],

//filterGt(0, arr) // [120, 112, 111, 130, 169, 101]
//filterGt(112, arr) // [120, 130, 169]

const arr = [120, 112, 111, 130, 169, 101];

function filterLt(n, arr) {
  const MoreNum = [];
  const num = n;
  for (let i = 0; i <= arr.length; i++) {
    if (num < arr[i]) {
      MoreNum.push(arr[i]);
    }
  }
  return MoreNum;
}

//Test Case
console.log(filterLt(0, arr)); // [120, 112, 111, 130, 169, 101]
console.log(filterLt(112, arr)); // [120, 130, 169]
