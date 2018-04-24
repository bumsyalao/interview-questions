const reverse = (num) => {
    strNum = String(num).split("");
    const reversed = [];
    while(strNum.length){
      reversed.unshift(strNum.shift());
    }
    return reversed.join('');
  }
  
  reverse(346)
  