'use strict';

$(document).ready();
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
  return `<div class="welcome-container">
  <h1 class="h1-container">Cinequiz</h1>
    <p>Welcome to CineQuiz.</p><p>Here we test your knowledge of cinema history.</p>
    <button type="submit" class="action-btn">ACTION!</button>
  </div>`;
}

/*************************************************** */

function generateQuestionsHtml(qNum) {
  //had to use let because const didn't let us reassign html as the questions loop.

  let html = `<div class='question-container'>                            
    <form id='question-form'>
      <p>Question ${qNum + 1} / 5</p>
      <p>${STORE.questions[qNum].question}</p>`;

  for (let i = 0; i < STORE.questions[qNum].answers.length; i++) {
    //looping through each answer to display answers
    html += `<div class="m-choice">
    <input type='radio' name='answer' id='answer${i}' value='${STORE.questions[qNum].answers[i]}' required>
    <label for='answer${i}'>${STORE.questions[qNum].answers[i]}</label>
    </div>`;
  }
  html += `<button type="submit" class="test-btn">Test Your Might!</button>
    </form>
    <p>Correct ${STORE.score} / 5</p>
  </div>`;

  $('main').html(html);
}

function generateCorrect() {
  return `<div class='next-class'>
      <h2 class="correct">That is correct!</h2>
      <p>"Where we're going, we don't need roads."</p>
      <p class="align-right italic">-Doc Brown</p>
      <button class='next-btn'>On to the next</button>
  </div>`;
  //generates a correct answer page
}

function generateIncorrect() {
  return `<div class='next-class'>
      <h2 class="incorrect">Incorrect!</h2>
      <p>"There's no crying in baseball!."</p>
      <p class="align-right italic">-Jimmy Dugan</p>
      <button class='next-btn'>On to the next one</button>
  </div>`;
  //generates an incorrect answer page
}

function generateResults() {
  return `<div class="results-container">
  <h1>Results</h1>
  <p class="bottom-margin">You scored ${STORE.score} of 5 correct</p>
  <p class="italic">"Try not.  Do - or not.  There is no try."</p>
  <p class="align-right italic">-Yoda</p>
  <button type="submit" class="continue-btn">"There's no place like home"</button>
</div>`;
}

// }

/************************************************************************************************* */

/********** RENDER FUNCTION(S) **********/

function renderStartPage() {
  const html = generateStartPage(); //                                                  call to generate start page
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

function handleStartPage() {
  $('main').on('click', '.welcome-container .action-btn', function () {
    console.log('Quiz Start Commence!');
    // renderStartPage();
    generateQuestionsHtml(0);
  });

}
handleStartPage();

//Submits answer and generates correct or incorrect page
function handleSubmitAnswer() {
  $('main').submit('.test-btn', function (event) {
    event.preventDefault();
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

//For Next Button. Needs work
function handleNext() {
  $('main').on('click', '.next-class .next-btn', function (event) {
    if (STORE.questionNumber >= 4) {
      return renderResults();
    } else {
      STORE.questionNumber++;
      renderQuestionsHtml(STORE.questionNumber);
      console.log('Go to next page');
    }
    // renderQuestionsHtml(); //Go to next page
  });
}
handleNext();

//Restarts quiz. Needs work.
function handleRestartQuiz() {
  $('main').on('click', '.results-container .continue-btn', function (event) {
    STORE.score = 0;
    STORE.questionNumber = 0;
    //Goes to Start Page
    renderStartPage();
    //Restart Quiz
    console.log('Restart Quiz');
  });
  render();
}
handleRestartQuiz();


// RENDERS


function render() {
  renderStartPage();
  renderQuestionsHtml();
  renderCorrect();
  renderIncorrect();
  renderResults();
  handleStartPage();
  handleSubmitAnswer();
  handleNext();
  handleRestartQuiz();
}

render();
