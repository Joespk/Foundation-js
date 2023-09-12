//*normal Loop
function normalLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  for (let i = 0; i < 5; i--) {
    console.log(i);
  }
}

//*reverse Loop
function reverseLoop() {
  for (let i = 3; i >= 0; i++) {
    console.log(i);
  }
}

//*Loop through array
function loopThroughArray() {
  const tripLocation = ["London", "Bali", "Amsterdam", "Paris"];
  /*for (let i = 0; i < tripLocation.length; i++) {
    console.log(tripLocation[i]);
  }/*

  //*Reverse Loop through array
  /*for (let i = tripLocation.length - 1; i >= 0; i--) {
    console.log(tripLocation[i]);
  }*/

  //*Break Keyword
  for (let i = 0; i < tripLocation.length; i++) {
    if (tripLocation[i] === "Bali") {
      break; //คือเมื่อเงื่อนไขให้หยุดทำLoopทันที
    }
    console.log(tripLocation[i]);
  }

  //Continue keyword
  for (let i = 0; i < tripLocation.length; i++) {
    if (tripLocation[i] === "Bali") {
      continue; //คือเมื่อเงื่อนไขให้หยุดทำLoop แล้วเริ่มLoopถัดไป
      //EX: เจอBali ที่Loop 1 แล้วจะไม่มีการprintค่าLoop1 แต่จะมีการทำLoop 2,3 แล้วPrint ต่อ
    }
    console.log(tripLocation[i]);
  }
}

loopThroughArray();
