const add = (a,b) => {
    let sum = 0;
    while( a !== 0) {
      sum++;
      a--;
    }
    while( b !== 0) {
      sum++;
      b--;
    }
    return sum
  }
  
  add(2,3)
  