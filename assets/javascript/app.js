//declare variables
const quizQuestions = [
  {
    question: "What year did Metallica relase their first album?",
    answers: [{
      a: "1976",
      b: "1988",
      c: "1983",
      d: "1991"
    }],
    correctAnswer: "c"
  },

  {
    question: "What iconic Gibson guitar was named after a famous guitarist?",
    answers: [{
      a: "Les Paul",
      b: "Randy Rhoads",
      c: "Eric Clapton",
      d: "Dimebag Darrell"
    }],
    correctAnswer: "a"
  },
  {
    question: "What foreign company owns American automaker Chrysler?",
    answers: [{
      a: "Volkswagen",
      b: "Fiat",
      c: "Pugeot",
      d: "Toyota"

    }],
    correctAnswer: "b"
  }

];

const resultsContainer = document.getElementById('results');
const userAnswer = [];
const quizContainer = $("#quiz");
var timer = 50;
var startBtn = $("#start-btn")
//variable that holds intervalID during run function
var intervalId;


//create a start button that starts the game and the timer
$("#start-btn").on("click", run);
//create a done button that ends game and shows user score 
$("#done").on("click", stop);



//create a run function that runs the clock (clear interval, set interval to intervalID var, use decrement function and 1 second as arguments)
function run() {
  console.log("test");
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);


  //display quiz 
  for (let i = 0; i < quizQuestions.length; i++) {
    $("#quiz").append("<p>" + quizQuestions[i].question + "</p>");
    for(let i =0; i< quizQuestions.length;i++){
    $("#quiz").append("<p>" + quizQuestions[i].answers[i] + "</p>");
    }
  }
    //remove start button in order to prevent multiple quizzes 
    $("#start-btn").remove();   

}
//decrement function 

function decrement() {
  timer--;

  //  Show the number in the #timer tag.
  $("#timer").html("<h2>" + timer + "</h2>");

  //  Once number hits zero...
  if (timer === 0) {

    //run the stop function.
    stop();
    alert("Time's Up!");
    timer = 50;
  }
}

//stop function
function stop() {
  clearInterval(intervalId);
  //bring back start button 
  $("#body").append(startBtn); 
  $(startBtn).on("click", run); 
}





//create multiple choice answers for each question that allows user to only select one 

//push correct answers and incorrect answers to respective arrays




//display correct, incorrect and unanswered tallies when timer runs out or user clicks done



