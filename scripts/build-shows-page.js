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

// We created a reusable function which is "createTableRow" that requires a parameter called "card".
// "card" is expected to be an object with the properties: Date, Venue, and Location.
// "card" is a parameter/argument.
function createTableRow(card) {
  // everytime this function is called, we are creating an element called "tr, td"
  // This is an example of what it looks like: <table id="ticketsTable"></table>
  const ticketsTableElement = document.querySelector("#ticketsTable");

  const buttonElement = document.createElement("button");
  buttonElement.innerText = "Button";

  // This creates a <tr></tr>
  const rowDataElement1 = document.createElement("tr");
  const rowDataElement2 = document.createElement("tr");
  const rowDataElement3 = document.createElement("tr");
  rowDataElement3.classList.add("column");

  const rowDataElement4 = document.createElement("tr");
  rowDataElement4.classList.add("column");

  const rowDataElement5 = document.createElement("tr");
  rowDataElement5.classList.add("column");

  const rowDataElement6 = document.createElement("tr");
  rowDataElement6.classList.add("column");

  const rowDataElement7 = document.createElement("tr");
  rowDataElement7.classList.add("column");

 //--------------HEADER ELEMENT--------------------//

  const headerElement1 = document.createElement("th");
  headerElement1.innerText = "Date";

  const headerElement2 = document.createElement("th");
  headerElement2.innerText = "Venue";
  headerElement2.classList.add("row");

  const headerElement3 = document.createElement("th");
  headerElement3.innerText = "Location";
  headerElement3.classList.add("row");

  const headerElement4 = document.createElement("th");
  headerElement4.innerText = "Venue";

  const headerElement5 = document.createElement("th");
  headerElement5.innerText = "Location";
  //--------------HEADER ELEMENT--------------------//
  //--------------DATA ELEMENT--------------------//

  const dataElement1 = document.createElement("td");
  dataElement1.innerText = card.date;

  const dataElement2 = document.createElement("td");
  dataElement2.innerText = card.venue;
  dataElement2.classList.add("row");

  const dataElement3 = document.createElement("td");
  dataElement3.innerText = card.location;
  dataElement3.classList.add("row");

  const dataElement4 = document.createElement("td");
  dataElement4.appendChild(buttonElement);
  dataElement4.classList.add("row");

  const dataElement5 = document.createElement("td");
  dataElement5.innerText = card.venue;

  const dataElement6 = document.createElement("td");
  dataElement6.innerText = card.location;

  const dataElement7 = document.createElement("td");
  dataElement7.appendChild(buttonElement);

  //--------------

  rowDataElement1.appendChild(headerElement1);
  rowDataElement1.appendChild(headerElement2);
  rowDataElement1.appendChild(headerElement3);

  rowDataElement2.appendChild(dataElement1);
  rowDataElement2.appendChild(dataElement2);
  rowDataElement2.appendChild(dataElement3);
  rowDataElement2.appendChild(dataElement4);

  rowDataElement3.appendChild(headerElement4);
  rowDataElement4.appendChild(dataElement5);

  rowDataElement5.appendChild(headerElement5);
  rowDataElement6.appendChild(dataElement6);

  rowDataElement7.appendChild(dataElement7);

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
