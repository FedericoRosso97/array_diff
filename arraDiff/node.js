
let array=[1,2];
let arrayTwo=[1];

function arrayDiff(a, b) {
    //obbiettivo:trovare una soluzione senza usare includes
    let diffArray = [];
    for(let i = 0;i<a.length;i++){
        let equals=false;
     for(let j = 0;j<b.length;j++){
       if(a[i]===b[j]){
         equals=true;
       };
    };

    if(!equals){
        diffArray.push(a[i]);
    };
  }
  //console.log(diffArray);
  return diffArray;
}

function Diff(a, b) {
    // soluzione più semplice usando includes
    let diffArrayTwo=a.filter(val => !b.includes(val));
    console.log(diffArrayTwo);
    return diffArrayTwo;
}

arrayDiff(array, arrayTwo);
Diff(array, arrayTwo);