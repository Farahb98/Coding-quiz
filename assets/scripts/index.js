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

const submitButton = document.getElementById("submit");
const timerElement = document.getElementById("time");
const questionTitleElement = document.getElementById("question-title");
const choicesElement = document.getElementById("choices");
const startButton = document.getElementById("start");
const feedbackElement = document.getElementById("feedback");
const endScreenElement = document.getElementById("end-screen");
const initialsInput = document.getElementById("initials");
let time = 60;
let score = 0;
let timerInterval = 1000;
let currentQuestionIndex = 0;

function startQuiz() {
  startButton.style.display = "none";
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
  updateTimer();
  displayQuestion();
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTitleElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = "";

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choice = currentQuestion.choices[i];
    const choiceElement = document.createElement("button");
    choiceElement.textContent = choice;
    choiceElement.setAttribute("data-index", i);
    choiceElement.addEventListener("click", checkAnswer);
    choicesElement.appendChild(choiceElement);
  }
}

function checkAnswer(event) {
  const selectedChoice = event.target;
  const selectedAnswerIndex = parseInt(
    selectedChoice.getAttribute("data-index")
  );

  if (selectedAnswerIndex === questions[currentQuestionIndex].correctAnswer) {
    feedbackElement.textContent = "Correct!";
    score++;
  } else {
    feedbackElement.textContent = "Wrong!";
    time -= 10;
  }

  feedbackElement.classList.remove("hide");

  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    setTimeout(() => {
      feedbackElement.classList.add("hide");
      displayQuestion();
    }, 1000);
  }
}

function updateTimer() {
  function tic(params) {
    time--;
    timerElement.textContent = time;

    if (time <= 0) {
      clearInterval(startTimer);
      endQuiz();
    }
  }

  var startTimer = setInterval(tic, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  document.getElementById("questions").classList.add("hide");
  endScreenElement.classList.remove("hide");
  document.getElementById("final-score").textContent = score;
}

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveInitials);

function finalInput() {
  questionsSection.classList.add("hide");
  resultsSection.classList.remove("hide");
  finalScore.textContent = score;
}

function saveInitials() {
  const initials = initialsInput.value.trim();

  if (initials !== "") {
    var initialsInputText = initialsInput.value.trim();
    if (initialsInputText === "") {
      return alert("Please enter your intitials");
    } else if (initialsInputText.length > 3) {
      return alert("Please enter three letters only");
    }

    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push({ initials, score });
    localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "highscores.html";
  }
}
