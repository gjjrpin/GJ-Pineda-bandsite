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

  // This creates a row element: <tr></tr>
  const rowElement = document.createElement("tr");

  // This creates 3 headers elements.
  const headerElement1 = document.createElement("th"); // <th></th>
  const headerElement2 = document.createElement("th"); // <th></th>
  const headerElement3 = document.createElement("th"); // <th></th>
  const headerElement4 = document.createElement("th"); // <th></th>

  // This Changes the innerText of each headers to Date, Venue, Location
  headerElement1.innerText = "Date"; // <th>Date</th>
  headerElement2.innerText = "Venue"; // <th>Venue</th>
  headerElement3.innerText = "Location"; // <th>Location</th>

  // This adds the headers element to the rowElement
  rowElement.appendChild(headerElement1); // <tr><th></th></tr>
  rowElement.appendChild(headerElement2); // <tr><th></th></tr>
  rowElement.appendChild(headerElement3); // <tr><th></th></tr>
  rowElement.appendChild(headerElement4); // <tr><th></th></tr>

  // This adds the row to the table.
  tableElement.appendChild(rowElement); // <table><tr><th></th></tr></table>

  // This adds the entire table to the ticketsElement section
  ticketsElement.appendChild(tableElement); // <section><table><tr><th></th></tr></table></section>
}

// -----------------------------------------

// We created a reusable function which is "createTableRow" that requires a parameter called "card".
// "card" is expected to be an object with the properties: Date, Venue, and Location.
// "card" is a parameter/argument.
function createTableRow(card) {
  // everytime this function is called, we are creating an element called "tr, td"
  // This is an example of what it looks like: <table id="ticketsTable"></table>
  const ticketsTableElement = document.querySelector("#ticketsTable");

  // This creates a <tr></tr>
  const rowDataElement = document.createElement("tr");

  // This creates a <td></td>
  const dateDataElement = document.createElement("td");
  // The top becomes this <td></td> -----> to this <td>Mon Sept 06 2021</td>
  dateDataElement.innerText = card.date;

  // This creates a <td></td>
  const venueDataElement = document.createElement("td");
  // The top becomes this <td></td> -----> to this <td>Ronald Lane</td>
  venueDataElement.innerText = card.venue;

  // This creates a <td></td>
  const locationDataElement = document.createElement("td");
  // The top becomes <td></td> -----> This <td>San Francisco, CA</td>
  locationDataElement.innerText = card.location;

  // This creates a <button></button>
  const cardButtonElement = document.createElement("button");
  // The top becomes <button></button> -----> This <button>Buy Tickets</button>
  cardButtonElement.innerText = "Buy Tickets";

  // This appends dateDataElement to rowDataElement
  // <tr></tr> -----> <tr><td>Mon Sept 06 2021</td></tr>
  /* First it's this:
    <tr><td>Mon Sept 06 2021</td></tr> ---->

      Then it becomes this:
    <tr>
      <td>Mon Sept 06 2021</td>
      <td>Ronald Lane</td>
    </tr>
  */
  rowDataElement.appendChild(dateDataElement);
  rowDataElement.appendChild(venueDataElement);
  rowDataElement.appendChild(locationDataElement);
  rowDataElement.appendChild(cardButtonElement);

  // This appends rowDataElement to ticketsTableElement.
  // This: <table id="ticketsTable"></table> ----> Becomes this: <table id="ticketsTable"><tr>...</tr></table>
  ticketsTableElement.appendChild(rowDataElement);
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
