//to check javascript file is connected to index.html file
console.log("up and running");
//creating variable for 4 cards

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);
//created array of four cards objects with properties
var cards = [
  {
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
  },
  {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
  },
  {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
  },
  {
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
  }
];
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
//created function to add flipped card name in the new empty array
var flipCard = function(cardId){
  console.log("User flipped " + cards[cardId].rank)

cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
//checking the equality between two cards name in array to find out match
checkForMatch();
}
//called the function
flipCard(0);
flipCard(2);
