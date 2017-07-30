//to check javascript file is connected to index.html file
console.log("up and running");
//creating variable for 4 cards

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);
//created array of four cards
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
//created function to check flipped two card matches or not
var checkForMatch = function(){
//  if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    } else {
      alert("Sorry try again.");
    }
//  }
}
//created function to add flipped card in the new empty array
var flipCard = function(cardId){
  console.log("User flipped " + cards[cardId])
  //checking the equality between two cards in array to find out match
cardsInPlay.push(cards[cardId]);
checkForMatch();
}
//called the function
flipCard(0);
flipCard(2);
