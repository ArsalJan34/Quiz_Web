
    const questions = [
      {
        question: "What does HTML stand for?",
        answers: [
          { text: "Hyper Text Markup Language", correct: true },
          { text: "Highlevel Text Machine Language", correct: false },
          { text: "Hyperlink Text Making Language", correct: false },
          { text: "Home Tool Markup Language", correct: false },
        ],
      },
      {
        question: "Which HTML tag is used to include JavaScript?",
        answers: [
          { text: "<js>", correct: false },
          { text: "<javascript>", correct: false },
          { text: "<script>", correct: true },
          { text: "<code>", correct: false },
        ],
      },
      {
        question: "Which company developed JavaScript?",
        answers: [
          { text: "Microsoft", correct: false },
          { text: "Netscape", correct: true },
          { text: "Google", correct: false },
          { text: "Sun Microsystems", correct: false },
        ],
      },
      {
        question: "Inside which HTML element do we put the CSS?",
        answers: [
          { text: "<style>", correct: true },
          { text: "<css>", correct: false },
          { text: "<script>", correct: false },
          { text: "<design>", correct: false },
        ],
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
          { text: "//", correct: true },
          { text: "/* */", correct: false },
          { text: "#", correct: false },
          { text: "<!-- -->", correct: false },
        ],
      },
      {
        question: "How do you declare a variable in JavaScript?",
        answers: [
          { text: "variable x;", correct: false },
          { text: "v x;", correct: false },
          { text: "var x;", correct: true },
          { text: "dim x;", correct: false },
        ],
      },
      {
        question: "Which method is used to print something in console?",
        answers: [
          { text: "console.print()", correct: false },
          { text: "log.console()", correct: false },
          { text: "print()", correct: false },
          { text: "console.log()", correct: true },
        ],
      },
      {
        question: "Which keyword is used to define a constant in JavaScript?",
        answers: [
          { text: "constant", correct: false },
          { text: "const", correct: true },
          { text: "fixed", correct: false },
          { text: "let", correct: false },
        ],
      },
      {
        question: "What is the output of typeof null?",
        answers: [
          { text: "null", correct: false },
          { text: "undefined", correct: false },
          { text: "object", correct: true },
          { text: "string", correct: false },
        ],
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
          { text: "font", correct: false },
          { text: "class", correct: false },
          { text: "style", correct: true },
          { text: "styles", correct: false },
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
  