// NUMBER 1: (6 Kyu) Find The Parity Outlier
  // When given an array of either all even or all odd integers except one number, N, return N. 
  // Arrays have a minimum of 3 integers, up to a very large number.
  // Example: [2, 4, 0, 11, 2602, 36] -->  return 11 (the only odd number)
// First Attempt (not using lambdas or ternaries):
function findOutlier(integers){
  // PART 1 - Check if the first 3 numbers are all EVEN
  if(Math.abs(integers[0]) % 2 === 0 && Math.abs(integers[1]) % 2 === 0 && Math.abs(integers[2]) % 2 === 0) {
    for(let i = 0; i < integers.length; i++) {
      
       if(integers[i] > 0){
          if(integers[i] % 2 === 1) {
            return +integers[i];
          }
        }
        else {
          if(Math.abs(integers[i]) % 2 === 1) {
            return parseInt(integers[i])
          }
        }  
    }
  }
    
  // PART 2 - Check if the first 3 numbers are all ODD
  else if (Math.abs(integers[0]) % 2 === 1 && Math.abs(integers[1]) % 2 === 1 && Math.abs(integers[2]) % 2 === 1) {
    for(let i = 0; i < integers.length; i++) {
    if(integers[i] > 0){
          if(integers[i] % 2 === 0) {
            return +integers[i];
          }
        }
        else {
          if(Math.abs(integers[i]) % 2 === 0) {
            return parseInt(integers[i])
          }
        }
      }
  }

// PART 3 - if NOT ALL three first numbers are the same type (even/odd) 
  // the outlier is one of those 3 numbers
  else {
    let integerTotal = +integers[0] + +integers[1] + +integers[2];
    if(integerTotal % 2 === 0) { 
      // if total is even, this is an ODD array
      for(let i = 0; i < integers.length; i++) {
        if(integers[i] % 2 === 0) {
          return +integers[i];
        }
        }
      }
    else {
      for(let i = 0; i < integers.length; i++) {
        if(integers[i] > 0){
          if(integers[i] % 2 === 1) {
            return +integers[i];
          }
        }
        else {
          if(Math.abs(integers[i]) % 2 === 1) {
            return parseInt(integers[i])
          }
        }
        }
      }
  }
} 

// NUMBER 1 - revised answer
function findOutlier(arr){
  var evenArr = arr.filter(function(num) {
      return num % 2 === 0;
  });
  var oddArr = arr.filter(function(num) {
      return num % 2 !== 0;
  });
  return evenArr.length > oddArr.length ? oddArr[0] : evenArr[0];
}

