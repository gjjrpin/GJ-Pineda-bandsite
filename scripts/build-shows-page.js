// The square brackets signify an array. We are creating a const variable called "shows".
// and we are setting it to an array.
// for each array item, we make an object. curly braces signify object.
// each object, has the property called date, venue, and location.
// key:value pair
// Date is the key, and "Mon Sept 06 2021" is the value.
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

// -----------------------------------------

// the reason why we store this in a variable is so we can access it later. "ticketsElement" is a VARIABLE.
// we are storing the HTML element with the ID "#tickets" into ticketsElement VARIABLE.
// the document.querySelector selects an HTML element with ID "#tickets" then
// stores it into the ticketsElement VARIABLE.
// querySelector is a general selector, others include getElementByID, get ElementByClass, etc.
// a hashtag makes something an ID.
const ticketsElement = document.querySelector("#tickets");

// The createTable function creates this ---> <section><table><tr><th></th></tr></table></section>
function createTable() {
  // This creates a table element: <table></table>
  const tableElement = document.createElement("table");
  tableElement.id = "ticketsTable";

  // This adds the entire table to the ticketsElement section
  ticketsElement.appendChild(tableElement); // <section><table><tr><th></th></tr></table></section>
}

// -----------------------------------------

// We created a reusable function which is called "createTableRow" that requires a parameter called "card".
// "card" is expected to be an object with the properties: Date, Venue, and Location.
// "card" is a parameter/argument.
function createTableRow(card) {
  // every time this function is called, we are creating an element called "tr, td"
  // This is an example of what it looks like: <table id="ticketsTable"></table>
  const ticketsTableElement = document.querySelector("#ticketsTable");

  // THIS ENTIRE BUTTON SECTION IS FOR THE BUTTON SECTION OF THE MOBILE

  // This creates a "button" element. <button></button>
  const buttonElement = document.createElement("button");
  // This puts the words "Buy tickets" inside the "button element". <button>Buy Tickets</button>
  buttonElement.innerText = "Buy Tickets";
  // This adds a class to the "button" element. <button class="ticket__button">Buy Tickets </button>
  buttonElement.classList.add("ticket__button");

  // THIS ENTIRE BUTTON SECTION IS FOR THE BUTTON SECTION OF TABLET/DESKTOP

  const buttonElement2 = document.createElement("button");
  buttonElement2.innerText = "Buy Tickets";
  buttonElement2.classList.add("ticket__button");

  // Note: The reason for two button elements is because you cannot use "buttonElement" twice.
  // therefore, I made a buttonElement and buttonElement2.

  // This creates a <tr></tr>
  const rowDataElement1 = document.createElement("tr");

  const rowDataElement2 = document.createElement("tr");
  const rowDataElement3 = document.createElement("tr");
  rowDataElement3.classList.add("ticket__column");

  const rowDataElement4 = document.createElement("tr");
  rowDataElement4.classList.add("ticket__column");

  const rowDataElement5 = document.createElement("tr");
  rowDataElement5.classList.add("ticket__column");

  const rowDataElement6 = document.createElement("tr");
  rowDataElement6.classList.add("ticket__column");

  const rowDataElement7 = document.createElement("tr");
  rowDataElement7.classList.add("ticket__column");

  //--------------HEADER ELEMENT---------------------//

  // This creates a <th></th>
  const headerElement1 = document.createElement("th");
  headerElement1.innerText = "Date";
  headerElement1.classList.add("ticket__title");

  const headerElement2 = document.createElement("th");
  headerElement2.innerText = "Venue";
  headerElement2.classList.add("ticket__row");
  headerElement2.classList.add("ticket__title");

  const headerElement3 = document.createElement("th");
  headerElement3.innerText = "Location";
  headerElement3.classList.add("ticket__row");
  headerElement3.classList.add("ticket__title");

  const headerElement4 = document.createElement("th");
  headerElement4.innerText = "Venue";
  headerElement4.classList.add("ticket__title");

  const headerElement5 = document.createElement("th");
  headerElement5.innerText = "Location";
  headerElement5.classList.add("ticket__title");
  //--------------HEADER ELEMENT--------------------//
  //--------------DATA ELEMENT--------------------//

  // This creates a <td></td>
  const dataElement1 = document.createElement("td");
  // This puts all the data in card inside td. <td>Mon Sept 06 2021<td>
  dataElement1.innerText = card.date;
  // This adds css to the td. <td class="ticket__date">Mon Sept 06 2021</td>
  dataElement1.classList.add("ticket__date");

  const dataElement2 = document.createElement("td");
  dataElement2.innerText = card.venue;
  dataElement2.classList.add("ticket__row");
  dataElement2.classList.add("ticket__content");

  const dataElement3 = document.createElement("td");
  dataElement3.innerText = card.location;
  dataElement3.classList.add("ticket__row");
  dataElement3.classList.add("ticket__content");

  const dataElement4 = document.createElement("td");
  dataElement4.appendChild(buttonElement2);
  dataElement4.classList.add("ticket__row");

  const dataElement5 = document.createElement("td");
  dataElement5.innerText = card.venue;
  dataElement5.classList.add("ticket__content");

  const dataElement6 = document.createElement("td");
  dataElement6.innerText = card.location;
  dataElement6.classList.add("ticket__content");

  const dataElement7 = document.createElement("td");
  dataElement7.appendChild(buttonElement);
  dataElement7.classList.add("ticket__button-container");

  //--------------------------------------------------------//

  // This puts rowDataElement1 inside headerElement1. <tr><th></th></tr>
  rowDataElement1.appendChild(headerElement1);
  // This puts rowDataElement2 inside headerElement1. <tr><th></th></tr>
  rowDataElement1.appendChild(headerElement2);
  // This puts rowDataElement3 inside headerElement1. <tr><th></th></tr>
  rowDataElement1.appendChild(headerElement3);

  // This puts dataElement1 inside rowDataElement2. <tr><td></td></tr>
  rowDataElement2.appendChild(dataElement1);
  // This puts dataElement2 inside rowDataElement2. <tr><td></td></tr>
  rowDataElement2.appendChild(dataElement2);
  // This puts dataElement3 inside rowDataElement2. <tr><td></td></tr>
  rowDataElement2.appendChild(dataElement3);
  // This puts dataElement4 inside rowDataElement2. <tr><td></td></tr>
  rowDataElement2.appendChild(dataElement4);

  // This puts headerElement4 inside rowDataElement3. <tr><th></th></tr>
  rowDataElement3.appendChild(headerElement4);
  // This puts dataElement5 inside rowDataElement4. <tr><td></td></tr>
  rowDataElement4.appendChild(dataElement5);

  //  This puts headerElement5 inside rowDataElement5. <tr><th></th></tr>
  rowDataElement5.appendChild(headerElement5);
  // This puts dataElement6 inside rowDataElement6. <tr><td></td></tr>
  rowDataElement6.appendChild(dataElement6);
  // This puts dataElement7 inside rowDataElement7. <tr><td></td></tr>
  rowDataElement7.appendChild(dataElement7);

  // This puts rowDataElement1 inside ticketsTableElement. <table><tr></tr></table>
  ticketsTableElement.appendChild(rowDataElement1);
  ticketsTableElement.appendChild(rowDataElement2);
  ticketsTableElement.appendChild(rowDataElement3);
  ticketsTableElement.appendChild(rowDataElement4);
  ticketsTableElement.appendChild(rowDataElement5);
  ticketsTableElement.appendChild(rowDataElement6);
  ticketsTableElement.appendChild(rowDataElement7);
}

