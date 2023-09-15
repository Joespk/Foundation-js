/* * 12.Implement a programmable logic to compute compounded return

Compounded returns are an investment strategy in which the interest income earned from the previous period is also invested into the current period.

This is like how we earn interests from savings accounts.

The interface (function signature) to this logic should be as simple as compoundedReturn(amount, interest, n) where amount is the amount of fund invested in the 1st period, interest is an interest percentage per period, and n is the number of periods of the investment.

compoundedReturn(100, 1, 1) // 101
compoundedReturn(100, 10, 1) // 110
compoundedReturn(100, 10, 2) // 121*/

const compoundedReturn = (amount, IntersectionPercent, periods) => {
  for (let i = 0; i < periods; i++) {
    amount = amount * (1 + IntersectionPercent / 100);
  }

  return amount;
};

//solution 2

const compoundedReturn2 = (amount, IntersectionPercent, periods) => {
  return amount * (1 + IntersectionPercent / 100) ** periods;
};
//Test case
console.log(compoundedReturn(100, 1, 1)); // 101
console.log(compoundedReturn(100, 10, 1)); // 110
console.log(compoundedReturn(100, 10, 2)); // 121
//Test case
console.log(compoundedReturn2(100, 1, 1)); // 101
console.log(compoundedReturn2(100, 10, 1)); // 110
console.log(compoundedReturn2(100, 10, 2)); // 121
