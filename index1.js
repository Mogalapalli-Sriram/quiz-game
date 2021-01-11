
// constructor function to Initialize all question objects (i.e question + Multiple choice Options)
function QuestionSet(question, option1, option2, option3, option4) {
  this.question = question;
  this.option1 = option1;
  this.option2 = option2;
  this.option3 = option3;
  this.option4 = option4;
}

// list of all question objects which are to be initialized
var ques1 = new QuestionSet("What is the capital of Sikkim?", "kohima", "Gangtok", "dispur", "itanagar");
var ques2 = new QuestionSet("What is the capital of Arunachal Pradesh?", "Itanagar", "Hyderabad", "dispur", "Shimla");
var ques3 = new QuestionSet("What is the capital of Manipur?", "Imphal", "Hyderabad", "amaravathi", "Bastar");
var ques4 = new QuestionSet("What is the capital of Rajasthan?", "panaji", "Jaipur", "imphal", "Shimla");
var ques5 = new QuestionSet("What is the capital of Mizoram?", "dispur", "chennai", "shillong", "Aizwal");
var ques6 = new QuestionSet("What is the capital of Andhra Pradesh?", "Amaravathi", "Hyderabad", "kohima", "shimla");
var ques7 = new QuestionSet("What is the capital of Orissa?", "itanagar", "Bhuvaneshwar", "Bhopal", "chandigarh");
var ques8 = new QuestionSet("What is the capital of Meghalaya?", "itanagar", "Shillong", "aizwal", "dispur");
var ques9 = new QuestionSet("What is the capital of Assam?", "mumbai", "jaipur", "chennai", "Dispur");
var ques10 = new QuestionSet("What is the capital of Tamil Nadu?", "Chennai", "imphal", "shimla", "amaravathi");
var ques11 = new QuestionSet("What is the capital of Kerala?", "panaji", "Trivendrum", "kohima", "ladakh");
var ques12 = new QuestionSet("What is the capital of Goa?", "itanagar", "gandhiNagar", "chandigarh", "Panaji");
var ques13 = new QuestionSet("What is the capital of Gujarat?", "itanagar", "shillong", "banglore", "GandhiNagar");
var ques14 = new QuestionSet("What is the capital of Karnataka?", "Banglore", "bhopal", "chennai", "panaji");
var ques15 = new QuestionSet("What is the capital of Chattisgarh?", "aizwal", "Raipur", "bastar", "chandigarh");
var ques16 = new QuestionSet("What is the capital of Jharkhand?", "amaravathi", "dispur", "mumbai", "Ranchi");
var ques17 = new QuestionSet("What is the capital of Bihar?", "itanagar", "Patna", "mumbai", "ladakh");
var ques18 = new QuestionSet("What is the capital of Uttarakhand?", "Nainital", "Dehradun", "shillong", "gangtok");
var ques19 = new QuestionSet("What is the capital of Maharastra?", "delhi", "bhopal", "lucknow", "Mumbai");
var ques20 = new QuestionSet("What is the capital of punjab?", "Chandigarh", "patna", "bhuvaneshwar", "raipur");

// array of all 20 question objects for random selection and others
var quesarray1 = [ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10, ques11, ques12, ques13, ques14, ques15, ques16, ques17, ques18, ques19, ques20];
var quesarray = [ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10, ques11, ques12, ques13, ques14, ques15, ques16, ques17, ques18, ques19, ques20];
var length = quesarray.length; /*to generate the random numbers*/
var randomPattern = []; /*Empty array to push all the randomly generated ques objects*/
var finalScore = []; /*Empty array to push incremented score when answer for question is correct*/
var k = 1; /* variable k to generate serial number for questions generated randomly */
var start = false; /*Boolean for initial keypress event to start the quiz content*/
var point = 0; /* variable to increment the score for correct answer of question */
keypressAfter(); /* function call to display the container containing question object(i.e. question and four multiple choice answers) */


// keypress event for the game to start
document.addEventListener(" keypress touchmove", function() {
  if (!start) {
    headUpdate();
    quizSequence();
    start = true;
  }
});


// function definition for title updation to increment score for every correct answer
function headUpdate() {
  document.querySelector("h1").innerHTML = "Your Score is" + " " + point + "/10" + ".";
  finalScore.push(point);
  point++;
}

// function definition for randomly generated questions
function quizSequence() {
  var rand = Math.random();
  rand = rand * length;
  var randomNumber = Math.floor(rand);
  randomPattern.push(quesarray[randomNumber]); /* randomly generated question objects are pushed into array for calculating length which is used to end quiz after 10 questions completed */
  // placing all the content(question + multiple choice options) of randomly generated question object
  document.querySelector("#demo1").innerHTML = k + ".)" + " " + quesarray[randomNumber].question;
  document.getElementById("demo2").innerHTML = quesarray[randomNumber].option1;
  document.getElementById("demo3").innerHTML = quesarray[randomNumber].option2;
  document.getElementById("demo4").innerHTML = quesarray[randomNumber].option3;
  document.getElementById("demo5").innerHTML = quesarray[randomNumber].option4;
  // class added and removed to blink a block while generating next random question
  document.querySelector(".container").classList.add("blink");
  setTimeout(function() {
    document.querySelector(".container").classList.remove("blink");
  }, 300);
  quesarray.splice(randomNumber, 1); /* array splicing to avoid repetetion of randomly generated question objects */
  length--;
  k++; /*serial number increment for each new question generated*/
}



