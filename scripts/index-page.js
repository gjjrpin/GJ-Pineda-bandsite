// The square brackets signify an array. We are creating a const variable called "commentListObject".
// and we are setting it to an array.
let commentListObject = [];

/* Goal: Display data from API
0. Create a function that generates the API key and store it as a variable.
1. Create a function to get the data from the API
2. store the data into a variable.
3. use the variable to display the data.*/

// notes:CDN is a storage for JS code. It could also be used for CSS code. CDN = storage.
// Axios is a library that helps us use URLs. URLs can also be APIs.

// This is setting the api_key to a variable called "apiVariable". We use "let" because the API key always changes.
// we are setting it to a blank string so it could be filled with the api_key we are setting in the apiKey function.
let apiVariable = "";

// We are using the library called "axios" to use the API.
// The "get" is the HTTP METHOD.
// HTTP METHOD:
// -get
// -post
// -put
// -delete
// We are now creating a function to set the apiVariable to response.data.api_key.
function apiKey() {
  axios
    // The response from the api comes from the link at the bottom.
    // The link at the bottom is an api.
    .get("https://project-1-api.herokuapp.com/register")
    // "Then" is an example of a "promise".
    // When the link above gives us a response, we do the function inside "then."
    // When the link above finishes loading, THEEENNNN we do the following...
    .then(function (response) {
      // Here, we're getting the response, and storing it in a variable called "apiVariable", which is also above.
      // the reason why its response.data.api_key is because the API key string is INSIDE api_key which is INSIDE data.
      /*
        data = {
          api_key: "this-is-the-api-key"
        }
      */
      apiVariable = response.data.api_key;
      // we are calling getComments, which is below.
      // because once we have the api keys, we cant to be able to get the comments using it.
      getComments();
    });
}

apiKey();

