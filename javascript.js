// Rock Paper scissors 
let playGame = confirm("Quieres jugar a la verga? piedra, papel o tijeras ?");
if (playGame){
    //Jugar
    let playerSelection = prompt("Tu escoges primero put@! piedra, papel o tijeras?");
if (playerSelection){
    let playerOne = playerSelection.trim().toLowerCase();
 if (playerOne === "piedra" || playerOne === "papel" || playerOne === "tijeras"){

    let computerSelection = Math.floor(Math.random() * 3 + 1);
 let computer = computerSelection === 1 ? "piedra"
    : computerSelection === 2 ? "papel"
    :  "tijeras";
   let result =
   playerOne === computer
   ? "Empatas nomas Papi?"
   :playerOne === "piedra" && computer === "papel"
   ? `Escogiste: ${playerOne}\n Yo escogi: ${computer}\n
   Te pelaste la verga compa!!`
   : playerOne === "papel" && computer === "tijeras"
   ? `Escogiste ${playerOne}\n Yo escogi ${computer}
   \n No la cuajaste we!`
   :playerOne === "tijeras" && computer === "piedra"
   ? `Escogiste: ${playerOne}\n Yo escogi: ${computer}\n
   Abrazee a la chingadda paya!!`
   : `Escogiste: ${playerOne}\n Yo escogi: ${computer}\n
   ahh Perr@ me Ganaste!!`;
   alert(result);
   let playAgain = confirm("Sacas la reta Perro?");
playAgain ? location.reload(true) : alert("Saquese a la verga puesn");


} else {
     alert("Escribe bien OJETE!!"), location.reload(true);
 }



} else {alert("Dijo mi ama que siempre no!")}


} else {
    alert("Ok,sera la proxima.")
}