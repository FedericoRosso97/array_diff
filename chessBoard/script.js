//prima soluzione a doppio ciclo for

function chessBoard(rows, columns) {
    // your code goes here
      let board=[];
      let space;
     
      for(let i = 0; i<rows; i++){
        let grid=[];
      
        for(let j = 0; j<columns; j++){
            console.log(i+j,j,i)
            console
          if((i+j)%2 === 0){
            space='O';
          }else{
            space='X';
          };
         
          grid.push(space)
        };
        
        board.push(grid);
      };
      
      return board
    }

      console.log(chessBoard(4,3))

      //soluzione più ottimale
      function chessBoardFixed(rows, columns) {
        return Array.from({length: rows}, (_,i) => Array.from({length: columns}, (_,j) => 'OX'[(i+j)%2]));
      }