// ------------------------------------------------------------------------------------------

// this calls the function "createTable()"
// the reason why it's at the bottom is for organizational purposes.
createTable();

// creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
// the loop keeps going if index is < shows.length. for everyloop, we increment index by 1 (index++)
for (let index = 0; index < shows.length; index++) {
  // for every loop, we call the createTableRow function.
  // we call the createTableRow function created above. (line 82)
  // the card parameter is (shows[index]) and we are accessing [index].
  // for example, shows[0] -----> shows[1] -----> shows[2] ...
  // this is how you access a single card in the shows array.
  createTableRow(shows[index]);
}
// This is the table element and I am storing it in a variable to use later.
const ticketsTableElement = document.querySelector("#ticketsTable");

function resetAllTrTest() {
  for (let index = 0; index < ticketsTableElement.rows.length; index++) {
    const trTableElement = ticketsTableElement.rows[index];

    trTableElement.classList.remove("selected");
  }
}

// Now, we can loop through the table's <tr>
for (let index = 0; index < ticketsTableElement.rows.length; index++) {
  const trTableElement = ticketsTableElement.rows[index];

  // This adds an eventlistener ("click") to every tr.
  trTableElement.addEventListener("click", (event) => {
    event.preventDefault();
    resetAllTrTest();

    // 4. when clicked, add 'selected' css
    trTableElement.classList.add("selected");
  });
}
