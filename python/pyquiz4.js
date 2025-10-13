    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
   
const questions = [
  {
    question: "What will be the output of: `print({1, 2, 3} & {3, 4, 5})`?",
    answers: [
      { text: "{3}", correct: true },
      { text: "{1, 2}", correct: false },
      { text: "{1, 2, 3, 4, 5}", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    question: "Which method is automatically called when an object is initialized?",
    answers: [
      { text: "__init__()", correct: true },
      { text: "__start__()", correct: false },
      { text: "__create__()", correct: false },
      { text: "__new__()", correct: false },
    ],
  },
  {
    question: "What will `print(bool([]) or bool('False'))` return?",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      { text: "None", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which decorator is used to define a method that belongs to the class but not the instance?",
    answers: [
      { text: "@classmethod", correct: true },
      { text: "@staticmethod", correct: false },
      { text: "@property", correct: false },
      { text: "@abstractmethod", correct: false },
    ],
  },
  {
    question: "What will be printed by: `print('Hello {0:.2f}'.format(3.14159))`?",
    answers: [
      { text: "Hello 3.14", correct: true },
      { text: "Hello 3.14159", correct: false },
      { text: "Hello 3.1", correct: false },
      { text: "Hello 3", correct: false },
    ],
  },
  {
    question: "Which of the following statements about generators is TRUE?",
    answers: [
      { text: "They yield values one at a time using the `yield` keyword.", correct: true },
      { text: "They store all values in memory.", correct: false },
      { text: "They are slower than lists.", correct: false },
      { text: "They can’t be iterated over.", correct: false },
    ],
  },
  {
    question: "What is the output of `print(type(lambda x: x))`?",
    answers: [
      { text: "<class 'function'>", correct: true },
      { text: "<class 'lambda'>", correct: false },
      { text: "<class 'method'>", correct: false },
      { text: "<class 'object'>", correct: false },
    ],
  },
  {
    question: "Which module is used for working with JSON data in Python?",
    answers: [
      { text: "json", correct: true },
      { text: "pickle", correct: false },
      { text: "csv", correct: false },
      { text: "marshal", correct: false },
    ],
  },
  {
    question: "What will be the result of: `print('a' * 3 + 'b' * 2)`?",
    answers: [
      { text: "aaabb", correct: true },
      { text: "ab", correct: false },
      { text: "aabb", correct: false },
      { text: "aaab", correct: false },
    ],
  },
  {
    question: "Which of these statements correctly creates a dictionary?",
    answers: [
      { text: "d = {'a': 1, 'b': 2}", correct: true },
      { text: "d = {'a', 1, 'b', 2}", correct: false },
      { text: "d = ['a':1, 'b':2]", correct: false },
      { text: "d = dict['a'=1, 'b'=2]", correct: false },
    ],
  },
  {
    question: "What is the output of `print((lambda x: x+1)(5))`?",
    answers: [
      { text: "6", correct: true },
      { text: "5", correct: false },
      { text: "x+1", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define an anonymous block of code in Python?",
    answers: [
      { text: "lambda", correct: true },
      { text: "def", correct: false },
      { text: "func", correct: false },
      { text: "block", correct: false },
    ],
  },
  {
    question: "What will `print(sum(i for i in range(4)))` output?",
    answers: [
      { text: "6", correct: true },
      { text: "10", correct: false },
      { text: "4", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "Which built-in function can be used to get the ASCII value of a character?",
    answers: [
      { text: "ord()", correct: true },
      { text: "chr()", correct: false },
      { text: "ascii()", correct: false },
      { text: "repr()", correct: false },
    ],
  },
  {
    question: "What will `print(3 < 3.0)` return?",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
      { text: "Error", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    question: "Which Python feature allows functions to take other functions as arguments?",
    answers: [
      { text: "First-class functions", correct: true },
      { text: "Generators", correct: false },
      { text: "Closures", correct: false },
      { text: "Decorators", correct: false },
    ],
  },
  {
    question: "What is the output of `print({x: x**2 for x in range(3)})`?",
    answers: [
      { text: "{0: 0, 1: 1, 2: 4}", correct: true },
      { text: "{1: 1, 2: 4, 3: 9}", correct: false },
      { text: "[0, 1, 4]", correct: false },
      { text: "{0, 1, 2, 4}", correct: false },
    ],
  },
  {
    question: "Which of these functions converts a string to a list of words by whitespace?",
    answers: [
      { text: "split()", correct: true },
      { text: "strip()", correct: false },
      { text: "replace()", correct: false },
      { text: "partition()", correct: false },
    ],
  },
  {
    question: "What does the expression `a, b = b, a` do in Python?",
    answers: [
      { text: "Swaps the values of a and b", correct: true },
      { text: "Deletes both variables", correct: false },
      { text: "Creates a tuple", correct: false },
      { text: "Throws an error", correct: false },
    ],
  },
  {
    question: "What will `print([i for i in range(5) if i % 2 == 0])` output?",
    answers: [
      { text: "[0, 2, 4]", correct: true },
      { text: "[1, 3, 5]", correct: false },
      { text: "[2, 4]", correct: false },
      { text: "[0, 1, 2, 3, 4]", correct: false },
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