const a1 = [1,2,3,4,5];
const a2 = [2,3,1,0,5];
const sieve = [];

const compare = (a1, a2) => {
  for(let i=0; i < a1.length; i++){
  if (a2.indexOf(a1[i]) === -1){
  sieve.push(a1[i])
  return sieve
    
  }
  }
}
compare(a1, a2)
