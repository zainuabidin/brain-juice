// Targeting each button in html to push the value from array object
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

// This is set a 0 to push the array object to next question, increment the score , set time interval to 1000ms and set timer to 60 seconds

let questionCount = 0;
let score = 0;
let time = 60;
// const intervalTime = setInterval(countDown, 1000);

submit.style.display = "none";
questionContainer.style.display = "none";
displayTimer.style.display="none"


// Array of object with question and answer
const quizDB = [
  {
    question:
      "Which built-in method removes the last element from an array and returns that element? ",
    answer1: "last()",
    answer2: "get()",
    answer3: "pop()",
    answer4: "None of the above.",
    ans: "ans3",
  },
  {
    question:
      "Which of the following function of Array object sorts the elements of an array?",
    answer1: "toSource()",
    answer2: "sort()",
    answer3: "oString()",
    answer4: "unshift()",
    ans: "ans2",
  },
  {
    question: "Which built-in method sorts the elements of an array?",
    answer1: "changeOrder(order)",
    answer2: "order()",
    answer3: "sort()",
    answer4: "None of the above.",
    ans: "ans3",
  },

  {
    question: "Which of the following is an advantage of using JavaScript?",
    answer1: "Less server interaction",
    answer2: "Immediate feedback to the visitors",
    answer3: "Increased interactivity",
    answer4: "All of the above.",
    ans: "ans4",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answer1: "named function",
    answer2: "anonymous function",
    answer3: "Both of the above.",
    answer4: "None of the above.",
    ans: "ans3",
  },
];

// this function will display the object array question and possible answer on the targeted html ID's and Classes
function loadQuestion() {
  question.innerText = quizDB[questionCount].question;
  option1.innerText = quizDB[questionCount].answer1;
  option2.innerText = quizDB[questionCount].answer2;
  option3.innerText = quizDB[questionCount].answer3;
  option4.innerText = quizDB[questionCount].answer4;
}

function getCheckAnswer() {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
}

// when user click on submit button after selecting an answer function is invoked to check answer
submit.addEventListener("click", function () {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if (checkedAnswer === quizDB[questionCount].ans) score++;
  console.log(score);
  questionCount++;
  
  if (questionCount < quizDB.length) {
    loadQuestion();
  }

  
  else {
    showScore.innerHTML = `<h3> You Scored ${score}/${quizDB.length}<h3>
    <button class='btn' onclick='location.reload'>Play Again</button>
    `;

  
    showScore.classList.remove("scoreArea");
    submit.style.display = "none";
    questionContainer.style.display = "none";
    displayTimer.style.display="none"

  }

});

// addevent will listen to your click on start button and exe load question function and tiMer function
start.addEventListener("click", function () {
  start.style.display = "none";
  gameRules.style.display = "none";
  submit.style.display = "block";
  questionContainer.style.display = "block";
  displayTimer.style.display="block"
  loadQuestion();
    tiMer();
});

function tiMer() {
  const intervalTime = setInterval(countDown, 1000);

  function countDown() {
    displayTimer.textContent = time + " Seconds Remaining";
    time--;
    if (time < 0) {
      clearInterval(intervalTime);
      displayTimer.textContent = "";
    }
    if (checkedAnswer !== quizDB) {
      time= time - 10
    }
    
    
  }
}
