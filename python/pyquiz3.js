    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
   
const questions = [
  {
    question: "What is the output of `print(list(range(2, 10, 2)))`?",
    answers: [
      { text: "[2, 4, 6, 8]", correct: true },
      { text: "[2, 3, 4, 5, 6, 7, 8, 9, 10]", correct: false },
      { text: "[2, 4, 6, 8, 10]", correct: false },
      { text: "[0, 2, 4, 6, 8]", correct: false },
    ],
  },
  {
    question: "Which method is used to remove a key from a dictionary?",
    answers: [
      { text: "pop()", correct: true },
      { text: "delete()", correct: false },
      { text: "remove()", correct: false },
      { text: "discard()", correct: false },
    ],
  },
  {
    question: "What will `print('Python'[-1])` output?",
    answers: [
      { text: "n", correct: true },
      { text: "P", correct: false },
      { text: "o", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which method is used to add an element to a set?",
    answers: [
      { text: "add()", correct: true },
      { text: "append()", correct: false },
      { text: "insert()", correct: false },
      { text: "extend()", correct: false },
    ],
  },
  {
    question: "What is the output of `print(5 ** 3)`?",
    answers: [
      { text: "125", correct: true },
      { text: "15", correct: false },
      { text: "8", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which of these is used to create an empty set?",
    answers: [
      { text: "set()", correct: true },
      { text: "{}", correct: false },
      { text: "[]", correct: false },
      { text: "()", correct: false },
    ],
  },
  {
    question: "What will `print('Python'[::-1])` output?",
    answers: [
      { text: "nohtyP", correct: true },
      { text: "Python", correct: false },
      { text: "Pnohty", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which keyword is used to check membership in a sequence?",
    answers: [
      { text: "in", correct: true },
      { text: "contains", correct: false },
      { text: "has", correct: false },
      { text: "exists", correct: false },
    ],
  },
  {
    question: "How do you create a nested list in Python?",
    answers: [
      { text: "my_list = [[1, 2], [3, 4]]", correct: true },
      { text: "my_list = [1, 2, 3, 4]", correct: false },
      { text: "my_list = { [1, 2], [3, 4] }", correct: false },
      { text: "my_list = ( [1, 2], [3, 4] )", correct: false },
    ],
  },
  {
    question: "What is the output of `print(list('abc'))`?",
    answers: [
      { text: "['a', 'b', 'c']", correct: true },
      { text: "['abc']", correct: false },
      { text: "['a b c']", correct: false },
      { text: "['a','b','c','']", correct: false },
    ],
  },
  {
    question: "Which statement correctly creates a class in Python?",
    answers: [
      { text: "class MyClass:", correct: true },
      { text: "class MyClass()", correct: false },
      { text: "class MyClass[]:", correct: false },
      { text: "class MyClass{}", correct: false },
    ],
  },
  {
    question: "What will be printed by `for i in range(3): print(i)`?",
    answers: [
      { text: "0\n1\n2", correct: true },
      { text: "1\n2\n3", correct: false },
      { text: "0\n1\n2\n3", correct: false },
      { text: "1\n2", correct: false },
    ],
  },
  {
    question: "How can you merge two dictionaries `a` and `b` in Python 3.9+?",
    answers: [
      { text: "c = a | b", correct: true },
      { text: "c = a + b", correct: false },
      { text: "c = merge(a, b)", correct: false },
      { text: "c = a.update(b)", correct: false },
    ],
  },
  {
    question: "Which built-in function returns the smallest item from a list?",
    answers: [
      { text: "min()", correct: true },
      { text: "least()", correct: false },
      { text: "small()", correct: false },
      { text: "lower()", correct: false },
    ],
  },
  {
    question: "What is the output of `print(list(range(1, 5)))`?",
    answers: [
      { text: "[1, 2, 3, 4]", correct: true },
      { text: "[1, 2, 3, 4, 5]", correct: false },
      { text: "[0, 1, 2, 3, 4]", correct: false },
      { text: "[2, 3, 4, 5]", correct: false },
    ],
  },
  {
    question: "Which of these is a mutable data type in Python?",
    answers: [
      { text: "list", correct: true },
      { text: "tuple", correct: false },
      { text: "str", correct: false },
      { text: "frozenset", correct: false },
    ],
  },
  {
    question: "What is the correct way to call a method of an object `obj`?",
    answers: [
      { text: "obj.method()", correct: true },
      { text: "method.obj()", correct: false },
      { text: "call obj.method()", correct: false },
      { text: "obj->method()", correct: false },
    ],
  },
  {
    question: "Which keyword is used to handle exceptions along with `except`?",
    answers: [
      { text: "try", correct: true },
      { text: "catch", correct: false },
      { text: "finally", correct: false },
      { text: "error", correct: false },
    ],
  },
  {
    question: "What will `print({1, 2, 3} & {2, 3, 4})` output?",
    answers: [
      { text: "{2, 3}", correct: true },
      { text: "{1, 2, 3, 4}", correct: false },
      { text: "{1, 4}", correct: false },
      { text: "{2, 3, 4}", correct: false },
    ],
  },
  {
  question: "What will `print([x**2 for x in range(4)])` output?",
  answers: [
    { text: "[0, 1, 4, 9]", correct: true },
    { text: "[1, 4, 9, 16]", correct: false },
    { text: "[0, 1, 2, 3]", correct: false },
    { text: "[0, 1, 8, 27]", correct: false },
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