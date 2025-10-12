const questions = [
  {
    question: "What is the correct file extension for Python files?",
    answers: [
      { text: ".py", correct: true },
      { text: ".python", correct: false },
      { text: ".pt", correct: false },
      { text: ".pyt", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a function in Python?",
    answers: [
      { text: "function", correct: false },
      { text: "def", correct: true },
      { text: "func", correct: false },
      { text: "define", correct: false },
    ],
  },
  {
    question: "How do you insert COMMENTS in Python code?",
    answers: [
      { text: "//", correct: false },
      { text: "#", correct: true },
      { text: "/* */", correct: false },
      { text: "<!-- -->", correct: false },
    ],
  },
  {
    question: "Which of the following is used to output data in Python?",
    answers: [
      { text: "echo()", correct: false },
      { text: "console.log()", correct: false },
      { text: "print()", correct: true },
      { text: "printf()", correct: false },
    ],
  },
  {
    question: "Which data type is immutable in Python?",
    answers: [
      { text: "List", correct: false },
      { text: "Dictionary", correct: false },
      { text: "Tuple", correct: true },
      { text: "Set", correct: false },
    ],
  },
  {
    question: "What is the output of: type(5)?",
    answers: [
      { text: "float", correct: false },
      { text: "int", correct: true },
      { text: "str", correct: false },
      { text: "bool", correct: false },
    ],
  },
  {
    question: "Which keyword is used to create a class in Python?",
    answers: [
      { text: "object", correct: false },
      { text: "class", correct: true },
      { text: "struct", correct: false },
      { text: "define", correct: false },
    ],
  },
  {
    question: "What will be the output of: print(2 ** 3)?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid variable name in Python?",
    answers: [
      { text: "2value", correct: false },
      { text: "_value", correct: true },
      { text: "value-2", correct: false },
      { text: "value 2", correct: false },
    ],
  },
  {
    question: "What does the len() function do in Python?",
    answers: [
      { text: "Returns the number of elements in an object", correct: true },
      { text: "Converts string to lowercase", correct: false },
      { text: "Returns data type", correct: false },
      { text: "Deletes an element", correct: false },
    ],
  },
];

// Quiz Logic
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ": " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer-btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.style.background = "#00ffb0";
    selectedBtn.style.color = "#000";
    score++;
  } else {
    selectedBtn.style.background = "#fe2424ff";
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.style.background = "#00ffb0";
      button.style.color = "#000";
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `🎉 You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
