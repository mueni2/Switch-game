const compChoiceDisplay = document.getElementById("compChoice");
const playerChoiceDisplay = document.getElementById("playerChoice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
let compChoice;
let playerChoice;
/* let result; */
function generateCompChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  compChoice =
    (randomNumber === 1) ? "rock" :( randomNumber === 2) ? "paper" : "scissors"; 
  /*  if (randomNumber ===1) {
        compChoice = 'rock'
    }
    else if (randomNumber ===2) {
        compChoice = 'paper'
    }
    else {
        compChoice = 'scissors'
    } 
  compChoiceDisplay.innerHTML = compChoice; */
}
/* function computerChoice() { const rps = ["rock", "paper", "scissors"]; return rps[Math.floor(Math.random() * 3)]; }  */
function getResult() {
  switch (playerChoice + compChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      resultDisplay.innerHTML = "You win!";
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = "You lose!";
      break;
      case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "It's a draw!"
  }
}
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateCompChoice()
    getResult()
    })) 
