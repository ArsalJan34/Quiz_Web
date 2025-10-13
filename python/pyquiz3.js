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