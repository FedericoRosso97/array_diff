//trovare la persistence di un numero ()
function persistence(num) {
    //code me
   let sum=0;
   let index=10;
    array=num.toString().split('');
    const numArray=array.map((x) => parseInt(x));
    console.log(numArray);
   
    for (let i = 0; i <  numArray.length; i++) {
      sum += numArray[i];
      
    }
     
    return sum
   }
   