// code for the click event ( i.e to click on my answer to question)
var length1 = document.querySelectorAll(".optionclick").length;
for (var i = 0; i < length1; i++) {
  document.querySelectorAll(".optionclick")[i].addEventListener("click touchstart", function() {
  var clickContent = this.innerText;
// condition for correct answer of each randomly generated questions
  if ((clickContent === ques1.option2) || (clickContent === ques2.option1) || (clickContent === ques3.option1) || (clickContent === ques4.option2) || (clickContent === ques5.option4) || (clickContent === ques6.option1) || (clickContent === ques7.option2) || (clickContent === ques8.option2) || (clickContent === ques9.option4) || (clickContent === ques10.option1) || (clickContent === ques11.option2) || (clickContent === ques12.option4) || (clickContent === ques13.option4) || (clickContent === ques14.option1) || (clickContent === ques15.option2) || (clickContent === ques16.option4) || (clickContent === ques17.option2) || (clickContent === ques18.option2) || (clickContent === ques19.option4) || (clickContent === ques20.option1)) {

      if (randomPattern.length <= 9) {
        headUpdate(); /*function call to update my score after answer to my question is correct*/
        correctBlink(this); /*function call to add styling when my answer is correct*/
        // function call for next randomly generated question object after correct answer for current question object
        setTimeout(function() {
          quizSequence();
        }, 1500);
      } else {
        correctBlink(this);
        setTimeout(function(){
        endQuiz(); /*ending of quiz after 10th question answer is correct*/
      },1500);

      }

    }
  // else condition for wrong answers of randomly generated question
    else {
      if (randomPattern.length <= 9) {
        wrongBlink(this); /*function call to add styling when my answer is incorrect*/
        // function call for next randomly generated question object after wrong answer for current question object
        setTimeout(function() {
          quizSequence();
        }, 1500);
      } else {
       wrongBlink(this);
       setTimeout(function(){
       endQuiz(); /* ending of quiz after 10th question answer is wrong */
     },1500);

      }
    }
  });
}




// function definition  to display final score after the quiz of 10 questions is ended and reset all the variables to begin new game
function endQuiz() {
  if (finalScore.length === 10) {
    document.querySelector("h1").innerHTML = "Your final score is" + " " + (finalScore.length) + "/10" + "<br>" + "Congrats!!You are Perfect"+ "<br>" + "swipe to continue";
  } else if ((finalScore.length > 4) && (finalScore.length < 10)) {
    document.querySelector("h1").innerHTML = "Your final score is" + " " + (finalScore.length) + "/10" + "<br>" + "Ok!! You are Better" + "<br>" + "swipe to continue";
  } else {
    document.querySelector("h1").innerHTML = "Your final score is" + " " + (finalScore.length) + "/10" + "<br>" + "Hmmmm!! Better luck next time" + "<br>" + "swipe to continue";
  }


  // resetting all stuff after the game is ended
  // var concatenation = quesarray.concat(randomPattern);
  // console.log(concatenation);
 //  console.log(randomPattern);
 //  randomPattern.forEach(restore);
 //  function restore(value,index,array){
 //  for(index=0;index<10;index++)
 //  {
 //    quesarray.push(array[index]);
 //  }
 // }
  quesarray = quesarray1;
  console.log(quesarray);
  randomPattern = [];
  finalScore = [];
  start = false;
  k = 1;
  point = 0;
  keypressAfter(); // function call to hide the question object container and display container after next key press event  to start new game
}



// function definition to hide the question object container and display container after next key press event  to start new game
function keypressAfter() {
  document.querySelector("h1").classList.add("sizing");
  document.querySelector(".container").classList.add("hidden");
  document.addEventListener("click touchmove", function() {
  document.querySelector(".container").classList.remove("hidden");
  document.querySelector("h1").classList.remove("sizing");
  });
}

// function definiton to add and remove class for styling after my answer is correct
function correctBlink(content) {
  setTimeout(function() {
  content.classList.add("option-style");
  }, 100);
  setTimeout(function() {
  content.classList.remove("option-style");
  }, 800);
}

// function definition to add and remove class for styling after my answer is wrong
function wrongBlink(content1) {
  setTimeout(function() {
  content1.classList.add("option-wrong-style");
  }, 100);
  setTimeout(function() {
  content1.classList.remove("option-wrong-style");
  }, 800);
}









// var quesarray = [ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10, ques11, ques12, ques13, ques14, ques15, ques16, ques17, ques18, ques19, ques20];
// if((clickContent===ques1.option2)||(clickContent===ques2.option1)||(clickContent===ques3.option1)||(clickContent===ques4.option2)||(clickContent===ques5.option4)||(clickContent===ques6.option1)||(clickContent===ques7.option2)||(clickContent===ques8.option2)||(clickContent===ques9.option4)||(clickContent===ques10.option1)||(clickContent===ques11.option2)||(clickContent===ques12.option4)||(clickContent===ques13.option4)||(clickContent===ques14.option1)||(clickContent===ques15.option2)||(clickContent===ques16.option4)||(clickContent===ques17.option2)||(clickContent===ques18.option2)||(clickContent===ques19.option4)||(clickContent===ques20.option1))

// var userClicks=userClickPattern.push(clickContent);
// this.classList.add("optionanimat");
// clickRand(clickContent);
