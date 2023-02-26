// We are creating a const variable called "commentListObject". We use "let" because the API key always changes.
let commentListObject = [];
// This is setting the api_key to a variable called "apiVariable".
let apiVariable = "";

// we are storing the HTML element with the ID "#comments" into ticketsElement VARIABLE.
const commentListElement = document.querySelector("#comments");

// We are now creating a function to set the apiVariable to response.data.api_key.
function apiKey() {
  axios
    .get("https://project-1-api.herokuapp.com/register")
    .then(function (response) {
      // we're getting the response, and storing it in a variable called "apiVariable", which is also above.
      apiVariable = response.data.api_key;
      // we are calling getComments, which is below.
      getComments();
    });
}

// This is the same as above but instead of getting the api key, we are getting the data.
function getComments() {
  axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${apiVariable}`)
    .then(function (res) {
      // setting commentListObject to res.data
      commentListObject = res.data;
      // The createCards is here because it's used to refresh the HTML.
      createCards();
    });
}

// We created a reusable function that requires a parameter called "comment".
function displayComment(comment) {
  // every time this function is called, we are creating an element called "div, h2, p, etc."
  const cardContainerElement = document.createElement("div");
  // the classList.add("comment") adds a css class to the div.
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
  dateElement.innerText = `${new Date(comment.timestamp).toLocaleDateString()}`;
  dateElement.classList.add("comment__date");

  const commentElement = document.createElement("p");
  commentElement.innerText = comment.comment;
  commentElement.classList.add("comment__statement");

  const likeElement = document.createElement("button");
  likeElement.innerText = "Like";
  likeElement.classList.add("comment__like-button");
  likeElement.id = "likeButton";

  const likeButtonCountContainer = document.createElement("div");
  likeButtonCountContainer.classList.add("comment__like-container");

  likeElement.value = comment.id;
  const likeCount = document.createElement("p");
  likeCount.innerText = comment.likes;

  // This appends the HTML elements into the cardElement (div).
  nameDateContainer.appendChild(nameElement);
  nameDateContainer.appendChild(dateElement);

  cardElement.appendChild(nameDateContainer);
  cardElement.appendChild(commentElement);
  likeButtonCountContainer.appendChild(likeElement);
  likeButtonCountContainer.appendChild(likeCount);
  cardElement.appendChild(likeButtonCountContainer);

  cardContainerElement.appendChild(cardPlaceHolderElement);
  cardContainerElement.appendChild(cardElement);
  // we add a child in the ticketsElement (this is the section ID = comments).
  commentListElement.appendChild(cardContainerElement);
}

// This does 2 things:
function resetCommentsList() {
  // 1. Select the <section> which is in id=comments.
  const commentListReset = document.querySelector("#comments");
  // 2. empty the section.
  commentListReset.innerHTML = "";
}

// The reason why we created a createCards function is to make it reusable
function createCards() {
  // reset <section> into empty.
  resetCommentsList();

  commentListObject.sort((a, b) => b.timestamp - a.timestamp);

  // creating a forloop. at the start of the loop, we create a VARIABLE called "index" and setting it to 0.
  for (let index = 0; index < commentListObject.length; index++) {
    // for every loop, we call the createCard function.
    displayComment(commentListObject[index]);
  }
  buttonsAddEventListeners();
}

// --------------This is the like button functionality--------------- //

function buttonsAddEventListeners() {
  const buttonElements = document.querySelectorAll(".comment__like-button");
  for (let i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener("click", (event) => {
      event.preventDefault();

      const id = event.target.value;

      axios
        .put(
          `https://project-1-api.herokuapp.com/comments/${id}/like?api_key=${apiVariable}`
        )
        .then(function (result) {
          // single result of the updated item/comment.
          // Find the comment in the array with the specified ID.
          for (let f = 0; f < commentListObject.length; f++) {
            if (commentListObject[f].id === id) {
              // Replace that with the result.
              commentListObject[f].likes = result.data.likes;
              // This re-renders (refreshes) the HTML
              createCards();
            }
          }
        });
    });
  }
}

function formAddEventListeners() {
  // 1. Find the form HTML element.
  const formCommentElement = document.querySelector("#formComment");
  // 2. Add functionality/event on it if you click submit.
  formCommentElement.addEventListener("submit", (event) => {
    // Prevents from refreshing the page.
    event.preventDefault();

    // This will reset the errors.
    event.target.name.classList.remove("form__error-state");
    event.target.comment.classList.remove("form__error-state");

    // 3. Access the name and comment
    const nameInput = event.target.name.value;
    const commentInput = event.target.comment.value;

    //------------------------THIS IS THE VALIDATION SECTION--------------------------------//

    // Check if the user inputted BOTH name and comment.
    if (nameInput === "" || commentInput === "") {
      // That means theres an error.
      if (nameInput === "") {
        // event.target.name.value is referring to the user input/value (what you entered in the box).
        event.target.name.classList.add("form__error-state");
      }
      if (commentInput === "") {
        event.target.comment.classList.add("form__error-state");
      }
      // if nameInput and commentInput is NOT empty, the rest of the function below will execute.
    } else {
      const newComment = {
        name: nameInput,
        comment: commentInput,
      };

      // we are posting the user inputs into the API here.
      axios
        .post(
          `https://project-1-api.herokuapp.com/comments?api_key=${apiVariable}`,
          newComment
        )
        .then(function (result) {
          // The api generates timestamp and id from the posted newComment variable
          commentListObject.push(result.data);
          // This re-renders the commentListObject array.
          createCards();
        });

      // event.target.RESET, CLEARS THE ENTIRE FORM.
      event.target.reset();
    }
  });
}

// ------------------------FUNCTIONS--------------------------------------------

apiKey();
formAddEventListeners();
