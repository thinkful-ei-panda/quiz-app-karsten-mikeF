'use strict';
$( document ).ready();

/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who directed "Back to the Future" ?',
      answers: ['a. Robert Zemeckis', 'b. James Cameron', 'c. Martin Scorsese'],
      correctAnswer: 0
    },
    {
      question: 'How many "Terminator" films are there?',
      answers: ['a. 2', 'b. 6', 'c. 7'],
      correctAnswer: 1
    },
    {
      question: 'Who directed "The Departed" ?',
      answers: ['a. Martin Scorcese', 'b. Steven Spielberg', 'c. George Lucas'],
      correctAnswer: 0
    },
    {
      question: 'What year was "Avatar" released?',
      answers: ['a. 2015', 'b. 2006', 'c. 2009'],
      correctAnswer: 2
    },
    {
      question: 'What year was "The Matrix" released?',
      answers: ['a. 2002', 'b. 1995', 'c. 1999'],
      correctAnswer: 2
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

// const STORE = {
//   questions: [ {...}, {...}, {...}, {...}, {...} ],
//   quizStarted: false,
//   questionNumber: 0,
//   score: 0,
// };

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

function generateStartPage() {

  $('main').html(`<div class="welcome-container">
  <h1 class="h1-container">Cinequiz</h1>
    <p>Welcome to CineQuiz.</p><p>Here we test your knowledge of cinema history.</p>
    <button type="submit" class="action-btn">ACTION!</button>
  </div>`);
}

generateStartPage();                                                          // call to generate start page

$('.action-btn').click(function( event ) {                                   // IT WORKED!!!    //CLICK EVENT MOVE TO BOTTOM!!!
  console.log(`clicking action`);
  generateQuestionsHtml(0);
});

function generateQuestionsHtml(qNum) {

  //had to use let because const didn't let us reassign questionHTML as the questions loop.
  let questionHTML = `<div class='question-container'>                            
    <form id='question-form'>
      <p>${STORE.questions[qNum].question}</p>`;
  
  for (let i = 0; i < STORE.questions[qNum].answers.length; i++){             //looping through each question
    questionHTML += `<div class="m-choice">
      <input type='radio' id='answer${i}' name='answer' value='${i}'>
        <label for='answer${i}'>${STORE.questions[qNum].answers[i]}</label>
    </div>`;
  }
  questionHTML += `<button type="submit" class="btn-2">Test Your Might!</button>
    </form>
  </div>`;
  
  $('main').html(questionHTML);
}

// generateQuestionsHtml(0);
// generateQuestionsHtml(1);
// generateQuestionsHtml(2);
// generateQuestionsHtml(3);
// generateQuestionsHtml(4);

/************************************************************************************************* */

//Iterate through the store
//When we iterate through an array and return a NEW array with the same length but altered
////element, use the .map function

//Call our template generator on each item in the array

//Convert the results into a single string

// renderShoppingList() - put it all together
//Generate the new HTML with our generator function
//Apply the HTML to the DOM


// const SHOPPING_LIST_EL = $('.shopping-list');

// function renderShoppingList() {
//   const html = generateShoppingListElements(STORE);
//   SHOPPING_LIST_EL.html(html);  
// }

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)