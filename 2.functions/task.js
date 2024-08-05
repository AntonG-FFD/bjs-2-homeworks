"use strict"
function getArrayParams(...arr) {
  // let min = arr[0];
  // let max = arr[0
    let min = Infinity;
    let max = -Infinity;
  let sum = 0;
  let avg = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  avg = +((sum / arr.length).toFixed(2));
    return {
      min,
      max,
      avg,
  }
  }

  function summElementsWorker(...arr) {
    let sum = 0;
    if (arr[0] !== undefined) {
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
    }
  return sum;
  }
  
  function differenceMaxMinWorker(...arr) { 
    if (arr[0] !== undefined) {
    let min = arr[0];
    let max = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
        }
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      let difMaxMin = max - min;
      return difMaxMin;
    } else { return 0; }
  }
  
  function differenceEvenOddWorker(...arr) { 
    if (arr[0] !== undefined) {
      let sumOdd = 0;
      let sumEven = 0;
      for (let i = 0; i < arr.length; i+=1) {
        if (arr[i] % 2 === 0) {
        sumEven += arr[i];
        } else {
        sumOdd += arr[i];
        }
      }
      let differenceEvenOdd = sumEven - sumOdd;
      return differenceEvenOdd;
    } else {
        return 0;
      }
}
  
  function averageEvenElementsWorker(...arr) {
    if (arr[0] !== undefined) {
    let sumEven = 0;
    let counter = 0;
      for (let i = 0; i < arr.length; i+=1) {
        if (arr[i] % 2 === 0) {
        counter += 1;
        sumEven += arr[i];
        }
      }
      let avgEven = sumEven / counter;
    return avgEven;
    } else {
      return 0;}
    }

    function makeWork (arrOfArr, func) {
        let maxWorkerResult = -Infinity;
          for (let i = 0; i < arrOfArr.length; i+=1) {
            if (func(...arrOfArr[i]) > maxWorkerResult) {
              maxWorkerResult = func(...arrOfArr[i])
            }
          }
          return maxWorkerResult;
        }
        

    

    