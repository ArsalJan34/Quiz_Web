    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
   
const questions = [
  {
    question: "What is the output of `print(len([1, 2, 3, 4]))`?",
    answers: [
      { text: "4", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which method adds an item to the end of a list?",
    answers: [
      { text: "append()", correct: true },
      { text: "add()", correct: false },
      { text: "insert()", correct: false },
      { text: "extend()", correct: false },
    ],
  },
  {
    question: "What is the output of `print('Hello'.upper())`?",
    answers: [
      { text: "HELLO", correct: true },
      { text: "hello", correct: false },
      { text: "Hello", correct: false },
      { text: "error", correct: false },
    ],
  },
  {
    question: "Which operator is used to check equality in Python?",
    answers: [
      { text: "==", correct: true },
      { text: "=", correct: false },
      { text: "!=", correct: false },
      { text: "<>", correct: false },
    ],
  },
  {
    question: "Which method removes the last item from a list?",
    answers: [
      { text: "pop()", correct: true },
      { text: "remove()", correct: false },
      { text: "delete()", correct: false },
      { text: "discard()", correct: false },
    ],
  },
  {
    question: "What is the output of `print(bool(0))`?",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
      { text: "0", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "How do you create a tuple in Python?",
    answers: [
      { text: "my_tuple = (1, 2, 3)", correct: true },
      { text: "my_tuple = [1, 2, 3]", correct: false },
      { text: "my_tuple = {1, 2, 3}", correct: false },
      { text: "my_tuple = <1, 2, 3>", correct: false },
    ],
  },
  {
    question: "What will `print(3 != 3)` output?",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
      { text: "3", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which keyword is used to return a value from a function?",
    answers: [
      { text: "return", correct: true },
      { text: "yield", correct: false },
      { text: "output", correct: false },
      { text: "break", correct: false },
    ],
  },
  {
    question: "Which method splits a string into a list of words?",
    answers: [
      { text: "split()", correct: true },
      { text: "divide()", correct: false },
      { text: "cut()", correct: false },
      { text: "partition()", correct: false },
    ],
  },
  {
    question: "What is the correct way to check if 'apple' is in a list `fruits`?",
    answers: [
      { text: "'apple' in fruits", correct: true },
      { text: "'apple' include fruits", correct: false },
      { text: "fruits.has('apple')", correct: false },
      { text: "fruits.contains('apple')", correct: false },
    ],
  },
  {
    question: "Which of these is an immutable data type in Python?",
    answers: [
      { text: "tuple", correct: true },
      { text: "list", correct: false },
      { text: "dictionary", correct: false },
      { text: "set", correct: false },
    ],
  },
  {
    question: "What is the output of `print(5 // 2)`?",
    answers: [
      { text: "2", correct: true },
      { text: "2.5", correct: false },
      { text: "3", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define an anonymous function?",
    answers: [
      { text: "lambda", correct: true },
      { text: "def", correct: false },
      { text: "func", correct: false },
      { text: "anonymous", correct: false },
    ],
  },
  {
    question: "What is the output of `print('Python'.replace('P', 'J'))`?",
    answers: [
      { text: "Jython", correct: true },
      { text: "Python", correct: false },
      { text: "ython", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which of these is the correct way to inherit a class?",
    answers: [
      { text: "class Child(Parent):", correct: true },
      { text: "class Child inherits Parent:", correct: false },
      { text: "class Child -> Parent:", correct: false },
      { text: "class Child : Parent", correct: false },
    ],
  },
  {
    question: "How do you add multiple elements to a list at once?",
    answers: [
      { text: "extend()", correct: true },
      { text: "append()", correct: false },
      { text: "add()", correct: false },
      { text: "insert()", correct: false },
    ],
  },
  {
    question: "What does the `strip()` method do in Python?",
    answers: [
      { text: "Removes whitespace from the beginning and end of a string", correct: true },
      { text: "Removes all spaces inside a string", correct: false },
      { text: "Removes punctuation from a string", correct: false },
      { text: "Deletes the string", correct: false },
    ],
  },
  {
    question: "Which of these functions returns the largest number?",
    answers: [
      { text: "max()", correct: true },
      { text: "largest()", correct: false },
      { text: "top()", correct: false },
      { text: "high()", correct: false },
    ],
  },
  {
    question: "What is the output of `print(bool(''))`?",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
      { text: "''", correct: false },
      { text: "0", correct: false },
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