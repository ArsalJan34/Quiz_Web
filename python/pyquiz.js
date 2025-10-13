    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
   
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
      { text: "def", correct: true },
      { text: "function", correct: false },
      { text: "func", correct: false },
      { text: "define", correct: false },
    ],
  },
  {
    question: "How do you insert a comment in Python?",
    answers: [
      { text: "# This is a comment", correct: true },
      { text: "// This is a comment", correct: false },
      { text: "<!-- This is a comment -->", correct: false },
      { text: "/* This is a comment */", correct: false },
    ],
  },
  {
    question: "Which of these is a valid variable name in Python?",
    answers: [
      { text: "my_var", correct: true },
      { text: "2var", correct: false },
      { text: "my-var", correct: false },
      { text: "my var", correct: false },
    ],
  },
  {
    question: "What is the correct way to output 'Hello World' in Python?",
    answers: [
      { text: "print('Hello World')", correct: true },
      { text: "echo 'Hello World'", correct: false },
      { text: "printf('Hello World')", correct: false },
      { text: "console.log('Hello World')", correct: false },
    ],
  },
  {
    question: "Which of these is a Python data type?",
    answers: [
      { text: "int", correct: true },
      { text: "integer", correct: false },
      { text: "number", correct: false },
      { text: "digit", correct: false },
    ],
  },
  {
    question: "How do you create a list in Python?",
    answers: [
      { text: "my_list = [1, 2, 3]", correct: true },
      { text: "my_list = (1, 2, 3)", correct: false },
      { text: "my_list = {1, 2, 3}", correct: false },
      { text: "my_list = <1, 2, 3>", correct: false },
    ],
  },
  {
    question: "Which operator is used for exponentiation in Python?",
    answers: [
      { text: "**", correct: true },
      { text: "^", correct: false },
      { text: "%", correct: false },
      { text: "exp()", correct: false },
    ],
  },
  {
    question: "What will `len('Python')` return?",
    answers: [
      { text: "6", correct: true },
      { text: "5", correct: false },
      { text: "7", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which keyword is used to create a class in Python?",
    answers: [
      { text: "class", correct: true },
      { text: "Class", correct: false },
      { text: "def", correct: false },
      { text: "object", correct: false },
    ],
  },
  {
    question: "What is the correct syntax to create a dictionary in Python?",
    answers: [
      { text: "my_dict = {'key': 'value'}", correct: true },
      { text: "my_dict = ['key', 'value']", correct: false },
      { text: "my_dict = ('key': 'value')", correct: false },
      { text: "my_dict = {key, value}", correct: false },
    ],
  },
  {
    question: "How do you start a while loop in Python?",
    answers: [
      { text: "while condition:", correct: true },
      { text: "while (condition) {}", correct: false },
      { text: "loop while condition", correct: false },
      { text: "while condition {}", correct: false },
    ],
  },
  {
    question: "Which Python keyword is used for conditional statements?",
    answers: [
      { text: "if", correct: true },
      { text: "for", correct: false },
      { text: "loop", correct: false },
      { text: "switch", correct: false },
    ],
  },
  {
    question: "Which function converts a string to an integer in Python?",
    answers: [
      { text: "int()", correct: true },
      { text: "str()", correct: false },
      { text: "float()", correct: false },
      { text: "integer()", correct: false },
    ],
  },
  {
    question: "How do you check the type of a variable in Python?",
    answers: [
      { text: "type(variable)", correct: true },
      { text: "typeof(variable)", correct: false },
      { text: "checktype(variable)", correct: false },
      { text: "var.type()", correct: false },
    ],
  },
  {
    question: "Which of these is a Python boolean value?",
    answers: [
      { text: "True", correct: true },
      { text: "true", correct: false },
      { text: "TRUE", correct: false },
      { text: "yes", correct: false },
    ],
  },
  {
    question: "Which of these keywords is used to handle exceptions?",
    answers: [
      { text: "try", correct: true },
      { text: "catch", correct: false },
      { text: "except()", correct: false },
      { text: "error", correct: false },
    ],
  },
  {
    question: "Which symbol is used for floor division in Python?",
    answers: [
      { text: "//", correct: true },
      { text: "/", correct: false },
      { text: "%", correct: false },
      { text: "div", correct: false },
    ],
  },
  {
    question: "Which keyword is used to import modules in Python?",
    answers: [
      { text: "import", correct: true },
      { text: "include", correct: false },
      { text: "using", correct: false },
      { text: "require", correct: false },
    ],
  },
  {
    question: "What is the output of `print(2 * 3 ** 2)`?",
    answers: [
      { text: "18", correct: true },
      { text: "36", correct: false },
      { text: "12", correct: false },
      { text: "9", correct: false },
    ],
  },
];


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
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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
        selectedBtn.style.background = "#ff4c4c";
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