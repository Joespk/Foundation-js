//5.Write a function draw(n)
//draw(n) takes in a number n, and prints the stars (*) into the console in this pattern:
//Hint: Use nested loop, using assignment operator “=+”, and “\n” which is new line character (read “back-slash-N”)

//draw(5)

// *****
// *****
// *****
// *****
// *****

function draw(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

draw(5);
