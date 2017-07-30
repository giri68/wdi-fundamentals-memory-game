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

//checking condition to match two cards
  if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    } else {
      alert("Sorry try again.");
    }
 }
}
//created function to add flipped card name in the new empty array
var flipCard = function(){
  //taking data-id value as cardId
var cardId = this.getAttribute("data-id");
  console.log("User flipped " + cards[cardId].rank)
//pushing the flip card in cardsInPlay array
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
//setting the value of src attribute of flipped card as cardImage
this.setAttribute("src", cards[cardId].cardImage);
//checking the equality between two cards rank in array to find out match
checkForMatch();
}
//created board of cards with images
var createBoard = function(){
  //looping through each elements of cards array
  for (var i = 0; i < cards.length; i++){
    //created img element
    var cardElement = document.createElement("img");
    //setting attribute src to every card and assigned value as back.img
    cardElement.setAttribute("src", "images/back.png");
    //setting attribute data-id to every card and assigned value as i
    cardElement.setAttribute("data-id", i);
    //adding event listener on each card on click event
    cardElement.addEventListener("click", flipCard);
    //appending card to the div of id game-board
    document.getElementById("game-board").appendChild(cardElement);
  }
}
createBoard();
