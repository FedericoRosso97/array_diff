function isIsogram(str){
   
    //trasformo scritta tutta in caratteri minuscoli 
     string=str.toLowerCase();
     
     //creo array copia con le lettere di string come elementi
     array=string.split('');
     //console.log(array);
     
     //filtro array tenendo solo gli elementi che NON si ripetono
     filteredArray=array.filter((item, pos, arr)=> arr.indexOf(item) == pos);
     //console.log( filteredArray);
    
     //paragono la lunghezza dell'array filtrato con quello della parola; se non combaciano la funzione ritorna "falso".
     return filteredArray.length==string.length
    //return string.split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == string.length;
};

console.log(isIsogram("barca"));


//soluzione ottimale
function IsIsogram(str){
    return !str.match(/([a-z]).*\1/i);
  }