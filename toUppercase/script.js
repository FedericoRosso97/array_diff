/*esercizio in cui viene data una funzione :
String.prototype.toJadenCase = function (){
//
}
la quale deve rendere le prima lettera di ciascuna parola di una frase, maiuscola.
*/
 
  String.prototype.toJadenCase = function () { 
        return this.split(" ").map(function(word){
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
  }
