'use strict';
$(document).ready();

/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who directed "Back to the Future" ?',
      answers: ['a. Robert Zemeckis', 'b. James Cameron', 'c. Martin Scorsese'],
      correctAnswer: 'a. Robert Zemeckis',
    },
    {
      question: 'How many "Terminator" films are there?',
      answers: ['a. 2', 'b. 6', 'c. 7'],
      correctAnswer: 'b. 6',
    },
    {
      question: 'Who directed "The Departed" ?',
      answers: ['a. Martin Scorcese', 'b. Steven Spielberg', 'c. George Lucas'],
      correctAnswer: 'a. Martin Scorcese',
    },
    {
      question: 'What year was "Avatar" released?',
      answers: ['a. 2015', 'b. 2006', 'c. 2009'],
      correctAnswer: 'c. 2009',
    },
    {
      question: 'What year was "The Matrix" released?',
      answers: ['a. 2002', 'b. 1995', 'c. 1999'],
      correctAnswer: 'c. 1999',
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  current: 0,
};
