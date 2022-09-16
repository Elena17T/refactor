function isATheLargest(a, b, c) {
    if (a > b && a > c) {
      return true;
    } else {
      return false;
    }
  }
  
  function isBTheLargest(a, b, c) {
    if (b > a && b > c) {
      return true;
    } else {
      return false;
    }
  }
  
  function isCTheLargest(a, b, c) {
    if (c > a && c > b) {
      return true;
    } else {
      return false;
    }
  }
  
  function isTheLargest(a, b, c) {
    if (a===b, b===c) {
      return a
    } else {
      return false
    }
  }
  
  function isABTheSame (a,b) {
    if(a===b){
      return a
    } else {
      false
    }
  }
  
  function isBCTheSame (b,c) {
    if(b===c) {
      return b
    } else {
      return false
    }
  }
  
  function isACTheSame (a,c) {
    if(a===c) {
      return a
    } else {
      return false
    }
  }
  
  export function TheLargestNumber(a1,b1,c1) {
    let a = parseFloat(a1);
    let b = parseFloat(b1);
    let c = parseFloat(c1);
  
    if (isATheLargest(a1, b1, c1)) {
      return "The 1st number is largest and equal: " + a;
    } else if (isBTheLargest(a, b, c)) {
      return "The 2nd number is largest and equal: " + b;
    } else if (isCTheLargest(a, b, c)) {
      return "The 3rd number is largest and equal: " + c;
    } else if (isTheLargest(a, b, c)) {
      return "All three numbers are equal. And equal: " + a;
    } else if (isABTheSame(a,b)) {
      return "The 1st number is the same as 2nd number: " + a;
    } else if (isBCTheSame(b,c)) { 
      return "the 2nd number is the same as 3rd number: " + b;
    } else if (isACTheSame(a,c)) {
      return "The 1st number is the same as 3rd number: " + a;
    }
  }
  console.log(TheLargestNumber(10,10,10))
  