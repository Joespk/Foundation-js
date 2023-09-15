//6.Re-write draw(n) as drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n) prints this pattern:
//Hint: Use nested loop, using assignment operator “=+”, and “\n” which is new line character (read “back-slash-N”)
//drawNg(5)

// *
// **
// ***
// ****
// *****

function draw(n) {
  let pattern = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

draw(5);

//Answer
const drawNg = (n) => {
  if (n < 0) return;

  for (let i = 0; i <= n; i++) {
    //Initialize s
    let s = "";
    for (let j = 0; j <= i; j++) {
      s += "*";
    }
    console.log(s);
  }
};
