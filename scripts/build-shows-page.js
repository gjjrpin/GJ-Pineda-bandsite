// The square brackets signify an array. We are creating a const variable called "cards".
// and we are setting it to an array.
// for each array item, we make an object. curly braces signify object.
// each object, has the property called date, venue, and location.
const cards = [
  {
    date: new Date(1630911600000),
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: new Date("Sept 21 2021"),
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: new Date("Oct 15 2021"),
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: new Date("Nov 06 2021"),
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: new Date("Nov 26 2021"),
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: new Date("Dec 15 2021"),
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

// the reason why we store this in a variable is so we can access it later. "tickets_element" is a VARIABLE.
// we are storing the HTML element with the ID "#tickets" into tickets_element VARIABLE.
// the document.querySelector selects an HTML element with ID "#tickets" then
// stores it into the tickets_element VARIABLE.
// querySelector is a general selector, others include getElementByID, get ElementByClass, etc.
// a hashtag makes something an ID.
const tickets_element = document.querySelector("#tickets");

// We created a reusable function that requires a parameter called "card".
// "card" is expected to be an object with the properties: Date, Venue, and Location.
function createCard(card) {
  // everytime this function is called, we are creating an element called "div, h2, p, etc."
  const card_element = document.createElement("div");

  const dateHeading_element = document.createElement("h2");
  dateHeading_element.innerText = "Date";
  const dateData_element = document.createElement("p");
  // we are setting the <p></p> innerText to card.date.
  dateData_element.innerText = `${card.date.toLocaleDateString()}`;

  const venueHeading_element = document.createElement("h2");
  venueHeading_element.innerText = "Venue";
  const venueData_element = document.createElement("p");
  // we are setting the <p></p> element into card.venue.
  // card is an object that the function requires when you call it.
  venueData_element.innerText = card.venue;

  const locationHeading_element = document.createElement("h2");
  locationHeading_element.innerText = "Location";
  const locationData_element = document.createElement("p");
  locationData_element.innerText = card.location;

  const cardButton_element = document.createElement("button");
  cardButton_element.innerText = "Buy Tickets";

  const underline_element = document.createElement("hr");

  // appends the HTML elements into the card_element (div).
  // for example: from this:  <div></div> ----> to this:  <div><h2>Date</h2></div>
  card_element.appendChild(dateHeading_element);
  card_element.appendChild(dateData_element);
  card_element.appendChild(venueHeading_element);
  card_element.appendChild(venueData_element);
  card_element.appendChild(locationHeading_element);
  card_element.appendChild(locationData_element);
  card_element.appendChild(cardButton_element);
  card_element.appendChild(underline_element);
  // we add a child in the tickets_element (this is the section ID = tickets).
  // for example. from: <section></section> -----> To: <section><div>...</div></section>
  tickets_element.appendChild(card_element);
}

// creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
// the loop keeps going if index is < cards.length. for everyloop, we increment index by 1 (index++)
for (let index = 0; index < cards.length; index++) {
  // for every loop, we call the createCard function.
  // we call the createCard function created above.
  // the card parameter is (cards[index]) and we are accessing [index].
  // for example, cards[0] -----> cards[1] -----> cards[2] ...
  // this is how you access a single card in the cards array.
  createCard(cards[index]);
}
