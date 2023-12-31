/* *1.Write a function maxNegMinPos(arr)

maxNegMinPos(arr) takes in an array arr, and it prints the max negative value (maxNeg) as well as the min positive value (minPos)

const arr = [12, -13, 14, 4, 2, -1, -18]

maxNegMinPos(arr)

// MaxNeg is -1
// MinPos is 2 */

const arr = [12, -13, 14, 4, 2, -1, -18];

function maxNegMinPos(arr) {
  const positivenum = arr.filter((item) => {
    return item > 0;
  });
  const negativenum = arr.filter((item) => {
    return item < 0;
  });
  const maxNegvalue = Math.max(...negativenum);
  const minPosvalue = Math.min(...positivenum);
  console.log("MaxNeg", maxNegvalue);
  console.log("MinPos", minPosvalue);
}

maxNegMinPos(arr);

//Answer
/* const maxNegMinPos = (arr) => {
  //There could be null
  let maxNeg = null
  let minPos = null

  for(let i = 0;i < arr.lenght; i++){
    const elem = arr[i]

    if(elem < 0){
      //*negative num
      if(!maxNeg) {
        maxNeg = elem
        continue
      }

      if(elem > maxNeg){
        maxNeg = elem
      } 
    } else {
      if(!minPos){
        minPos = elem
        continue
      }

      if(elem < minPos){
        minPos = elem
      }
    }
  }

  console.log(`MaxNeg is ${maxNeg}\nMinPos is ${minPos}`)
}*/
