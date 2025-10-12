const questions = [
  {
    question: "What is the correct file extension for JavaScript files?",
    answers: [
      { text: ".js", correct: true },
      { text: ".java", correct: false },
      { text: ".javascript", correct: false },
      { text: ".jvs", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: true },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "alert('Hello World');", correct: true },
      { text: "msg('Hello World');", correct: false },
      { text: "prompt('Hello World');", correct: false },
      { text: "alertBox('Hello World');", correct: false },
    ],
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "#", correct: false },
      { text: "/* */", correct: false },
      { text: "<!-- -->", correct: false },
    ],
  },
  {
    question: "What is the correct way to define a function in JavaScript?",
    answers: [
      { text: "function myFunction() {}", correct: true },
      { text: "def myFunction() {}", correct: false },
      { text: "create function myFunction()", correct: false },
      { text: "func myFunction()", correct: false },
    ],
  },
  {
    question: "How do you create a string variable in JavaScript?",
    answers: [
      { text: "let name = 'John';", correct: true },
      { text: "string name = 'John';", correct: false },
      { text: "char name = 'John';", correct: false },
      { text: "text name = 'John';", correct: false },
    ],
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "=", correct: true },
      { text: "==", correct: false },
      { text: "===", correct: false },
      { text: "=>", correct: false },
    ],
  },
  {
    question: "Which operator is used to compare both value and type?",
    answers: [
      { text: "===", correct: true },
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "!==", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Character", correct: true },
    ],
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    answers: [
      { text: "if (condition) { }", correct: true },
      { text: "if condition then", correct: false },
      { text: "if: condition { }", correct: false },
      { text: "if condition do { }", correct: false },
    ],
  },
  {
    question: "Which method is used to add an element at the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "Which method is used to remove the last element of an array?",
    answers: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "remove()", correct: false },
      { text: "delete()", correct: false },
    ],
  },
  {
    question: "What will be the output of: console.log(2 + '2')?",
    answers: [
      { text: "'22'", correct: true },
      { text: "4", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "How do you write a FOR loop in JavaScript?",
    answers: [
      { text: "for (let i = 0; i < 5; i++) {}", correct: true },
      { text: "loop (i < 5; i++) {}", correct: false },
      { text: "for i = 1 to 5 {}", correct: false },
      { text: "for each i in 5 {}", correct: false },
    ],
  },
  {
    question: "Which keyword stops the execution of a loop?",
    answers: [
      { text: "stop", correct: false },
      { text: "halt", correct: false },
      { text: "break", correct: true },
      { text: "exit", correct: false },
    ],
  },
  {
    question: "Which built-in method converts a string to uppercase?",
    answers: [
      { text: "toUpperCase()", correct: true },
      { text: "upperCase()", correct: false },
      { text: "convertUpper()", correct: false },
      { text: "makeUpper()", correct: false },
    ],
  },
  {
    question: "Which method is used to find the length of a string?",
    answers: [
      { text: "length", correct: true },
      { text: "size()", correct: false },
      { text: "count()", correct: false },
      { text: "index()", correct: false },
    ],
  },
  {
    question: "Which HTML element is used to include JavaScript code?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<code>", correct: false },
    ],
  },
  {
    question: "How do you print something to the console in JavaScript?",
    answers: [
      { text: "console.log()", correct: true },
      { text: "echo()", correct: false },
      { text: "print()", correct: false },
      { text: "document.write()", correct: false },
    ],
  },
  {
    question: "What does NaN stand for in JavaScript?",
    answers: [
      { text: "Not a Number", correct: true },
      { text: "No assigned Number", correct: false },
      { text: "Negative and Null", correct: false },
      { text: "New assigned Name", correct: false },
    ],
  },
];
