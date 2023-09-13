/*const callMe = () => {
  console.log("Hello from callback function");
};

const greeting = (callback) => {
  console.log("Hello word");
  callback();
};

greeting(callMe);

greeting(function () {
  console.log("Joe");
});
greeting(() => {
  console.log("Joe");
});*/
//*Annonymous function
/*function(){
    console.log("Joe")
}

() =>{
    console.log("Joe")
}*/

//test
/*const get = (getup) => {
  console.log("123");
  getup();
};

get(() => {
  for (let i = 0; i <= 4; i++) {
    console.log("Opps");
  }
});*/

// * Callback function with parameter
/*const greeting2 = (callback) => {
  console.log("Hello world");
  callback("Joe"); //Call back function อย่าลืมใส่ตรงนี้ด้วย
};

greeting2((name) => {
  console.log(`Hello from ${name}`);
});*/

// *Callback Function using Array

const originalArr = [1, 2, 3, 4];

const loopThroughArrayV2 = (arr, cb) => {
  for (let i = 0; i < originalArr.length; i++) {
    cb(arr[i]);
  }
};

loopThroughArrayV2(originalArr, (item) => {
  console.log(item);
});

// *Callback Function using Array has return

const mapArray = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);
    result.push(newItem);
  }

  return result;
};

const newArr = mapArray(originalArr, (item) => {
  return item * 2;
});

console.log(newArr);
