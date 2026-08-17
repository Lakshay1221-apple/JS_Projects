const questions = [
  {
    question: "What is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Elephant", correct: false },
      { text: "Lion", correct: false },
      { text: "Blue Whale", correct: true }
    ]
  },
  {
    question: "Which activation function is most commonly used in the hidden layers of a Convolutional Neural Network (CNN)?",
    answers: [
      { text: "Sigmoid", correct: false },
      { text: "Softmax", correct: false },
      { text: "ReLU", correct: true },
      { text: "Tanh", correct: false }
    ]
  },
  {
    question: "In NumPy, which function is used to efficiently compute the dot product of two arrays?",
    answers: [
      { text: "np.multiply()", correct: false },
      { text: "np.dot()", correct: true },
      { text: "np.cross()", correct: false },
      { text: "np.sum()", correct: false }
    ]
  },
  {
    question: "In quantitative finance, what does the Sharpe ratio primarily measure?",
    answers: [
      { text: "The total profit of an algorithmic trading strategy", correct: false },
      { text: "The correlation between two different assets", correct: false },
      { text: "The maximum potential drawdown over a specific timeframe", correct: false },
      { text: "The risk-adjusted return of an investment", correct: true }
    ]
  },
  {
    question: "Which neural network architecture is best suited for sequential data processing, such as time-series forecasting?",
    answers: [
      { text: "Recurrent Neural Network (RNN)", correct: true },
      { text: "Convolutional Neural Network (CNN)", correct: false },
      { text: "Generative Adversarial Network (GAN)", correct: false },
      { text: "Multilayer Perceptron (MLP)", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showQuestion() {
  resetState();

  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;

  questionElement.innerText = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = "true";
    }

    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(selectedButton, isCorrect) {
  const buttons = Array.from(answerButtons.children);

  buttons.forEach((button) => {
    button.disabled = true;
    button.classList.remove("correct", "incorrect");

    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (nextButton.innerText === "Play Again") {
    startQuiz();
  } else {
    handleNextButton();
  }
});

startQuiz();