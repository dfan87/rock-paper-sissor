const choices = ["rock", "paper", "sissors"]

function game() {
playRound();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
}

function playerChoice() {
  //get input from player
}

function computerChoice() {
  return choices[Math.floor(Math.random()*choices.length)]
}
