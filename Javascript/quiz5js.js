    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
const questions = [
  {
    question: "What is the prototype of an array in JavaScript?",
    answers: [
      { text: "Array.prototype", correct: true },
      { text: "Object.prototype", correct: false },
      { text: "Function.prototype", correct: false },
      { text: "null", correct: false },
    ],
  },
  {
    question: "What is the output of the following code?\n\nconsole.log(Object.getPrototypeOf([]) === Array.prototype);",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "TypeError", correct: false },
    ],
  },
  {
    question: "Which of the following best describes the 'prototype chain'?",
    answers: [
      { text: "A mechanism by which objects inherit properties from other objects.", correct: true },
      { text: "A list of all functions defined in a script.", correct: false },
      { text: "A sequence of constructor calls.", correct: false },
      { text: "A method to link arrays and functions.", correct: false },
    ],
  },
  {
    question: "What happens if you call a class constructor without 'new'?",
    answers: [
      { text: "It throws a TypeError.", correct: true },
      { text: "It returns undefined.", correct: false },
      { text: "It automatically uses 'new'.", correct: false },
      { text: "It binds 'this' to the global object.", correct: false },
    ],
  },
  {
    question: "Which built-in method can you use to create an object with no prototype?",
    answers: [
      { text: "Object.create(null)", correct: true },
      { text: "Object.freeze()", correct: false },
      { text: "Object.assign()", correct: false },
      { text: "Object.prototype()", correct: false },
    ],
  },
  {
    question: "What is the output of this code?\n\nconsole.log(typeof new Function());",
    answers: [
      { text: "function", correct: true },
      { text: "object", correct: false },
      { text: "undefined", correct: false },
      { text: "constructor", correct: false },
    ],
  },
  {
    question: "Which of these is TRUE about JavaScript memory management?",
    answers: [
      { text: "It uses automatic garbage collection based on reachability.", correct: true },
      { text: "It requires manual memory deallocation.", correct: false },
      { text: "It uses reference counting only.", correct: false },
      { text: "It collects memory only at program termination.", correct: false },
    ],
  },
  {
    question: "What is the difference between microtasks and macrotasks?",
    answers: [
      { text: "Microtasks (Promises) run before macrotasks (setTimeout).", correct: true },
      { text: "Macrotasks always run first.", correct: false },
      { text: "They are executed randomly by the event loop.", correct: false },
      { text: "Microtasks are synchronous.", correct: false },
    ],
  },
  {
    question: "What is the output of the following?\n\nPromise.resolve().then(() => console.log('A'));\nconsole.log('B');",
    answers: [
      { text: "B then A", correct: true },
      { text: "A then B", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What will the following code print?\n\n(async () => {\n  console.log(await Promise.resolve('X'));\n})();",
    answers: [
      { text: "X", correct: true },
      { text: "Promise { 'X' }", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What is the internal slot [[Prototype]] used for?",
    answers: [
      { text: "Linking an object to its prototype for inheritance.", correct: true },
      { text: "Storing constructor parameters.", correct: false },
      { text: "Referencing private variables.", correct: false },
      { text: "Defining scope chains.", correct: false },
    ],
  },
  {
    question: "What is the output of this code?\n\nlet x = { a: 1 };\nlet y = x;\ny.a = 2;\nconsole.log(x.a);",
    answers: [
      { text: "2", correct: true },
      { text: "1", correct: false },
      { text: "undefined", correct: false },
      { text: "NaN", correct: false },
    ],
  },
  {
    question: "What happens when you use `delete` on a variable declared with `var`?",
    answers: [
      { text: "It does nothing (variable remains).", correct: true },
      { text: "It removes the variable.", correct: false },
      { text: "It throws an error.", correct: false },
      { text: "It converts it to undefined.", correct: false },
    ],
  },
  {
    question: "Which of these statements about WeakMap is TRUE?",
    answers: [
      { text: "Keys must be objects and are held weakly.", correct: true },
      { text: "Keys can be strings or numbers.", correct: false },
      { text: "It allows key enumeration.", correct: false },
      { text: "It prevents garbage collection.", correct: false },
    ],
  },
  {
    question: "What will the following code print?\n\nlet obj = { a: 10 };\nObject.freeze(obj);\nobj.a = 20;\nconsole.log(obj.a);",
    answers: [
      { text: "10", correct: true },
      { text: "20", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which of the following describes the 'Temporal Dead Zone'?",
    answers: [
      { text: "The time between variable creation and initialization with let/const.", correct: true },
      { text: "The time before a function executes.", correct: false },
      { text: "The delay before garbage collection.", correct: false },
      { text: "A deprecated feature in ES5.", correct: false },
    ],
  },
  {
    question: "What does the `Reflect` API in JavaScript provide?",
    answers: [
      { text: "A set of static methods for interceptable object operations.", correct: true },
      { text: "Reflection of DOM elements.", correct: false },
      { text: "Real-time debugging tools.", correct: false },
      { text: "Type checking and validation.", correct: false },
    ],
  },
  {
    question: "What will this code output?\n\nconsole.log(Object.is(+0, -0));",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which of the following cannot be used as a property key in a normal JavaScript object?",
    answers: [
      { text: "An object", correct: true },
      { text: "A string", correct: false },
      { text: "A number", correct: false },
      { text: "A symbol", correct: false },
    ],
  },
  {
    question: "What is the main purpose of the event delegation pattern in JavaScript?",
    answers: [
      { text: "To handle events efficiently by using a common ancestor element.", correct: true },
      { text: "To prevent event propagation.", correct: false },
      { text: "To delay event handling until DOM is loaded.", correct: false },
      { text: "To assign events individually to each child element.", correct: false },
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
