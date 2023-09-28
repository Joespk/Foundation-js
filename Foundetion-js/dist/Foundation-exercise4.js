"use strict";
//4.Write a function unique(arr)
//unique(arr) takes in an array of numbers arr and returns a new array whose elements are unique.
//You can use isMember implemented above.
//const arr = [10, 20, 10, 20, 30, 50, 60, 100]
//unique(arr) // [10, 20, 30, 50, 60, 100]
const arrr = [10, 20, 10, 20, 30, 50, 60, 100];
const unique = (arrr) => {
    return arrr.filter((el, idx) => arrr.indexOf(el) === idx);
};
console.log(unique(arrr));
