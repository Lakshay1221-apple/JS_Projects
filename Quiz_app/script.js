const questions = [
    {
        question : "What is the largest animal in the world?",
        answers: [
            {text : "Shark", correct :false },
            {text : "Elephant", correct :false },
            {text : "Lion", correct :false },
            {text : "Blue Whale", correct :True }
        ]
    },
    
    {
        question: "Which activation function is most commonly used in the hidden layers of a Convolutional Neural Network (CNN)?",
        answers: [
            {text: "Sigmoid", correct: false},
            {text: "Softmax", correct: false},
            {text: "ReLU", correct: true},
            {text: "Tanh", correct: false}
        ]
    },
    {
        question: "In NumPy, which function is used to efficiently compute the dot product of two arrays?",
        answers: [
            {text: "np.multiply()", correct: false},
            {text: "np.dot()", correct: true},
            {text: "np.cross()", correct: false},
            {text: "np.sum()", correct: false}
        ]
    },
    {
        question: "In quantitative finance, what does the Sharpe ratio primarily measure?",
        answers: [
            {text: "The total profit of an algorithmic trading strategy", correct: false},
            {text: "The correlation between two different assets", correct: false},
            {text: "The maximum potential drawdown over a specific timeframe", correct: false},
            {text: "The risk-adjusted return of an investment", correct: true}
        ]
    },
    {
        question: "Which neural network architecture is best suited for sequential data processing, such as time-series forecasting?",
        answers: [
            {text: "Recurrent Neural Network (RNN)", correct: true},
            {text: "Convolutional Neural Network (CNN)", correct: false},
            {text: "Generative Adversarial Network (GAN)", correct: false},
            {text: "Multilayer Perceptron (MLP)", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");

const answerButton = document.getElementById("answer-button");

const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;

let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHtml = "Next",
    showQuestion();
}

function showQuestion() {
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHtml = questionNo + ". " + currentQuestion.question;
}