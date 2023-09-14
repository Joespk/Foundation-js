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

console.log("New prices :", newprices);

//.filter

const premiumPrices = newprices.filter((price) => {
  return price > 30;
});

console.log("premiumPrices :", premiumPrices);

//.reduce

const sumPrice = newprices.reduce((PreVal, price) => {
  return PreVal + price;
}, 5 /*Initivalue*/);

console.log("sumPrice :", sumPrice);
