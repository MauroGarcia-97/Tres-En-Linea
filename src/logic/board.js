import { WINNER_COMBOS } from '../constans.js'

export const checkWinnerFrom = (boardToCheck) => {
    //Revisa todas las combinaciones ganadoras, para ver si X u O gano
    for (const combo of WINNER_COMBOS){
      const [a, b, c ] = combo
      if ( boardToCheck[a]&& boardToCheck[a] === boardToCheck [b] &&
        boardToCheck[a] === boardToCheck [c]) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null 
  } 

  export const checkEndGame = (newBoard) => {
    // Revisa si hay empate, si no hay espacios en el tablero 
    return newBoard.every((square) => square !== null)
  }