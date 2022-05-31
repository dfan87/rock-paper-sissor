const myArray = ["Rock", "Paper", "Sissors"]

function computerPlay () {
  return myArray [~~(Math.random() * myArray.length)];
}