// The square brackets signify an array. We are creating a const variable called "cards".
// and we are setting it to an array.
// for each array item, we make an object. curly braces signify object.
// each object, has the property called date, venue, and location.
const commentListObject = [
  {
    name: "Connor Walton",
    date: new Date(1676620800000),
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: new Date(1610179200000),
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: new Date(1608451200000),
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// the reason why we store this in a variable is so we can access it later. "commentList" is a VARIABLE.
// we are storing the HTML element with the ID "#comments" into ticketsElement VARIABLE.
// the document.querySelector selects an HTML element with ID "#comments" then
// stores it into the "commentList" VARIABLE.
// querySelector is a general selector, others include getElementByID, get ElementByClass, etc.
// a hashtag makes something an ID.
const commentListElement = document.querySelector("#comments");

// We created a reusable function that requires a parameter called "card".
// "card" is expected to be an object with the properties: Date, Venue, and Location.
function createCard(card) {
  // everytime this function is called, we are creating an element called "div, h2, p, etc."
  const underlineElement = document.createElement("hr");

  const cardElement = document.createElement("div");

  const nameElement = document.createElement("h2");
  nameElement.innerText = card.name;

  const dateElement = document.createElement("p");
  dateElement.innerText = `${card.date.toLocaleDateString()}`;

  const commentElement = document.createElement("p");
  commentElement.innerText = card.comment;

  // appends the HTML elements into the cardEelement (div).
  // for example: from this:  <div></div> ----> to this:  <div><h2>Date</h2></div>
  cardElement.appendChild(nameElement);
  cardElement.appendChild(dateElement);
  cardElement.appendChild(commentElement);
  cardElement.appendChild(underlineElement);
  // we add a child in the ticketsElement (this is the section ID = tickets).
  commentListElement.appendChild(cardElement);
}

// creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
// the loop keeps going if index is < cards.length. for everyloop, we increment index by 1 (index++)
for (let index = 0; index < commentListObject.length; index++) {
  // for every loop, we call the createCard function.
  // we call the createCard function created above.
  // the card parameter is (cards[index]) and we are accessing [index].
  // for example, cards[0] -----> cards[1] -----> cards[2] ...
  // this is how you access a single card in the cards array.
  createCard(commentListObject[index]);
}
