
     
   function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      console.log(hasOnlyNumbers);
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }

  num= '1234';
  console.log(num)
  console.log(validatePIN (num));

  let str='12';
  console.log(num.match(str));