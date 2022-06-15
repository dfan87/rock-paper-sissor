let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];

function computerPlay() {
  let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}

let sign = prompt("Rock, Paper or Sissors?");

if (sign.toLowerCase() == "rock") {
  alert("a Rock!")
}

console.log (computerPlay())