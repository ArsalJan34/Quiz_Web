    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }

const questions = [
  {
    question: "What will be the output of:\n\n```javascript\nconsole.log(typeof 42);\n```",
    answers: [
      { text: "\"number\"", correct: true },
      { text: "\"string\"", correct: false },
      { text: "\"object\"", correct: false },
      { text: "\"boolean\"", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "// for single-line comments", correct: true },
      { text: "# for single-line comments", correct: false },
      { text: "<!-- --> for single-line comments", correct: false },
      { text: "/* */ for single-line comments", correct: false },
    ],
  },
  {
    question: "What will `console.log(2 + '2')` print?",
    answers: [
      { text: "\"22\"", correct: true },
      { text: "4", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "Which of the following is a correct way to declare a variable in JavaScript?",
    answers: [
      { text: "let name = 'John';", correct: true },
      { text: "var = 'John';", correct: false },
      { text: "name := 'John';", correct: false },
      { text: "declare name = 'John';", correct: false },
    ],
  },
  {
    question: "What will be the output of:\n\n```javascript\nconsole.log(5 == '5');\n```",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "NaN", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a constant variable?",
    answers: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "constant", correct: false },
    ],
  },
  {
    question: "What is the output of:\n\n```javascript\nconsole.log(typeof null);\n```",
    answers: [
      { text: "\"object\"", correct: true },
      { text: "\"null\"", correct: false },
      { text: "\"undefined\"", correct: false },
      { text: "\"number\"", correct: false },
    ],
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "=", correct: true },
      { text: "==", correct: false },
      { text: "===", correct: false },
      { text: "=>", correct: false },
    ],
  },
  {
    question: "What will be the output of:\n\n```javascript\nconsole.log(Boolean(0));\n```",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "0", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "float", correct: true },
      { text: "number", correct: false },
      { text: "string", correct: false },
      { text: "boolean", correct: false },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "alert('Hello World');", correct: true },
      { text: "msg('Hello World');", correct: false },
      { text: "prompt('Hello World');", correct: false },
      { text: "console.log('Hello World');", correct: false },
    ],
  },
  {
    question: "What will be the output of:\n\n```javascript\nconsole.log(3 + 2 + '7');\n```",
    answers: [
      { text: "\"57\"", correct: true },
      { text: "\"327\"", correct: false },
      { text: "\"12\"", correct: false },
      { text: "\"9\"", correct: false },
    ],
  },
  {
    question: "Which of these is a valid function declaration in JavaScript?",
    answers: [
      { text: "function greet() {}", correct: true },
      { text: "func greet() {}", correct: false },
      { text: "def greet() {}", correct: false },
      { text: "method greet() {}", correct: false },
    ],
  },
  {
    question: "What does `NaN` stand for?",
    answers: [
      { text: "Not a Number", correct: true },
      { text: "Null as Number", correct: false },
      { text: "Negative and Null", correct: false },
      { text: "Number as Null", correct: false },
    ],
  },
  {
    question: "What is the result of:\n\n```javascript\nconsole.log('5' - 3);\n```",
    answers: [
      { text: "2", correct: true },
      { text: "\"53\"", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "Which method is used to convert a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.object()", correct: false },
      { text: "JSON.convert()", correct: false },
    ],
  },
  {
    question: "What will be the output of:\n\n```javascript\nconsole.log(10 / 0);\n```",
    answers: [
      { text: "Infinity", correct: true },
      { text: "0", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which statement is used to stop a loop in JavaScript?",
    answers: [
      { text: "break", correct: true },
      { text: "exit", correct: false },
      { text: "stop", correct: false },
      { text: "end", correct: false },
    ],
  },
  {
    question: "What does `typeof NaN` return?",
    answers: [
      { text: "\"number\"", correct: true },
      { text: "\"NaN\"", correct: false },
      { text: "\"undefined\"", correct: false },
      { text: "\"object\"", correct: false },
    ],
  },
  {
    question: "Which of these will add an element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
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
