// The square brackets signify an array. We are creating a const variable called "cards".
// and we are setting it to an array.
// for each array item, we make an object. curly braces signify object.
// each object, has the property date, venue, and location.
const cards = [
  {
    date: new Date("Sept 06 2021"),
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
// const variable called tickets_element and we're setting this variable into
// HTML with the ID #tickets.
const tickets_element = document.querySelector("#tickets");

// creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
// the loop keeps going if index is < cards.length. for everyloop, we increment index by 1 (index++)
for (let index = 0; index < cards.length; index++) {
  // for everyloop, we are creating a div HTML element and we're
  // storing it in a variable called card_element, dateHeading_element, etc.
  const card_element = document.createElement("div");
  const dateHeading_element = document.createElement("h2");
  const dateData_element = document.createElement("p");
  const venueHeading_element = document.createElement("h2");
  const venueData_element = document.createElement("p");
  const locationHeading_element = document.createElement("h2");
  const locationData_element = document.createElement("p");
  const cardButton_element = document.createElement("button");
  const underline_element = document.createElement("hr");

  // sets the value of each HTML element to a specific value.
  // for example: from this: <h2></h2> ------> to this: <h2>Date</h2>
  dateHeading_element.innerHTML = "Date";
  dateData_element.innerHTML = cards[index].date;
  venueHeading_element.innerHTML = "Venue";
  venueData_element.innerHTML = cards[index].venue;
  locationHeading_element.innerHTML = "Location";
  locationData_element.innerHTML = cards[index].location;
  cardButton_element.innerHTML = "Buy Tickets";

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
  tickets_element.appendChild(card_element);
}

// *****This entire forloop ends when index is NOT less than cards.length.*****


// NOTES

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
