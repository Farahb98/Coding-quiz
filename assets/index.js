const questions = [
  {
    question: "Commonly used data types DO NOT include",
    choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: [
      "1. Numbers and strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parentheses"],
    correctAnswer: 2,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    choices: ["1. Break", "2. Stop", "3. Halt", "4. Exit"],
    correctAnswer: 0,
  },
];

let currentQuestionIndex = 0;
let time = 60;
let score = 0;
let timerInterval;
const timerElement = document.getElementById("time");
const questionTitleElement = document.getElementById("question-title");
const choicesElement = document.getElementById("choices");
const startButton = document.getElementById("start");
const feedbackElement = document.getElementById("feedback");
const endScreenElement = document.getElementById("end-screen");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");

function startQuiz() {
  startButton.style.display = "none";
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
  timerInterval = setInterval(updateTimer, 1000);
  displayQuestion();
}
