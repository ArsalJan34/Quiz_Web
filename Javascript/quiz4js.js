    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
const questions = [
  {
    question: "What will be the output of:\n\n```javascript\nconsole.log(0 == false);\n```",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What keyword is used to declare a variable that cannot be reassigned?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "immutable", correct: false },
    ],
  },
  {
    question: "What will be logged?\n\n```javascript\nconsole.log(typeof function(){});\n```",
    answers: [
      { text: "\"function\"", correct: true },
      { text: "\"object\"", correct: false },
      { text: "\"undefined\"", correct: false },
      { text: "\"string\"", correct: false },
    ],
  },
  {
    question: "Which method removes the first element from an array?",
    answers: [
      { text: "shift()", correct: true },
      { text: "pop()", correct: false },
      { text: "splice()", correct: false },
      { text: "removeFirst()", correct: false },
    ],
  },
  {
    question: "What will `console.log([] == false)` output?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which statement correctly checks if `x` is NOT equal to 5?",
    answers: [
      { text: "x !== 5", correct: true },
      { text: "x !=! 5", correct: false },
      { text: "x =! 5", correct: false },
      { text: "x not= 5", correct: false },
    ],
  },
  {
    question: "What is the output of:\n\n```javascript\nconsole.log('2' + 2 - 1);\n```",
    answers: [
      { text: "21", correct: true },
      { text: "221", correct: false },
      { text: "NaN", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which operator checks both value and type equality?",
    answers: [
      { text: "===", correct: true },
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "!==", correct: false },
    ],
  },
  {
    question: "How can you find the length of an array named `arr`?",
    answers: [
      { text: "arr.length", correct: true },
      { text: "length(arr)", correct: false },
      { text: "arr.size()", correct: false },
      { text: "size(arr)", correct: false },
    ],
  },
  {
    question: "What does `Math.random()` return?",
    answers: [
      { text: "A number between 0 (inclusive) and 1 (exclusive)", correct: true },
      { text: "An integer between 0 and 10", correct: false },
      { text: "A random integer", correct: false },
      { text: "A negative number", correct: false },
    ],
  },
  {
    question: "What will be logged?\n\n```javascript\nconsole.log(typeof NaN);\n```",
    answers: [
      { text: "\"number\"", correct: true },
      { text: "\"NaN\"", correct: false },
      { text: "\"undefined\"", correct: false },
      { text: "\"object\"", correct: false },
    ],
  },
  {
    question: "Which array method creates a new array with elements that pass a test?",
    answers: [
      { text: "filter()", correct: true },
      { text: "map()", correct: false },
      { text: "reduce()", correct: false },
      { text: "find()", correct: false },
    ],
  },
  {
    question: "What is the output of:\n\n```javascript\nconsole.log('5' == 5);\n```",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    answers: [
      { text: "function", correct: true },
      { text: "def", correct: false },
      { text: "func", correct: false },
      { text: "method", correct: false },
    ],
  },
  {
    question: "What will `console.log(typeof null)` output?",
    answers: [
      { text: "\"object\"", correct: true },
      { text: "\"null\"", correct: false },
      { text: "\"undefined\"", correct: false },
      { text: "\"boolean\"", correct: false },
    ],
  },
  {
    question: "Which array method executes a provided function once for each array element?",
    answers: [
      { text: "forEach()", correct: true },
      { text: "map()", correct: false },
      { text: "reduce()", correct: false },
      { text: "every()", correct: false },
    ],
  },
  {
    question: "What will be the result of:\n\n```javascript\nconsole.log(10 % 3);\n```",
    answers: [
      { text: "1", correct: true },
      { text: "3", correct: false },
      { text: "0", correct: false },
      { text: "NaN", correct: false },
    ],
  },
  {
    question: "Which statement creates a new object named `car`?",
    answers: [
      { text: "let car = {};", correct: true },
      { text: "let car = [];", correct: false },
      { text: "let car = ();", correct: false },
      { text: "object car;", correct: false },
    ],
  },
  {
    question: "What will `console.log(Boolean(' '))` output?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "null", correct: false },
    ],
  },
  {
    question: "Which operator is used to merge strings?",
    answers: [
      { text: "+", correct: true },
      { text: "&", correct: false },
      { text: "concat", correct: false },
      { text: "*", correct: false },
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