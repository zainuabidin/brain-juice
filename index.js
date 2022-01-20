// assigning a variable to store the value of the id attached with start button

// assigning a variable to store the value of the id to display the timer
// c  



// Targeting each button in html to push the value from array object
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

// This is set a 0 to push the array object to next question
let questionCount=0


// on click the variable assigned to id will call the function tiMer to start the countdown
// StartButton.addEventListener("click", tiMer);

// // this function will trigger the countdown and also change the questionContainer display property from none to block
// function tiMer() {
  
//   // setting the value of countdown to start from 60
//   StartButton.style.display = "none";
//   questionContainer.style.display = "block";
//   displayQuestion();
//   let time = 60;

//   //storing a value in variable for 1000ms interval and to invoke a function called countDown
//   const intervalTime = setInterval(countDown, 1000);

//   function countDown() {
//     //   this will display the value in html
//     displayTimer.textContent = time + " Seconds Remaining";
//     time--;
//     if (time < 0) {
//       clearInterval(intervalTime);
//       displayTimer.textContent = "";
//     }
//   }
// }



// function checkAnswer(answer){
//   console.log('checkAnswer')
//   correct = quizQuestions[currentQuestionIndex].correctAnswer;

//   if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
//       score++;
//       alert(" Excellent That Is Correct!");
//       currentQuestionIndex++;
//       displayQuestion();
//       //display in the results div that the answer is correct.
//   }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
//       alert("Sorry That Is Incorrect.")
//       currentQuestionIndex++;
//       generateQuizQuestion();
//       //display in the results div that the answer is wrong.
//   }else{
//       showScore();
//   }


// Array of object with question and answer
const quizDB = [
  {
    question: "Which built-in method removes the last element from an array and returns that element? ",
    answer1: "last()",
    answer2: "get()",
    answer3: "pop()",
    answer4: "None of the above.",
    correct: "pop",
  },
  {
    question: "Which of the following function of Array object sorts the elements of an array?",
    answer1: "toSource()",
    answer2: "sort()",
    answer3: "oString()",
    answer4: "unshift()",
    correct: "sort",
  },
 {question: "Which built-in method sorts the elements of an array?",
  answer1: "changeOrder(order)",
  answer2: "order()",
  answer3: "sort()",
  answer4: "None of the above.",
  correct: "sort",
},

{question: "Which of the following is an advantage of using JavaScript?",
answer1: "Less server interaction",
answer2: "Immediate feedback to the visitors",
answer3: "Increased interactivity",
answer4: "All of the above.",
correct: "All of the above",
}
,
  {
    question: "Which of the following is a valid type of function javascript supports?",
    answer1: "named function",
    answer2: "anonymous function",
    answer3: "Both of the above.",
    answer4: "None of the above.",
    correct: "Both of the above.",
  }
];

function loadQuestion (){
  question.innerText = quizDB[questionCount].question
  console.log(question.innerText)
  option1.innerText = quizDB[questionCount].answer1
  option2.innerText = quizDB[questionCount].answer2
  option3.innerText = quizDB[questionCount].answer3
  option4.innerText = quizDB[questionCount].answer4
  
  
}

loadQuestion()

// function Q1() {
//   var x = document.getElementById("firstQuestion");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "block";
//   }
//   Q2()
// }

// function Q2() {
//   var x = document.getElementById("secondQuestion");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "block";
//   }
