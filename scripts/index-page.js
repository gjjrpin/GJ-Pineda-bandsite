// The square brackets signify an array. We are creating a const variable called "cards".
// and we are setting it to an array.
// for each array item, we make an object. curly braces signify object.
// each object, has the property date, venue, and location.
const commentList = [
  {
    name: "Connor Walton",
    date: new Date(02 / 17 / 2021),
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: new Date(01 / 09 / 2021),
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: new Date(12 / 20 / 2020),
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// the reason why we store this in a variable is so we can access it later. "tickets_element" is a VARIABLE.
// const variable called tickets_element and we're setting this variable into
// HTML with the ID #comments.
const commentList = document.querySelector("#comments");

// creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
// the loop keeps going if index is < cards.length. for everyloop, we increment index by 1 (index++)
for (let index = 0; index < cards.length; index++) {
  // for everyloop, we are creating a div HTML element and we're
  // storing it in a variable called card_element, dateHeading_element, etc.
  const card_element = document.createElement("div");
  const underline_element = document.createElement("hr");
  const name_element = document.createElement("h2");
  const date_element = document.createElement("p");
  const comment_element = document.createElement("p");

  // sets the value of each HTML element to a specific value.
  // for example: from this: <h2></h2> ------> to this: <h2>Date</h2>
  name_element.innerHTML = cards[index].name;
  date_element.innerHTML = cards[index].date;
  comment_element.innerHTML = cards[index].comment;

  // appends the HTML elements into the card_element (div).
  // for example: from this:  <div></div> ----> to this:  <div><h2>Date</h2></div>
  card_element.appendChild(name_element);
  card_element.appendChild(date_element);
  card_element.appendChild(comment_element);
  card_element.appendChild(underline_element);
  // we add a child in the tickets_element (this is the section ID = tickets).
  comments_element.appendChild(card_element);
}
// *****This entire forloop ends when index is NOT less than cards.length.*****

// ADDITIONAL NOTES

// // const variable called tickets_element and we're setting this variable into
// // HTML with the ID #tickets.
// const tickets_element = document.querySelector("#tickets");

// // creating a forloop. at the start of the loop, we create an index and setting it to 0.
// // the loop keeps going if index is < cards.length. for everyloop, we increment index by 1 (index++)

// for (let index = 0; index < cards.length; index++) {
// // for everyloop, we are creating a div HTML element and we're storing it in a variable called card_element.
//   const card_element = document.createElement("div");
// // we set the contents of the card_element into the individual items of the cards list.
//   card_element.innerHTML = cards[index].venue;
// // we add a child in the tickets_element (this is the section ID = tickets).
//   tickets_element.appendChild(card_element);
// }
