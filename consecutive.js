const isConsecutive = (str) => {
    const arr = str.split('-');
    
    let increasing = false;
    
    if(arr[0] > arr[1]){
      increasing = true;
    }
    
    for(let i=0; i<arr.length; i++) {
      if(increasing && arr[i] > arr[i+1] || !increasing && arr[i] < arr[i+1]){
        return false;
      }
    }
  }
  isConsecutive("10-9-8-7-6");
  isConsecutive("6-7-9-9-10");
  