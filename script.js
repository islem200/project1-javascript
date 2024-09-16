const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "1995",
  },
];
//select the haeder
const quizzContainer = document.querySelector("#quizz-container");

//select the h2:Question
const questionEl = document.querySelector("#question");
//Select the answers:radio  buttons
//we need the answers to check if the user entered the correct answer
const answerstEl = document.querySelectorAll(".answer");

//select labels
let a_text = document.querySelector("#a-text");
let b_text = document.querySelector("#b-text");
let c_text = document.querySelector("#c-text");
let d_text = document.querySelector("#d-text");

//select button
const submitBtn = document.querySelector("#submit");
let currentQuizz = 0;
let score = 0;
function deselectAnswers(){
  answerstEl.forEach((answer) => (answer.checked = false));
}

//display the current question
function loadQuizz() {
  deselectAnswers();
  const myQuizz = quizData[currentQuizz];
  questionEl.innerText = myQuizz.question;
  a_text.textContent = myQuizz.a;
  b_text.textContent = myQuizz.b;
  c_text.textContent = myQuizz.c;
  d_text.textContent = myQuizz.d;
}
loadQuizz();

function getSelected() {
  let selected;
  answerstEl.forEach((answer) => {
    if (answer.checked === true) {
      selected = answer;
    }
  });
  return selected;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (quizData[currentQuizz].correct === quizData[currentQuizz][answer.id]) {
      score++;
    }
    currentQuizz++;
    if (currentQuizz < quizData.length) {
      loadQuizz();
    } else {
      quizzContainer.innerHTML = `
      <h2>Your Score is:${score}/${quizData.length}</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
