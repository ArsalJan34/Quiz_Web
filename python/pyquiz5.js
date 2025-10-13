    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
   
const questions = [
  {
    question: "What will be printed by:\n\n```python\nx = [1, 2, 3]\ny = x\nx.append(4)\nprint(y)\n```",
    answers: [
      { text: "[1, 2, 3, 4]", correct: true },
      { text: "[1, 2, 3]", correct: false },
      { text: "None", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What will be the output of:\n\n```python\nprint((lambda x: [i*i for i in x if i%2])(range(5)))\n```",
    answers: [
      { text: "[1, 9]", correct: true },
      { text: "[0, 4, 16]", correct: false },
      { text: "[1, 3]", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which of these can be used to implement context management (used in `with` statements)?",
    answers: [
      { text: "__enter__() and __exit__()", correct: true },
      { text: "__init__() and __del__()", correct: false },
      { text: "__start__() and __stop__()", correct: false },
      { text: "__open__() and __close__()", correct: false },
    ],
  },
  {
    question: "What will `print(id([]) == id([]))` output?",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
      { text: "None", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What is true about Python’s Global Interpreter Lock (GIL)?",
    answers: [
      { text: "It allows only one thread to execute Python bytecode at a time.", correct: true },
      { text: "It speeds up multithreading.", correct: false },
      { text: "It disables multiprocessing.", correct: false },
      { text: "It prevents I/O operations.", correct: false },
    ],
  },
  {
    question: "What does the `@property` decorator do?",
    answers: [
      { text: "It makes a method behave like a read-only attribute.", correct: true },
      { text: "It converts a variable into a static method.", correct: false },
      { text: "It defines a private variable.", correct: false },
      { text: "It returns a class-level constant.", correct: false },
    ],
  },
  {
    question: "What will be the output of:\n\n```python\ndef func(a, b=[]):\n    b.append(a)\n    return b\n\nprint(func(1))\nprint(func(2))\n```",
    answers: [
      { text: "[1]\n[1, 2]", correct: true },
      { text: "[1]\n[2]", correct: false },
      { text: "Error", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    question: "What is the output of:\n\n```python\nx = 10\ndef outer():\n    x = 5\n    def inner():\n        nonlocal x\n        x += 1\n        return x\n    return inner()\nprint(outer())\n```",
    answers: [
      { text: "6", correct: true },
      { text: "11", correct: false },
      { text: "5", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which of these statements is TRUE about Python decorators?",
    answers: [
      { text: "They can modify or enhance the behavior of functions or methods.", correct: true },
      { text: "They can only be used on classes.", correct: false },
      { text: "They execute after the function is called.", correct: false },
      { text: "They can only be applied once.", correct: false },
    ],
  },
  {
    question: "What will `print((lambda x: (x, x**2)) (3))` output?",
    answers: [
      { text: "(3, 9)", correct: true },
      { text: "[3, 9]", correct: false },
      { text: "3, 9", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What happens when you use `is` to compare two identical strings created at runtime?",
    answers: [
      { text: "They may not have the same identity.", correct: true },
      { text: "They always have the same identity.", correct: false },
      { text: "They are automatically interned.", correct: false },
      { text: "They are compared by value only.", correct: false },
    ],
  },
  {
    question: "What will `print([i for i in range(5) if i in [1, 2, 3]][::-1])` output?",
    answers: [
      { text: "[3, 2, 1]", correct: true },
      { text: "[1, 2, 3]", correct: false },
      { text: "[2, 3, 4]", correct: false },
      { text: "[4, 3, 2]", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a valid way to copy a list?",
    answers: [
      { text: "b = a.copy()", correct: false },
      { text: "b = list(a)", correct: false },
      { text: "b = a[:]", correct: false },
      { text: "b = a", correct: true },
    ],
  },
  {
    question: "What will be printed by:\n\n```python\nfor i in range(3):\n    print(i)\nelse:\n    print('Done')\n```",
    answers: [
      { text: "0\n1\n2\nDone", correct: true },
      { text: "0\n1\n2", correct: false },
      { text: "Done", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What will `print(type((i for i in range(3))))` return?",
    answers: [
      { text: "<class 'generator'>", correct: true },
      { text: "<class 'list'>", correct: false },
      { text: "<class 'tuple'>", correct: false },
      { text: "<class 'range'>", correct: false },
    ],
  },
  {
    question: "What is the output of:\n\n```python\nprint({i: i*i for i in range(3)}.get(3, 'Not Found'))\n```",
    answers: [
      { text: "Not Found", correct: true },
      { text: "9", correct: false },
      { text: "None", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What will `print(all([]))` output?",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      { text: "None", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What will happen if you use `await` outside an async function?",
    answers: [
      { text: "A SyntaxError will occur.", correct: true },
      { text: "It will block the program.", correct: false },
      { text: "It will run normally.", correct: false },
      { text: "It will return None.", correct: false },
    ],
  },
  {
    question: "Which of these correctly defines a coroutine?",
    answers: [
      { text: "An async function that can be awaited.", correct: true },
      { text: "A regular function returning a generator.", correct: false },
      { text: "A function using yield.", correct: false },
      { text: "A synchronous function returning an int.", correct: false },
    ],
  },
  {
    question: "What will be the result of:\n\n```python\nx = (1, 2, 3)\ny = (1, 2, 3)\nprint(x is y)\n```",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
      { text: "Error", correct: false },
      { text: "None", correct: false },
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