    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
const javaQuestionsLevel1 = [
  {
    question: "What is the correct file extension for Java files?",
    answers: [
      { text: ".java", correct: true },
      { text: ".jav", correct: false },
      { text: ".class", correct: false },
      { text: ".jv", correct: false },
    ],
  },
  {
    question: "Which method is the entry point of every Java program?",
    answers: [
      { text: "public static void main(String[] args)", correct: true },
      { text: "start()", correct: false },
      { text: "run()", correct: false },
      { text: "main()", correct: false },
    ],
  },
  {
    question: "Who developed Java Programming Language?",
    answers: [
      { text: "James Gosling", correct: true },
      { text: "Guido van Rossum", correct: false },
      { text: "Bjarne Stroustrup", correct: false },
      { text: "Dennis Ritchie", correct: false },
    ],
  },
  {
    question: "Java is a ____ language.",
    answers: [
      { text: "High-level", correct: true },
      { text: "Low-level", correct: false },
      { text: "Assembly", correct: false },
      { text: "Machine", correct: false },
    ],
  },
  {
    question: "Which of the following is used to print text in Java?",
    answers: [
      { text: "System.out.println()", correct: true },
      { text: "print()", correct: false },
      { text: "echo()", correct: false },
      { text: "printf()", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid identifier in Java?",
    answers: [
      { text: "_value", correct: true },
      { text: "1value", correct: false },
      { text: "value-name", correct: false },
      { text: "value name", correct: false },
    ],
  },
  {
    question: "Which of these is a primitive data type in Java?",
    answers: [
      { text: "int", correct: true },
      { text: "Integer", correct: false },
      { text: "String", correct: false },
      { text: "Object", correct: false },
    ],
  },
  {
    question: "What is used to compile Java code?",
    answers: [
      { text: "javac", correct: true },
      { text: "java", correct: false },
      { text: "jvm", correct: false },
      { text: "jre", correct: false },
    ],
  },
  {
    question: "Which component converts bytecode to machine code?",
    answers: [
      { text: "JVM", correct: true },
      { text: "JRE", correct: false },
      { text: "JDK", correct: false },
      { text: "Compiler", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a variable in Java?",
    answers: [
      { text: "No keyword needed", correct: true },
      { text: "var", correct: false },
      { text: "dim", correct: false },
      { text: "let", correct: false },
    ],
  },
  {
    question: "What symbol is used to end a statement in Java?",
    answers: [
      { text: ";", correct: true },
      { text: ":", correct: false },
      { text: ".", correct: false },
      { text: "/", correct: false },
    ],
  },
  {
    question: "Which of these is not a Java keyword?",
    answers: [
      { text: "include", correct: true },
      { text: "static", correct: false },
      { text: "class", correct: false },
      { text: "if", correct: false },
    ],
  },
  {
    question: "What does JVM stand for?",
    answers: [
      { text: "Java Virtual Machine", correct: true },
      { text: "Java Visual Machine", correct: false },
      { text: "Java Version Manager", correct: false },
      { text: "Java Variable Module", correct: false },
    ],
  },
  {
    question: "Which function reads input from the user in Java?",
    answers: [
      { text: "Scanner.next()", correct: true },
      { text: "input()", correct: false },
      { text: "read()", correct: false },
      { text: "gets()", correct: false },
    ],
  },
  {
    question: "Which of these is a valid comment in Java?",
    answers: [
      { text: "// This is a comment", correct: true },
      { text: "# This is a comment", correct: false },
      { text: "<!-- comment -->", correct: false },
      { text: "/* comment */", correct: false },
    ],
  },
  {
    question: "Which keyword is used to create a class in Java?",
    answers: [
      { text: "class", correct: true },
      { text: "define", correct: false },
      { text: "object", correct: false },
      { text: "new", correct: false },
    ],
  },
  {
    question: "Which of the following is used to store true/false values?",
    answers: [
      { text: "boolean", correct: true },
      { text: "int", correct: false },
      { text: "byte", correct: false },
      { text: "char", correct: false },
    ],
  },
  {
    question: "Which operator is used for assignment in Java?",
    answers: [
      { text: "=", correct: true },
      { text: "==", correct: false },
      { text: "=>", correct: false },
      { text: ":", correct: false },
    ],
  },
  {
    question: "Which of these can be used to store multiple values of same type?",
    answers: [
      { text: "Array", correct: true },
      { text: "Class", correct: false },
      { text: "Package", correct: false },
      { text: "Variable", correct: false },
    ],
  },
  {
    question: "What is the output type of System.out.println()?",
    answers: [
      { text: "Displays text to console", correct: true },
      { text: "Reads input", correct: false },
      { text: "Stores data", correct: false },
      { text: "Creates file", correct: false },
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
