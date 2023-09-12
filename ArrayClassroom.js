const myArr = ["Joe", 27];

console.log("My Name:", myArr[0]);
console.log("My Age:", myArr[1]);

//console.log(myArr[10]) undefind
myArr.push("Wed");
myArr.push(2000);

const newArr = myArr.slice(1, 4);
console.log(myArr);
console.log(newArr);

//print Array push(1,4) out

const newArr2 = myArr.concat("hello", "Cleverse academy");
console.log(myArr);
console.log(newArr2);
