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

function generateQuestionsHtml() {
  //had to use let because const didn't let us reassign html as the questions loop.

  let html = `<div class='question-container'>                            
    <form id='question-form'>
      <h2>Question ${STORE.questionNumber + 1} of 5</h2>
      <p>${STORE.questions[STORE.questionNumber].question}</p>`;
  for (let i = 0; i < STORE.questions[STORE.questionNumber].answers.length; i++) {
    //looping through each answer to display answers
    html += `<div class="m-choice">
    <input type='radio' name='answer' id='answer${i}' value='${STORE.questions[STORE.questionNumber].answers[i]}' required>
    <label for='answer${i}'>${STORE.questions[STORE.questionNumber].answers[i]}</label>
    </div>`;
  }
  html += `<button type="submit" class="test-btn">Test Your Might!</button>
    </form>
    <p class="correct">Correct ${STORE.score} / 5</p>
  </div>`;

  $('main').html(html);
}

function generateCorrect() {
  //generates a correct answer page
  return `<div class='next-class'>
      <h2 class="correct">That is correct!</h2>
      <p>Score : ${STORE.score} / 5</p>
      <p>"Roads?  Where we're going, we don't need roads."</p>
      <p class="align-right italic">-Back to the Future</p>
      <button class='next-btn'>On to the next</button>
  </div>`;
}

function generateIncorrect() {
  //generates an incorrect answer page
  return `<div class='next-class'>
      <h2 class="incorrect">Incorrect!</h2>
      <p>Correct answer is</p> <p class="correct">${STORE.questions[STORE.questionNumber].correctAnswer}</p>
      <p>"There's no crying in baseball!."</p>
      <p class="align-right italic">-A League of Their Own</p>
      <button class='next-btn'>On to the next one</button>
  </div>`;
}

function generateResults() {
  //generates results page
  return `<div class="results-container">
  <h2>Results</h2>
  <p class="bottom-margin bold correct">You scored ${STORE.score} of 5 correct</p>
  <p class="italic">"No. Try not.  Do.  Or do not.  There is no try."</p>
  <p class="align-right italic">-The Empire Strikes Back.</p>
  <button type="submit" class="continue-btn">Restart Quiz</button>
</div>`;
}

/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderStartPage() {
  const html = generateStartPage(); // 
  $('main').html(html);
}

function renderQuestionsHtml() {
  const html = generateQuestionsHtml();
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


/********** EVENT HANDLER FUNCTIONS **********/

// Handles loading Cinequiz start page
function handleStartPage() {
  $('main').on('click', '.welcome-container .action-btn', function () {
    console.log('Quiz Start Commence!');
    generateQuestionsHtml(0);
  });
}

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

// Listens for next button click, adds correct to count and renders the next question page
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


// Resets counters to 0.  Redirects back to Start Page.
function handleRestartQuiz() {
  $('main').on('click', '.results-container .continue-btn', function (event) {
    STORE.score = 0;
    STORE.questionNumber = 0;
    //Goes to Start Page
    console.log('Restart Quiz');
    //Restart Quiz
    renderStartPage();
  });
}


// RENDER FUNCTION


function render() {
  renderStartPage();
  handleStartPage();
  handleSubmitAnswer();
  handleNext();
  renderQuestionsHtml();
  renderResults();
  handleRestartQuiz();
}

$(render);
