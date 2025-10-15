    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
 const questions = [
  {
    question: "What will be the output of:\n\n```javascript\nlet x;\nconsole.log(x);\n```",
    answers: [
      { text: "undefined", correct: true },
      { text: "null", correct: false },
      { text: "0", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which keyword is used to skip the current iteration of a loop?",
    answers: [
      { text: "continue", correct: true },
      { text: "break", correct: false },
      { text: "exit", correct: false },
      { text: "skip", correct: false },
    ],
  },
  {
    question: "What will be the output of:\n\n```javascript\nconsole.log(2 === '2');\n```",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "How can you convert a string to an integer in JavaScript?",
    answers: [
      { text: "parseInt()", correct: true },
      { text: "int()", correct: false },
      { text: "toInt()", correct: false },
      { text: "Number.string()", correct: false },
    ],
  },
  {
    question: "Which method removes the last element from an array?",
    answers: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "splice(0)", correct: false },
    ],
  },
  {
    question: "What will this output?\n\n```javascript\nconsole.log('10' + 10);\n```",
    answers: [
      { text: "\"1010\"", correct: true },
      { text: "\"20\"", correct: false },
      { text: "\"101\"", correct: false },
      { text: "NaN", correct: false },
    ],
  },
  {
    question: "Which built-in function displays a message and waits for user input?",
    answers: [
      { text: "prompt()", correct: true },
      { text: "alert()", correct: false },
      { text: "confirm()", correct: false },
      { text: "input()", correct: false },
    ],
  },
  {
    question: "What is the value of:\n\n```javascript\ntrue && false\n```",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "undefined", correct: false },
      { text: "null", correct: false },
    ],
  },
  {
    question: "Which function returns the largest integer less than or equal to a number?",
    answers: [
      { text: "Math.floor()", correct: true },
      { text: "Math.round()", correct: false },
      { text: "Math.ceil()", correct: false },
      { text: "Math.low()", correct: false },
    ],
  },
  {
    question: "What will be the result of:\n\n```javascript\nconsole.log(1 == true);\n```",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which array method joins all elements into a string?",
    answers: [
      { text: "join()", correct: true },
      { text: "concat()", correct: false },
      { text: "combine()", correct: false },
      { text: "toStringAll()", correct: false },
    ],
  },
  {
    question: "What is the output of:\n\n```javascript\nconsole.log(typeof []);\n```",
    answers: [
      { text: "\"object\"", correct: true },
      { text: "\"array\"", correct: false },
      { text: "\"list\"", correct: false },
      { text: "\"undefined\"", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a block-scoped variable?",
    answers: [
      { text: "let", correct: true },
      { text: "var", correct: false },
      { text: "define", correct: false },
      { text: "constant", correct: false },
    ],
  },
  {
    question: "What will be logged?\n\n```javascript\nconsole.log('5' * 2);\n```",
    answers: [
      { text: "10", correct: true },
      { text: "\"52\"", correct: false },
      { text: "\"10\"", correct: false },
      { text: "NaN", correct: false },
    ],
  },
  {
    question: "Which function converts a number to a string?",
    answers: [
      { text: "toString()", correct: true },
      { text: "stringify()", correct: false },
      { text: "Stringify()", correct: false },
      { text: "numToStr()", correct: false },
    ],
  },
  {
    question: "What will be the output of:\n\n```javascript\nconsole.log(Boolean(''));\n```",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "undefined", correct: false },
      { text: "null", correct: false },
    ],
  },
  {
    question: "Which method adds a new element at the beginning of an array?",
    answers: [
      { text: "unshift()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "insert()", correct: false },
    ],
  },
  {
    question: "What does this expression return?\n\n```javascript\ntypeof NaN === 'number'\n```",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which operator is used to combine multiple conditions?",
    answers: [
      { text: "&&", correct: true },
      { text: "&", correct: false },
      { text: "||", correct: false },
      { text: "/", correct: false },
    ],
  },
  {
    question: "What will be the output of:\n\n```javascript\nconsole.log('hello'.toUpperCase());\n```",
    answers: [
      { text: "\"HELLO\"", correct: true },
      { text: "\"hello\"", correct: false },
      { text: "\"Hello\"", correct: false },
      { text: "Error", correct: false },
    ],
  }
];




const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");


let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = {}; // Store user choices by question index

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = {};
  nextButton.innerHTML = "Next";
  prevButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer-btn");

    // If this answer was previously selected, highlight it
    if (selectedAnswers[currentQuestionIndex] === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => selectAnswer(index));
    answerButtons.appendChild(button);
  });

  // Show previous button if not on first question
  prevButton.style.display = currentQuestionIndex > 0 ? "block" : "none";
  nextButton.style.display = "block";
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// When user selects an answer
function selectAnswer(index) {
  selectedAnswers[currentQuestionIndex] = index;

  // Remove highlight from all buttons
  Array.from(answerButtons.children).forEach((button) =>
    button.classList.remove("selected")
  );

  // Highlight the clicked one
  answerButtons.children[index].classList.add("selected");
}

// When clicking Next
function handleNextButton() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showScore();
  }
}

// When clicking Previous
function handlePrevButton() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function showScore() {
  resetState();

  // Calculate score
  score = 0;
  questions.forEach((q, i) => {
    const selectedIndex = selectedAnswers[i];
    if (selectedIndex !== undefined && q.answers[selectedIndex].correct) {
      score++;
    }
  });

  questionElement.innerHTML = `🎯 You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  prevButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
  if (nextButton.innerHTML === "Play Again") {
    startQuiz();
  } else {
    handleNextButton();
  }
});

prevButton.addEventListener("click", handlePrevButton);

startQuiz();
