
//rimuovere le vocali da delle stringhe
function disemvowel(str) {
    const vowels = /[aeiouAEIOU]/g;
    
    const string=str.replace(vowels,'');
    return string;
  }
  console.log(disemvowel('mi chiamo arturo'));

