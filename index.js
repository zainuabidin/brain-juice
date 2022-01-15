// assigning a variable to store the value of the id attached with start button
const StartButton = document.getElementById('myBtn');
// assigning a variable to store the value of the id to display the timer
const displayTimer=document.getElementById('displayTimer')









// on click the variable assigned to id will call the function tiMer to start the countdown
StartButton.addEventListener("click", tiMer);
// this function will trigger the countdown
function tiMer() {
    // setting the value of countdown to start from 60 
  let time=60;


  //storing a value in variable for 1000ms interval and to invoke a function called countDown
  const intervalTime=setInterval(countDown,1000);



  function countDown(){
    //   this will display the value in html
    displayTimer.textContent=time + ' Seconds Remaining'
    time--
    if (time<0) {
        
        clearInterval(intervalTime)
    }


  }







  
   
    }




















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
