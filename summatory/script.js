var summation = function (num) {
    // Code here
    let sum;
    if(num % 2 == 0){
      sum = num + ((num-1) * (num/2));
    }else{
      sum = num + ( (num-1) * Math.ceil(num/2 ) ) - Math.floor(num/2);
    }
    
    return sum
  }
  
  /*
  funzione che ritorna la sommatoria di un numero. (ad es num= 5 summation=(1+2+3+4+5)=15);
  per questa funzione ho voluto scoprire la mia formula personale, senza fare riferimento a formule matematiche già esistenti.
  Spiegerò poi il ragionamento che mi ha condotto a questa formula.
    
  */