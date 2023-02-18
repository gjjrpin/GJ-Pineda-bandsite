// The square brackets signify an array. We are creating a const variable called "cards".
// and we are setting it to an array.
// for each array item, we make an object. curly braces signify object.
// each object, has the property called date, venue, and location.
const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21, 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15, 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

// the reason why we store this in a variable is so we can access it later. "ticketsElement" is a VARIABLE.
// we are storing the HTML element with the ID "#tickets" into ticketsElement VARIABLE.
// the document.querySelector selects an HTML element with ID "#tickets" then
// stores it into the ticketsElement VARIABLE.
// querySelector is a general selector, others include getElementByID, get ElementByClass, etc.
// a hashtag makes something an ID.
const ticketsElement = document.querySelector("#tickets");

// We created a reusable function that requires a parameter called "card".
// "card" is expected to be an object with the properties: Date, Venue, and Location.
function createCard(card) {
  // everytime this function is called, we are creating an element called "div, h2, p, etc."
  const cardElement = document.createElement("div");

  const dateHeadingElement = document.createElement("h2");
  dateHeadingElement.innerText = "Date";
  const dateDataElement = document.createElement("p");
  // we are setting the <p></p> innerText to card.date.
  dateDataElement.innerText = card.date;

  const venueHeadingElement = document.createElement("h2");
  venueHeadingElement.innerText = "Venue";
  const venueDataElement = document.createElement("p");
  // we are setting the <p></p> element into card.venue.
  // card is an object that the function requires when you call it.
  venueDataElement.innerText = card.venue;

  const locationHeadingElement = document.createElement("h2");
  locationHeadingElement.innerText = "Location";
  const locationDataElement = document.createElement("p");
  locationDataElement.innerText = card.location;

  const cardButtonElement = document.createElement("button");
  cardButtonElement.innerText = "Buy Tickets";

  const underlineElement = document.createElement("hr");

  // appends the HTML elements into the cardElement (div).
  // for example: from this:  <div></div> ----> to this:  <div><h2>Date</h2></div>
  cardElement.appendChild(dateHeadingElement);
  cardElement.appendChild(dateDataElement);
  cardElement.appendChild(venueHeadingElement);
  cardElement.appendChild(venueDataElement);
  cardElement.appendChild(locationHeadingElement);
  cardElement.appendChild(locationDataElement);
  cardElement.appendChild(cardButtonElement);
  cardElement.appendChild(underlineElement);
  // we add a child in the ticketsElement (this is the section ID = tickets).
  // for example. from: <section></section> -----> To: <section><div>...</div></section>
  ticketsElement.appendChild(cardElement);
}

// creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
// the loop keeps going if index is < cards.length. for everyloop, we increment index by 1 (index++)
for (let index = 0; index < shows.length; index++) {
  // for every loop, we call the createCard function.
  // we call the createCard function created above.
  // the card parameter is (cards[index]) and we are accessing [index].
  // for example, cards[0] -----> cards[1] -----> cards[2] ...
  // this is how you access a single card in the cards array.
  createCard(shows[index]);
}
