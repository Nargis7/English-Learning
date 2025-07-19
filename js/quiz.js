const questions = [
  {
    question: "What is the synonym of 'Happy'?",
    options: ["Sad", "Angry", "Joyful", "Tired"],
    answer: "Joyful"
  },
  {
    question: "What is the antonym of 'Fast'?",
    options: ["Quick", "Rapid", "Swift", "Slow"],
    answer: "Slow"
  },
  {
    question: "What does 'Look after' mean?",
    options: ["Ignore", "Take care of", "Run away", "Give up"],
    answer: "Take care of"
  },
  {
  question: "What is the synonym of 'Begin'?",
  options: ["Start", "Stop", "End", "Close"],
  answer: "Start"
},
{
  question: "What is the antonym of 'Cold'?",
  options: ["Chilly", "Cool", "Hot", "Frozen"],
  answer: "Hot"
},
{
  question: "What does 'Give up' mean?",
  options: ["Succeed", "Continue", "Quit", "Try again"],
  answer: "Quit"
},
{
  question: "What is the synonym of 'Quick'?",
  options: ["Fast", "Lazy", "Late", "Slow"],
  answer: "Fast"
},
{
  question: "What is the antonym of 'Beautiful'?",
  options: ["Pretty", "Ugly", "Charming", "Smart"],
  answer: "Ugly"
},
{
  question: "What does 'Run into' mean?",
  options: ["Avoid", "Bump into", "Escape", "Hide"],
  answer: "Bump into"
},
{
  question: "What is the synonym of 'Intelligent'?",
  options: ["Dull", "Smart", "Slow", "Lazy"],
  answer: "Smart"
},
{
  question: "What is the antonym of 'Strong'?",
  options: ["Powerful", "Weak", "Tough", "Sturdy"],
  answer: "Weak"
},
{
  question: "What does 'Look forward to' mean?",
  options: ["Ignore", "Expect with pleasure", "Forget", "Avoid"],
  answer: "Expect with pleasure"
},
{
  question: "What is the synonym of 'Help'?",
  options: ["Assist", "Hurt", "Avoid", "Delay"],
  answer: "Assist"
},
{
  question: "What is the antonym of 'Success'?",
  options: ["Achievement", "Victory", "Failure", "Progress"],
  answer: "Failure"
},
{
  question: "What does 'Break down' mean?",
  options: ["Repair", "Collapse", "Speed up", "Skip"],
  answer: "Collapse"
},
{
  question: "What is the synonym of 'Rich'?",
  options: ["Poor", "Wealthy", "Needy", "Broke"],
  answer: "Wealthy"
},
{
  question: "What is the antonym of 'Hardworking'?",
  options: ["Lazy", "Busy", "Efficient", "Active"],
  answer: "Lazy"
},
{
  question: "What does 'Turn down' mean?",
  options: ["Accept", "Reject", "Increase", "Return"],
  answer: "Reject"
},
{
  question: "What is the synonym of 'Funny'?",
  options: ["Serious", "Humorous", "Angry", "Sad"],
  answer: "Humorous"
},
{
  question: "What is the antonym of 'Early'?",
  options: ["Soon", "Prompt", "Late", "Punctual"],
  answer: "Late"
},
{
  question: "What does 'Carry on' mean?",
  options: ["Stop", "Continue", "Pack", "Drop"],
  answer: "Continue"
},
{
  question: "What is the synonym of 'Dangerous'?",
  options: ["Safe", "Risky", "Calm", "Simple"],
  answer: "Risky"
},
{
  question: "What is the antonym of 'Clean'?",
  options: ["Fresh", "Neat", "Dirty", "Clear"],
  answer: "Dirty"
}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  document.getElementById("next-btn").disabled = true;

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => {
      const allOptions = document.querySelectorAll(".option-btn");
      allOptions.forEach(b => b.disabled = true);

      if (option === q.answer) {
        score++;
        btn.style.backgroundColor = "green";
      } else {
        btn.style.backgroundColor = "red";
      }

      document.getElementById("next-btn").disabled = false;
    };
    optionsContainer.appendChild(btn);
  });

  document.getElementById("score").textContent = "";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;
}

function restartQuiz() {
  // Restore original HTML structure before loading questions again
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <h1>English Quiz</h1>
    <h2 id="question"></h2>
    <div id="options"></div>
    <button id="next-btn" onclick="nextQuestion()">Next</button>
    <p id="score"></p>
  `;
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

window.onload = loadQuestion;
