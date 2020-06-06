'use strict';

$(document).ready();
/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.                                //event handlers go here
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
  return `<div class="welcome-container">
  <h1 class="h1-container">Cinequiz</h1>
    <p>Welcome to CineQuiz.</p><p>Here we test your knowledge of cinema history.</p>
    <button type="submit" class="action-btn">ACTION!</button>
  </div>`;
}
/*************************************************** */
//generateQuestionsHtml(0);

/*************************************************** */

function generateQuestionsHtml(qNum) {
  //had to use let because const didn't let us reassign questionHTML as the questions loop.

  let questionHtml = `<div class='question-container'>                            
    <form id='question-form'>
      <p>Question ${qNum + 1} / 5</p>
      <p>${STORE.questions[qNum].question}</p>`;

  for (let i = 0; i < STORE.questions[qNum].answers.length; i++) {
    //looping through each question
    questionHtml += `<div class="m-choice">
    <input type='radio' name='answer' id='answer${i}' value='${STORE.questions[qNum].answers[i]}' required>
    <label for='answer${i}'>${STORE.questions[qNum].answers[i]}</label>
    </div>`;
  }
  questionHtml += `<button type="submit" class="test-btn">Test Your Might!</button>
    </form>
    <p>Correct ${STORE.score} / 5</p>
  </div>`;

  $('main').html(questionHtml);
}

function generateAmountCorrect() {
  return `<div class='state-inner'>
      <p>Question: ${STORE.questionNumber} of 5</p>
      <p>Current score: ${STORE.score} of 5</p>
      </div>`;
  //generates the amount correct
}

function generateCorrect() {
  return `<div class='next-class'>
      <h2>That is correct!</h2>
      <button class='next-btn'>On to the next</button>
  </div>`;
  //generates a correct answer page
}

function generateIncorrect() {
  return `<div class='next-class'>
      <h2>Wrong!</h2>
      <button class='next-btn'>On to the next</button>
  </div>`;
  //generates an incorrect answer page
}

function generateResults() {
  return `<div class="results-container">
  <h1>Results</h1>
  <p>You scored _ of 5 correct</p>
  <button type="submit" class="continue-btn">1UP</button>
</div>`;
}

// }

/************************************************************************************************* */

/*************************************************************************************************

/********** RENDER FUNCTION(S) **********/

function renderStartPage() {
  const html = generateStartPage(); // call to generate start page
  $('main').html(html);
}

function renderQuestionsHtml(num) {
  const html = generateQuestionsHtml(num);
  $('main').html(html);
}

function renderCorrect() {
  const html = generateCorrect();
  console.log('rendering correct');
  $('main').html(html);
}

function renderIncorrect() {
  const html = generateIncorrect();
  console.log('rendering incorrect');
  $('main').html(html);
}

function renderResults() {
  const html = generateResults();
  console.log('rendering results');
  $('main').html(html);
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

//function handleStart() {
$('main').on('click', '.welcome-container .action-btn', function () {
  // IT WORKED!!!    //CLICK EVENT MOVE TO BOTTOM!!!
  console.log('Quiz Start Commence!');
  generateQuestionsHtml(0);
});
//}

$('input').on('click', function () {
  // IT WORKED!!!    //CLICK EVENT MOVE TO BOTTOM!!!
  console.log('test button!');
});

function handleSubmitAnswer() {
  $('main').submit('.test-btn', function (event) {
    event.preventDefault();
    console.log('Yesss');
    if (
      $('input[name="answer"]:checked').val() ===
      STORE.questions[STORE.questionNumber].correctAnswer
    ) {
      STORE.score++;
      renderCorrect();
    } else {
      renderIncorrect();
    }
  });
}
handleSubmitAnswer();

$('.test-btn').submit(function (event) {
  // Testing answer
  console.log('test answer!');
});

$('main').on('click', '.next-class .next-btn', function (event) {
  if (STORE.questionNumber >= 4) {
    return renderResults();
  } else {
    STORE.questionNumber++;
    renderQuestionsHtml();
    console.log('Go to next page');
  }
  //renderQuestionsHtml(0); //Go to next page
});

// $('').click(function( event ) {                     //Restart Quiz
//   console.log('Restart Quiz');

// });

// RENDERS

renderStartPage();
renderQuestionsHtml();
//renderCorrect();
// renderIncorrect();