// This is the same as above but instead of getting the api key, we are getting the data.
// We are getting the data using the API link.
function getComments() {
  axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${apiVariable}`)
    .then(function (res) {
      commentListObject = res.data;
      // The createcards is here because it's used to refresh the HTML.
      // After we get the data, we want to be able to create an HTML with it.
      // This will display the comments in the html.
      createCards();
    });
}

// the reason why we store this in a variable is so we can access it later. "commentList" is a VARIABLE.
// we are storing the HTML element with the ID "#comments" into ticketsElement VARIABLE.
// the document.querySelector selects an HTML element with ID "#comments" then
// stores it into the "commentList" VARIABLE.
// querySelector is a general selector, others include getElementByID, get ElementByClass, etc.
// a hashtag makes something an ID.
const commentListElement = document.querySelector("#comments");

// We created a reusable function that requires a parameter called "comment".
// "comment" is expected to be an object with the properties: Date, Venue, and Location.
// This function creates the HTML for a single comment.
function displayComment(comment) {
  // every time this function is called, we are creating an element called "div, h2, p, etc."
  const cardContainerElement = document.createElement("div");
  // the classList.add("comment") adds a css class to the div.
  // for example: <div class=comment></div>
  cardContainerElement.classList.add("comment");

  const cardPlaceHolderElement = document.createElement("img");
  cardPlaceHolderElement.classList.add("comment__placeholder");

  const cardElement = document.createElement("div");
  cardElement.classList.add("comment__card-container");

  const nameDateContainer = document.createElement("div");
  nameDateContainer.classList.add("comment__heading-container");

  const nameElement = document.createElement("h2");
  nameElement.innerText = comment.name;
  nameElement.classList.add("comment__name");

  const dateElement = document.createElement("p");

  // This uses string interpolation to add the comment.timestamp to HTML.
  // The "timestamp" comes from the name "timestamp" in the array of the API.
  // it was named "timestamp" instead of "date", which is why I had to change it.
  // we also needed to convert this into a date object by doing "new Date (comment.timestamp)" because
  // the timestamp is just numbers. We need to convert this number into a date, hence, new Date.
  // lastly, toLocaleDateString formats the date.
  dateElement.innerText = `${new Date(comment.timestamp).toLocaleDateString()}`;
  dateElement.classList.add("comment__date");

  const commentElement = document.createElement("p");
  commentElement.innerText = comment.comment;
  commentElement.classList.add("comment__statement");

  // This appends the HTML elements into the cardElement (div).
  // for example: from this:  <div></div> ----> to this:  <div><h2>Date</h2></div>
  nameDateContainer.appendChild(nameElement);
  nameDateContainer.appendChild(dateElement);

  cardElement.appendChild(nameDateContainer);
  cardElement.appendChild(commentElement);

  cardContainerElement.appendChild(cardPlaceHolderElement);
  cardContainerElement.appendChild(cardElement);
  // we add a child in the ticketsElement (this is the section ID = comments).
  // commentListElement = <section id="comments"></section>
  commentListElement.appendChild(cardContainerElement);
}

// This does 2 things:
function resetCommentsList() {
  // 1. Select the <section> which is in id=comments.
  const commentListReset = document.querySelector("#comments");
  // 2. empty the section.
  // the commentReset.innerHTML sets the section to an empty variable.
  // For example: From: <section>..children..</section> ---> To: <section></section>
  commentListReset.innerHTML = "";
}

// The reason why we created a createCards function is to make it reusable
// we want to sort it multiple times (every time we add a new data)
function createCards() {
  // reset <section> into empty.
  // Resets the commentsList
  // this calls the resetCommentsList
  resetCommentsList();

  // I am sorting here.
  // commentListObject array is being sorted using "sort" function
  // every time you use xyz() <-- () is a function.
  // "(a,b) => b.date - a.date" will sort from recent to least recent.
  commentListObject.sort((a, b) => b.timestamp - a.timestamp);

  // creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
  // the loop keeps going if index is < cards.length. for every loop, we increment index by 1 (index++)
  for (let index = 0; index < commentListObject.length; index++) {
    // for every loop, we call the createCard function.
    // we call the createCard function created above.
    // the card parameter is (cards[index]) and we are accessing [index].
    // for example, cards[0] -----> cards[1] -----> cards[2] ...
    // this is how you access a single card in the commenListObject array.
    displayComment(commentListObject[index]);
  }
}

// This is calling the createCards function.
// Ctrl + click to find createCards.
createCards();

// 1. Find the form HTML element.
const formCommentElement = document.querySelector("#formComment");
// 2. Add functionality/event on it if you click submit.
// The word "event" in the addEventListener, doesn't have to be event. it could be any other word. ex. "whatever"
formCommentElement.addEventListener("submit", (event) => {
  // Prevents from refreshing the page.
  event.preventDefault();

  // This will reset the errors.
  // the "remove" function will clear the specified class in the parameter.
  event.target.name.classList.remove("form__error-state");
  event.target.comment.classList.remove("form__error-state");

  // 3. Access the name and comment
  // event is referring to the "mouse click"
  // event.target is referring to the "form". The target of what you clicked is the form.
  // event.target.name is referring to the HTML element with the name=name, or name=comment
  // event.target.name.value is referring to the user input/value (what you entered in the box).
  const nameInput = event.target.name.value;
  const commentInput = event.target.comment.value;

  // THIS IS THE VALIDATION SECTION with Ifs statements

  // "||" means "or"
  // "&&" means "and"
  // Check if the user inputted BOTH name and comment.
  if (nameInput === "" || commentInput === "") {
    // That means theres an error.

    // Where exactly are the errors? Is it the name OR comment OR both?
    if (nameInput === "") {
      // event is referring to the "mouse click"
      // event.target is referring to the "form". The target of what you clicked is the form.
      // event.target.name is referring to the HTML element with the name=name, or name=comment
      // event.target.name.value is referring to the user input/value (what you entered in the box).
      event.target.name.classList.add("form__error-state");
    }
    if (commentInput === "") {
      event.target.comment.classList.add("form__error-state");
    }
    // Put .error css class in the input
    // returns ends the entire remaining function below.
    // having the return here, ignores the rest of the function below IF the condition is met.
    // if nameInput and commentInput is NOT empty, the rest of the function below will execute.
    return;
  }

  //----------------------------------

  // This is what we are pulling from the user inputs.
  // I took the nameInput and commentInput and stored it to newComment.
  // I added the new object to the array/list of comments
  const newComment = {
    name: nameInput,
    comment: commentInput,
  };

  // we are posting the user inputs into the API here:
  // more specifically, the variable newComment.
  axios
    .post(
      `https://project-1-api.herokuapp.com/comments?api_key=${apiVariable}`,
      newComment
    )
    .then(function (result) {
      // The api generates timestamp and id from the posted newComment variable
      // and gives it back to us through result.data.
      commentListObject.push(result.data);
      // This re-renders the commentListObject array.
      // It essentially refreshes the HTML.
      createCards();
    });

  // event.target is referring to the "form".
  // event.target.RESET, CLEARS THE ENTIRE FORM.
  // There's an empty bracket because it's a function without a parameter
  event.target.reset();
});
