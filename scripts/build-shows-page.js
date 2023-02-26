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
      createShows();
    });
}

function createShows() {
  // I am sorting here.
  shows.sort((a, b) => b.timestamp - a.timestamp);
  // creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
  for (let index = 0; index < shows.length; index++) {
    // for every loop, we call the createContent function.
    createContent(shows[index]);
  }
}

apiKey();

// -----------------------------------------------------------------------------------------

// We created a reusable function which is called "createContent" that requires a parameter called "card".
function createContent(card) {
  // This is an example of what it looks like: <div> id="content"></div>
  const contentContainerElement = document.querySelector("#content");

  const contentElement = document.createElement("ul");
  contentElement.classList.add("content");

  // ------------------------DATE SECTION---------------------------------------------------

  const dateHeaderElement = document.createElement("li");
  dateHeaderElement.innerText = "Date";
  dateHeaderElement.classList.add("content__card-header");

  // This puts all the data in card inside td. <li>Mon Sept 06 2021<li>
  const day = new Date(card.date);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  // The replaceAll function would remove the comma "," and replace it with an empty space " ".
  const formattedDate = day
    .toLocaleString("en-US", options)
    .replaceAll(",", " ");

  const dateDataElement = document.createElement("li");
  dateDataElement.innerText = formattedDate;
  dateDataElement.classList.add("content__card-data");
  dateDataElement.classList.add("content__container");
  // --------------------------------------------------------------------------------------------
  // -----------------------------------VENUE SECTION--------------------------------------------

  const venueHeaderElement = document.createElement("li");
  venueHeaderElement.innerText = "Venue";
  venueHeaderElement.classList.add("content__card-header");

  const venueDataElement = document.createElement("li");
  venueDataElement.innerText = card.place;
  venueDataElement.classList.add("content__card-data");
  venueDataElement.classList.add("content__container");
  // --------------------------------------------------------------------------------------------
  // -----------------------------------LOCATION SECTION-----------------------------------------

  const locationHeaderElement = document.createElement("li");
  locationHeaderElement.innerText = "Location";
  locationHeaderElement.classList.add("content__card-header");
  const locationDataElement = document.createElement("li");
  locationDataElement.innerText = card.location;
  locationDataElement.classList.add("content__card-data");
  locationDataElement.classList.add("content__container");
  // --------------------------------------------------------------------------------------------
  // ----------------------------------BUTTON SECTION--------------------------------------------
  const buttonContainerElement = document.createElement("li");
  buttonContainerElement.classList.add("content__button-container");
  buttonContainerElement.classList.add("content__container");

  // This creates a "button" element. <button></button>
  const buttonElement = document.createElement("button");
  buttonElement.innerText = "Buy Tickets";
  buttonElement.classList.add("content__button");
  // --------------------------------------------------------------------------------------------

  contentElement.appendChild(dateHeaderElement);
  contentElement.appendChild(dateDataElement);
  contentElement.appendChild(venueHeaderElement);
  contentElement.appendChild(venueDataElement);
  contentElement.appendChild(locationHeaderElement);
  contentElement.appendChild(locationDataElement);

  buttonContainerElement.appendChild(buttonElement);
  contentElement.appendChild(buttonContainerElement);

  contentElement.addEventListener("click", (event) => {
    event.preventDefault();
    resetSelectedClass();

    // 4. the event is "click", if this element is clicked, add css class "selected"
    contentElement.classList.add("content__selected");
  });

  contentContainerElement.appendChild(contentElement);
}

// ------------------------------------------------------------------------------------------

function resetSelectedClass() {
  // 1. Find all ul class= "content". We're receiving an array of <ul>
  const contentElements = document.querySelectorAll(".content");

  // 2. Loop through the <ul> array.
  for (let index = 0; index < contentElements.length; index++) {
    const contentElement = contentElements[index];

    // 3. for each of <ul>, remove "selected" class.
    contentElement.classList.remove("content__selected");
  }
}
