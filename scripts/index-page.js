// The square brackets signify an array. We are creating a const variable called "commentListObject".
// and we are setting it to an array.
// for each array item, we make an object. curly braces signify object.
// each object, has the property called name, date, and comment.
// key:value pair
// Date is the key, and "new Date(1676620800000)" is the value.
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

// We created a reusable function that requires a parameter called "comment".
// "comment" is expected to be an object with the properties: Date, Venue, and Location.
function displayComment(comment) {
  // everytime this function is called, we are creating an element called "div, h2, p, etc."
  const underlineElement = document.createElement("hr");

  const cardElement = document.createElement("div");

  const nameElement = document.createElement("h2");
  nameElement.innerText = comment.name;

  const dateElement = document.createElement("p");
  dateElement.innerText = `${comment.date.toLocaleDateString()}`;

  const commentElement = document.createElement("p");
  commentElement.innerText = comment.comment;

  // appends the HTML elements into the cardEelement (div).
  // for example: from this:  <div></div> ----> to this:  <div><h2>Date</h2></div>
  cardElement.appendChild(nameElement);
  cardElement.appendChild(dateElement);
  cardElement.appendChild(commentElement);
  cardElement.appendChild(underlineElement);
  // we add a child in the ticketsElement (this is the section ID = tickets).
  commentListElement.appendChild(cardElement);
}

function resetCommentsList() {
  // 1. Select the <section> which is in id=comments.
  const commentListReset = document.querySelector("#comments");
  // 2. empty the section.
  // the commentReset.innerHTML sets the section to an empty variable.
  // For example: From: <section>..childrens..</section> ---> To: <section></setcion>
  commentListReset.innerHTML = "";
}

// The reason why we created a createCards function is to make it reusable
// we want to sort it multiple times (everytime we add a new data)
// reset <section> into empty.
function createCards() {
  // Resets the commentsList
  // this calls the resetCommentsList
  resetCommentsList();

  // I am sorting here.
  // commentListObject array is being sorted using "sort" function
  // Eveytime you use something() <-- () is a function.
  // (a,b) => b.date - a.date will sort from recent to least recent.
  commentListObject.sort((a, b) => b.date - a.date);

  // creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
  // the loop keeps going if index is < cards.length. for everyloop, we increment index by 1 (index++)
  for (let index = 0; index < commentListObject.length; index++) {
    // for every loop, we call the createCard function.
    // we call the createCard function created above.
    // the card parameter is (cards[index]) and we are accessing [index].
    // for example, cards[0] -----> cards[1] -----> cards[2] ...
    // this is how you access a single card in the cards array.
    displayComment(commentListObject[index]);
  }
}

// This is calling the createCards function in line 63
createCards();

// 1. Find the form HTML element.
const formCommentElement = document.querySelector("#formComment");
// 2. Add functionality/event on it if you click submit.
formCommentElement.addEventListener("submit", (event) => {
  // Prevents from refreshing the page.
  event.preventDefault();

  // 3. Access the name and comment
  const nameInput = event.target.name.value;
  const commentInput = event.target.comment.value;
  // event is referring to the "mouse click"
  // event.target is referring to the "form" What is the target of what you clicked? the form.
  // event.target.name is referring to the HTML element with the name=name, or name=comment
  // event.target.name.value is referring to the user input/value (what you entered in the box).

  // 4. Access the date
  const dateInput = Date.now();
  // everytime there is an = sign, you are storing something into a VARIABLE.

  // 5. create an object out of them
  const newComment = {
    name: nameInput,
    date: new Date(dateInput),
    comment: commentInput,
  };
  // I took the nameInput, dateInput, and commentInput and stored it to newComment.

  // 6. Add the new object to the array/list of comments
  commentListObject.push(newComment);
  // commentListObject is the original array of default comments at the very top.
  // push adds it to the array, but at the bottom.
  // newComment is the new name, date, comment that a user inputs.

  // createCard calls the createCard function we created above. (line 38)
  // the card parameter is (newComment) because we need to pass
  // the data (newComment line 94) to the createCard function above.

  // This is calling the createCards function in line 63
  // this makes createCards REUSABLE
  createCards();

  // event.target is referring to the "form".
  // event.target.RESET, CLEARS THE ENTIRE FORM.
  // There's an empty bracket because it's a function without a parameter
  event.target.reset();
});
