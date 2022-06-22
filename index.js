const choices = ["rock", "paper", "sissors"];

function game() {
playRound();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
}

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Sissors");
  input = input.toLowerCase(input);
}

function computerChoice() {
  return choices[Math.floor(Math.random()*choices.length)]
}

game();