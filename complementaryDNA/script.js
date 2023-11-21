function DNAStrand(dna){
    //ritornare stringhe di DNA, se A ritorna T e viceversa, se C ritorna G e viceversa.
    let array=[];
    let complement='';
    
   for (let i = 0; i < dna.length; i++){
    console.log(dna[i]);
    console.log(typeof(dna[i]));
       if(dna[i]==='A'){
        complement='T';
       }else if(dna[i]==='T'){
         complement='A';
       }else if(dna[i]==='C'){
         complement='G';
       }else if(dna[i]==='G'){
         complement='C';
       }
       array.push(complement);
       console.log(array);
   };
   
   let output=array.join('');
   console.log(output)
   return output
};
//soluzione più semplice e lineare usando replace method
function DNAstrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  };
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

string='AAAA';
console.log(DNAstrand(string));
    
