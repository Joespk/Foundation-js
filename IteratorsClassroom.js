//forEach

const prices = [20, 15, 30, 40, 55];
/*
prices.forEach((price, idx) => {
  console.log(idx, price);
});
*/

//.map
const newprices = prices.map((price) => {
  return price * 1.1;
});

console.log(newprices);

//filter

const filprices = prices.filter((price) => {
  return price % 2 === 0;
});

console.log(filprices);
