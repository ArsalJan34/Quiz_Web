    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
const questions = [
  {
    question: "What will be the output of the following code?\n\nconsole.log(typeof NaN);",
    answers: [
      { text: "number", correct: true },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    answers: [
      { text: "Object", correct: true },
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Number", correct: false },
    ],
  },
  {
    question: "What is the result of `[] + []` in JavaScript?",
    answers: [
      { text: '"" (empty string)', correct: true },
      { text: "undefined", correct: false },
      { text: "0", correct: false },
      { text: "null", correct: false },
    ],
  },
  {
    question: "Which method is used to define getters and setters in JavaScript objects?",
    answers: [
      { text: "Object.defineProperty()", correct: true },
      { text: "Object.assign()", correct: false },
      { text: "Object.create()", correct: false },
      { text: "Object.setPrototypeOf()", correct: false },
    ],
  },
  {
    question: "What is the output of the following?\n\nconsole.log(0.1 + 0.2 === 0.3);",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "undefined", correct: false },
      { text: "TypeError", correct: false },
    ],
  },
  {
    question: "Which of the following statements about closures is TRUE?",
    answers: [
      { text: "They allow inner functions to access outer function variables even after the outer function returns.", correct: true },
      { text: "They prevent variable access between functions.", correct: false },
      { text: "They are used only with classes.", correct: false },
      { text: "They work only in strict mode.", correct: false },
    ],
  },
  {
    question: "What will the following code print?\n\nconsole.log([] == ![]);",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "TypeError", correct: false },
    ],
  },
  {
    question: "Which statement about 'this' keyword in arrow functions is correct?",
    answers: [
      { text: "It refers to the surrounding lexical scope.", correct: true },
      { text: "It always refers to the global object.", correct: false },
      { text: "It is redefined when called as a method.", correct: false },
      { text: "It must be bound explicitly using bind().", correct: false },
    ],
  },
  {
    question: "Which of the following is TRUE about 'async/await' in JavaScript?",
    answers: [
      { text: "It is syntactic sugar over Promises.", correct: true },
      { text: "It blocks the main thread.", correct: false },
      { text: "It replaces the need for Promises entirely.", correct: false },
      { text: "It cannot be used with try...catch.", correct: false },
    ],
  },
  {
    question: "What does the 'new' keyword do in JavaScript?",
    answers: [
      { text: "Creates a new object linked to the constructor's prototype.", correct: true },
      { text: "Creates a global variable.", correct: false },
      { text: "Invokes the function in strict mode.", correct: false },
      { text: "Binds the function to the window object.", correct: false },
    ],
  },
  {
    question: "Which method can be used to freeze an object to prevent modification?",
    answers: [
      { text: "Object.freeze()", correct: true },
      { text: "Object.lock()", correct: false },
      { text: "Object.seal()", correct: false },
      { text: "Object.preventChange()", correct: false },
    ],
  },
  {
    question: "What is the output of the following?\n\nconsole.log(typeof null);",
    answers: [
      { text: "object", correct: true },
      { text: "null", correct: false },
      { text: "undefined", correct: false },
      { text: "NaN", correct: false },
    ],
  },
  {
    question: "Which operator is used to spread elements of an array or object?",
    answers: [
      { text: "... (spread operator)", correct: true },
      { text: "=>", correct: false },
      { text: "&", correct: false },
      { text: "::", correct: false },
    ],
  },
  {
    question: "What does the `bind()` method do in JavaScript?",
    answers: [
      { text: "Creates a new function with a specific 'this' context.", correct: true },
      { text: "Immediately invokes a function with a new context.", correct: false },
      { text: "Copies properties from one object to another.", correct: false },
      { text: "Prevents context change for methods.", correct: false },
    ],
  },
  {
    question: "Which JavaScript feature allows destructuring arrays or objects into variables?",
    answers: [
      { text: "Destructuring assignment", correct: true },
      { text: "Tuple unpacking", correct: false },
      { text: "Dynamic binding", correct: false },
      { text: "Pattern mapping", correct: false },
    ],
  },
  {
    question: "What is the result of `'5' - 3` in JavaScript?",
    answers: [
      { text: "2", correct: true },
      { text: "'53'", correct: false },
      { text: "NaN", correct: false },
      { text: "'2'", correct: false },
    ],
  },
  {
    question: "What is the output of this code?\n\nconsole.log([1, 2, 3] + [4, 5, 6]);",
    answers: [
      { text: '"1,2,34,5,6"', correct: true },
      { text: "[1,2,3,4,5,6]", correct: false },
      { text: "NaN", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which statement correctly describes JavaScript's event loop?",
    answers: [
      { text: "It handles asynchronous operations by pushing callbacks to the task queue.", correct: true },
      { text: "It executes all async tasks in parallel.", correct: false },
      { text: "It stops execution until async tasks complete.", correct: false },
      { text: "It executes promises before synchronous code.", correct: false },
    ],
  },
  {
    question: "Which of these functions returns a Promise?",
    answers: [
      { text: "fetch()", correct: true },
      { text: "JSON.parse()", correct: false },
      { text: "setTimeout()", correct: false },
      { text: "eval()", correct: false },
    ],
  },
  {
    question: "What will `Object.is(NaN, NaN)` return?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "TypeError", correct: false },
    ],
  },
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
