let apiVariable = "";
let shows = [];

// This is the table element and I am storing it in a variable to use later.
const ticketsTableElement = document.querySelector("#ticketsTable");

// We are now creating a function to set the apiVariable to response.data.api_key.
function apiKey() {
  axios
    .get("https://project-1-api.herokuapp.com/register")
    .then(function (response) {
      // we're getting the response, and storing it in a variable called "apiVariable", which is also above.
      apiVariable = response.data.api_key;
      // we are calling getComments, which is below.
      getShows();
    });
}

function getShows() {
  axios
    .get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiVariable}`)
    .then(function (response) {
      shows = response.data;
      console.log(response.data);
      // this calls the function "createTable()"
      createTable();
      createShows();
    });
}

function createShows() {
  // I am sorting here.
  shows.sort((a, b) => b.date - a.date);
  // creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
  for (let index = 0; index < shows.length; index++) {
    // for every loop, we call the createTableRow function.
    createTableRow(shows[index]);
  }
}

apiKey();

// -----------------------------------------

// querySelector is a general selector, others include getElementByID, get ElementByClass, etc.
const ticketsElement = document.querySelector("#tickets");

// The createTable function creates this ---> <section><table><tr><th></th></tr></table></section>
function createTable() {
  // This creates a table element: <table></table>
  const tableElement = document.createElement("table");
  tableElement.id = "ticketsTable";
  // <section><table><tr><th></th></tr></table></section>
  ticketsElement.appendChild(tableElement);
}

// -----------------------------------------

// We created a reusable function which is called "createTableRow" that requires a parameter called "card".
function createTableRow(card) {
  // This is an example of what it looks like: <table id="ticketsTable"></table>
  const ticketsTableElement = document.querySelector("#ticketsTable");

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
  const day = new Date(card.date);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  // The replaceAll function would remove the comma "," and replace it with an empty space " ".
  const formattedDate = day.toLocaleString("en-US", options).replaceAll(",", " ");

  dataElement1.innerText = formattedDate;

  // This adds css to the td. <td class="ticket__date">Mon Sept 06 2021</td>
  dataElement1.classList.add("ticket__date");

  const dataElement2 = document.createElement("td");
  dataElement2.innerText = card.place;
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
  dataElement5.innerText = card.place;
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
