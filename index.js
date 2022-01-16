// assigning a variable to store the value of the id attached with start button
const StartButton = document.getElementById("myBtn");
// assigning a variable to store the value of the id to display the timer
const displayTimer = document.getElementById("displayTimer");

// assigning variable to target the div with id="question" and hiding the div
const questionContainer= document.getElementById("questions")
questionContainer.style.display="none"

let i=0

// Targeting each button in html to push the value from array object
const q=document.getElementById("q")
const btn1=document.getElementById("op1")
const btn2=document.getElementById("op2")
const btn3=document.getElementById("op3")
const btn4=document.getElementById("op4")
// on click the variable assigned to id will call the function tiMer to start the countdown
StartButton.addEventListener("click", tiMer);


// this function will trigger the countdown and also change the questionContainer display property from none to block
function tiMer() {
  // setting the value of countdown to start from 60
  StartButton.style.display = "none";
  questionContainer.style.display="block"
  displayQuestion()
  let time = 10;

  //storing a value in variable for 1000ms interval and to invoke a function called countDown
  const intervalTime = setInterval(countDown, 1000);



  
  function countDown() {
    //   this will display the value in html
    displayTimer.textContent = time + " Seconds Remaining";
    time--;
    if (time < 0) {
      clearInterval(intervalTime);
      displayTimer.textContent = "";
    }

  }

  
}

function displayQuestion(){
  q.textContent=questions[i].question
  btn1.textContent=questions[i].answer1
  btn2.textContent=questions[i].answer2
  btn3.textContent=questions[i].answer3
  btn4.textContent=questions[i].answer4


}
function checkAnswer(){

}


// Array of object with question and answer
const questions = [{
  question:"Which country produces the most coffee in the world? ",
  answer1:'Etiopia',
  answer2: 'Columbia', 
  answer3: 'Brazil',
  answer4:'Spain', 
  correct: "Brazil",
  },
  {
      question:"Which kind of alcohol is Russia nooriously known for? ",
      answer1:'Whiskey',
      answer2: 'Tequila', 
      answer3: 'Vodka',
      answer4:'Wine', 
      correct: "Vodka",
      },]

      

// <h1>Q 1 - Which of the following is true about variable naming conventions in JavaScript?</h1>
      // <h3>A - You should not use any of the JavaScript reserved keyword as variable name.</h3>
      // <h3>B - JavaScript variable names should not start with a numeral (0-9).</h3>
      // <h3>C - Both of the above.</h3>
      // <h3>D - None of the above</h3> //
// function Q1() {
//   var x = document.getElementById("firstQuestion");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "block";
//   }
//   Q2()
// }


// unction Q2() {
//   var x = document.getElementById("secondQuestion");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "block";
//   }
  
// // GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score//
