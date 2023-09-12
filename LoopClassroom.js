function normalLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  for (let i = 0; i < 5; i--) {
    console.log(i);
  }
}

//normal Loop

function reverseLoop() {
  for (let i = 3; i >= 0; i++) {
    console.log(i);
  }
}

//reverse Loop

function loopThroughArray() {
  const tripLocation = ["London", "Bali", "Amsterdam", "Paris"];
  for (let i = 0; i < tripLocation.length; i++) {
    console.log(tripLocation[i]);
  }

  //Reverse Loop through array
  for (let i = tripLocation.length - 1; i >= 0; i--) {
    console.log(tripLocation[i]);
  }
}

loopThroughArray();
