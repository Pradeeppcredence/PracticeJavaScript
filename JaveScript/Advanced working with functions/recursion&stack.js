function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1); // it means 3 *(3 power 3)
    }
  }
  
  console.log( pow(3, 4) );
  
// ==========================================================

  function sum(x){
    let sum = 0;
      for(let i=0; i <= 150; i++){
         sum += i;
      }
      return sum;
  }
  console.log(sum(300));

  function sum1(y){
    if (y == 1) return 1;
    return y + sum1(y-1);
  }
  console.log(sum1(100));