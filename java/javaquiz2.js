    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
const javaQuestionsLevel2 = [
  {
    question: "Which keyword is used for conditional branching in Java?",
    answers: [
      { text: "if", correct: true },
      { text: "when", correct: false },
      { text: "switch", correct: false },
      { text: "case", correct: false },
    ],
  },
  {
    question: "Which of these loops executes at least once regardless of the condition?",
    answers: [
      { text: "do-while", correct: true },
      { text: "while", correct: false },
      { text: "for", correct: false },
      { text: "foreach", correct: false },
    ],
  },
  {
    question: "What is the correct syntax for a for loop in Java?",
    answers: [
      { text: "for(initialization; condition; update)", correct: true },
      { text: "for(condition; update; initialization)", correct: false },
      { text: "loop(condition)", correct: false },
      { text: "for variable in range", correct: false },
    ],
  },
  {
    question: "Which operator is used to compare two values in Java?",
    answers: [
      { text: "==", correct: true },
      { text: "=", correct: false },
      { text: "===", correct: false },
      { text: "equals", correct: false },
    ],
  },
  {
    question: "Which of these operators is used for logical AND?",
    answers: [
      { text: "&&", correct: true },
      { text: "&", correct: false },
      { text: "and", correct: false },
      { text: "||", correct: false },
    ],
  },
  {
    question: "Which statement is used to stop the loop prematurely?",
    answers: [
      { text: "break", correct: true },
      { text: "exit", correct: false },
      { text: "stop", correct: false },
      { text: "return", correct: false },
    ],
  },
  {
    question: "Which statement is used to skip the current iteration of a loop?",
    answers: [
      { text: "continue", correct: true },
      { text: "skip", correct: false },
      { text: "next", correct: false },
      { text: "break", correct: false },
    ],
  },
  {
    question: "Which data type is used to represent characters in Java?",
    answers: [
      { text: "char", correct: true },
      { text: "string", correct: false },
      { text: "character", correct: false },
      { text: "text", correct: false },
    ],
  },
  {
    question: "Which of these is not a valid access modifier in Java?",
    answers: [
      { text: "protected", correct: false },
      { text: "internal", correct: true },
      { text: "public", correct: false },
      { text: "private", correct: false },
    ],
  },
  {
    question: "Which of the following is a ternary operator?",
    answers: [
      { text: "?:", correct: true },
      { text: "++", correct: false },
      { text: "--", correct: false },
      { text: "**", correct: false },
    ],
  },
  {
    question: "What is the output of 10 % 3 in Java?",
    answers: [
      { text: "1", correct: true },
      { text: "3", correct: false },
      { text: "0", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "What is the default value of a boolean variable in Java?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "0", correct: false },
      { text: "null", correct: false },
    ],
  },
  {
    question: "Which loop is best used when the number of iterations is known?",
    answers: [
      { text: "for", correct: true },
      { text: "while", correct: false },
      { text: "do-while", correct: false },
      { text: "recursive", correct: false },
    ],
  },
  {
    question: "What is the output of System.out.println(5 + 2 * 3)?",
    answers: [
      { text: "11", correct: true },
      { text: "21", correct: false },
      { text: "17", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "Which statement defines an array correctly?",
    answers: [
      { text: "int[] numbers = new int[5];", correct: true },
      { text: "int numbers[] = (5);", correct: false },
      { text: "int numbers = [5];", correct: false },
      { text: "array numbers = new int(5);", correct: false },
    ],
  },
  {
    question: "Which method returns the length of an array?",
    answers: [
      { text: "array.length", correct: true },
      { text: "array.size()", correct: false },
      { text: "array.length()", correct: false },
      { text: "array.count()", correct: false },
    ],
  },
  {
    question: "Which operator is used to perform logical OR in Java?",
    answers: [
      { text: "||", correct: true },
      { text: "or", correct: false },
      { text: "|", correct: false },
      { text: "&", correct: false },
    ],
  },
  {
    question: "What does '==' do when used with primitive types?",
    answers: [
      { text: "Compares their values", correct: true },
      { text: "Compares their memory addresses", correct: false },
      { text: "Compares their type", correct: false },
      { text: "Converts them to strings", correct: false },
    ],
  },
  {
    question: "Which keyword is used to execute different code based on multiple conditions?",
    answers: [
      { text: "switch", correct: true },
      { text: "case", correct: false },
      { text: "choose", correct: false },
      { text: "ifelse", correct: false },
    ],
  },
  {
    question: "Which symbol is used to concatenate strings in Java?",
    answers: [
      { text: "+", correct: true },
      { text: "&", correct: false },
      { text: "concat", correct: false },
      { text: "&&", correct: false },
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
