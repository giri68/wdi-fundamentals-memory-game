//to check javascript file is connected to index.html file
console.log("up and running");
//creating variable for 4 cards

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);
//created array of four cards
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);
//checking the equality between two cards in array to find out match
if (cardsInPlay.length === 2){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  } else {
    alert("Sorry try again.");
  }
}
