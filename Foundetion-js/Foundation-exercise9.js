//*9.Write a GCD function gcd(a, b)

//gcd(a, b) returns greatest common divisor (GCD / หรม.) between the pair a, b

//gcd(10, 15) // 5
//gcd(18, 12) // 6
//gcd(3, 2) // 1

const gcd = function (a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

//Test case
console.log(gcd(10, 15)); // 5
console.log(gcd(18, 12)); // 6
console.log(gcd(3, 2)); // 1
